import { getMenuFromCache, setMenuInCache, invalidateCache } from '../src/lib/cache-manager';

describe('cache manager', () => {
  afterEach(async () => {
    await invalidateCache();
  });

  it('stores and retrieves menu data', async () => {
    const sample = { id: 'test', name: 'Sample menu' } as any;
    await setMenuInCache('1', 'en', sample);
    const result = await getMenuFromCache('1', 'en');
    expect(result).toEqual(sample);
  });
});
