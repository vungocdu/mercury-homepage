import Hero from '@/components/Hero'
import Services from '@/components/Services'
import TechnologyStack from '@/components/TechnologyStack'
import Process from '@/components/Process'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <TechnologyStack />
      <Process />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
} 