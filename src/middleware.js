import { updateSession } from 'clientapp/lib/supabase/middleware'

export async function middleware(request) {
  return await updateSession(request)
}

export const config = {
  matcher: [
    '/client/designs/',
  ],
}
