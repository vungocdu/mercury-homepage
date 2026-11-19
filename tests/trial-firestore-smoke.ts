// Explicit opt-in smoke check: synthetic records only, exact-record cleanup.
import assert from 'node:assert/strict'
import { randomUUID } from 'node:crypto'
import { Firestore } from '@google-cloud/firestore'
import { firestoreTrialStore } from '../lib/trial/firestore'
import { TERMS_VERSION, type TrialInput } from '../lib/trial/validation'
async function main() {
  if (process.env.RUN_FIRESTORE_SMOKE !== 'true') throw new Error('Set RUN_FIRESTORE_SMOKE=true explicitly')
  const id = randomUUID(), second = randomUUID(), third = randomUUID(), fourth = randomUUID()
  const token = randomUUID(); const buckets = [`test-ip-${token}`, `test-email-${token}`]
  const db = new Firestore({ projectId: process.env.GCP_PROJECT_ID || 'mercury-homepage' })
  const input: TrialInput = { company: 'AUTOMATED SYNTHETIC TEST', name: 'Test record', email: 'trial-smoke@example.com', industry: 'test', needs: 'Synthetic smoke check. Remove after verification.', language: 'vi', consent: true, termsVersion: TERMS_VERSION }
  try {
    const concurrent = await Promise.all([firestoreTrialStore.save(id, input, 'fingerprint-test', buckets), firestoreTrialStore.save(id, input, 'fingerprint-test', buckets)])
    assert.deepEqual(concurrent.sort(), ['created', 'duplicate'])
    assert.equal(await firestoreTrialStore.save(id, input, 'changed', buckets), 'conflict')
    assert.equal(await firestoreTrialStore.save(second, input, 'fingerprint-test', buckets), 'created')
    assert.equal(await firestoreTrialStore.save(third, input, 'fingerprint-test', buckets), 'created')
    assert.equal(await firestoreTrialStore.save(fourth, input, 'fingerprint-test', buckets), 'limited')
    const saved = await db.collection('trial_requests').doc(id).get()
    assert.equal(saved.get('status'), 'new'); assert.ok(saved.get('createdAt')); assert.ok(saved.get('consentAt')); assert.equal(saved.get('termsVersion'), TERMS_VERSION)
    console.log('Firestore smoke PASS: concurrent duplicate, conflict, limit, receipt document and timestamps')
  } finally {
    const batch = db.batch(); for (const key of [id, second, third, fourth]) batch.delete(db.collection('trial_requests').doc(key)); for (const key of buckets) batch.delete(db.collection('trial_rate_limits').doc(key)); await batch.commit(); console.log('Synthetic records cleaned up')
  }
}
main().catch(() => { console.error('Firestore smoke failed; inspect credentials or connectivity. No credential details logged.'); process.exitCode = 1 })
