import { createClient as createClientPrimitive } from '@supabase/supabase-js';
import { Url, Key } from "root/../supabase.js";


export function createClient() {
  const supabase = createClientPrimitive(Url, Key)

  return supabase
}