'use client'

import { motion, Variants, Transition } from 'framer-motion'
import { CSSProperties } from 'react'
import type { VariantLabels, TargetAndTransition } from 'framer-motion'

interface MotionWrapperProps {
  children?: React.ReactNode
  className?: string
  initial?: boolean | VariantLabels | TargetAndTransition
  animate?: VariantLabels | TargetAndTransition
  transition?: Transition
  variants?: Variants
  whileInView?: VariantLabels | TargetAndTransition
  viewport?: { once?: boolean; amount?: number }
  style?: CSSProperties
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
}: MotionWrapperProps) {
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
