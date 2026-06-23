import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(),
    category: z.enum(['news', 'announcement', 'event', 'alumni', 'article']).optional(),
    featured: z.boolean().optional(),
    pinned: z.boolean().optional(),
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
    category: z.string().optional(),
    featured: z.boolean().optional(),
    summary: z.string(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    titleZh: z.string().optional(),
    image: z.string().optional(),
    parent: z.enum(['programs', 'faculty', 'alumni', 'impact', 'news', 'about']).optional(),
    navLabel: z.string().optional(),
  }),
});

const siteLocale = z.object({
  siteName: z.string(),
  tagline: z.string(),
  nav: z.object({ contact: z.string() }),
  footer: z.object({
    address: z.string(),
    phone: z.string(),
    email: z.string(),
    mapEmbedUrl: z.string().optional(),
    facebook: z.string().optional(),
    youtube: z.string().optional(),
    tiktok: z.string().optional(),
    wechat: z.string().optional(),
    wechatQr: z.string().optional(),
    copyright: z.string(),
    disclaimer: z.string().optional(),
  }),
  home: z.object({
    heroTitle: z.string(),
    heroSubtitle: z.string(),
    heroImage: z.string().optional(),
    heroCta: z.string(),
    highlightsTitle: z.string(),
    highlights: z.array(z.object({ title: z.string(), text: z.string(), image: z.string().optional() })).optional(),
  }),
  banners: z.object({ news: z.string().optional(), events: z.string().optional() }).optional(),
});

const settings = defineCollection({
  loader: glob({ pattern: 'site.yml', base: './src/content/settings' }),
  schema: z.object({ en: siteLocale, zh: siteLocale }),
});

export const collections = { news, events, pages, settings };
