import { applicationDefault, getApps, initializeApp } from 'firebase-admin/app'
import { FieldValue, Timestamp, getFirestore } from 'firebase-admin/firestore'
import { ExternalAccountClient } from 'google-auth-library'
import { getVercelOidcToken } from '@vercel/oidc'
import type { TrialStore } from './handler'

function db() {
  const projectId = process.env.GCP_PROJECT_ID || 'mercury-homepage'
  const audience = process.env.GCP_WIF_AUDIENCE
  const email = process.env.GCP_SERVICE_ACCOUNT_EMAIL
  if (!getApps().some(a => a.name === 'trial')) {
    const credential = audience && email ? {
      async getAccessToken() {
        const auth = ExternalAccountClient.fromJSON({ type: 'external_account', audience, subject_token_type: 'urn:ietf:params:oauth:token-type:jwt', token_url: 'https://sts.googleapis.com/v1/token', service_account_impersonation_url: `https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/${email}:generateAccessToken`, subject_token_supplier: { getSubjectToken: () => getVercelOidcToken() } })
        if (!auth) throw new Error('Missing federation configuration')
        const token = await auth.getAccessToken()
        if (!token.token) throw new Error('Missing access token')
        return { access_token: token.token, expires_in: 300 }
      },
    } : applicationDefault()
    initializeApp({ projectId, credential }, 'trial')
  }
  return getFirestore(getApps().find(a => a.name === 'trial')!)
}
export const firestoreTrialStore: TrialStore = {
  async save(id, input, fingerprint, buckets) {
    const firestore = db()
    return firestore.runTransaction(async transaction => {
      const request = firestore.collection('trial_requests').doc(id)
      const existing = await transaction.get(request)
      if (existing.exists) return existing.get('fingerprint') === fingerprint ? 'duplicate' : 'conflict'
      const limits = buckets.map(b => firestore.collection('trial_rate_limits').doc(b))
      const counts = await transaction.getAll(...limits)
      if (counts.some((doc, i) => (doc.get('count') || 0) >= (i === 0 ? 5 : 3))) return 'limited'
      counts.forEach((doc, i) => transaction.set(limits[i], { count: (doc.get('count') || 0) + 1, expiresAt: Timestamp.fromMillis(Date.now() + 7200000) }))
      transaction.create(request, { ...input, fingerprint, source: 'mercury-erp-trial', status: 'new', createdAt: FieldValue.serverTimestamp(), consentAt: FieldValue.serverTimestamp() })
      return 'created'
    })
  },
}
