"use server";
import { ExtendedAreaCompetenza } from '@/lib/types';
import { LRUCache } from 'lru-cache';

const CACHE_TTL = 1000 * 60 * 5; 

const options = {
  max: 500, // massimo numero di elementi in cache
  ttl: CACHE_TTL,
};

const menuCache = new LRUCache<string, ExtendedAreaCompetenza>(options);

export async function getMenuFromCache(areaId: string, lng: string): Promise<ExtendedAreaCompetenza | null> {
  const cacheKey = `menu-${areaId}-${lng}`;
  return menuCache.get(cacheKey) || null;
}

export async function setMenuInCache(areaId: string, lng: string, data: ExtendedAreaCompetenza): Promise<void> {
  const cacheKey = `menu-${areaId}-${lng}`;
  menuCache.set(cacheKey, data);
}

export async function invalidateCache() {
    console.info("CACHE Invalidating cache");
  return await menuCache.clear();
} 