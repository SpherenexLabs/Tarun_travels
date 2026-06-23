/**
 * Firebase Realtime Database REST helpers for Next.js Server Components.
 * No SDK needed — works anywhere fetch() is available.
 * Data is cached with ISR (revalidate every 5 minutes).
 */

const DB_URL = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL;

async function rtdbGet(path) {
  if (!DB_URL) return null;
  try {
    const res = await fetch(`${DB_URL}/${path}.json`, {
      next: { revalidate: 30 }, // ISR: refresh every 30 seconds
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

// ─── Public fetch helpers ─────────────────────────────────────────────────────

export async function getCollection(collectionName) {
  const data = await rtdbGet(collectionName);
  if (!data || typeof data !== 'object') return null;
  return Object.entries(data).map(([id, item]) => ({ id, ...item }));
}

export async function getDocument(path) {
  return rtdbGet(path);
}

// ─── Typed helpers used by website components ─────────────────────────────────

export async function getSiteSettings() {
  return getDocument('config/siteSettings');
}

export async function getHeroSlides() {
  const slides = await getCollection('heroSlides');
  if (!slides || slides.length === 0) return null;
  return [...slides].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export async function getCabs() {
  return getCollection('cabs');
}

export async function getServices() {
  const items = await getCollection('services');
  if (!items || items.length === 0) return null;
  return [...items].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export async function getGalleryItems() {
  return getCollection('gallery');
}

export async function getReviews() {
  return getCollection('reviews');
}

export async function getRoutes() {
  return getCollection('routes');
}
