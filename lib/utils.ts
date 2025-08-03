import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Smooth scroll to element by ID
 */
export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

/**
 * Handle navigation click with smooth scroll
 */
export const handleNavigationClick = (href: string, e: React.MouseEvent) => {
  e.preventDefault()
  
  if (href.startsWith('/')) {
    // External route - navigate normally
    window.location.href = href
  } else if (href.startsWith('#')) {
    // Internal anchor - smooth scroll
    const elementId = href.substring(1)
    smoothScrollTo(elementId)
  }
} 