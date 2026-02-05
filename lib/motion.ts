'use client'

import { motion, MotionProps } from 'framer-motion'
import React from 'react'

// Check if user prefers reduced motion
const shouldReduceMotion = (): boolean => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Custom motion props that respect reduced motion preferences
export const createMotionProps = (props: MotionProps): MotionProps => {
  if (shouldReduceMotion()) {
    return {
      ...props,
      transition: { duration: 0 },
      whileInView: undefined,
      initial: undefined,
      animate: undefined,
      exit: undefined,
    }
  }
  return props
}

// Hook for motion props with reduced motion support
export const useMotionProps = (props: MotionProps) => {
  return createMotionProps(props)
}
