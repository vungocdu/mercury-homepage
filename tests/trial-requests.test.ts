import { test } from 'node:test'
import assert from 'node:assert/strict'
import { handleTrialRequest, type TrialStore } from '../lib/trial/handler'
import { TERMS_VERSION } from '../lib/trial/validation'
const input = { company: 'Example KK', name: 'Test', email: 'test@example.com', industry: 'Wholesale', needs: 'Order and inventory', consent: true, language: 'ja', termsVersion: TERMS_VERSION }
const key = 'a3b713db-31d6-43d0-a317-1a77c31f09e3'
const request = (payload: unknown = input, headers = {}) => new Request('https://trial-erp.mercurysolutions.vn/api/trial-requests/', { method: 'POST', headers: { origin: 'https://trial-erp.mercurysolutions.vn', 'content-type': 'application/json', 'idempotency-key': key, ...headers }, body: JSON.stringify(payload) })
const created: TrialStore = { async save() { return 'created' } }
const opts = { enabled: true, secret: 'test-only-secret', ip: '127.0.0.1', store: created }
test('disabled registration does not write', async () => {
 let calls = 0; const response = await handleTrialRequest(request(), { ...opts, enabled: false, store: { async save() { calls++; return 'created' } } }); assert.equal(response.status, 503); assert.equal(calls, 0)
})
test('invalid fields, consent and stale terms do not write', async () => {
 for (const change of [{ email: 'bad' }, { consent: false }, { company: '' }, { needs: 'a'.repeat(2001) }, { termsVersion: 'old' }, { language: 'en' }]) {
  const result = await handleTrialRequest(request({ ...input, ...change }), { ...opts, store: { async save() { assert.fail('must not write') } } }); assert.equal(result.status, 400)
 }
})
test('rejects cross-origin, honeypot and excessive body', async () => {
 assert.equal((await handleTrialRequest(request(input, { origin: 'https://attacker.example' }), opts)).status, 403)
 assert.equal((await handleTrialRequest(request({ ...input, website: 'bot' }), opts)).status, 400)
 assert.equal((await handleTrialRequest(request({ ...input, needs: 'x'.repeat(13000) }), opts)).status, 413)
})
test('success returns receipt only after persistence with normalized input', async () => {
 let saved = false
 const result = await handleTrialRequest(request({ ...input, email: ' TEST@EXAMPLE.COM ' }), { ...opts, store: { async save(id, data, fingerprint, buckets) { assert.equal(id, key); assert.equal(data.email, 'test@example.com'); assert.equal(fingerprint.length, 64); assert.ok(buckets.every(b => b.length === 64)); saved = true; return 'created' } } })
 assert.equal(saved, true); assert.equal(result.status, 201); assert.equal(result.headers.get('cache-control'), 'no-store'); assert.deepEqual(await result.json(), { requestId: key, status: 'received' })
})
test('duplicate, conflict, rate limit and unavailable are distinguished', async () => {
 for (const [result, status] of [['duplicate', 200], ['conflict', 409], ['limited', 429]] as const) {
  assert.equal((await handleTrialRequest(request(), { ...opts, store: { async save() { return result } } })).status, status)
 }
 const failed = await handleTrialRequest(request(), { ...opts, store: { async save() { throw new Error('sensitive database detail') } } }); assert.equal(failed.status, 503); assert.equal((await failed.text()).includes('sensitive'), false)
})
test('optional industry and bounded campaign attribution', async () => {
 const result = await handleTrialRequest(request({ ...input, industry: '', attribution: { source: 'linkedin', medium: 'organic', campaign: 'erp_trial_ja', secret: 'must-not-copy' } }), { ...opts, store: { async save(_id, data) { assert.equal(data.industry, ''); assert.deepEqual(data.attribution, { source: 'linkedin', medium: 'organic', campaign: 'erp_trial_ja' }); return 'created' } } }); assert.equal(result.status, 201)
 const stripped = await handleTrialRequest(request({ ...input, attribution: { source: 'https://example.com/?email=secret@example.com', medium: 'x'.repeat(101) } }), { ...opts, store: { async save(_id, data) { assert.deepEqual(data.attribution, { source: '', medium: '', campaign: '' }); return 'created' } } }); assert.equal(stripped.status, 201)
})
test('campaign query keeps supported identifiers only', async () => {
 const { campaignQuery } = await import('../lib/trial/attribution')
 assert.equal(campaignQuery('?utm_source=linkedin&utm_medium=organic&utm_campaign=erp_trial_ja&email=secret@example.com'), 'utm_source=linkedin&utm_medium=organic&utm_campaign=erp_trial_ja')
 assert.equal(campaignQuery('?utm_source=bad%40email.com&utm_campaign='+ 'x'.repeat(101)), '')
})
