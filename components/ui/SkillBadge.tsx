'use client'

import { motion } from 'framer-motion'

interface SkillBadgeProps {
  name: string
  level: number // 0-100
  color?: string
  icon?: string
}

export default function SkillBadge({ name, level, color = 'cyan', icon }: SkillBadgeProps) {
  const colorClasses = {
    cyan: 'from-cyan-500 to-cyan-600',
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    yellow: 'from-yellow-500 to-yellow-600',
    red: 'from-red-500 to-red-600',
  }

  const gradientClass = colorClasses[color as keyof typeof colorClasses] || colorClasses.cyan

  return (
    <motion.div
      className="group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
          {icon && <span className="mr-2">{icon}</span>}
          {name}
        </span>
        <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
          {level}%
        </span>
      </div>
      
      {/* Progress Bar Background */}
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        {/* Progress Bar Fill */}
        <motion.div
          className={`h-full bg-gradient-to-r ${gradientClass} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        />
      </div>
    </motion.div>
  )
}
