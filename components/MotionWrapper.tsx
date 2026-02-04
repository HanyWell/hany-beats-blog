'use client'

import { motion } from 'framer-motion'

interface MotionWrapperProps {
  children?: React.ReactNode
  className?: string
  initial?: any
  animate?: any
  transition?: any
  variants?: any
  whileInView?: any
  viewport?: any
  style?: any
}

export function MotionDiv({ 
  children, 
  className, 
  initial, 
  animate, 
  transition, 
  variants,
  whileInView,
  viewport,
  style 
}: MotionWrapperProps) {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
      variants={variants}
      whileInView={whileInView}
      viewport={viewport}
      style={style}
    >
      {children}
    </motion.div>
  )
}

export function MotionH1({ 
  children, 
  className, 
  initial, 
  animate, 
  transition,
  style 
}: MotionWrapperProps & { style?: any }) {
  return (
    <motion.h1
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
      style={style}
    >
      {children}
    </motion.h1>
  )
}

export function MotionP({ 
  children, 
  className, 
  initial, 
  animate, 
  transition 
}: MotionWrapperProps) {
  return (
    <motion.p
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      {children}
    </motion.p>
  )
}
