import { updateSession } from 'authtest/utils/supabase/middleware'

export async function middleware(request) {
  console.log('auth test middleware');
  return await updateSession(request)
}

export const config = {
  matcher: [
    '/auth-test-app/:path*',
  ],
}
