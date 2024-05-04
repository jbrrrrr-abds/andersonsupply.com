import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'
import { redirect } from 'next/navigation';


export async function updateSession(request) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name) {
          return request.cookies.get(name)?.value
        },
        set(name, value, options) {
          request.cookies.set({
            name,
            value,
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({
            name,
            value,
            ...options,
          })
        },
        remove(name, options) {
          request.cookies.set({
            name,
            value: '',
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({
            name,
            value: '',
            ...options,
          })
        },
      },
    }
  )


  console.log(request.url);

  console.log(request.url.includes(pageAccess))
  (request.nextUrl.clone);

  if (!request.url.includes(pageAccess)) {

  } else {
    NextResponse.redirect(request.url);
  }
  const user = await supabase.auth.getUser()
  if (user) {
    const {data} = await supabase.from('users').select('prismicSlug').eq('email', user.data.user.email);
    const pageAccess = console.log(data[0].prismicSlug);
    return response
  }
  // matcher should get all routes that include /designs/, which would include all protected data displayed.  any of those routes should kick back to login if not authed or provisioned




}
