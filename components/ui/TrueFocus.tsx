'use client'

import { useState, useCallback, useRef } from 'react'
import { motion } from 'framer-motion'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useDevicePerformance } from '@/hooks/useDevicePerformance'
import { useTouchNavigation } from '@/hooks/useTouchNavigation'
import { useWordAnimation } from '@/hooks/useWordAnimation'
import WordDisplay from '@/components/ui/WordDisplay'
import { TrueFocusProps, MobileProps } from '@/types/components'
import { BREAKPOINTS, VISUAL_VALUES, ANIMATION_DURATIONS, TOUCH_VALUES } from '@/lib/constants'
import '../TrueFocus.css'

const TrueFocus: React.FC<TrueFocusProps> = ({
  sentence,
  manualMode = false,
  blurAmount = VISUAL_VALUES.BLUR_AMOUNT,
  borderColor = '#dc2626',
  animationDuration = ANIMATION_DURATIONS.WORD_ANIMATION,
  pauseBetweenAnimations = ANIMATION_DURATIONS.WORD_PAUSE,
  className = '',
  wordColors = [],
  responsive = true,
  touchEnabled = true,
  performanceMode = 'auto',
  mobileProps = {},
  onWordChange
}) => {
  const words = sentence.split(' ')
  
  // Responsívna detekcia
  const isMobile = responsive ? useMediaQuery(`(max-width: ${BREAKPOINTS.MOBILE}px)`) : false
  const devicePerformance = useDevicePerformance()
  
  // Adaptívne nastavenia
  const isLowPerformance = performanceMode === 'low' || (performanceMode === 'auto' && devicePerformance === 'low')
  
  const adaptiveBlurAmount = isMobile && mobileProps.blurAmount 
    ? mobileProps.blurAmount 
    : isLowPerformance 
      ? VISUAL_VALUES.BLUR_MOBILE
      : blurAmount
      
  const adaptiveAnimationDuration = isMobile && mobileProps.animationDuration 
    ? mobileProps.animationDuration 
    : isLowPerformance 
      ? ANIMATION_DURATIONS.FAST
      : animationDuration
      
  const layout = isMobile && mobileProps.layout ? mobileProps.layout : 'horizontal'
  
  // Word animácia
  const { activeWordIndex, handleManualWordChange } = useWordAnimation({
    words,
    currentIndex: 0,
    animationDuration: adaptiveAnimationDuration,
    pauseBetweenAnimations,
    manualMode,
    onWordChange
  })
  
  // Touch gestá
  const { handleTouchStart, handleTouchEnd } = useTouchNavigation({
    onWordChange: handleManualWordChange,
    words,
    currentIndex: activeWordIndex
  })


  const handleWordClick = (index: number) => {
    if (touchEnabled && isMobile) {
      handleManualWordChange(index)
    }
  }

  const handleWordHover = (index: number) => {
    if (manualMode && !isMobile) {
      handleManualWordChange(index)
    }
  }

  return (
    <div 
      className={`inline-block ${className}`}
      style={{ 
        fontSize: isMobile && mobileProps.fontSize ? mobileProps.fontSize : 'inherit',
        willChange: 'transform' // GPU akcelerácia
      }}
      onTouchStart={touchEnabled && isMobile ? handleTouchStart : undefined}
      onTouchEnd={touchEnabled && isMobile ? handleTouchEnd : undefined}
    >
      <WordDisplay
        words={words}
        activeIndex={activeWordIndex}
        wordColors={wordColors}
        blurAmount={adaptiveBlurAmount}
        animationDuration={adaptiveAnimationDuration}
        isMobile={isMobile}
        onWordClick={handleWordClick}
        onWordHover={handleWordHover}
        layout={layout}
        borderColor={borderColor}
      />
      {/* Progress indikátor pre mobilné zariadenia */}
      {isMobile && (
        <div className="flex justify-center mt-4 space-x-2">
          {words.map((_: string, index: number) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === activeWordIndex 
                  ? 'w-8 bg-red-500' 
                  : 'w-2 bg-gray-600'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default TrueFocus
