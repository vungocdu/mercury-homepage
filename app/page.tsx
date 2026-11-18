import Hero from '@/components/Hero'
import HomeAbout from '@/components/site/HomeAbout'
import StatsRings from '@/components/site/StatsRings'
import ClientsMarquee from '@/components/ClientsMarquee'
import CtaBand from '@/components/site/CtaBand'
import PageShell from '@/components/site/PageShell'

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <HomeAbout />
      <StatsRings />
      <ClientsMarquee />
      <CtaBand />
    </PageShell>
  )
}
