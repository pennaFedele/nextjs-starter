"use server";
import { HeaderPages } from '@/components/header';
import { ExtendedAreaCompetenza } from '@/lib/types';
import { LRUCache } from 'lru-cache';

const CACHE_TTL = 1000 * 60 * 5; 

const options = {
  max: 500, // massimo numero di elementi in cache
  ttl: CACHE_TTL,
};

const menuCache = new LRUCache<string, ExtendedAreaCompetenza>(options);
const pageCache = new LRUCache<string, HeaderPages[]>(options);

export async function getMenuFromCache(areaId: string, lng: string): Promise<ExtendedAreaCompetenza | null> {
  const cacheKey = `menu-${areaId}-${lng}`;
  return menuCache.get(cacheKey) || null;
}

export async function getPageFromCache(): Promise<HeaderPages[] | null> {
  const cacheKey = `pages`;
  return pageCache.get(cacheKey) || null;
}

export async function setPageInCache(data: HeaderPages[]): Promise<void> {
  const cacheKey = `pages`;
  pageCache.set(cacheKey, data);
}

export async function setMenuInCache(areaId: string, lng: string, data: ExtendedAreaCompetenza): Promise<void> {
  const cacheKey = `menu-${areaId}-${lng}`;
  menuCache.set(cacheKey, data);
}

export async function invalidatePageCache() {
    console.info("CACHE Invalidating page cache");
    return await pageCache.clear();
}

export async function invalidateMenuCache() {
    console.info("CACHE Invalidating menu cache");
  return await menuCache.clear();
} 