import Hero from '@/components/Hero'
import Services from '@/components/Services'
import TechnologyStack from '@/components/TechnologyStack'
import Process from '@/components/Process'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TickerScroll from '@/components/TickerScroll'

export default function Home() {
  return (
    <main className="min-h-screen professional-bg">
      <Header />
      <Hero />
      <Services />
      <TechnologyStack />
      <Process />
      <TickerScroll />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
} 