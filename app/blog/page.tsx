import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import Link from 'next/link'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

const client = createClient({
  projectId: 'z7bgld94',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

const builder = imageUrlBuilder(client)
function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

interface Post {
  _id: string
  title: string
  slug: { current: string }
  mainImage?: SanityImageSource
  excerpt?: string
  _publishedAt: string
}

export default async function BlogPage() {
  const posts: Post[] = await client.fetch(`*[_type == "post"] | order(_publishedAt desc)`)

  return (
    <main className="min-h-screen bg-black text-white pb-20">
      {/* ČERVENÉ pozadie namiesto fialového */}
      <div className="relative h-[300px] flex items-center justify-center overflow-hidden mb-12">
        <div className="absolute inset-0 bg-red-900/20 blur-3xl rounded-full -top-24 -left-24 w-96 h-96 pulse-loop"></div>
        <div className="absolute inset-0 bg-red-800/10 blur-3xl rounded-full -bottom-24 -right-24 w-96 h-96 pulse-loop" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative z-10 text-center">
          {/* ČERVENÝ gradient namiesto purple-pink */}
          <h1 className="text-6xl font-black italic tracking-tighter bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(220,38,38,0.5)]">
            HANY BEATS BLOG
          </h1>
          <p className="text-gray-400 mt-4 text-lg font-medium uppercase tracking-[0.2em]">
            Mixes • Stories • Tech
          </p>
          {/* Červená čiara */}
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mt-6"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: Post, index: number) => {
            if (!post.slug?.current) return null

            return (
              <Link 
                href={`/blog/${post.slug.current}`} 
                key={post._id}
                className="group"
              >
                {/* ČERVENÁ karta s animáciami */}
                <article className={`red-card-glow bg-zinc-950 border border-red-950/30 rounded-2xl overflow-hidden h-full flex flex-col opacity-0 animate-glide-in delay-${Math.min(index, 6) * 100}`}>
                  
                  <div className="relative h-56 w-full overflow-hidden">
                    {post.mainImage ? (
                      <>
                        <Image
                          src={urlFor(post.mainImage).width(600).url()}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* ČERVENÝ gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-red-950/30 to-transparent opacity-80"></div>
                        <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 transition-all duration-500"></div>
                      </>
                    ) : (
                      // ČERVENÝ placeholder
                      <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-red-900 to-black flex items-center justify-center">
                        <span className="text-6xl opacity-40">🎧</span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                      {/* ČERVENÝ badge */}
                      <span className="px-3 py-1 bg-red-600/20 text-red-400 text-xs font-bold rounded-full uppercase border border-red-600/30">
                        New Release
                      </span>
                    </div>
                    {/* ČERVENÝ hover na nadpis */}
                    <h2 className="text-2xl font-bold mb-3 text-white hover-red-glow transition-all duration-500">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed">
                      {post.excerpt || "Klikni a zisti viac o tomto mixe..."}
                    </p>
                  </div>

                  <div className="p-6 pt-0 mt-auto border-t border-red-950/50 flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {new Date(post._publishedAt).toLocaleDateString('sk-SK')}
                    </span>
                    {/* ČERVENÉ tlačidlo */}
                    <span className="text-red-500 font-bold text-sm flex items-center gap-1 group-hover:translate-x-2 transition-transform duration-500">
                      Čítať viac →
                    </span>
                  </div>
                </article>
              </Link>
            )
          })}
        </div>
      </div>
    </main>
  )
}
