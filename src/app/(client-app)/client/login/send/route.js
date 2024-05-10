import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'


export async function POST(req) {
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })
  const res = await req.json();
  let user;
  console.log('new form api');

  if (req.method === 'POST') {
    const { email, password } = res;
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    return NextResponse.json(data);

    /*if (error) {
      return ({
        statusCode: 400,
        body: 'login error'
      })
    }
    user = data.user;
  } else {
    return ({
      statusCode: 405,
      body: 'only POST allowed',
    })
  }
  */


  }
  return NextResponse.json();
}
