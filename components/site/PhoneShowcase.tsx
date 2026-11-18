'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'
import { media } from '@/lib/media'

type Item = { id: string; title: string; text: string }

/** pose of a phone by slot: 0 = left, 1 = centre, 2 = right */
const POSE = [
  { ry: 18, z: 0, y: 18, scale: 0.92 },
  { ry: 0, z: 70, y: -6, scale: 1.04 },
  { ry: -18, z: 0, y: 18, scale: 0.92 },
]

/**
 * Three phones in a fanned 3D arrangement. Click (or Enter/Space) a phone and it glides to the
 * centre while the others swap to the sides. Everything floats gently, casts a soft glow and
 * follows the pointer for depth.
 */
export default function PhoneShowcase({ items, initial }: { items: Item[]; initial?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const [active, setActive] = useState(Math.min(initial ?? 1, items.length - 1))
  const [wide, setWide] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const on = () => setWide(mq.matches)
    on()
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])

  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const sx = useSpring(px, { stiffness: 70, damping: 16 })
  const sy = useSpring(py, { stiffness: 70, damping: 16 })
  const groupY = useTransform(sx, [-0.5, 0.5], [-10, 10])
  const groupX = useTransform(sy, [-0.5, 0.5], [6, -6])

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    px.set((e.clientX - r.left) / r.width - 0.5)
    py.set((e.clientY - r.top) / r.height - 0.5)
  }

  // slot of each item: the active one in the middle, the others keep their relative order
  const slots = items.map((_, i) => i)
  if (items.length === 3) {
    const others = [0, 1, 2].filter((i) => i !== active)
    slots[others[0]] = 0
    slots[active] = 1
    slots[others[1]] = 2
  }

  return (
    <div ref={ref} onMouseMove={reduce ? undefined : onMove} onMouseLeave={() => { px.set(0); py.set(0) }} className="relative">
      {/* ambient glow behind the phones */}
      <div className="fade-edges absolute inset-x-[5%] top-[10%] h-[80%] bg-[#2047F4]/30" aria-hidden />

      <motion.div
        style={reduce ? undefined : { rotateY: groupY, rotateX: groupX, transformStyle: 'preserve-3d', transformPerspective: 1600 }}
        className="mx-auto grid max-w-4xl items-start gap-10 md:grid-cols-3 md:gap-2"
      >
        {items.map((it, i) => {
          const slot = slots[i]
          const pose = POSE[slot] ?? POSE[1]
          const isActive = i === active
          const src = media[it.id]
          const select = () => setActive(i)
          return (
            <motion.div
              key={it.id}
              initial={reduce ? false : { opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformStyle: 'preserve-3d', zIndex: isActive ? 10 : 1, position: 'relative' }}
              className="flex flex-col items-center"
            >
              {/* glides sideways to its slot */}
              <motion.div
                animate={{ x: wide ? `${(slot - i) * 100}%` : '0%' }}
                transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 120, damping: 20, mass: 0.9 }}
                style={{ transformStyle: 'preserve-3d' }}
                className="flex w-full flex-col items-center"
              >
                <motion.div
                  role="button"
                  tabIndex={0}
                  aria-pressed={isActive}
                  aria-label={it.title}
                  onClick={select}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); select() } }}
                  animate={{ rotateY: wide ? pose.ry : 0, z: wide ? pose.z : 0, scale: wide ? pose.scale : 1 }}
                  transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 110, damping: 17, mass: 0.9 }}
                  whileHover={reduce || isActive ? undefined : { scale: (wide ? pose.scale : 1) + 0.05 }}
                  whileTap={reduce ? undefined : { scale: (wide ? pose.scale : 1) - 0.02 }}
                  style={{ transformStyle: 'preserve-3d', transformPerspective: 1400 }}
                  className={`relative w-full max-w-[12rem] rounded-[2rem] outline-none focus-visible:ring-2 focus-visible:ring-[#2047F4] ${isActive ? 'cursor-default' : 'cursor-pointer'}`}
                >
                  <motion.div
                    animate={reduce ? undefined : { y: [pose.y, pose.y - 14, pose.y] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                    className="relative aspect-[1/2]"
                  >
                    {src && (
                      <Image
                        src={src}
                        alt={it.title}
                        fill
                        sizes="260px"
                        className="object-contain [filter:drop-shadow(0_30px_40px_rgba(0,0,0,0.35))_drop-shadow(0_0_28px_rgba(58,140,196,0.35))]"
                      />
                    )}
                  </motion.div>
                  {/* floor shadow */}
                  <div className="absolute -bottom-6 left-1/2 h-6 w-[70%] -translate-x-1/2 rounded-[50%] bg-white/70 blur-xl" aria-hidden />
                </motion.div>

                <div className={`transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-55'}`}>
                  <h3 className="mt-8 text-center text-base font-semibold tracking-[-0.01em] text-slate-900">{it.title}</h3>
                  <p className="mt-2 max-w-[15rem] text-center leading-relaxed text-slate-600">{it.text}</p>
                </div>
              </motion.div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
