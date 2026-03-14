'use server'

import { headers } from "next/headers"
import { auth } from "../auth"
import { redirect } from "next/navigation"
import { consoleError } from "./helpers"

export async function getUserInfo(){
  try{
    const session = await auth.api.getSession({
      headers: await headers()
    })

    if(!session) redirect('/login');

    return session.user
  }catch(err){
    consoleError(err)
    redirect('/login')
  }
}

export async function isAdminUser() {
  try{
    const user = await getUserInfo()

    const {role} = user

    if(role !== 'admin') redirect('/dashboard');
  }catch(err){
    consoleError(err)
    redirect('/dashboard');
  }
}
