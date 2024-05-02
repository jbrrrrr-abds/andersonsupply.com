import { createServerClient, CookieOptions, serialize } from '@supabase/ssr'
import { Url, Key } from "root/../supabase.js";


export function createClient() {
  const supabase = createServerClient(Url, Key,
    {
      cookies: {
        get(name) {
          return context.req.cookies[name]
        },
        set(name, value, options) {
          context.res.appendHeader('Set-Cookie', serialize(name, value, options))
        },
        remove(name, options) {
          context.res.appendHeader('Set-Cookie', serialize(name, '', options))
        },
      },
    }
  )

  return supabase
}