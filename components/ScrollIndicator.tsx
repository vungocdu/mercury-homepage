"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const ScrollLine = ({ isActive, isGlowing }: { isActive: boolean; isGlowing: boolean }) => {
  return (
    <motion.div
      className={`transition-all duration-300 ease-out h-px ${
        isGlowing 
          ? "w-5 bg-mercury-600/50 shadow-[0_0_5px_rgba(14,165,233,0.5)]" 
          : isActive 
            ? "w-4 bg-gray-400" 
            : "w-3 bg-gray-400/50"
      }`}
    />
  )
}

export default function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const totalLines = 60
  const activeLines = 5

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = winScroll / height
      setScrollProgress(scrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const getLineStatus = (index: number) => {
    const activeIndex = Math.floor(scrollProgress * (totalLines - activeLines))
    const isActive = index >= activeIndex && index < activeIndex + activeLines
    const isGlowing = index === activeIndex + Math.floor(activeLines / 2) // Only middle line glows
    return { isActive, isGlowing }
  }

  return (
    <div className="fixed top-1/2 -translate-y-1/2 h-[80vh] pointer-events-none z-50 left-4 sm:left-6 md:left-8 flex items-center">
      <div className="space-y-1 w-7 h-full flex flex-col justify-between">
        {Array.from({ length: totalLines }, (_, i) => {
          const { isActive, isGlowing } = getLineStatus(i)
          return <ScrollLine key={i} isActive={isActive} isGlowing={isGlowing} />
        })}
      </div>
    </div>
  )
} 