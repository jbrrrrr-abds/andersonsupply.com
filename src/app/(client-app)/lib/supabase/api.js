import { createServerClient, serialize } from '@supabase/ssr';
import { Url, Key } from "root/../supabase.js";


export default function createClient(req, res) {
  const supabase = createServerClient(Url, Key,
    {
      cookies: {
        get(name) {
          return req.cookies[name]
        },
        set(name, value, options) {
          res.appendHeader('Set-Cookie', serialize(name, value, options))
        },
        remove(name, options) {
          res.appendHeader('Set-Cookie', serialize(name, '', options))
        },
      },
    }
  )

  return supabase
}