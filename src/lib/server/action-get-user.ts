'use server'

import { headers } from "next/headers"
import { auth } from "../auth"
import { redirect } from "next/navigation"

export async function getUserInfo(){
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if(!session) return redirect('/login');

  return session.user
}