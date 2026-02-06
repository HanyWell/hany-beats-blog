import { memo } from 'react'
import { SocialIconProps } from '@/types/components'

/**
 * Zdieľaný komponent pre sociálne ikony
 * Mobile-first, touch-friendly (min 44px)
 */
const SocialIcon: React.FC<SocialIconProps> = memo(function SocialIcon({
  href,
  icon,
  label,
  className = ""
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center hover:border-red-500/50 hover:bg-white/10 transition-all text-2xl sm:text-3xl hover:scale-110 focus:outline-none focus:ring-4 focus:ring-red-500/50 active:scale-95 ${className}`}
      aria-label={label}
      role="listitem"
    >
      <span className="relative z-10" aria-hidden="true">{icon}</span>
    </a>
  )
})

export default SocialIcon
