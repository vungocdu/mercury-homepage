'use client'

import Image from 'next/image'
import { ImagePlus } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { aboutPage } from '@/lib/content-extra'
import { media, mediaFocus } from '@/lib/media'

/**
 * A framed image area. Shows the picture registered for `id` in lib/media.ts,
 * otherwise a dashed placeholder telling you which slot it is and the suggested size.
 */
export default function ImageSlot({
  id,
  label,
  ratio = 'aspect-[4/3]',
  size,
  contain = false,
  className = '',
}: {
  id: string
  label?: string
  ratio?: string
  size?: string
  contain?: boolean
  className?: string
}) {
  const { l } = useLanguage()
  const src = media[id]
  return (
    <div className={`glass-card relative overflow-hidden ${ratio} ${className}`}>
      {src ? (
        <Image src={src} alt={label ?? id} fill sizes="(min-width:1024px) 1200px, 100vw" className={contain ? 'object-contain p-6' : 'object-cover'} style={{ objectPosition: mediaFocus[id] }} />
      ) : (
        <div className="absolute inset-3 flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-slate-200 text-center">
          <ImagePlus className="h-7 w-7 text-[#2047F4]" strokeWidth={1.4} />
          <span className="px-3 text-sm font-semibold text-slate-800">{label ?? l(aboutPage.slotHint)}</span>
          <span className="px-3 text-[11px] tracking-wider text-slate-500">
            {size ? `${size} · ` : ''}
            {id}
          </span>
        </div>
      )}
    </div>
  )
}
