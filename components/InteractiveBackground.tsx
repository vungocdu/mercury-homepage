'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    VANTA: any
    THREE: any
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
  const vantaEffect = useRef<any>(null)

  useEffect(() => {
    if (!vantaRef.current) return

    const initVanta = () => {
      if (window.VANTA && window.THREE) {
        if (vantaEffect.current) {
          vantaEffect.current.destroy()
        }

        try {
          switch (effect) {
            case 'globe':
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
                backgroundColor: 0x0f0f23,
                size: 1.00,
                spacing: 15.00
              })
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
                  backgroundColor: 0x0f0f23,
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
                  backgroundColor: 0x0f0f23,
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
    if (window.VANTA && window.THREE) {
      initVanta()
    } else {
      // Wait for scripts to load
      const checkLoaded = setInterval(() => {
        if (window.VANTA && window.THREE) {
          clearInterval(checkLoaded)
          initVanta()
        }
      }, 100)

      // Cleanup interval after 10 seconds
      setTimeout(() => clearInterval(checkLoaded), 10000)
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
        background: 'linear-gradient(135deg, #0f0f23 0%, #1e1e3a 50%, #0f0f23 100%)'
      }}
    />
  )
}