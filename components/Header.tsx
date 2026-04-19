'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import LanguageSelector from './LanguageSelector'
import ClientOnly from './ClientOnly'
import { handleNavigationClick } from '@/lib/utils'

// Mercury Logo SVG Component
const MercuryLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 320 367" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_737_345)">
      <path fillRule="evenodd" clipRule="evenodd" d="M228.408 114.204C228.408 177.277 177.277 228.408 114.204 228.408C51.1309 228.408 0 177.277 0 114.204C0 51.1309 51.1309 0 114.204 0C177.277 0 228.408 51.1309 228.408 114.204ZM114.204 205.567C164.663 205.567 205.567 164.663 205.567 114.204C205.567 63.7456 164.663 22.8408 114.204 22.8408C63.7456 22.8408 22.8408 63.7456 22.8408 114.204C22.8408 164.663 63.7456 205.567 114.204 205.567Z" fill="#2E5BFF"/>
      <path d="M320 114.433C320 152.276 289.321 182.955 251.478 182.955C213.634 182.955 182.955 152.276 182.955 114.433C182.955 76.5886 213.634 45.9101 251.478 45.9101C289.321 45.9101 320 76.5886 320 114.433Z" fill="#2E5BFF"/>
      <path d="M228.427 104.358L245.99 86.7951L274.09 114.895L256.527 132.458L245.971 142.871L228.408 125.308L238.84 114.77L228.427 104.358Z" fill="white"/>
      <path d="M137.026 104.358L119.463 86.7951L91.3633 114.895L108.926 132.458L119.482 142.871L137.045 125.308L126.613 114.77L137.026 104.358Z" fill="#2E5BFF"/>
      <path d="M9.80005 318.94H17.7179V287.429L32.0731 306.724H33.2318L47.4582 287.241V318.94H55.3117V275.087H47.8445L33.1674 295.573L17.7823 275.087H9.80005V318.94Z" fill="#2E5BFF"/>
      <path d="M67.8237 318.94H94.5385V311.735H75.7416V300.396H91.9636V293.192H75.7416V282.292H93.8948V275.087H67.8237V318.94Z" fill="#2E5BFF"/>
      <path d="M112.769 318.94V302.526H118.305L130.729 318.94H140.32L126.223 301.023C129.956 299.77 134.913 296.011 134.913 288.494C134.913 280.913 130.857 274.962 118.562 274.962C117.275 274.962 107.361 275.087 104.851 275.087V318.94H112.769ZM118.176 282.166C124.613 282.166 126.544 285.111 126.544 288.556C126.544 293.067 122.489 295.322 117.918 295.322H112.769V282.292C114.893 282.229 116.695 282.166 118.176 282.166Z" fill="#2E5BFF"/>
      <path d="M176.621 308.916C173.531 311.234 169.733 312.424 165.935 312.424C156.729 312.424 150.356 306.16 150.356 297.013C150.356 287.491 156.665 281.603 165.033 281.603C169.54 281.603 172.501 282.793 175.204 284.547L178.745 278.846C175.784 276.215 170.891 274.398 165.033 274.398C150.163 274.398 141.988 284.422 141.988 297.013C141.988 310.67 151.451 319.629 165.227 319.629C171.085 319.629 176.814 317.624 179.646 314.68L176.621 308.916Z" fill="#2E5BFF"/>
      <path d="M223.952 275.087H216.099V299.206C216.099 307.726 212.88 312.424 206.057 312.424C198.268 312.424 194.791 306.912 194.791 298.705V275.087H186.874V300.334C186.874 313.176 194.856 319.629 206.057 319.629C215.519 319.629 223.952 314.179 223.952 300.772V275.087Z" fill="#2E5BFF"/>
      <path d="M243.778 318.94V302.526H249.314L261.738 318.94H271.329L257.232 301.023C260.965 299.77 265.922 296.011 265.922 288.494C265.922 280.913 261.866 274.962 249.571 274.962C248.284 274.962 238.37 275.087 235.86 275.087V318.94H243.778ZM249.185 282.166C255.622 282.166 257.553 285.111 257.553 288.556C257.553 293.067 253.498 295.322 248.928 295.322H243.778V282.292C245.902 282.229 247.704 282.166 249.185 282.166Z" fill="#2E5BFF"/>
      <path d="M309.829 275.087H301.267L290.195 293.443L278.994 275.087H269.982L285.882 300.647V318.94H293.8V300.647L309.829 275.087Z" fill="#2E5BFF"/>
      <path d="M156.426 359.785C156.426 361.556 154.981 362.525 153.076 362.525C151.303 362.525 149.136 361.656 147.79 359.885L145.491 362.692C146.608 365.064 150.056 366.367 153.011 366.367C157.312 366.367 160.694 363.694 160.694 359.751C160.694 351.967 150.285 353.504 150.285 348.659C150.285 347.122 151.5 346.086 153.503 346.086C155.342 346.086 156.458 346.721 157.575 347.824L159.742 344.75C158.363 343.213 155.999 342.244 153.175 342.244C148.709 342.244 146.017 345.184 146.017 348.692C146.017 356.31 156.426 355.174 156.426 359.785Z" fill="#2E5BFF"/>
      <path d="M163.276 354.305C163.276 361.589 168.398 366.367 175.228 366.367C182.058 366.367 187.213 361.322 187.213 354.305C187.213 347.022 182.058 342.244 175.228 342.244C168.169 342.244 163.276 347.523 163.276 354.305ZM167.545 354.305C167.545 349.461 170.828 346.086 175.228 346.086C179.562 346.086 182.944 349.461 182.944 354.305C182.944 358.916 180.055 362.525 175.228 362.525C170.927 362.525 167.545 358.983 167.545 354.305Z" fill="#2E5BFF"/>
      <path d="M191.522 365.999H205.904V362.157H195.561V342.611H191.522V365.999Z" fill="#2E5BFF"/>
      <path d="M227.699 342.611H223.693V355.475C223.693 360.019 222.051 362.525 218.571 362.525C214.598 362.525 212.825 359.584 212.825 355.208V342.611H208.786V356.076C208.786 362.926 212.858 366.367 218.571 366.367C223.398 366.367 227.699 363.46 227.699 356.31V342.611Z" fill="#2E5BFF"/>
      <path d="M230.552 346.454H238.005V365.999H242.044V346.454H249.498V342.611H230.552V346.454Z" fill="#2E5BFF"/>
      <path d="M253.129 365.999H257.167V342.611H253.129V365.999Z" fill="#2E5BFF"/>
      <path d="M261.948 354.305C261.948 361.589 267.07 366.367 273.899 366.367C280.729 366.367 285.884 361.322 285.884 354.305C285.884 347.022 280.729 342.244 273.899 342.244C266.84 342.244 261.948 347.523 261.948 354.305ZM266.216 354.305C266.216 349.461 269.5 346.086 273.899 346.086C278.234 346.086 281.616 349.461 281.616 354.305C281.616 358.916 278.726 362.525 273.899 362.525C269.598 362.525 266.216 358.983 266.216 354.305Z" fill="#2E5BFF"/>
      <path d="M309.829 365.999V342.611H306.053V358.883L293.411 342.611H290.194V365.999H293.97V349.795L306.611 365.999H309.829Z" fill="#2E5BFF"/>
    </g>
    <defs>
      <clipPath id="clip0_737_345">
        <rect width="320" height="367" fill="white"/>
      </clipPath>
    </defs>
  </svg>
)

