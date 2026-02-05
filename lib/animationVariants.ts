import { Variants, Transition } from 'framer-motion'
import { ANIMATION_DURATIONS, TRANSITION_EASING, VISUAL_VALUES, DELAYS, TOUCH_VALUES } from './constants'

// Zdieľané prechody pre všetky komponenty
export const sharedTransitions: Record<string, Transition> = {
  smooth: {
    duration: ANIMATION_DURATIONS.SMOOTH,
    ease: TRANSITION_EASING.SMOOTH
  },
  fast: {
    duration: ANIMATION_DURATIONS.FAST,
    ease: TRANSITION_EASING.SMOOTH
  },
  hover: {
    duration: ANIMATION_DURATIONS.HOVER,
    ease: TRANSITION_EASING.SMOOTH
  },
  bounce: {
    duration: ANIMATION_DURATIONS.BOUNCE,
    ease: TRANSITION_EASING.BOUNCE
  }
}

// Základné variants pre kontajnery
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATIONS.SMOOTH,
      ease: TRANSITION_EASING.SMOOTH,
      staggerChildren: DELAYS.STAGGER_CHILDREN
    }
  }
}

// Fade in animácie
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: sharedTransitions.smooth
  }
}

// Fade in s pohybom hore
export const fadeInUpVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: VISUAL_VALUES.TRANSLATE_Y_INITIAL 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: sharedTransitions.smooth
  }
}

// Fade in s pohybom dole
export const fadeInDownVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: -VISUAL_VALUES.TRANSLATE_Y_INITIAL 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: sharedTransitions.smooth
  }
}

// Základné card variants pre UI komponenty
export const createCardVariants = (index: number = 0): Variants => ({
  hidden: { 
    opacity: 0, 
    y: VISUAL_VALUES.TRANSLATE_Y_INITIAL 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: ANIMATION_DURATIONS.CARD_APPEAR,
      ease: TRANSITION_EASING.SMOOTH,
      delay: index * DELAYS.CARD_STAGGER
    }
  },
  hover: {
    y: VISUAL_VALUES.TRANSLATE_Y_HOVER,
    scale: TOUCH_VALUES.ACTIVE_SCALE,
    transition: sharedTransitions.hover
  }
})

// Card variants pre BlogCard (s väčším hover efektom)
export const createBlogCardVariants = (index: number = 0): Variants => ({
  hidden: { 
    opacity: 0, 
    y: VISUAL_VALUES.TRANSLATE_Y_INITIAL 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: ANIMATION_DURATIONS.CARD_APPEAR,
      ease: TRANSITION_EASING.SMOOTH,
      delay: index * DELAYS.STAGGER_CHILDREN
    }
  },
  hover: {
    y: VISUAL_VALUES.TRANSLATE_Y_HOVER_CARD,
    scale: TOUCH_VALUES.ACTIVE_SCALE,
    transition: {
      duration: ANIMATION_DURATIONS.CARD_HOVER,
      ease: TRANSITION_EASING.SMOOTH
    }
  }
})

// Image hover variants
export const imageHoverVariants: Variants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: ANIMATION_DURATIONS.IMAGE_HOVER,
      ease: TRANSITION_EASING.SMOOTH
    }
  }
}

// Text hover variants
export const createTextHoverVariants = (color: string, glowColor: string): Variants => ({
  hover: {
    color: color,
    textShadow: `0 0 20px ${glowColor}`,
    transition: sharedTransitions.hover
  }
})

// Content expand/collapse variants
export const contentVariants: Variants = {
  collapsed: {
    height: 0,
    opacity: VISUAL_VALUES.OPACITY_HIDDEN,
    transition: {
      duration: ANIMATION_DURATIONS.CONTENT_EXPAND,
      ease: TRANSITION_EASING.SMOOTH
    }
  },
  expanded: {
    height: 'auto',
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATIONS.CONTENT_EXPAND,
      ease: TRANSITION_EASING.SMOOTH
    }
  }
}

// Arrow rotate variants
export const arrowVariants: Variants = {
  collapsed: { rotate: 0 },
  expanded: { rotate: 180 }
}

// Emoji scale/rotate variants
export const emojiVariants: Variants = {
  collapsed: { scale: 1, rotate: 0 },
  expanded: { scale: 1.1, rotate: 12 }
}
