import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';


export async function middleware(request) {
  const cookieStore = cookies();
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createRouteHandlerClient({ request, response, cookies: () => cookieStore })
  const user = await supabase.auth.getUser();
  console.log(user);


  if (user.data.user) {
    const {data} = await supabase.from('users').select('prismicSlug').eq('email', user.data.user.email);
    console.log(data[0]);
    if (data[0].prismicSlug) {
      response.headers.set('designArchive', data[0].prismicSlug);
      return response

    } else {
      return NextResponse.redirect(new URL('/client/unauthorized/', request.url));
    }

  } else {
    return NextResponse.redirect(new URL('login/', request.url));
  }
}

export const config = {
  matcher: [
    '/client/designs/',
  ],
}
