import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export function getImageUrl(image?: string | null): string {
  
  return `https://snapcast.t3.storage.dev/${image}`
}
