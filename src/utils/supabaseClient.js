import { cookies } from 'next/headers';
import { createServerClient, createBrowserClient } from '@supabase/ssr';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

function supabaseServerClient() {
  const cookieStore = cookies();
  const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, {
    cookies: {
      get(name) {
        return cookieStore.get(name)?.value;
      },
    },
  });
  return supabase;
}

function supabaseBrowserClient() {
  const supabase = createBrowserClient(supabaseUrl, supabaseKey);
  return supabase;
}

export { supabaseServerClient, supabaseBrowserClient };
