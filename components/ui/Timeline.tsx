'use client'

import { motion } from 'framer-motion'

interface TimelineEvent {
  year: string
  title: string
  description: string
  isPause?: boolean
}

interface TimelineProps {
  events: TimelineEvent[]
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="space-y-4">
      {events.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.15, duration: 0.4 }}
          className="relative pl-6 pb-4 last:pb-0"
        >
          {/* Vertical Line */}
          {index < events.length - 1 && (
            <div
              className={`absolute left-[7px] top-5 w-0.5 h-full ${
                event.isPause ? 'border-l-2 border-dashed border-gray-600' : 'bg-gradient-to-b from-red-500 to-red-700'
              }`}
            />
          )}
          
          {/* Timeline Dot - FIXED positioning */}
          <div 
            className={`absolute left-0 top-0.5 w-4 h-4 rounded-full border-2 ${
              event.isPause 
                ? 'border-gray-600 bg-gray-800' 
                : 'border-red-500 bg-red-600 shadow-[0_0_12px_rgba(239,68,68,0.5)]'
            }`} 
          />
          
          {/* Content */}
          <div>
            <div className="flex items-baseline gap-2 mb-0.5">
              <span className="text-red-400 font-bold text-xs">{event.year}</span>
              <span className="text-white font-semibold text-sm">{event.title}</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">{event.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
