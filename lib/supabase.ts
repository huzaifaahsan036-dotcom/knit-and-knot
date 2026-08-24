import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!url) {
  throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL');
}

if (!key) {
  throw new Error('Missing NEXT_PUBLIC_SUPABASE_ANON_KEY');
}

export const supabase = createClient(url, key, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});

export function publicImage(path?: string | null) {
  if (!path) return null;

  if (path.startsWith('http')) {
    return path;
  }

  const bucket = path.startsWith('product-images/')
    ? 'product-images'
    : path.startsWith('category-images/')
      ? 'category-images'
      : 'website-images';

  const clean = path.replace(
    /^product-images\/|^category-images\/|^website-images\//,
    ''
  );

  return `${url}/storage/v1/object/public/${bucket}/${clean}`;
}
