'use client'

import { useState } from 'react'
import {
  Building,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  User,
} from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getFirestoreDb } from '@/lib/firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

export default function Contact() {
  const { t, language } = useLanguage()
  const isJapanese = language === 'ja'

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    service: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const quickNotes = isJapanese
    ? [
        '工場向けシステム、Web、TVC の相談に対応',
        '要件整理の前でも、そのまま送信可能',
        '画面・資料・既存サイトのどこからでも開始可能',
      ]
    : [
        'We handle factory systems, web apps, and TVC work',
        'You can send a rough brief before the scope is settled',
        'We can start from screens, decks, or an existing site',
      ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setIsSubmitting(true)
    setSubmitError('')

    try {
      const requiredError = t('contact.form.errors.required')
      if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.message.trim()) {
        throw new Error(requiredError)
      }

      const db = getFirestoreDb()
      await addDoc(collection(db, 'contact_submissions'), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone || null,
        company: formData.company || null,
        message: formData.message,
        service: formData.service || null,
        status: 'new',
        createdAt: serverTimestamp(),
      })

      setSubmitSuccess(true)

      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          company: '',
          email: '',
          phone: '',
          message: '',
          service: '',
        })
        setSubmitSuccess(false)
      }, 3000)
    } catch (error) {
      const requiredError = t('contact.form.errors.required')
      let errorMessage = t('contact.form.errors.submitError')

      if (error instanceof Error) {
        if (error.message === requiredError) {
          errorMessage = error.message
        } else if (error.message.includes('permission') || error.message.includes('PERMISSION_DENIED')) {
          errorMessage = t('contact.form.errors.networkError')
        }
      }

      setSubmitError(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#eef2f7_100%)] py-24 sm:py-28"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-rose-200/30 blur-3xl" />
      <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl" />

      <div className="container-custom relative">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-slate-500">
              {isJapanese ? 'お問い合わせ' : 'Contact'}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              {t('contact.title')}
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <aside className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.18)] lg:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.16),transparent_28%)]" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/75">
                  <Clock className="h-3.5 w-3.5 text-rose-300" />
                  {isJapanese ? '返信目安: 1営業日以内' : 'Typical reply: within 1 business day'}
                </span>

                <h3 className="mt-6 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {isJapanese
                    ? '要件がまだ固まっていなくても、そのまま送ってください。'
                    : 'Send the rough brief, even if the scope is not fully defined yet.'}
                </h3>
                <p className="mt-4 max-w-xl text-base leading-7 text-white">
                  {isJapanese
                    ? '目的、対象、時期だけでも十分です。営業担当が内容を整理し、次に確認すべき点を返します。'
                    : 'A goal, audience, and timing are enough to start. We will organize the brief and reply with the next steps.'}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-white/45">
                      <MapPin className="h-3.5 w-3.5 text-amber-300" />
                      {t('contact.info.address')}
                    </div>
                    <div className="mt-3 space-y-1 text-sm leading-6 text-white">
                      <p>5F, 33/41 Thai Ha Street,</p>
                      <p>Dong Da, Hanoi, Vietnam</p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-white/45">
                      <Phone className="h-3.5 w-3.5 text-emerald-300" />
                      {t('contact.info.phone')}
                    </div>
                    <div className="mt-3 space-y-1 text-sm leading-6 text-white">
                      <p>024 6663 6480</p>
                      <p>info@mercurysolutions.vn</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                    {isJapanese ? '相談の入り口' : 'What you can send'}
                  </p>
                  <div className="mt-4 space-y-3 text-sm leading-6 text-white/72">
                    {quickNotes.map((note) => (
                      <div key={note} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                        <span>{note}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.10)] lg:p-10">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                    {t('contact.form.title')}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {t('contact.form.subtitle')}
                  </p>
                </div>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {isJapanese ? '無料相談' : 'Free consult'}
                </span>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="group">
                    <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-slate-700">
                      {t('contact.form.firstName')} *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 py-3.5 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-200/70"
                        placeholder={t('contact.form.firstNamePlaceholder')}
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-slate-700">
                      {t('contact.form.lastName')} *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 py-3.5 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-200/70"
                        placeholder={t('contact.form.lastNamePlaceholder')}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="group">
                    <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-700">
                      {t('contact.form.company')}
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 py-3.5 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-200/70"
                        placeholder={t('contact.form.companyPlaceholder')}
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="service" className="mb-2 block text-sm font-medium text-slate-700">
                      {t('contact.form.service')} *
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full appearance-none rounded-2xl border border-slate-200 bg-white px-4 py-3.5 pr-10 text-slate-950 outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-200/70"
                      >
                        <option value="">{t('contact.form.servicePlaceholder')}</option>
                        <option value="software">{t('contact.form.serviceOptions.software')}</option>
                        <option value="tvc">{t('contact.form.serviceOptions.tvc')}</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="group">
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                      {t('contact.form.email')} *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 py-3.5 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-200/70"
                        placeholder={t('contact.form.emailPlaceholder')}
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-700">
                      {t('contact.form.phone')}
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 py-3.5 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-200/70"
                        placeholder={t('contact.form.phonePlaceholder')}
                      />
                    </div>
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
                    {t('contact.form.message')} *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full resize-none rounded-3xl border border-slate-200 bg-white pl-10 pr-4 py-3.5 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-200/70"
                      placeholder={t('contact.form.messagePlaceholder')}
                    />
                  </div>
                </div>

                {submitError && (
                  <div className="rounded-2xl border border-red-200 bg-red-50 p-4">
                    <p className="text-sm font-medium text-red-700">{submitError}</p>
                  </div>
                )}

                {submitSuccess && (
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                    <p className="text-sm font-medium text-emerald-700">
                      {t('contact.form.success')}
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-2xl px-8 py-4 text-sm font-semibold text-white transition-all duration-300 ${
                    isSubmitting
                      ? 'cursor-not-allowed bg-slate-400'
                      : 'bg-slate-950 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      <span>{t('contact.form.sending')}</span>
                    </>
                  ) : submitSuccess ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" />
                      <span>{t('contact.form.sent')}</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>{t('contact.form.submit')}</span>
                    </>
                  )}
                </button>

                <p className="text-xs leading-6 text-slate-500">
                  {isJapanese
                    ? '送信内容は営業担当に直接届き、必要な確認事項だけを返します。'
                    : 'Your message goes directly to the team that handles your request.'}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
