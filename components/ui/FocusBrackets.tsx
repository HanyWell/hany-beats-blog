import { motion, AnimatePresence } from 'framer-motion'
import { FocusBracketsProps } from '@/types/components'

const FocusBrackets: React.FC<FocusBracketsProps> = ({ 
  borderColor = '#dc2626', 
  isMobile = false, 
  animationDuration = 0.5,
  isActive = false 
}) => {
  const sizeClass = isMobile ? 'w-3 h-3' : 'w-4 h-4'
  
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ borderColor }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: animationDuration }}
        >
          <motion.div
            className={`absolute ${sizeClass} border-t-2 border-l-2 -top-2 -left-2`}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: animationDuration, delay: 0.1 }}
          />
          <motion.div
            className={`absolute ${sizeClass} border-t-2 border-r-2 -top-2 -right-2`}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: animationDuration, delay: 0.2 }}
          />
          <motion.div
            className={`absolute ${sizeClass} border-b-2 border-l-2 -bottom-2 -left-2`}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: animationDuration, delay: 0.3 }}
          />
          <motion.div
            className={`absolute ${sizeClass} border-b-2 border-r-2 -bottom-2 -right-2`}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: animationDuration, delay: 0.4 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FocusBrackets
