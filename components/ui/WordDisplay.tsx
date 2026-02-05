import { motion, AnimatePresence } from 'framer-motion'
import { WordDisplayProps } from '@/types/components'
import { TOUCH_VALUES, VISUAL_VALUES } from '@/lib/constants'

const WordDisplay: React.FC<WordDisplayProps & { layout?: 'horizontal' | 'vertical', borderColor?: string }> = ({
  words,
  activeIndex,
  wordColors = [],
  blurAmount,
  animationDuration,
  isMobile = false,
  onWordClick,
  onWordHover,
  layout = 'horizontal',
  borderColor = '#dc2626'
}) => {
  const marginClass = isMobile ? 'mx-1' : 'mx-2'
  const sizeClass = isMobile ? 'w-3 h-3' : 'w-4 h-4'
  
  const handleWordClick = (index: number) => {
    if (onWordClick) {
      onWordClick(index)
    }
  }
  
  const handleWordHover = (index: number) => {
    if (onWordHover) {
      onWordHover(index)
    }
  }
  
  return (
    <div className={`flex ${layout === 'vertical' ? 'flex-col' : 'flex-wrap'} items-center justify-center`}>
      {words.map((word, index) => (
        <div
          key={index}
          className={`relative ${layout === 'vertical' ? 'my-2' : marginClass}`}
          onClick={() => handleWordClick(index)}
          onMouseEnter={() => handleWordHover(index)}
          style={{ cursor: onWordClick ? 'pointer' : 'default' }}
        >
          <motion.span
            className={`inline-block transition-all duration-500`}
            style={{
              filter: index === activeIndex ? 'none' : `blur(${blurAmount}px)`,
              fontSize: 'inherit',
              fontWeight: 'inherit',
              color: index === activeIndex 
                ? (wordColors[index] || '#ffffff') 
                : '#6b7280',
              transform: 'translateZ(0)'
            }}
            animate={{
              scale: index === activeIndex ? TOUCH_VALUES.HOVER_SCALE : 1,
              opacity: index === activeIndex ? 1 : VISUAL_VALUES.OPACITY_INACTIVE
            }}
            transition={{
              duration: animationDuration,
              ease: "easeInOut"
            }}
            whileTap={onWordClick ? { scale: TOUCH_VALUES.TAP_SCALE } : undefined}
          >
            {word}
          </motion.span>
          
          {/* Focus brackets - orámovanie len pre aktívne slovo */}
          <AnimatePresence>
            {index === activeIndex && (
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: animationDuration }}
              >
                <motion.div
                  className={`absolute ${sizeClass} border-t-2 border-l-2 -top-2 -left-2`}
                  style={{ borderColor }}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: animationDuration, delay: 0.05 }}
                />
                <motion.div
                  className={`absolute ${sizeClass} border-t-2 border-r-2 -top-2 -right-2`}
                  style={{ borderColor }}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: animationDuration, delay: 0.1 }}
                />
                <motion.div
                  className={`absolute ${sizeClass} border-b-2 border-l-2 -bottom-2 -left-2`}
                  style={{ borderColor }}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: animationDuration, delay: 0.15 }}
                />
                <motion.div
                  className={`absolute ${sizeClass} border-b-2 border-r-2 -bottom-2 -right-2`}
                  style={{ borderColor }}
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: animationDuration, delay: 0.2 }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

export default WordDisplay
