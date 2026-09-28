import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

const articleSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.coerce.date(),
  category: z.string().optional(),
  tags: z.string().optional(),
  color: z.string().optional(),
  img: z.string().optional(),
})

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '*.md',
    }),
    mixtapes: defineCollection({
      type: 'page',
      source: 'mixtapes/**/*.md',
      schema: articleSchema,
    }),
    notes: defineCollection({
      type: 'page',
      source: 'notes/**/*.md',
      schema: articleSchema,
    }),
  },
})
