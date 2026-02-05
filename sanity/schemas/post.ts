// sanity/schemas/post.ts

const postSchema = {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Nadpis'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'URL slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'excerpt',
      type: 'text',
      title: 'Krátky popis',
      rows: 3
    },
    {
      name: 'mainImage',
      type: 'image',
      title: 'Hlavný obrázok',
      options: {
        hotspot: true
      }
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Dátum publikovania',
      initialValue: () => new Date().toISOString()
    }
  ]
}

export default postSchema
