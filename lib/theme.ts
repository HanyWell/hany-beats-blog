export const theme = {
  // Farby - červená téma s dark mode
  colors: {
    // Primary - červená spektrum
    primary: {
      50: '#fef2f2',
      100: '#fee2e2', 
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
      950: '#450a0a',
    },
    
    // Gray scale pre dark theme
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
      950: '#030712',
    },

    // Background colors
    background: {
      primary: '#000000',
      secondary: '#111827', // gray-900
      tertiary: '#1f2937', // gray-800
      card: '#0f172a', // gray-900/95
      overlay: 'rgba(0, 0, 0, 0.5)',
    },

    // Text colors
    text: {
      primary: '#ffffff',
      secondary: '#e5e7eb', // gray-200
      tertiary: '#9ca3af', // gray-400
      muted: '#6b7280', // gray-500
    },

    // Border colors
    border: {
      primary: '#374151', // gray-700
      secondary: '#4b5563', // gray-600
      accent: '#dc2626', // red-600
      muted: '#1f2937', // gray-800
    },

    // Gradienty
    gradients: {
      red: 'linear-gradient(to right, #dc2626, #b91c1c, #991b1b)',
      redVertical: 'linear-gradient(to bottom, #dc2626, #b91c1c, #991b1b)',
      redGlow: 'linear-gradient(to right, #dc2626, #b91c1c, #991b1b)',
      background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.1), rgba(0,0,0,0.3))',
      card: 'linear-gradient(135deg, rgba(220,38,38,0.1), rgba(0,0,0,0.8))',
    },

    // Glow efekty
    glow: {
      red: 'rgba(220, 38, 38, 0.6)',
      redStrong: 'rgba(220, 38, 38, 0.8)',
      redSubtle: 'rgba(220, 38, 38, 0.3)',
      pink: 'rgba(236, 72, 153, 0.5)',
      purple: 'rgba(147, 51, 234, 0.5)',
    },
  },

  // Spacing systém
  spacing: {
    0: '0px',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    8: '32px',
    10: '40px',
    12: '48px',
    16: '64px',
    20: '80px',
    24: '96px',
    32: '128px',
    40: '160px',
    48: '192px',
    56: '224px',
    64: '256px',
  },

  // Typografia
  typography: {
    fontFamily: {
      primary: "'Poppins', sans-serif",
      fallback: "Arial, Helvetica, sans-serif",
    },
    
    fontSizes: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    
    fontWeights: {
      thin: '100',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },

    letterSpacings: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
  },

  // Border radius
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },

  // Shadow systém
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    
    // Red glow shadows
    red: '0 0 30px rgba(220, 38, 38, 0.5)',
    redStrong: '0 0 40px rgba(220, 38, 38, 0.8)',
    redCard: '0 20px 40px rgba(0, 0, 0, 0.6), 0 0 30px rgba(220, 38, 38, 0.5)',
  },

  // Z-index systém
  zIndex: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },

  // Transition systém
  transitions: {
    fast: '150ms ease-in-out',
    base: '300ms ease-in-out',
    slow: '500ms ease-in-out',
    slower: '700ms ease-in-out',
    bounce: '0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
}

// CSS custom properties pre použitie v CSS
export const cssVars = {
  '--font-primary': theme.typography.fontFamily.primary,
  '--color-primary': theme.colors.primary[600],
  '--color-primary-500': theme.colors.primary[500],
  '--color-primary-700': theme.colors.primary[700],
  '--color-background': theme.colors.background.primary,
  '--color-background-secondary': theme.colors.background.secondary,
  '--color-text-primary': theme.colors.text.primary,
  '--color-text-secondary': theme.colors.text.secondary,
  '--color-text-muted': theme.colors.text.muted,
  '--color-border': theme.colors.border.primary,
  '--color-border-accent': theme.colors.border.accent,
  '--gradient-red': theme.colors.gradients.red,
  '--glow-red': theme.colors.glow.red,
  '--shadow-red': theme.shadows.red,
}

// Helper funkcie pre použitie v komponentoch
export const getColor = (path: string) => {
  const keys = path.split('.')
  let value: any = theme.colors
  
  for (const key of keys) {
    value = value[key]
    if (!value) return null
  }
  
  return value
}

export const getSpacing = (size: keyof typeof theme.spacing) => {
  return theme.spacing[size]
}

export const getFontSize = (size: keyof typeof theme.typography.fontSizes) => {
  return theme.typography.fontSizes[size]
}

export default theme
