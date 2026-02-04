import { useState, useEffect } from 'react'
import { WordAnimationProps } from '@/types/components'

/**
 * Hook pre riadenie animácie slov
 * Špecializovaný len na časovanie a prechody slov
 */
export function useWordAnimation({
  words,
  currentIndex,
  animationDuration,
  pauseBetweenAnimations,
  manualMode = false,
  onWordChange
}: WordAnimationProps): {
  activeWordIndex: number
  handleManualWordChange: (index: number) => void
} {
  const [activeWordIndex, setActiveWordIndex] = useState(currentIndex)
  
  useEffect(() => {
    if (manualMode) return

    const interval = setInterval(() => {
      const newIndex = (activeWordIndex + 1) % words.length
      setActiveWordIndex(newIndex)
      onWordChange?.(newIndex, words[newIndex])
    }, (animationDuration + pauseBetweenAnimations) * 1000)

    return () => clearInterval(interval)
  }, [
    manualMode,
    animationDuration,
    pauseBetweenAnimations,
    words.length,
    activeWordIndex,
    onWordChange,
    words // Pridané chýbajúce dependency
  ])
  
  const handleManualWordChange = (index: number) => {
    setActiveWordIndex(index)
    onWordChange?.(index, words[index])
  }
  
  return {
    activeWordIndex,
    handleManualWordChange
  }
}
