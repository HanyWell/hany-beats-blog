'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface NavItem {
  label: string
  href: string
  icon?: ReactNode
}

interface PillNavProps {
  items: NavItem[]
  className?: string
}

export default function PillNav({ items, className = '' }: PillNavProps) {
  const pathname = usePathname()

  return (
    <div className={`flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full p-1 ${className}`}>
      {items.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(item.href)

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
              isActive
                ? 'text-white bg-gradient-to-r from-red-600 to-red-500 shadow-lg'
                : 'text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            {item.icon && <span>{item.icon}</span>}
            {item.label}
          </Link>
        )
      })}
    </div>
  )
}
