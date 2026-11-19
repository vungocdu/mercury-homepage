import { handleTrialRequest } from '@/lib/trial/handler'
import { firestoreTrialStore } from '@/lib/trial/firestore'
import { LEGAL_APPROVED } from '@/lib/trial/config'
export const runtime = 'nodejs'
export async function POST(request: Request) {
  return handleTrialRequest(request, { enabled: LEGAL_APPROVED && process.env.TRIAL_REGISTRATION_ENABLED === 'true', secret: process.env.TRIAL_RATE_LIMIT_SECRET, ip: process.env.VERCEL ? request.headers.get('x-vercel-forwarded-for')?.split(',')[0].trim() : 'local', store: firestoreTrialStore })
}
