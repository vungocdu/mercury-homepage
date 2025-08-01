'use client'

import React, { useRef, useEffect, useState } from 'react'
import { MERCURY_LOGO_PATH } from './mercury-logo-path'

export default function MercuryInteractiveLogo() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePositionRef = useRef({ x: 0, y: 0 })
  const isTouchingRef = useRef(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
      setIsMobile(window.innerWidth < 768)
    }

    updateCanvasSize()

    let particles: {
      x: number
      y: number
      baseX: number
      baseY: number
      size: number
      color: string
      scatteredColor: string
      life: number
      isMercury: boolean
    }[] = []

    let textImageData: ImageData | null = null

    function createTextImage() {
      if (!ctx || !canvas) return 0

      ctx.fillStyle = '#6B7280' // Gray color for logo
      ctx.save()
      
             const logoHeight = isMobile ? 120 : 240
      const logoWidth = logoHeight * (320 / 367) // Maintain aspect ratio
      const centerX = canvas.width / 2 - logoWidth / 2
      const centerY = canvas.height / 2 - logoHeight / 2
      
      ctx.translate(centerX, centerY)

      // Draw Mercury logo
      ctx.save()
      const scale = logoHeight / 367
      ctx.scale(scale, scale)
      
      // Create path from SVG data
      const path = new Path2D(MERCURY_LOGO_PATH)
      ctx.fill(path)
      ctx.restore()

      ctx.restore()

      textImageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      return scale
    }

    function createParticle(scale: number) {
      if (!ctx || !canvas || !textImageData) return null

      const data = textImageData.data
      const particleGap = 2

      for (let attempt = 0; attempt < 100; attempt++) {
        const x = Math.floor(Math.random() * canvas.width)
        const y = Math.floor(Math.random() * canvas.height)

        if (data[(y * canvas.width + x) * 4 + 3] > 128) {
          const logoHeight = isMobile ? 120 : 240
          const logoWidth = logoHeight * (320 / 367)
          const centerX = canvas.width / 2
          const centerY = canvas.height / 2
          
          // Determine if particle is in the main logo area
          const isInLogoArea = x >= centerX - logoWidth/2 && x <= centerX + logoWidth/2 &&
                              y >= centerY - logoHeight/2 && y <= centerY + logoHeight/2
          
                     return {
             x: x,
             y: y,
             baseX: x,
             baseY: y,
             size: Math.random() * 1.5 + 0.5,
             color: '#6B7280', // Gray color
             scatteredColor: isInLogoArea ? '#2E5BFF' : '#1E3A8A', // Mercury Blue and Deep Mercury
             isMercury: isInLogoArea,
             life: Math.random() * 100 + 50
           }
        }
      }

      return null
    }

    function createInitialParticles(scale: number) {
      if (!canvas) return
             const baseParticleCount = 12000 // Higher density for larger Mercury logo
      const particleCount = Math.floor(baseParticleCount * Math.sqrt((canvas.width * canvas.height) / (1920 * 1080)))
      for (let i = 0; i < particleCount; i++) {
        const particle = createParticle(scale)
        if (particle) particles.push(particle)
      }
    }

    let animationFrameId: number

    function animate(scale: number) {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'white'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const { x: mouseX, y: mouseY } = mousePositionRef.current
             const maxDistance = 350

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        const dx = mouseX - p.x
        const dy = mouseY - p.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < maxDistance && (isTouchingRef.current || !('ontouchstart' in window))) {
          const force = (maxDistance - distance) / maxDistance
          const angle = Math.atan2(dy, dx)
                     const moveX = Math.cos(angle) * force * 90
           const moveY = Math.sin(angle) * force * 90
          p.x = p.baseX - moveX
          p.y = p.baseY - moveY
          
          ctx.fillStyle = p.scatteredColor
        } else {
          p.x += (p.baseX - p.x) * 0.08
          p.y += (p.baseY - p.y) * 0.08
          ctx.fillStyle = '#6B7280' // Gray color when not interacting
        }

        ctx.fillRect(p.x, p.y, p.size, p.size)

        p.life--
        if (p.life <= 0) {
          const newParticle = createParticle(scale)
          if (newParticle) {
            particles[i] = newParticle
          } else {
            particles.splice(i, 1)
            i--
          }
        }
      }

             const baseParticleCount = 12000
      const targetParticleCount = canvas ? Math.floor(baseParticleCount * Math.sqrt((canvas.width * canvas.height) / (1920 * 1080))) : baseParticleCount
      while (particles.length < targetParticleCount) {
        const newParticle = createParticle(scale)
        if (newParticle) particles.push(newParticle)
      }

      animationFrameId = requestAnimationFrame(() => animate(scale))
    }

    const scale = createTextImage()
    createInitialParticles(scale)
    animate(scale)

    const handleResize = () => {
      updateCanvasSize()
      const newScale = createTextImage()
      particles = []
      createInitialParticles(newScale)
    }

    const handleMove = (x: number, y: number) => {
      mousePositionRef.current = { x, y }
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      handleMove(e.clientX - rect.left, e.clientY - rect.top)
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        e.preventDefault()
        const rect = canvas.getBoundingClientRect()
        handleMove(e.touches[0].clientX - rect.left, e.touches[0].clientY - rect.top)
      }
    }

    const handleTouchStart = () => {
      isTouchingRef.current = true
    }

    const handleTouchEnd = () => {
      isTouchingRef.current = false
      mousePositionRef.current = { x: 0, y: 0 }
    }

    const handleMouseLeave = () => {
      if (!('ontouchstart' in window)) {
        mousePositionRef.current = { x: 0, y: 0 }
      }
    }

    window.addEventListener('resize', handleResize)
    if (canvas) {
      canvas.addEventListener('mousemove', handleMouseMove)
      canvas.addEventListener('touchmove', handleTouchMove, { passive: false })
      canvas.addEventListener('mouseleave', handleMouseLeave)
      canvas.addEventListener('touchstart', handleTouchStart)
      canvas.addEventListener('touchend', handleTouchEnd)
    }

    return () => {
      window.removeEventListener('resize', handleResize)
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove)
        canvas.removeEventListener('touchmove', handleTouchMove)
        canvas.removeEventListener('mouseleave', handleMouseLeave)
        canvas.removeEventListener('touchstart', handleTouchStart)
        canvas.removeEventListener('touchend', handleTouchEnd)
      }
      cancelAnimationFrame(animationFrameId)
    }
  }, [isMobile])

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-white">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full absolute top-0 left-0 touch-none"
        aria-label="Interactive particle effect with Mercury Solutions logo"
      />
    </div>
  )
} 