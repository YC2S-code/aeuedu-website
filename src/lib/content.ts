import { getCollection, type CollectionKey } from 'astro:content';
import type { Lang } from '../i18n/utils';

/** Get all entries of a collection that belong to the given language. */
export async function getLangEntries<C extends CollectionKey>(collection: C, lang: Lang) {
  const all = await getCollection(collection);
  return all.filter((entry) => entry.id.startsWith(`${lang}/`));
}

/** Strip the "en/" or "zh/" prefix from an entry id to get its slug. */
export function slugFromId(id: string): string {
  return id.split('/').slice(1).join('/');
}
