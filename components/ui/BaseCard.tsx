import { motion } from 'framer-motion'
import { BaseCardProps } from '@/types/components'
import { createCardVariants } from '@/lib/animationVariants'

/**
 * Základný komponent pre karty
 * Poskytuje zdieľanú logiku pre všetky UI karty
 */
const BaseCard: React.FC<BaseCardProps> = function BaseCard({ 
  children, 
  className = "", 
  index = 0, 
  isHoverable = true 
}) {
  const cardVariants = createCardVariants(index)
  
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={isHoverable ? "hover" : undefined}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default BaseCard
