import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import imageUrlBuilder from '@sanity/image-url'
import { theme } from '@/lib/theme'
import BaseCard from '@/components/ui/BaseCard'
import { createBlogCardVariants, imageHoverVariants, createTextHoverVariants } from '@/lib/animationVariants'
import { BlogCardProps, SanityImageSource } from '@/types/components'

export default function BlogCard({ post, index, sanityClient }: BlogCardProps) {
  const builder = imageUrlBuilder(sanityClient)
  function urlFor(source: SanityImageSource) {
    return builder.image(source)
  }

  const cardVariants = createBlogCardVariants(index)
  const textVariants = createTextHoverVariants(theme.colors.primary[600], theme.colors.glow.red)

  return (
    <Link href={`/blog/${post.slug.current}`} className="group block">
      <BaseCard 
        index={index}
        className={`relative overflow-hidden rounded-2xl h-full flex flex-col bg-zinc-950 border border-red-950/30 transition-all duration-500`}
        style={{
          boxShadow: `0 0 30px ${theme.colors.glow.redSubtle}`,
        }}
      >
        {/* Image container */}
        <div className="relative h-56 w-full overflow-hidden">
          {post.mainImage ? (
            <motion.div variants={imageHoverVariants}>
              <Image
                src={urlFor(post.mainImage).width(600).url()}
                alt={post.title}
                fill
                className="object-cover"
              />
              {/* Red gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-red-950/30 to-transparent opacity-80" />
              <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 transition-all duration-500" />
            </motion.div>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-red-900 to-black flex items-center justify-center">
              <span className="text-6xl opacity-40">🎧</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex-grow">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-red-600/20 text-red-400 text-xs font-bold rounded-full uppercase border border-red-600/30">
              New Release
            </span>
          </div>
          
          <motion.h2 
            variants={textVariants}
            className="text-2xl font-bold mb-3 text-white"
          >
            {post.title}
          </motion.h2>
          
          <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed">
            {post.excerpt || "Klikni a zisti viac o tomto mixe..."}
          </p>
        </div>

        {/* Footer */}
        <div className="p-6 pt-0 mt-auto border-t border-red-950/50 flex items-center justify-between">
          <span className="text-xs text-gray-500">
            {new Date(post._publishedAt).toLocaleDateString('sk-SK')}
          </span>
          <motion.span 
            className="text-red-500 font-bold text-sm flex items-center gap-1"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.3 }}
          >
            Čítať viac →
          </motion.span>
        </div>

        {/* Glow effect on hover */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow: `0 20px 40px rgba(0, 0, 0, 0.6), 0 0 30px ${theme.colors.glow.redStrong}`,
            border: `1px solid ${theme.colors.primary[600]}80`
          }}
        />
      </BaseCard>
    </Link>
  )
}
