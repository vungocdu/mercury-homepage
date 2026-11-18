'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { nav, ui } from '@/lib/content'
import LanguageSelector from './LanguageSelector'
import Logo from './site/Logo'
import ScrollProgress from './site/ScrollProgress'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname() || '/'
  const { l } = useLanguage()

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/'))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on navigation
  useEffect(() => setOpen(false), [pathname])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled || open
          ? 'bg-white/75 backdrop-blur-xl border-b border-slate-200'
          : 'bg-white/50 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex h-16 sm:h-[4.5rem] items-center justify-between gap-4">
          <Link href="/" aria-label="Mercury Solutions" className="shrink-0">
            <Logo dark className="h-9 sm:h-11" />
          </Link>

          <nav className="hidden xl:block" aria-label="Main">
            <ul className="flex items-center gap-1">
              {nav.map((item) => {
                const active = isActive(item.href)
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? 'page' : undefined}
                      className={`relative block whitespace-nowrap rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                        active ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      {l(item.label)}
                      {active && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-[#2047F4]"
                          transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                        />
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="hidden xl:flex items-center gap-3">
            <LanguageSelector />
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full pill-grad border border-white/25 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_rgb(94_125_248/0.35)] transition hover:-translate-y-0.5"
            >
              {l(ui.cta)}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="flex items-center gap-1 xl:hidden">
            <LanguageSelector />
            <button
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              aria-expanded={open}
              className="rounded-lg p-2 text-slate-800 hover:bg-slate-100"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <ScrollProgress />
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden border-t border-slate-200 bg-white"
          >
            <div className="container-custom space-y-1 py-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block rounded-lg px-4 py-3 text-base font-medium ${
                    isActive(item.href) ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {l(item.label)}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-3 flex items-center justify-center gap-2 rounded-full pill-grad border border-white/25 px-4 py-3 font-semibold text-white"
              >
                {l(ui.cta)}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
