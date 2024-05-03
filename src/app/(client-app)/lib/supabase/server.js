import { createServerClient } from '@supabase/ssr'
import { Url, Key } from "root/../supabase.js";


export function createClient() {
  return createServerClient(Url, Key)
}