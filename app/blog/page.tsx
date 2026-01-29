import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import Image from 'next/image'
import Link from 'next/link'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

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
  body: string
  _createdAt: string
  mainImage?: SanityImageSource
  author?: { name: string }
  category?: { title: string }
}

async function getPosts(): Promise<Post[]> {
  return client.fetch(`*[_type == "post"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    body,
    _createdAt,
    mainImage,
    author->{ name },
    category->{ title }
  }`)
}

export default async function BlogPage() {
  const posts = await getPosts()

  const djCesta = posts.filter(post => post.category?.title === 'Moja DJ Cesta')
  const pribehy = posts.filter(post => post.category?.title === 'Príbehy')
  const ostatne = posts.filter(post => !post.category)

  const renderPosts = (posts: Post[], startIndex: number = 0) => {
    return posts.map((post, index) => {
      if (!post.slug?.current) return null
      
      return (
        <Link href={`/blog/${post.slug.current}`} key={post._id}>
          <article 
            className="bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/30 transition-all cursor-pointer hover:scale-[1.02] hover:-translate-y-1 animate-fade-in"
            style={{ animationDelay: `${(startIndex + index) * 0.1}s` }}
          >
            {post.mainImage && (
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={urlFor(post.mainImage).width(800).url()}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent opacity-60"></div>
              </div>
            )}
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-3 text-white hover:text-purple-400 transition-colors">
                {post.title}
              </h2>
              {post.author && (
                <p className="text-purple-400 mb-4 flex items-center gap-2">
                  <span>🎧</span>
                  <span>by {post.author.name}</span>
                </p>
              )}
              <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
                {post.body}
              </p>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  {new Date(post._createdAt).toLocaleDateString('sk-SK')}
                </p>
                <span className="text-purple-400">
                  Čítať viac →
                </span>
              </div>
            </div>
          </article>
        </Link>
      )
    })
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-5xl mx-auto p-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-6xl mb-4">🎵</div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            DJ Blog
          </h1>
          <p className="text-gray-400">Najnovšie mixy, recenzie a DJ tipy</p>
        </div>

        {djCesta.length > 0 && (
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-4xl">🚀</span>
              <h2 className="text-3xl font-bold text-white">Moja DJ Cesta</h2>
            </div>
            <div className="grid gap-10">
              {renderPosts(djCesta, 0)}
            </div>
          </section>
        )}

        {pribehy.length > 0 && (
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-4xl">📖</span>
              <h2 className="text-3xl font-bold text-white">Príbehy</h2>
            </div>
            <div className="grid gap-10">
              {renderPosts(pribehy, djCesta.length)}
            </div>
          </section>
        )}

        {ostatne.length > 0 && (
          <section>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-4xl">📝</span>
              <h2 className="text-3xl font-bold text-white">Ostatné</h2>
            </div>
            <div className="grid gap-10">
              {renderPosts(ostatne, djCesta.length + pribehy.length)}
            </div>
          </section>
        )}
        
        {posts.length === 0 && (
          <div className="text-center py-20 animate-fade-in">
            <div className="text-6xl mb-4">🎧</div>
            <p className="text-xl text-gray-500">Žiadne články zatiaľ...</p>
            <p className="text-gray-400 mt-2">Vytvor prvý v Sanity Studio!</p>
          </div>
        )}
      </div>
    </main>
  )
}
