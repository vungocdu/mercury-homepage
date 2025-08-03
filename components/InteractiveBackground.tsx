'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    VANTA: {
      GLOBE: (config: Record<string, unknown>) => { destroy: () => void }
      NET: (config: Record<string, unknown>) => { destroy: () => void }
      WAVES: (config: Record<string, unknown>) => { destroy: () => void }
      DOTS: (config: Record<string, unknown>) => { destroy: () => void }
    }
    THREE: Record<string, unknown>
  }
}

interface InteractiveBackgroundProps {
  effect?: 'globe' | 'net' | 'waves' | 'dots'
  className?: string
}

export default function InteractiveBackground({ 
  effect = 'globe', 
  className = '' 
}: InteractiveBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null)
  const vantaEffect = useRef<{ destroy: () => void } | null>(null)

  useEffect(() => {
    if (!vantaRef.current || typeof window === 'undefined') return

    const initVanta = () => {
      if (typeof window !== 'undefined' && window.VANTA && window.THREE) {
        if (vantaEffect.current) {
          try {
            vantaEffect.current.destroy()
          } catch (error) {
            console.warn('Error destroying previous Vanta effect:', error)
          }
        }

        try {
          switch (effect) {
            case 'globe':
              if (window.VANTA.GLOBE) {
                vantaEffect.current = window.VANTA.GLOBE({
                  el: vantaRef.current,
                  mouseControls: true,
                  touchControls: true,
                  gyroControls: false,
                  minHeight: 200.00,
                  minWidth: 200.00,
                  scale: 1.00,
                  scaleMobile: 1.00,
                  color: 0x3b82f6,
                  color2: 0x8b5cf6,
                  backgroundColor: 0xffffff,
                  size: 1.00,
                  spacing: 15.00
                })
              }
              break
            case 'net':
              if (window.VANTA.NET) {
                vantaEffect.current = window.VANTA.NET({
                  el: vantaRef.current,
                  mouseControls: true,
                  touchControls: true,
                  gyroControls: false,
                  minHeight: 200.00,
                  minWidth: 200.00,
                  scale: 1.00,
                  scaleMobile: 1.00,
                  color: 0x3b82f6,
                  backgroundColor: 0xffffff,
                  points: 8.00,
                  maxDistance: 25.00,
                  spacing: 20.00
                })
              }
              break
            case 'waves':
              if (window.VANTA.WAVES) {
                vantaEffect.current = window.VANTA.WAVES({
                  el: vantaRef.current,
                  mouseControls: true,
                  touchControls: true,
                  gyroControls: false,
                  minHeight: 200.00,
                  minWidth: 200.00,
                  scale: 1.00,
                  scaleMobile: 1.00,
                  color: 0x3b82f6,
                  waveHeight: 20.00,
                  waveSpeed: 1.00,
                  zoom: 0.75
                })
              }
              break
            case 'dots':
              if (window.VANTA.DOTS) {
                vantaEffect.current = window.VANTA.DOTS({
                  el: vantaRef.current,
                  mouseControls: true,
                  touchControls: true,
                  gyroControls: false,
                  minHeight: 200.00,
                  minWidth: 200.00,
                  scale: 1.00,
                  scaleMobile: 1.00,
                  color: 0x3b82f6,
                  color2: 0x8b5cf6,
                  backgroundColor: 0xffffff,
                  size: 3.00,
                  spacing: 30.00,
                  showLines: true
                })
              }
              break
          }
        } catch (error) {
          console.warn('Vanta effect failed to initialize:', error)
        }
      }
    }

    // Check if scripts are loaded
    if (typeof window !== 'undefined' && window.VANTA && window.THREE) {
      initVanta()
    } else {
      // Wait for scripts to load
      const checkLoaded = setInterval(() => {
        if (typeof window !== 'undefined' && window.VANTA && window.THREE) {
          clearInterval(checkLoaded)
          initVanta()
        }
      }, 100)

      // Cleanup interval after 10 seconds
      setTimeout(() => {
        clearInterval(checkLoaded)
        console.warn('Vanta scripts failed to load within timeout')
      }, 10000)
    }

    return () => {
      if (vantaEffect.current) {
        try {
          vantaEffect.current.destroy()
        } catch (error) {
          console.warn('Error destroying Vanta effect:', error)
        }
      }
    }
  }, [effect])

  return (
    <div
      ref={vantaRef}
      className={`absolute inset-0 z-0 ${className}`}
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)'
      }}
    />
  )
}