import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen professional-bg">
      <Header />
      <Hero />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
} 