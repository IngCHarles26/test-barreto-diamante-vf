'use client'

import { authClient } from "../auth-client"

export const getUserClientInfo = () => {
  const session = authClient.useSession()
  const data = session.data
  console.log(data)
  if(!data) return null
  return data.user
}