import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const programs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/programs' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    image: z.string().optional(),
    order: z.number().default(0),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(),
    summary: z.string(),
    video: z.string().optional(),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    location: z.string().optional(),
    image: z.string().optional(),
    summary: z.string(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
  }),
});

const settings = defineCollection({
  loader: glob({ pattern: '**/*.yml', base: './src/content/settings' }),
  schema: z.object({
    siteName: z.string(),
    tagline: z.string(),
    nav: z.object({
      home: z.string(),
      about: z.string(),
      admissions: z.string(),
      programs: z.string(),
      news: z.string(),
      events: z.string(),
      gallery: z.string(),
      contact: z.string(),
    }),
    footer: z.object({
      address: z.string(),
      phone: z.string(),
      email: z.string(),
      mapEmbedUrl: z.string().optional(),
      facebook: z.string().optional(),
      youtube: z.string().optional(),
      copyright: z.string(),
    }),
    home: z.object({
      heroTitle: z.string(),
      heroSubtitle: z.string(),
      heroImage: z.string().optional(),
      heroCta: z.string(),
      highlightsTitle: z.string(),
    }),
  }),
});

export const collections = { programs, news, events, pages, settings };
