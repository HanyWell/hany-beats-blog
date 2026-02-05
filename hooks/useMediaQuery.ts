import { useState, useEffect } from 'react'

/**
 * Centralizovaný hook pre detekciu veľkosti obrazovky
 * Nahradzujú duplicitné implementácie v HeroSection a TrueFocus
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)
  
  useEffect(() => {
    const media = window.matchMedia(query)
    
    // Nastaviť počiatočnú hodnotu
    if (media.matches !== matches) {
      // Oprava: setState v useEffect - použiť callback pre synchronizáciu
      const updateMatches = () => setMatches(media.matches)
      updateMatches()
    }
    
    // Listener pre zmeny
    const listener = () => setMatches(media.matches)
    media.addEventListener('change', listener)
    
    // Cleanup
    return () => media.removeEventListener('change', listener)
  }, [matches, query])
  
  return matches
}
