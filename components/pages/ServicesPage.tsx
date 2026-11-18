'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { nav, services } from '@/lib/content'
import PageHero from '@/components/site/PageHero'
import Reveal from '@/components/site/Reveal'
import { ServiceCard } from '@/components/site/Cards'
import Process from '@/components/Process'
import CtaBand from '@/components/site/CtaBand'

export default function ServicesPage() {
  const { l } = useLanguage()
  return (
    <>
      <PageHero
        eyebrow="services"
        title={l(nav[2].label)}
        text={l({
          vi: 'Phát triển phần mềm, chuyển đổi số, AI, thị giác máy, tích hợp nền tảng và trình diễn drone — sáu năng lực cốt lõi của Mercury.',
          en: 'Software development, digital transformation, AI, computer vision, platform integration and drone shows — Mercury’s six core capabilities.',
          ja: 'ソフトウェア開発、DX、AI、画像認識、プラットフォーム連携、ドローンショー。Mercuryの6つのコア領域です。',
        })}
        crumbs={[{ label: l(nav[0].label), href: '/' }, { label: l(nav[2].label) }]}
      />
      <section className="bg-white section-y">
        <div className="container-custom grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.08}>
              <ServiceCard s={s} />
            </Reveal>
          ))}
        </div>
      </section>
      <Process />
      <CtaBand />
    </>
  )
}
