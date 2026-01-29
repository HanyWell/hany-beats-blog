import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'

export default defineConfig({
  name: 'default',
  title: 'Hany-beats',

  projectId: 'z7bgld94',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],
  
  schema: {
    types: [
      {
        name: 'category',
        title: 'Category',
        type: 'document',
        fields: [
          {
            name: 'title',
            title: 'Názov kategórie',
            type: 'string',
          },
          {
            name: 'slug',
            title: 'URL slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
          },
          {
            name: 'description',
            title: 'Popis',
            type: 'text',
          },
        ],
      },
      {
        name: 'author',
        title: 'Author',
        type: 'document',
        fields: [
          {
            name: 'name',
            title: 'Meno',
            type: 'string',
          },
          {
            name: 'image',
            title: 'Profilová fotka',
            type: 'image',
            options: { hotspot: true },
          },
        ],
      },
      {
        name: 'post',
        title: 'Post',
        type: 'document',
        fields: [
          {
            name: 'title',
            title: 'Názov',
            type: 'string',
          },
          {
            name: 'slug',
            title: 'URL slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
          },
          {
            name: 'author',
            title: 'Autor',
            type: 'reference',
            to: [{ type: 'author' }],
          },
          {
            name: 'category',
            title: 'Kategória',
            type: 'reference',
            to: [{ type: 'category' }],
          },
          {
            name: 'mainImage',
            title: 'Cover obrázok',
            type: 'image',
            options: { hotspot: true },
          },
          {
            name: 'body',
            title: 'Obsah',
            type: 'text',
          },
        ],
      },
    ],
  },
})
