import { createHmac } from 'node:crypto'
import { validateTrial, type TrialInput } from './validation'
export type SaveResult = 'created' | 'duplicate' | 'conflict' | 'limited'
export interface TrialStore { save(id: string, input: TrialInput, fingerprint: string, buckets: string[]): Promise<SaveResult> }
export async function handleTrialRequest(request: Request, options: { enabled: boolean; secret?: string; ip?: string; now?: number; store: TrialStore }) {
  const reply = (body: object, status: number) => Response.json(body, { status, headers: { 'Cache-Control': 'no-store', ...(status === 429 ? { 'Retry-After': '3600' } : {}) } })
  if (!options.enabled || !options.secret) return reply({ error: 'unavailable' }, 503)
  const origin = request.headers.get('origin')
  if (!origin || origin !== new URL(request.url).origin) return reply({ error: 'origin' }, 403)
  if (!(request.headers.get('content-type') || '').startsWith('application/json')) return reply({ error: 'content_type' }, 415)
  const key = request.headers.get('idempotency-key') || ''
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(key)) return reply({ error: 'request_id' }, 400)
  let value: unknown
  try {
    const reader = request.body?.getReader(); if (!reader) return reply({ error: 'invalid' }, 400)
    const chunks: Uint8Array[] = []; let size = 0
    while (true) { const chunk = await reader.read(); if (chunk.done) break; size += chunk.value.length; if (size > 12000) { await reader.cancel(); return reply({ error: 'too_large' }, 413) }; chunks.push(chunk.value) }
    value = JSON.parse(Buffer.concat(chunks).toString('utf8'))
  } catch { return reply({ error: 'invalid' }, 400) }
  if ((value as Record<string, unknown>)?.website) return reply({ error: 'invalid' }, 400)
  const input = validateTrial(value)
  if (!input) return reply({ error: 'invalid' }, 400)
  const digest = (s: string) => createHmac('sha256', options.secret!).update(s).digest('hex')
  const hour = Math.floor((options.now ?? Date.now()) / 3600000)
  const buckets = [digest(`ip:${options.ip || 'unknown'}:${hour}`), digest(`email:${input.email}:${hour}`)]
  try {
    const result = await options.store.save(key, input, digest(JSON.stringify(input)), buckets)
    if (result === 'limited') return reply({ error: 'rate_limit' }, 429)
    if (result === 'conflict') return reply({ error: 'request_id_conflict' }, 409)
    return reply({ requestId: key, status: 'received' }, result === 'created' ? 201 : 200)
  } catch (error) {
    // Record diagnostic codes only; never log submitted data, credentials or tokens.
    const e = error as { code?: string | number; message?: string }
    const message = e.message || ''
    console.error('trial_store_unavailable', {
      code: typeof e.code === 'number' ? e.code : undefined,
      category: /permission/i.test(message) ? 'permission' : /credential|token|auth/i.test(message) ? 'authentication' : 'storage',
      permission: message.match(/datastore\.[a-zA-Z.]+/)?.[0],
      oauth: message.match(/invalid_grant|invalid_target|invalid_request|unauthorized_client|access_denied/)?.[0],
    })
    return reply({ error: 'unavailable' }, 503)
  }
}
