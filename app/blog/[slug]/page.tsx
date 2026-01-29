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
  author?: { 
    name: string
    image?: SanityImageSource
  }
}

async function getPost(slug: string): Promise<Post | null> {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      body,
      _createdAt,
      mainImage,
      author->{ name, image }
    }`,
    { slug }
  )
}

export default async function PostDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return (
      <main className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">404</h1>
          <p className="text-gray-400 mb-8">Článok sa nenašiel</p>
          <Link 
            href="/blog"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-all"
          >
            ← Späť na blog
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-900">
      {/* Tlačidlo späť */}
      <div className="max-w-4xl mx-auto px-8 pt-8">
        <Link 
          href="/blog"
          className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-all mb-8"
        >
          ← Späť na blog
        </Link>
      </div>

      {/* Cover obrázok */}
      {post.mainImage && (
        <div className="relative h-96 w-full mb-12">
          <Image
            src={urlFor(post.mainImage).width(1200).url()}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        </div>
      )}

      {/* Obsah článku */}
      <article className="max-w-4xl mx-auto px-8 pb-20">
        <h1 className="text-5xl font-bold text-white mb-6">
          {post.title}
        </h1>

        {/* Info autor + dátum */}
        <div className="flex items-center gap-4 mb-12 pb-8 border-b border-gray-800">
          {post.author?.image && (
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={urlFor(post.author.image).width(100).url()}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div>
            {post.author && (
              <p className="text-purple-400 font-semibold">{post.author.name}</p>
            )}
            <p className="text-gray-500 text-sm">
              {new Date(post._createdAt).toLocaleDateString('sk-SK', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>

        {/* Text článku */}
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-wrap">
            {post.body}
          </p>
        </div>
      </article>
    </main>
  )
}
