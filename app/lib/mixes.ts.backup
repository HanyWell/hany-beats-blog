// app/lib/mixes.ts
import { client } from '@/sanity/lib/client'
import { Mix } from '@/types/sanity'

export async function getAllMixes(): Promise<Mix[]> {
  const query = `
    *[_type == "mix"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      "audioFile": {
        "asset": {
          "_ref": audioFile.asset._ref,
          "_type": audioFile.asset._type,
          "url": audioFile.asset->url
        }
      },
      publishedAt,
      tracklist,
      notes
    }
  `
  
  return client.fetch(query)
}

export async function getMixBySlug(slug: string): Promise<Mix | null> {
  const query = `
    *[_type == "mix" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      "audioFile": {
        "asset": {
          "_ref": audioFile.asset._ref,
          "_type": audioFile.asset._type,
          "url": audioFile.asset->url
        }
      },
      publishedAt,
      tracklist,
      notes
    }
  `
  
  return client.fetch(query, { slug })
}
