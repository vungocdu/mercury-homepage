"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import ClientOnly from './ClientOnly'

const ScrollLine = ({ isActive, isGlowing }: { isActive: boolean; isGlowing: boolean }) => {
  return (
    <motion.div
      className={`transition-all duration-300 ease-out h-px ${
        isGlowing 
          ? "w-3 bg-mercury-blue-500/70 shadow-[0_0_3px_rgba(46,91,255,0.5)]" 
          : isActive 
            ? "w-2.5 bg-mercury-blue-400/80" 
            : "w-1.5 bg-gray-400/60"
      }`}
    />
  )
}

export default function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const totalLines = 25 // Giảm số lượng lines để tăng khoảng cách
  const activeLines = 3 // Giảm số lượng active lines

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = Math.max(0, Math.min(1, winScroll / height))
      setScrollProgress(scrolled)
      
      // Show indicator after scrolling a bit
      if (winScroll > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Initial calculation
    handleScroll()
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const getLineStatus = (index: number) => {
    const progressPosition = scrollProgress * (totalLines - activeLines)
    const activeStart = Math.floor(progressPosition)
    const isActive = index >= activeStart && index < activeStart + activeLines
    const isGlowing = index === activeStart + Math.floor(activeLines / 2)
    
    return { isActive, isGlowing }
  }

  return (
    <ClientOnly>
      <div className={`scroll-indicator scroll-indicator-left flex items-center ${isVisible ? 'visible' : ''}`}>
        <div className="scroll-indicator-tight w-6 h-full flex flex-col justify-between py-4">
          {Array.from({ length: totalLines }, (_, i) => {
            const { isActive, isGlowing } = getLineStatus(i)
            return <ScrollLine key={i} isActive={isActive} isGlowing={isGlowing} />
          })}
        </div>
      </div>
    </ClientOnly>
  )
} 