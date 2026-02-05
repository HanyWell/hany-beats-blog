'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface ProfileCardModalProps {
  isOpen: boolean
  onClose: () => void
  type: 'dj' | 'dev'
}

export default function ProfileCardModal({ isOpen, onClose, type }: ProfileCardModalProps) {
  const isDJ = type === 'dj'
  
  const config = isDJ ? {
    color: '#dc2626', // red-600
    glowColor: 'rgb(220, 38, 38)',
    badge: '— Seal',
    avatar: '/img/223951.jpg',
    name: '🎧 Hany Well',
    title: 'DJ • Producer • Vinyl Lover',
    description: 'DJ nie je len môj koníček, ale je to môj životný štýl od roku 2010.',
    stats: [
      { icon: '💿', label: 'Vinyl DJ' },
      { icon: '📋', label: 'Stovky playlistov' },
      { icon: '▶️', label: '10K+ Plays' },
      { icon: '🎛️', label: '100+ Mixov' }
    ],
    buttons: [
      { label: 'Mixy', href: '/mixy', filled: true },
      { label: 'Playlisty', href: '/playlisty', filled: false }
    ]
  } : {
    color: '#ea580c', // orange-600
    glowColor: 'rgb(234, 88, 12)',
    badge: '— Seal',
    avatar: '/img/223951.jpg',
    name: '💻 Some Mahony',
    title: 'Full-Stack Developer',
    description: 'Pretváram nápady na živé, interaktívne weby. Špecializácia na moderné frameworky a UX dizajn.',
    traits: [
      { icon: '⚡', label: 'Clean Code Advocate' },
      { icon: '🎨', label: 'UI/UX Enthusiast' },
      { icon: '🚀', label: 'Performance Optimizer' },
      { icon: '📚', label: 'Continuous Learner' }
    ],
    techStack: [
      { name: 'Next.js', level: 90, color: '#06b6d4' },
      { name: 'React', level: 90, color: '#8b5cf6' },
      { name: 'TypeScript', level: 85, color: '#3b82f6' }
    ],
    buttons: [
      { label: 'Blog', href: '/blog', filled: true },
      { label: 'About', href: '/about', filled: false }
    ]
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-gradient-to-br from-zinc-950 to-black border rounded-2xl overflow-hidden"
            style={{ borderColor: config.color }}
          >
            {/* Badge */}
            <div 
              className="absolute top-6 px-4 py-1.5 rounded-full text-sm font-bold"
              style={{ 
                backgroundColor: `${config.color}20`,
                color: config.color,
                [isDJ ? 'left' : 'right']: '1.5rem'
              }}
            >
              {config.badge}
            </div>

            {/* Content */}
            <div className="p-8 pt-16">
              {/* Avatar */}
              <div className={`flex ${isDJ ? 'justify-start' : 'justify-end'} mb-6`}>
                <div className="relative w-24 h-24">
                  <Image
                    src={config.avatar}
                    alt={config.name}
                    fill
                    className="rounded-full object-cover"
                  />
                  <div 
                    className="absolute inset-0 rounded-full blur-xl opacity-60"
                    style={{ background: config.glowColor }}
                  />
                </div>
              </div>

              {/* Name & Title */}
              <div className={`mb-4 ${isDJ ? 'text-left' : 'text-right'}`}>
                <h3 className="text-2xl font-black text-white mb-1">{config.name}</h3>
                <p className="text-sm font-semibold" style={{ color: config.color }}>
                  {config.title}
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {config.description}
              </p>

              {/* Stats or Traits */}
              {isDJ ? (
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {config.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="relative p-4 rounded-lg border"
                      style={{ 
                        borderColor: `${config.color}40`,
                        background: `${config.color}05`
                      }}
                    >
                      <div className="text-2xl mb-1">{stat.icon}</div>
                      <div className="text-xs text-gray-400 font-semibold">{stat.label}</div>
                      
                      {/* ElectricBorder effect */}
                      <div 
                        className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{ 
                          boxShadow: `0 0 20px ${config.glowColor}40`,
                          border: `1px solid ${config.color}`
                        }}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  {/* Traits */}
                  <div className="space-y-2 mb-4">
                    {config.traits.map((trait, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <span>{trait.icon}</span>
                        <span>{trait.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="text-xs text-gray-500 font-bold mb-3 flex items-center gap-2">
                      <span>⚡</span> Tech Stack:
                    </div>
                    <div className="space-y-3">
                      {config.techStack.map((tech, idx) => (
                        <div key={idx}>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-gray-400 font-semibold">{tech.name}</span>
                            <span className="text-gray-500">{tech.level}%</span>
                          </div>
                          <div className="h-2 bg-gray-900 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-500"
                              style={{ 
                                width: `${tech.level}%`,
                                backgroundColor: tech.color
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Buttons */}
              <div className="flex gap-3">
                {config.buttons.map((btn, idx) => (
                  <Link
                    key={idx}
                    href={btn.href}
                    className="flex-1 py-3 text-center font-bold rounded-full transition-all duration-300 hover:scale-105"
                    style={btn.filled ? {
                      backgroundColor: config.color,
                      color: 'white'
                    } : {
                      border: `2px solid ${config.color}`,
                      color: config.color
                    }}
                  >
                    {btn.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
