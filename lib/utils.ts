import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines multiple class names and merges tailwind classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Waits for a specified amount of time
 */
export function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Formats a date in a human-readable format
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date)
}

/**
 * Returns a random element from an array
 */
export function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)]
}

/**
 * Truncates a string if it exceeds a certain length
 */
export function truncate(str: string, length: number): string {
  if (str.length <= length) return str
  return `${str.slice(0, length)}...`
}

/**
 * Debounces a function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null
  
  return function(...args: Parameters<T>) {
    if (timeout !== null) {
      clearTimeout(timeout)
    }
    
    timeout = setTimeout(() => {
      func(...args)
    }, wait)
  }
}

/**
 * Checks if client-side code is running in a dark mode environment
 */
export function isDarkMode(): boolean {
  if (typeof window === 'undefined') return false
  
  const isDarkClass = document.documentElement.classList.contains('dark')
  const isDarkMedia = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  return isDarkClass || isDarkMedia
}

/**
 * Smoothly scrolls to an element
 */
export function scrollToElement(elementId: string, offset = 0): void {
  const element = document.getElementById(elementId)
  if (!element) return
  
  const elementPosition = element.getBoundingClientRect().top
  const offsetPosition = elementPosition + window.pageYOffset - offset
  
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  })
}
