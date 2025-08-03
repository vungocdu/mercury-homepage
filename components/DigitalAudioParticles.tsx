'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
  frequency: number
  amplitude: number
  phase: number
  life: number
  maxLife: number
  type: 'wave' | 'pulse' | 'echo' | 'beat'
}

interface AudioWave {
  x: number
  y: number
  frequency: number
  amplitude: number
  phase: number
  speed: number
  color: string
  width: number
}

export default function DigitalAudioParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number | undefined>(undefined)
  const particlesRef = useRef<Particle[]>([])
  const audioWavesRef = useRef<AudioWave[]>([])
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Initialize particles for digital audio effect
    const initParticles = () => {
      const particles: Particle[] = []
      const waves: AudioWave[] = []
      
      // Create audio visualization particles
      for (let i = 0; i < 100; i++) {
        particles.push({
          x: Math.random() * canvas.clientWidth,
          y: Math.random() * canvas.clientHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: `hsl(${210 + Math.random() * 30}, 70%, ${60 + Math.random() * 20}%)`,
          frequency: Math.random() * 0.02 + 0.005,
          amplitude: Math.random() * 50 + 20,
          phase: Math.random() * Math.PI * 2,
          life: 0,
          maxLife: Math.random() * 300 + 200,
          type: ['wave', 'pulse', 'echo', 'beat'][Math.floor(Math.random() * 4)] as Particle['type']
        })
      }

      // Create audio waves
      for (let i = 0; i < 8; i++) {
        waves.push({
          x: 0,
          y: (canvas.clientHeight / 9) * (i + 1),
          frequency: 0.01 + i * 0.002,
          amplitude: 20 + i * 5,
          phase: Math.random() * Math.PI * 2,
          speed: 0.02 + i * 0.005,
          color: `hsla(${200 + i * 10}, 60%, 65%, ${0.3 + i * 0.05})`,
          width: 2 + i * 0.5
        })
      }

      particlesRef.current = particles
      audioWavesRef.current = waves
    }

    initParticles()

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return

      timeRef.current += 0.016 // ~60fps

      // Clear canvas with subtle gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.clientWidth, canvas.clientHeight)
      gradient.addColorStop(0, 'rgba(240, 248, 255, 0.95)')
      gradient.addColorStop(0.5, 'rgba(248, 250, 252, 0.98)')
      gradient.addColorStop(1, 'rgba(239, 246, 255, 0.95)')
      
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight)

      // Draw audio waves (background)
      audioWavesRef.current.forEach((wave) => {
        ctx.strokeStyle = wave.color
        ctx.lineWidth = wave.width
        ctx.beginPath()
        
        for (let x = 0; x < canvas.clientWidth + 20; x += 2) {
          const y = wave.y + Math.sin(x * wave.frequency + wave.phase + timeRef.current * wave.speed) * wave.amplitude
          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        
        ctx.stroke()
        wave.phase += wave.speed
      })

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Update particle position and properties
        particle.life += 1
        
        // Audio-reactive movement
        const audioInfluence = Math.sin(timeRef.current * 2 + particle.phase) * 0.5
        const frequencyInfluence = Math.sin(timeRef.current * particle.frequency * 100) * 2
        
        switch (particle.type) {
          case 'wave':
            particle.x += particle.vx + audioInfluence
            particle.y += Math.sin(timeRef.current * 0.5 + particle.phase) * 0.5
            break
          case 'pulse':
            const pulseScale = 1 + Math.sin(timeRef.current * 3 + particle.phase) * 0.3
            particle.size = (particle.size * 0.99) + (pulseScale * 0.01)
            particle.x += particle.vx
            particle.y += particle.vy
            break
          case 'echo':
            particle.x += particle.vx + frequencyInfluence * 0.1
            particle.y += particle.vy + frequencyInfluence * 0.1
            particle.opacity = 0.3 + Math.sin(timeRef.current * 2 + particle.phase) * 0.2
            break
          case 'beat':
            const beatIntensity = Math.sin(timeRef.current * 4) > 0.8 ? 2 : 1
            particle.x += particle.vx * beatIntensity
            particle.y += particle.vy * beatIntensity
            break
        }

        // Boundary checks with wrapping
        if (particle.x < -10) particle.x = canvas.clientWidth + 10
        if (particle.x > canvas.clientWidth + 10) particle.x = -10
        if (particle.y < -10) particle.y = canvas.clientHeight + 10
        if (particle.y > canvas.clientHeight + 10) particle.y = -10

        // Reset particle if life exceeded
        if (particle.life > particle.maxLife) {
          particle.x = Math.random() * canvas.clientWidth
          particle.y = Math.random() * canvas.clientHeight
          particle.life = 0
          particle.phase = Math.random() * Math.PI * 2
        }

        // Draw particle
        const glowSize = particle.size * 3
        
        // Glow effect
        ctx.beginPath()
        const glowGradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, glowSize
        )
        glowGradient.addColorStop(0, particle.color.replace('hsl', 'hsla').replace(')', ', 0.4)'))
        glowGradient.addColorStop(1, particle.color.replace('hsl', 'hsla').replace(')', ', 0)'))
        
        ctx.fillStyle = glowGradient
        ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2)
        ctx.fill()

        // Core particle
        ctx.beginPath()
        ctx.fillStyle = particle.color.replace('hsl', 'hsla').replace(')', `, ${particle.opacity})`)
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Connection lines for nearby particles (digital network effect)
        particlesRef.current.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + 
              Math.pow(particle.y - otherParticle.y, 2)
            )
            
            if (distance < 100) {
              ctx.strokeStyle = `hsla(210, 50%, 70%, ${(1 - distance / 100) * 0.15})`
              ctx.lineWidth = 0.5
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.stroke()
            }
          }
        })
      })

      // Draw central frequency analyzer bars
      const barCount = 32
      const barWidth = canvas.clientWidth / barCount
      const centerY = canvas.clientHeight * 0.7
      
      for (let i = 0; i < barCount; i++) {
        const frequency = i / barCount
        const height = Math.abs(Math.sin(timeRef.current * 3 + frequency * 10)) * 40 + 5
        const opacity = 0.1 + Math.abs(Math.sin(timeRef.current * 2 + frequency * 5)) * 0.1
        
        ctx.fillStyle = `hsla(${200 + frequency * 60}, 60%, 65%, ${opacity})`
        ctx.fillRect(i * barWidth, centerY - height / 2, barWidth - 1, height)
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-[1]"
    />
  )
}