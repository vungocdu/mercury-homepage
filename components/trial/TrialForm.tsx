'use client'
import TrialLink from '@/components/trial/TrialLink'
import { useRef, useState } from 'react'
import { TERMS_VERSION } from '@/lib/trial/validation'
import { trialCopy, type TrialLang } from '@/lib/trial/content'
export default function TrialForm({ language, enabled, base }: { language: TrialLang; enabled: boolean; base: string }) {
  const c = trialCopy[language]; const key = useRef<string | null>(null)
  const [pending, setPending] = useState(false); const [receipt, setReceipt] = useState(''); const [error, setError] = useState(false)
  const field = 'mt-2 w-full rounded border border-slate-300 bg-white p-3 text-slate-900'
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); if (pending) return
    const form = new FormData(e.currentTarget); key.current ??= crypto.randomUUID()
    setPending(true); setError(false)
    try {
      const result = await fetch('/api/trial-requests/', { method: 'POST', headers: { 'Content-Type': 'application/json', 'Idempotency-Key': key.current }, body: JSON.stringify({ company: form.get('company'), name: form.get('name'), email: form.get('email'), industry: form.get('industry'), attribution: Object.fromEntries(['source', 'medium', 'campaign'].map(k => [k, new URLSearchParams(window.location.search).get(`utm_${k}`) || ''])), needs: form.get('needs'), website: form.get('website'), language, consent: form.get('consent') === 'on', termsVersion: TERMS_VERSION }) })
      const data = await result.json(); if (!result.ok || typeof data.requestId !== 'string') throw new Error('not_received')
      setReceipt(data.requestId)
      window.dispatchEvent(new CustomEvent('mercury:trial-request-received', { detail: { language } }))
    } catch { setError(true) } finally { setPending(false) }
  }
  if (receipt) return <div role="status" className="rounded border border-green-400 bg-white p-6"><p>{c.received}<strong>{receipt}</strong></p><p className="mt-3">{c.successNote}</p></div>
  return <form onSubmit={submit} onChange={() => { if (!pending) key.current = null }} className="space-y-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
    {!enabled && <p role="status" className="rounded bg-amber-50 p-4 text-amber-900">{c.draft}</p>}
    <p className="text-sm text-slate-600">{language === 'ja' ? '入力は会社名・担当者名・メール・確認したい業務のみ必須です。送信後、担当者が利用開始条件をご案内します。' : 'Chỉ cần công ty, người liên hệ, email và nhu cầu. Mercury xác nhận điều kiện trước khi cấp tài khoản.'}</p>
    <fieldset disabled={!enabled || pending} className="space-y-5">
      {(['company', 'name', 'email', 'industry'] as const).map(name => <label className="block font-medium" key={name}>{c[name]}{name === 'industry' && <span className="ml-2 text-sm font-normal">{language === 'ja' ? '（任意）' : '(không bắt buộc)'}</span>}<input className={field} name={name} required={name !== 'industry'} type={name === 'email' ? 'email' : 'text'} maxLength={name === 'company' ? 160 : name === 'email' ? 254 : 100} autoComplete={name === 'email' ? 'email' : name === 'name' ? 'name' : name === 'company' ? 'organization' : 'off'} /></label>)}
      <label className="block font-medium">{c.needs}<textarea className={field} name="needs" rows={5} required maxLength={2000} /></label>
      <div hidden aria-hidden="true"><label>Website<input name="website" autoComplete="off" tabIndex={-1} /></label></div>
      <p className="text-sm"><TrialLink href={`${base}terms/`} className="underline">{c.terms}</TrialLink> · <TrialLink href={`${base}privacy/`} className="underline">{c.privacy}</TrialLink></p>
      <label className="flex items-start gap-3 text-sm"><input name="consent" type="checkbox" required className="mt-1 h-5 w-5 shrink-0" /><span>{c.consent}</span></label>
      <button className="rounded-full bg-blue-700 px-6 py-3 font-semibold text-white disabled:opacity-50" disabled={pending} type="submit">{pending ? c.sending : c.request}</button>
    </fieldset>
    {error && <p role="alert" className="text-red-700">{c.error}</p>}
  </form>
}
