import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Smooth scroll to element by ID.
 * Returns false when the element is not on the current page.
 */
export const smoothScrollTo = (elementId: string): boolean => {
  const element = document.getElementById(elementId)
  if (!element) return false
  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  return true
}

/**
 * Handle navigation click: smooth scroll to a section on this page,
 * or go to the home page section when the section lives there (e.g. from /tvc).
 */
export const handleNavigationClick = (href: string, e: React.MouseEvent) => {
  e.preventDefault()

  if (href.startsWith('/')) {
    window.location.href = href
  } else if (href.startsWith('#')) {
    if (!smoothScrollTo(href.substring(1))) {
      window.location.href = '/' + href
    }
  }
}
