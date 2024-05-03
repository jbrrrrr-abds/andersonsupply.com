import { createBrowserClient } from '@supabase/ssr'
import { Url, Key } from "root/../supabase.js";

export default function createClient() {
  const supabase = createBrowserClient(Url, Key);
  return supabase;
}
