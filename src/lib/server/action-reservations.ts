'use server'

import { cacheTag, revalidateTag, updateTag } from "next/cache"
import { prisma } from "../prisma"
import { transformDate } from "../shared"
import { getUserInfo } from "./action-auth"
import { Reservation } from "@/generated/prisma/client"
import { consoleError } from "./helpers"

const tagCacheReservations = 'all-reservations'

export const getCacheActiveReservations = async () => {
  'use cache'

  cacheTag(tagCacheReservations)

  return await prisma.reservation.findMany({ 
    where:{ active:true }, 
    orderBy: { date: 'asc' },
    include:{
      user:{ 
        select:{ email:true }
      }
    } 
  })
}


export const getNowDayReservations = async () => { // por ahora sin usos
  const reservations = await getCacheActiveReservations()

  const [compareDate] = transformDate(new Date())

  return reservations.filter( el => transformDate(el.date)[0] === compareDate)
}



export const SAdesactivateReservation = async (id:number) => {
  try{
    const user = await getUserInfo()

    const reservation = await prisma.reservation.findUnique({ where:{ id } })

    if( !reservation ) return {success:false, msg: 'La reservacion no existe'};


    if( user.id !== reservation.userId ) return {success:false, msg: 'Solo el usuario creador puede cancelar la reservacion'};

    await prisma.reservation.update({ where:{id}, data:{ active:false } })

    revalidateTag(tagCacheReservations,'max')

    return {success:true, msg: 'Reservacion cancelada con exito'};
  }catch(err){
    consoleError(err)
    return {success:false, msg: 'Contacta al desarrollador'}
  }
}


export const SAcreateReservation = async (inReservation:Omit<Reservation,'id' | 'active' | 'userId'>) => {
  try{
    const {amount,name,numberRooms} = inReservation

    const totalRooms = numberRooms.reduce((ac,el) => ac+el)

    const {id:userId} = await getUserInfo()
    
    await prisma.pay.create({data:{
      date: new Date(),
      description: `Reservacion cliente: ${name}, ${totalRooms} habitaciones`,
      mount: amount,
      userId,
      payType: 'efectivo',
    }})

    await prisma.reservation.create({data:{...inReservation,userId}})

    updateTag(tagCacheReservations)

    return true
  }catch(err){
    consoleError(err)
    return false
  }
}