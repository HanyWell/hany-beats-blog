'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

interface Category {
  title: string
  slug: { current: string }
}

interface Post {
  _id: string
  title: string
  slug: { current: string }
  mainImage?: SanityImageSource
  mainImageUrl?: string
  excerpt?: string
  publishedAt: string
  categories?: Category[]
}

interface BlogClientProps {
  posts: Post[]
}

export default function BlogClient({ posts }: BlogClientProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  // Zberie všetky unikátne kategórie zo všetkých postov
  const allCategories: Category[] = []
  const seen = new Set<string>()
  for (const post of posts) {
    for (const cat of post.categories ?? []) {
      if (!seen.has(cat.slug.current)) {
        seen.add(cat.slug.current)
        allCategories.push(cat)
      }
    }
  }

  const filtered = activeCategory
    ? posts.filter((p) => p.categories?.some((c) => c.slug.current === activeCategory))
    : posts

  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Filter tlačidlá */}
      {allCategories.length > 0 && (
        <div className="flex flex-wrap gap-3 mb-10">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-widest border transition-all duration-300 ${
              activeCategory === null
                ? 'bg-red-600 border-red-600 text-white shadow-[0_0_12px_rgba(220,38,38,0.5)]'
                : 'bg-transparent border-red-950/50 text-gray-400 hover:border-red-600/50 hover:text-red-400'
            }`}
          >
            Všetko
          </button>
          {allCategories.map((cat) => (
            <button
              key={cat.slug.current}
              onClick={() => setActiveCategory(cat.slug.current)}
              className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-widest border transition-all duration-300 ${
                activeCategory === cat.slug.current
                  ? 'bg-red-600 border-red-600 text-white shadow-[0_0_12px_rgba(220,38,38,0.5)]'
                  : 'bg-transparent border-red-950/50 text-gray-400 hover:border-red-600/50 hover:text-red-400'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      )}

      {/* Grid postov */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((post, index) => {
          if (!post.slug?.current) return null

          return (
            <Link
              href={`/blog/${post.slug.current}`}
              key={post._id}
              className="group"
            >
              <article
                className={`red-card-glow bg-zinc-950 border border-red-950/30 rounded-2xl overflow-hidden h-full flex flex-col opacity-0 animate-glide-in delay-${Math.min(index, 6) * 100}`}
              >
                <div className="relative h-56 w-full overflow-hidden">
                  {post.mainImageUrl ? (
                    <>
                      <Image
                        src={post.mainImageUrl}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-red-950/30 to-transparent opacity-80"></div>
                      <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 transition-all duration-500"></div>
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-red-900 to-black flex items-center justify-center">
                      <span className="text-6xl opacity-40">🎧</span>
                    </div>
                  )}
                </div>

                <div className="p-6 flex-grow">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {post.categories && post.categories.length > 0 ? (
                      post.categories.map((cat) => (
                        <span
                          key={cat.slug.current}
                          className="px-3 py-1 bg-red-600/20 text-red-400 text-xs font-bold rounded-full uppercase border border-red-600/30"
                        >
                          {cat.title}
                        </span>
                      ))
                    ) : (
                      <span className="px-3 py-1 bg-red-600/20 text-red-400 text-xs font-bold rounded-full uppercase border border-red-600/30">
                        Blog
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-white hover-red-glow transition-all duration-500">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed">
                    {post.excerpt || 'Klikni a zisti viac o tomto mixe...'}
                  </p>
                </div>

                <div className="p-6 pt-0 mt-auto border-t border-red-950/50 flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {post.publishedAt
                      ? new Date(post.publishedAt).toLocaleDateString('sk-SK')
                      : ''}
                  </span>
                  <span className="text-red-500 font-bold text-sm flex items-center gap-1 group-hover:translate-x-2 transition-transform duration-500">
                    Čítať viac →
                  </span>
                </div>
              </article>
            </Link>
          )
        })}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 py-20">
          Žiadne posty v tejto kategórii.
        </p>
      )}
    </div>
  )
}