// Types
type NavChild = { name: string; href: string; description: string }
type NavItem = { name: string; href?: string; id?: string; children?: NavChild[] }

// Check if a nav item is active based on current path
const isNavActive = (item: NavItem, currentPath: string): boolean => {
  if (item.href) {
    if (item.href === '/') return currentPath === '/' || currentPath === ''
    return currentPath === item.href || currentPath.startsWith(item.href + '/')
  }
  if (item.children) {
    return item.children.some(child => currentPath === child.href)
  }
  return false
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentPath, setCurrentPath] = useState('/')
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const { translations } = useLanguage()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const nav = translations?.nav as any

  const navigation: NavItem[] = [
    { name: nav?.home || 'Home', href: '/' },
    {
      name: nav?.hrSystem || 'HR System',
      id: 'hrSystem',
      children: [
        { name: nav?.tnaSystem || 'TNA HRM System', href: '/tna-system', description: nav?.tnaSystemDesc || 'Time & Attendance Management' },
        { name: nav?.quickshift || 'QuickShift', href: '/quickshift', description: nav?.quickshiftDesc || 'Shift & Schedule Management' },
      ]
    },
    {
      name: nav?.sportSystem || 'Sport System',
      id: 'sportSystem',
      children: [
        { name: nav?.actiwellPlatform || 'Actiwell Platform', href: '/actiwell-platform', description: nav?.actiwellPlatformDesc || 'Sports Management Platform' },
        { name: nav?.actiwellATMS || 'Actiwell ATMS', href: '/actiwell-atms', description: nav?.actiwellATMSDesc || 'Athletic Training Management' },
      ]
    },
    {
      name: nav?.hotelSystem || 'Hospitality',
      id: 'hotelSystem',
      children: [
        { name: nav?.minovaPMS || 'Minova PMS', href: '/minova-pms', description: nav?.minovaPMSDesc || 'Property Management System' },
        { name: nav?.otaCalculator || 'OTA Calculator', href: '/ota-calculator', description: nav?.otaCalculatorDesc || 'OTA Commission Calculator' },
        { name: nav?.nightlifeCrm || 'Nightlife CRM', href: '/hospitality/nightclub-crm', description: nav?.nightlifeCrmDesc || 'CRM for Nightclubs, Bars & Lounges' },
      ]
    },
    {
      name: nav?.bizOperation || 'Biz Operation',
      id: 'bizOperation',
      children: [
        { name: nav?.containerCalculator || 'ContCal 3D', href: '/container-calculator', description: nav?.containerCalculatorDesc || '3D Container Packing Optimizer' },
        { name: nav?.processAndTechnology || 'Process & Technology', href: '/process-technology', description: nav?.processAndTechnologyDesc || 'Digital Process Solutions' },
        { name: nav?.myarm || 'MyARM', href: '/myarm', description: nav?.myarmDesc || 'Japanese-style workflow platform' },
      ]
    },
    { name: nav?.about || 'About', href: '/about' },
  ]

  // Dropdown hover handlers with delay to prevent flicker
  const handleDropdownEnter = useCallback((id: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current)
    setOpenDropdown(id)
  }, [])

  const handleDropdownLeave = useCallback(() => {
    dropdownTimeoutRef.current = setTimeout(() => setOpenDropdown(null), 150)
  }, [])

  // Route detection
  useEffect(() => {
    const updatePath = () => setCurrentPath(window.location.pathname)
    updatePath()

    window.addEventListener('popstate', updatePath)
    window.addEventListener('hashchange', updatePath)

    const originalPushState = window.history.pushState
    const originalReplaceState = window.history.replaceState

    window.history.pushState = function(...args) {
      originalPushState.apply(window.history, args)
      setTimeout(updatePath, 0)
    }
    window.history.replaceState = function(...args) {
      originalReplaceState.apply(window.history, args)
      setTimeout(updatePath, 0)
    }

    return () => {
      window.removeEventListener('popstate', updatePath)
      window.removeEventListener('hashchange', updatePath)
      window.history.pushState = originalPushState
      window.history.replaceState = originalReplaceState
    }
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setOpenDropdown(null)
    if (openDropdown) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [openDropdown])

  return (
    <header className="header-bg fixed top-0 left-0 right-0 z-40">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => handleNavigationClick('#home', e)}
              className="flex items-center"
              title="Mercury Solutions"
            >
              <MercuryLogo className="w-10 h-12 sm:w-12 sm:h-14" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navigation.map((item) => {
              const isActive = isNavActive(item, currentPath)

              // Simple link (no dropdown)
              if (item.href) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavigationClick(item.href!, e)}
                    className={`relative px-3 py-2 text-[13px] font-medium rounded-lg transition-colors duration-200 ${
                      isActive
                        ? 'text-mercury-blue-600'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="navActiveIndicator"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-mercury-blue-500 rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </a>
                )
              }

              // Dropdown item
              return (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(item.id!)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setOpenDropdown(openDropdown === item.id ? null : item.id!)
                    }}
                    className={`relative flex items-center gap-1 px-3 py-2 text-[13px] font-medium rounded-lg transition-colors duration-200 ${
                      isActive
                        ? 'text-mercury-blue-600'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {item.name}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      openDropdown === item.id ? 'rotate-180' : ''
                    }`} />
                    {isActive && (
                      <motion.div
                        layoutId="navActiveIndicator"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-mercury-blue-500 rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>

                  <AnimatePresence>
                    {openDropdown === item.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 pt-2 z-50"
                      >
                        <div className="bg-white rounded-xl shadow-lg ring-1 ring-gray-200/60 p-1.5 min-w-[250px]">
                          {item.children?.map((child) => {
                            const isExternal = child.href.startsWith('http')
                            const isChildActive = !isExternal && currentPath === child.href
                            return (
                              <a
                                key={child.href}
                                href={child.href}
                                {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                onClick={(e) => {
                                  if (!isExternal) handleNavigationClick(child.href, e)
                                  setOpenDropdown(null)
                                }}
                                className={`flex items-center gap-3 px-3.5 py-3 rounded-lg transition-colors group ${
                                  isChildActive
                                    ? 'bg-mercury-blue-50'
                                    : 'hover:bg-gray-50'
                                }`}
                              >
                                <div className="flex-1">
                                  <span className={`text-sm font-medium transition-colors ${
                                    isChildActive
                                      ? 'text-mercury-blue-600'
                                      : 'text-gray-900 group-hover:text-mercury-blue-600'
                                  }`}>
                                    {child.name}
                                  </span>
                                  <span className="block text-xs text-gray-500 mt-0.5">
                                    {child.description}
                                  </span>
                                </div>
                                {isExternal && (
                                  <svg className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                  </svg>
                                )}
                              </a>
                            )
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </nav>

          {/* Language Selector & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSelector />
            <a
              href="#contact"
              onClick={(e) => handleNavigationClick('#contact', e)}
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mercury-blue-500 bg-white border-2 border-mercury-blue-600 text-mercury-blue-600 hover:bg-mercury-blue-600 hover:text-white shadow-lg hover:shadow-xl"
            >
              {translations?.common?.getStarted || 'Get Started'}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <LanguageSelector />
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mobile-menu-btn p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <ClientOnly>
          <AnimatePresence>
            {isMenuOpen && (
              <>
                {/* Overlay */}
                <motion.div
                  className="lg:hidden mobile-menu-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setIsMenuOpen(false)}
                />
                {/* Menu Content */}
                <motion.div
                  className="lg:hidden mobile-menu-content"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <div className="px-4 py-6 space-y-1">
                    {navigation.map((item) => {
                      const isActive = isNavActive(item, currentPath)

                      // Simple link
                      if (item.href) {
                        return (
                          <motion.a
                            key={item.href}
                            href={item.href}
                            className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                              isActive
                                ? 'text-mercury-blue-600 bg-mercury-blue-50'
                                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                            }`}
                            onClick={(e) => {
                              handleNavigationClick(item.href!, e)
                              setIsMenuOpen(false)
                            }}
                            whileHover={{ x: 4 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {item.name}
                          </motion.a>
                        )
                      }

                      // Dropdown (accordion on mobile)
                      const isExpanded = mobileExpanded === item.id
                      return (
                        <div key={item.id}>
                          <button
                            onClick={() => setMobileExpanded(isExpanded ? null : item.id!)}
                            className={`flex items-center justify-between w-full px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                              isActive
                                ? 'text-mercury-blue-600 bg-mercury-blue-50'
                                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                            }`}
                          >
                            {item.name}
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                              isExpanded ? 'rotate-180' : ''
                            }`} />
                          </button>
                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 py-1 space-y-0.5">
                                  {item.children?.map((child) => {
                                    const isExternal = child.href.startsWith('http')
                                    const isChildActive = !isExternal && currentPath === child.href
                                    return (
                                      <a
                                        key={child.href}
                                        href={child.href}
                                        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                        onClick={(e) => {
                                          if (!isExternal) handleNavigationClick(child.href, e)
                                          setIsMenuOpen(false)
                                        }}
                                        className={`flex items-center gap-2.5 px-4 py-2.5 text-sm rounded-lg transition-colors ${
                                          isChildActive
                                            ? 'text-mercury-blue-600 bg-mercury-blue-50/50'
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                        }`}
                                      >
                                        <ChevronRight className="w-3 h-3 flex-shrink-0 text-gray-400" />
                                        <div className="flex-1">
                                          <div className="font-medium">{child.name}</div>
                                          <div className="text-xs text-gray-400 mt-0.5">{child.description}</div>
                                        </div>
                                        {isExternal && (
                                          <svg className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                          </svg>
                                        )}
                                      </a>
                                    )
                                  })}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )
                    })}

                    {/* Mobile CTA Button */}
                    <div className="pt-4 border-t border-gray-100">
                      <motion.a
                        href="#contact"
                        className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mercury-blue-500 bg-white border-2 border-mercury-blue-600 text-mercury-blue-600 hover:bg-mercury-blue-600 hover:text-white shadow-lg hover:shadow-xl"
                        onClick={(e) => {
                          handleNavigationClick('#contact', e)
                          setIsMenuOpen(false)
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {translations?.common?.getStarted || 'Get Started'}
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </ClientOnly>
      </div>
    </header>
  )
}
