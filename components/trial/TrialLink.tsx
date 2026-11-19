'use client'
import { useEffect, useState, type ComponentProps } from 'react'
import { campaignQuery } from '@/lib/trial/attribution'
const trialOrigin = 'https://www.mercurysolutions.vn'
export default function TrialLink({ href = '', ...props }: ComponentProps<'a'>) {
  const [context, setContext] = useState<{ search: string; origin: string; pathname: string } | null>(null)
  useEffect(() => { setContext({ search: campaignQuery(window.location.search), origin: window.location.origin, pathname: window.location.pathname }) }, [])
  let target = href
  if (context && (href.startsWith('/') || href.startsWith(trialOrigin + '/'))) {
    const url = new URL(href, context.origin)
    if (url.origin === context.origin || url.origin === trialOrigin) {
      new URLSearchParams(context.search).forEach((value, key) => url.searchParams.set(key, value))
      target = url.toString()
    }
  }
  return <a href={target} {...props} />
}
