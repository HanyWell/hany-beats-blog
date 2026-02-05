// Centralizované konštanty pre celý projekt
// Nahradzujú všetky magické čísla v kóde

export const ANIMATION_DURATIONS = {
  SMOOTH: 0.8,
  FAST: 0.3,
  HOVER: 0.5,
  SLOW: 1.2,
  BOUNCE: 0.5,
  LINEAR: 8,
  WORD_ANIMATION: 0.5,
  WORD_PAUSE: 2,
  CONTENT_EXPAND: 0.5,
  CARD_APPEAR: 0.8,
  CARD_HOVER: 0.3,
  IMAGE_HOVER: 0.7,
  TEXT_HOVER: 0.3
} as const

export const SPACING_VALUES = {
  SECTION_VERTICAL: 32,    // py-32
  SECTION_MARGIN: 16,       // mb-16
  SOCIAL_ICON_SIZE: 16,     // w-16 h-16
  HERO_PADDING: 6,          // px-6
  CARD_PADDING: 4,           // p-4
  LARGE_PADDING: 10,         // px-10 py-4
  BUTTON_PADDING: 4          // py-4
} as const

export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
  DESKTOP: 1280
} as const

export const TRANSITION_EASING = {
  SMOOTH: [0.4, 0, 0.2, 1] as const,
  BOUNCE: [0.68, -0.55, 0.265, 1.55] as const,
  LINEAR: "linear" as const
} as const

export const TOUCH_VALUES = {
  LONG_PRESS_TIMEOUT: 500,    // ms
  SWIPE_THRESHOLD: 50,        // px
  SWIPE_TIME_LIMIT: 300,      // ms
  TAP_SCALE: 0.95,
  HOVER_SCALE: 1.05,
  ACTIVE_SCALE: 1.02
} as const

export const VISUAL_VALUES = {
  BLUR_AMOUNT: 4,
  BLUR_MOBILE: 2,
  BLUR_LOW_PERFORMANCE: 2,
  OPACITY_INACTIVE: 0.6,
  OPACITY_HIDDEN: 0,
  TRANSLATE_Y_INITIAL: 30,
  TRANSLATE_Y_HOVER: -4,
  TRANSLATE_Y_HOVER_CARD: -8,
  BORDER_RADIUS: 16,          // rounded-2xl
  BORDER_RADIUS_SMALL: 8      // rounded-lg
} as const

export const DELAYS = {
  STAGGER_CHILDREN: 0.1,
  CARD_STAGGER: 0.08,
  CONTENT_DELAY: 0.2,
  HOVER_DELAY: 0.3
} as const

export const SIZES = {
  HERO_MOBILE_TEXT: 'text-6xl',
  HERO_DESKTOP_TEXT: 'text-9xl',
  SECTION_TITLE: 'text-5xl md:text-6xl',
  CARD_TITLE: 'text-2xl md:text-3xl',
  SOCIAL_ICON_TEXT: 'text-3xl'
} as const

export const COLORS = {
  PRIMARY: '#dc2626',
  PRIMARY_HOVER: '#b91c1c',
  WHITE: '#ffffff',
  GRAY_400: '#9ca3af',
  GRAY_500: '#6b7280',
  BLACK: '#000000'
} as const
