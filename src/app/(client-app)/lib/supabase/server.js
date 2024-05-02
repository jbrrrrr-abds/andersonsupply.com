import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { Url, Key } from "root/../supabase.js";


export function createClient() {
  const cookieStore = cookies()

  // Create a server's supabase client with newly configured cookie,
  // which could be used to maintain user's session
  return createServerClient(Url, Key,
    {
      cookies: {
        get(name) {
          return cookieStore.get(name)?.value
        },
        set(name, value, options) {
          try {
            cookieStore.set({ name, value, ...options })
          } catch (error) {
            // The `set` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
        remove(name, options) {
          try {
            cookieStore.set({ name, value: '', ...options })
          } catch (error) {
            // The `delete` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  )
}