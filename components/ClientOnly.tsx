'use client'

interface ClientOnlyProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export default function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const hasMounted = typeof window !== 'undefined'

  if (!hasMounted) {
    return <>{fallback}</>
  }

  return <>{children}</>
} 
