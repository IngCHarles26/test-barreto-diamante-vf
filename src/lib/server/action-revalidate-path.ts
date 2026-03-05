'use server'

import { revalidatePath } from "next/cache"

export async function refreshUsers() {
  revalidatePath('/dashboard/extras/users')
} 