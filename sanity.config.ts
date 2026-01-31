// sanity.config.ts v root priečinku hany-beats

import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemaTypes' // teraz cesta do priečinka sanity/schemaTypes

export default defineConfig({
  name: 'default',
  title: 'Hany Beats Studio',

  projectId: 'z7bgld94',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
