import { NextResponse } from 'next/server';
import { updateSession } from '@/utils/supabase/middleware';

export async function middleware(request) {
  console.log('middleware');
  const response = NextResponse.next();
  return await updateSession(request);
}

export const config = {
  matcher: [
    /* match all paths besides those specified here */
    '/client-designs/:path*',
  ]
}