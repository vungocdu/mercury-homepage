import Hero from '@/components/Hero'
import HomeProductNav from '@/components/HomeProductNav'
import ITSolutionSection from '@/components/ITSolutionSection'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen professional-bg">
      <Header />
      <Hero />
      <HomeProductNav />
      <ITSolutionSection />
      <Contact />
      <Footer />
    </main>
  )
} 
