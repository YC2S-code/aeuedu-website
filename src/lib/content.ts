import { getCollection, type CollectionKey } from 'astro:content';
import type { Lang, useTranslations } from '../i18n/utils';

const NEWS_CATEGORIES = ['news', 'announcement', 'event', 'alumni', 'article'] as const;
export type NewsCategory = (typeof NEWS_CATEGORIES)[number];

/** Translate a news article's category, defaulting to "news" if unset. */
export function newsCategoryLabel(t: ReturnType<typeof useTranslations>, category: NewsCategory | undefined): string {
  return t(`label.category.${category ?? 'news'}` as Parameters<typeof t>[0]);
}

/** Get all entries of a collection that belong to the given language. */
export async function getLangEntries<C extends CollectionKey>(collection: C, lang: Lang) {
  const all = await getCollection(collection);
  return all.filter((entry) => entry.id.startsWith(`${lang}/`));
}

/** Strip the "en/" or "zh/" prefix from an entry id to get its slug. */
export function slugFromId(id: string): string {
  return id.split('/').slice(1).join('/');
}

/** Strip markdown formatting characters for use in plain-text contexts (e.g. meta descriptions). */
export function stripMarkdown(text: string): string {
  return text
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    .replace(/[*_`#>]/g, '')
    .trim();
}

/** Estimate reading time in minutes from raw markdown body text. */
export function estimateReadingTime(text: string, lang: Lang): number {
  const plain = stripMarkdown(text ?? '');
  if (lang === 'zh') {
    const chars = plain.replace(/\s/g, '').length;
    return Math.max(1, Math.round(chars / 300));
  }
  const words = plain.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

/** Fallback banner/card image used when an entry has no image of its own. */
export const DEFAULT_ARTICLE_IMAGE = '/images/uploads/heropage_banner.jpg';
