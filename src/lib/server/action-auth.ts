'use server'

import { headers } from "next/headers"
import { auth } from "../auth"
import { redirect } from "next/navigation"

export async function getUserInfo(){
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if(!session) redirect('/login');

  return session.user
}

export async function isAdminUser() {
  const user = await getUserInfo()

  const {role} = user

  if(role !== 'admin') redirect('/dashboard')
}
