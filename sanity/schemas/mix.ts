// sanity/schemas/mix.ts
import { SanityRule, SanityPrepareOptions } from '@/types/sanity'

export default {
  name: 'mix',
  title: 'Mix',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Názov mixu',
      validation: (Rule: SanityRule) => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'URL slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule: SanityRule) => Rule.required()
    },
    {
      name: 'audioFile',
      type: 'file',
      title: 'Audio súbor',
      options: {
        accept: 'audio/*'
      },
      validation: (Rule: SanityRule) => Rule.required()
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Dátum publikovania',
      initialValue: () => new Date().toISOString()
    },
    {
      name: 'tracklist',
      title: 'Tracklist',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'artist',
              type: 'string',
              title: 'Interpret',
              validation: (Rule: SanityRule) => Rule.required()
            },
            {
              name: 'title',
              type: 'string',
              title: 'Názov tracku',
              validation: (Rule: SanityRule) => Rule.required()
            },
            {
              name: 'label',
              type: 'string',
              title: 'Label (voliteľné)'
            },
            {
              name: 'startTime',
              type: 'string',
              title: 'Čas začiatku (MM:SS)',
              description: 'Formát: 05:30',
              validation: (Rule: SanityRule) => Rule.required().regex(/^\d{1,2}:\d{2}$/, 'Musí byť vo formáte MM:SS')
            },
            {
              name: 'spotifyUrl',
              type: 'url',
              title: 'Spotify odkaz (voliteľné)'
            },
            {
              name: 'bandcampUrl',
              type: 'url',
              title: 'Bandcamp odkaz (voliteľný)'
            },
            {
              name: 'youtubeUrl',
              type: 'url',
              title: 'YouTube odkaz (voliteľný)'
            }
          ],
          preview: {
            select: {
              title: 'title',
              artist: 'artist',
              startTime: 'startTime'
            },
            prepare({ title, artist, startTime }: SanityPrepareOptions) {
              return {
                title: `${artist} - ${title}`,
                subtitle: `Začiatok: ${startTime}`
              }
            }
          }
        }
      ]
    },
    {
      name: 'notes',
      type: 'text',
      title: 'DJ poznámky',
      description: 'Krátky popis nálady, konceptu alebo inšpirácie mixu',
      rows: 4
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      trackCount: 'tracklist'
    },
    prepare({ title, publishedAt, trackCount }: SanityPrepareOptions) {
      return {
        title,
        subtitle: `${trackCount?.length || 0} trackov • ${new Date(publishedAt || '').toLocaleDateString('sk')}`
      }
    }
  }
}
