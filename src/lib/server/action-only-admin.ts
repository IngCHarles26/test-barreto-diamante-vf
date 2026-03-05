'use server'

import { redirect } from "next/navigation"
import { getUserInfo } from "./action-get-user"

export async function isAdminUser() {
  const user = await getUserInfo()

  const {role} = user

  if(role !== 'admin') redirect('/dashboard')
}