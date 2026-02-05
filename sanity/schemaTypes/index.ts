// sanity/schemaTypes/index.ts

import { type SchemaTypeDefinition } from 'sanity'  // typ pre schémy

import { blockContentType } from './blockContentType' // import schémy Block Content
import { categoryType } from './categoryType'         // import schémy Category
import { postType } from './postType'                 // import schémy Post
import { authorType } from './authorType'             // import schémy Author
import { mixType } from './mixType'                   // import schémy Mix

// Tu vytvoríme POLE všetkých schém a pomenujeme ho schemaTypes
export const schemaTypes: SchemaTypeDefinition[] = [
  blockContentType,
  categoryType,
  postType,
  authorType,
  mixType,
]
