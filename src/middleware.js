import { updateSession } from 'clientapp/lib/supabase/middleware';
import { NextResponse } from 'next/server';

export async function middleware(request) {
  return await updateSession(request)
}

export const config = {
  matcher: [
    '/client/designs/',
  ],
}
