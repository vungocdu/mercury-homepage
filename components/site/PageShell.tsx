import type { ReactNode } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import AmbientBackground from './AmbientBackground'

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main id="main" className="theme-black relative min-h-screen">
        <AmbientBackground />
        {children}
      </main>
      <Footer />
    </>
  )
}
