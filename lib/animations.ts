import { Variants, Transition } from 'framer-motion'

// Base transition types
export const baseTransitions = {
  smooth: { duration: 0.8, ease: [0.4, 0, 0.2, 1] as const },
  fast: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as const },
  slow: { duration: 1.2, ease: [0.4, 0, 0.2, 1] as const },
  bounce: { duration: 0.5, ease: [0.68, -0.55, 0.265, 1.55] as const },
  linear: { duration: 8, ease: "linear" as const }
}

// Container variants pre staggered animácie
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1] as const,
      staggerChildren: 0.1
    }
  }
}

// Fade in animácie
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: baseTransitions.smooth
  }
}

export const fadeInUpVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: baseTransitions.smooth
  }
}

export const fadeInDownVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: -30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: baseTransitions.smooth
  }
}

export const fadeInLeftVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: -30 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: baseTransitions.smooth
  }
}

export const fadeInRightVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: 30 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: baseTransitions.smooth
  }
}

// Scale animácie
export const scaleInVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: baseTransitions.smooth
  }
}

export const scaleUpVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.5 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: baseTransitions.bounce
  }
}

// Slide animácie
export const slideUpVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: baseTransitions.smooth
  }
}

export const slideDownVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: -50 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: baseTransitions.smooth
  }
}

// Card hover animácie
export const cardHoverVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: baseTransitions.smooth
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: baseTransitions.fast
  }
}

// Text hover animácie
export const textHoverVariants: Variants = {
  hover: {
    color: '#dc2626',
    textShadow: '0 0 20px rgba(220, 38, 38, 0.6)',
    transition: baseTransitions.fast
  }
}

// Button animácie
export const buttonVariants: Variants = {
  hover: {
    scale: 1.05,
    transition: baseTransitions.fast
  },
  tap: {
    scale: 0.95,
    transition: baseTransitions.fast
  }
}

// Glow animácie
export const glowVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
}

export const pulseGlowVariants: Variants = {
  hidden: { 
    scale: 1, 
    opacity: 0.3 
  },
  visible: { 
    scale: [1, 1.2, 1],
    opacity: [0.3, 0.5, 0.3],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity
    }
  }
}

// Float animácie
export const floatVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.5,
    rotate: -180
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,
      ease: [0.4, 0, 0.2, 1] as const,
      delay: 0.3
    }
  },
  float: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 1
    }
  }
}

// Rotate animácie
export const rotateVariants: Variants = {
  hidden: { rotate: 0 },
  visible: {
    rotate: 360,
    transition: baseTransitions.linear
  }
}

export const slowRotateVariants: Variants = {
  visible: {
    rotate: 360,
    transition: {
      duration: 8,
      ease: "linear",
      repeat: Infinity
    }
  }
}

// Expand/Collapse animácie
export const expandVariants: Variants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: baseTransitions.smooth
  },
  expanded: {
    height: 'auto',
    opacity: 1,
    transition: baseTransitions.smooth
  }
}

// Particle animácie
export const particleVariants = {
  particle1: {
    y: [-20, 20, -20],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity
    }
  },
  particle2: {
    y: [20, -20, 20],
    transition: {
      duration: 5,
      ease: "easeInOut",
      repeat: Infinity,
      delay: 1
    }
  },
  particle3: {
    y: [-15, 15, -15],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
      delay: 2
    }
  }
}

// Gradient animácie
export const gradientVariants = {
  visible: {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity
    }
  }
}

// Scale line animácia
export const lineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: { 
    scaleX: 1,
    transition: {
      duration: 0.8,
      delay: 0.4,
      ease: [0.4, 0, 0.2, 1] as const
    }
  }
}

// Arrow animácie pre expandable komponenty
export const arrowVariants: Variants = {
  collapsed: { rotate: 0 },
  expanded: { 
    rotate: 180,
    transition: baseTransitions.smooth
  }
}

// Emoji animácie pre header
export const emojiVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.5,
    rotate: -180
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,
      ease: [0.4, 0, 0.2, 1] as const,
      delay: 0.3
    }
  }
}

// Helper funkcie pre delay
export const createDelayedVariant = (baseVariant: Variants, delay: number): Variants => {
  const visible = baseVariant.visible
  if (typeof visible === 'object' && visible !== null && 'transition' in visible) {
    return {
      ...baseVariant,
      visible: {
        ...visible,
        transition: {
          ...visible.transition,
          delay
        }
      }
    }
  }
  return baseVariant
}

// Hook pre animácie s delay
export const useStaggeredAnimation = (itemCount: number, staggerDelay: number = 0.1) => {
  return Array.from({ length: itemCount }, (_, index) => 
    createDelayedVariant(fadeInUpVariants, index * staggerDelay)
  )
}

// Page transition animácie
export const pageTransition: Transition = {
  type: "tween",
  ease: [0.4, 0, 0.2, 1],
  duration: 0.8
}

export const pageVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}
