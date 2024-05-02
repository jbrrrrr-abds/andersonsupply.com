import { createBrowserClient } from '@supabase/ssr'
import { Url, Key } from "root/../supabase.js";

export default function createClient() {
  return createBrowserClient(Url, Key)
}