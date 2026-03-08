'use server'

import { headers } from "next/headers"
import { auth } from "../auth"
import { revalidatePath } from "next/cache"


export const ToggleBanUser = async (banned:boolean|null,userId:string) => {

  const banUser = auth.api.banUser 
  const unbanUser = auth.api.unbanUser

  const toggleBan = !banned ? banUser : unbanUser

  await toggleBan({
    body:{
      userId
    },
    headers: await headers()
  });

  revalidatePath('/dashboard/extras/users')
}