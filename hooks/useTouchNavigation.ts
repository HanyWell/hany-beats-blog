import { useRef, useCallback } from 'react'
import { TouchNavigationProps } from '@/types/components'
import { TOUCH_VALUES } from '@/lib/constants'

/**
 * Hook pre spracovanie touch gestí (swipe, long press)
 * Špecializovaný len na touch interakcie
 */
export function useTouchNavigation({
  onWordChange,
  words,
  currentIndex,
  longPressTimeout = TOUCH_VALUES.LONG_PRESS_TIMEOUT,
  swipeThreshold = TOUCH_VALUES.SWIPE_THRESHOLD,
  swipeTimeLimit = TOUCH_VALUES.SWIPE_TIME_LIMIT
}: TouchNavigationProps): {
  handleTouchStart: (e: React.TouchEvent) => void
  handleTouchEnd: (e: React.TouchEvent) => void
} {
  const touchStartX = useRef(0)
  const touchStartY = useRef(0)
  const touchStartTime = useRef(0)
  const longPressTimer = useRef<NodeJS.Timeout | null>(null)
  
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
    touchStartTime.current = Date.now()
    
    // Long press detection
    longPressTimer.current = setTimeout(() => {
      // Zrýchlený cyklus animácie - reset na začiatok
      onWordChange(0)
    }, longPressTimeout)
  }, [onWordChange, longPressTimeout])
  
  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current)
    }
    
    const touchEndX = e.changedTouches[0].clientX
    const touchEndY = e.changedTouches[0].clientY
    const touchEndTime = Date.now()
    
    const deltaX = touchEndX - touchStartX.current
    const deltaY = touchEndY - touchStartY.current
    const deltaTime = touchEndTime - touchStartTime.current
    
    // Swipe detection
    if (Math.abs(deltaX) > swipeThreshold && Math.abs(deltaY) < swipeThreshold && deltaTime < swipeTimeLimit) {
      // Horizontal swipe
      if (deltaX > 0) {
        // Swipe right - ďalšie slovo
        onWordChange((currentIndex + 1) % words.length)
      } else {
        // Swipe left - predchádzajúce slovo
        onWordChange(currentIndex === 0 ? words.length - 1 : currentIndex - 1)
      }
    }
  }, [onWordChange, words.length, currentIndex, swipeThreshold, swipeTimeLimit])
  
  return {
    handleTouchStart,
    handleTouchEnd
  }
}
