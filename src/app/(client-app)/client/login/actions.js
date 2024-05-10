'use server'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createServerClient } from 'clientapp/lib/supabase/server';

export async function login(formData) {
  const supabase = createClient()

  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  }

  const {error} = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.log('error: ' + error);
    redirect('./error/')
  }
  revalidatePath('/', 'layout')
  redirect('./designs/')
}
