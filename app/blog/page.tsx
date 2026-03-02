import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import BlogClient from './BlogClient'

export const dynamic = 'force-dynamic'

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

interface Category {
  title: string
  slug: { current: string }
}

interface Post {
  _id: string
  title: string
  slug: { current: string }
  mainImage?: SanityImageSource
  excerpt?: string
  publishedAt: string
  categories?: Category[]
}

export default async function BlogPage() {
  const posts: Post[] = await client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      excerpt,
      publishedAt,
      categories[]->{ title, slug }
    }`
  )

  // Prekonvertuj mainImage na URL na serveri (Image URL builder nie je serializovateľný)
  const postsWithUrls = posts.map((post) => ({
    ...post,
    mainImageUrl: post.mainImage ? urlFor(post.mainImage).width(600).url() : undefined,
    mainImage: undefined,
  }))

  return (
    <main className="min-h-screen bg-black text-white pb-20">
      <div className="relative h-[300px] flex items-center justify-center overflow-hidden mb-12">
        <div className="absolute inset-0 bg-red-900/20 blur-3xl rounded-full -top-24 -left-24 w-96 h-96 pulse-loop"></div>
        <div
          className="absolute inset-0 bg-red-800/10 blur-3xl rounded-full -bottom-24 -right-24 w-96 h-96 pulse-loop"
          style={{ animationDelay: '1s' }}
        ></div>

        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-black italic tracking-tighter bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(220,38,38,0.5)]">
            HANY BEATS BLOG
          </h1>
          <p className="text-gray-400 mt-4 text-lg font-medium uppercase tracking-[0.2em]">
            Mixes • Stories • Tech
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mt-6"></div>
        </div>
      </div>

      {/* DEBUG - zmaž po oprave */}
      <p className="text-center text-xs text-gray-600 mb-4">
        posts: {postsWithUrls.length} | cats: {postsWithUrls.map(p => p.categories?.length ?? 0).join(',')}
      </p>
      <BlogClient posts={postsWithUrls} />
    </main>
  )
}
