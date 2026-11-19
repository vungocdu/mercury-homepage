export const TERMS_VERSION = '2026-11-19'
export interface TrialInput {
  company: string; name: string; email: string; industry: string; needs: string;
  language: 'vi' | 'ja'; termsVersion: string; consent: true; attribution?: { source: string; medium: string; campaign: string }
}
export function validateTrial(value: unknown): TrialInput | null {
  if (!value || typeof value !== 'object') return null
  const v = value as Record<string, unknown>
  const fields: Record<string, string> = {}
  for (const [key, max] of Object.entries({ company: 160, name: 100, email: 254, industry: 100, needs: 2000 })) {
    if (key === 'industry' && (v[key] === undefined || v[key] === '')) { fields[key] = ''; continue }
    if (typeof v[key] !== 'string') return null
    const s = v[key].trim()
    if (!s || s.length > max || /[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(s)) return null
    fields[key] = s
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email) || (v.language !== 'ja' && v.language !== 'vi') || v.consent !== true || v.termsVersion !== TERMS_VERSION) return null
  const raw = v.attribution as Record<string, unknown> | undefined
  const safe = (key: string) => typeof raw?.[key] === 'string' && /^[a-zA-Z0-9_-]{0,100}$/.test(raw[key] as string) ? raw[key] as string : ''
  const attribution = { source: safe('source'), medium: safe('medium'), campaign: safe('campaign') }
  return { ...fields, attribution, email: fields.email.toLowerCase(), language: v.language, consent: true, termsVersion: TERMS_VERSION } as TrialInput
}
