'use server'

import { cacheTag, updateTag } from "next/cache";
import { prisma } from "../prisma"
import { TypeRoom } from "@/generated/prisma/enums";
import { redirect } from "next/navigation";
import { getNow } from "../shared";

//!_____________________________ ROOMS
const tagCacheRooms = 'all-rooms'
const path = '/dashboard/rooms/actives'
export const getCacheRooms = async () => {
  'use cache'
  cacheTag(tagCacheRooms)

  return await prisma.room.findMany()
}

export const ActionToggleRoomStatus = async (status:boolean, number:number) => {
  await prisma.room.update({
    where:{ number },
    data:{
      active:!status
    }
  });

  updateTag(tagCacheRooms)
}

type DataChange = { price:number, type:TypeRoom }

export const ActionConfigRoomInfo = async (number:number,data:DataChange) => {
  await prisma.room.update({
    where:{ number },
    data
  })
  
  updateTag(tagCacheRooms)
}

//!_____________________________ ACTIVES ROOM
const tagCacheActives = 'all-active-rooms'
export const getCacheActiveRooms = async (roomNumber?:number) => {
  'use cache'
  cacheTag(tagCacheActives+String(roomNumber||''))

  if(!roomNumber) return await prisma.roomActive.findMany({});

  return await prisma.roomActive.findMany({where:{roomNumber}})
}

export type ParamsActives = { room?: string | undefined }
export const ActionGetFilteredActives = async (params:ParamsActives,rooms:number[]) => {
  
  try{
    const isEmptyObject = (obj:Object) => Object.keys(obj).length === 0 
    if( isEmptyObject(params) ) {
      return getCacheActiveRooms()
    }
    
    const room = Number(params.room)
    if( isNaN(room) ) throw new Error('El cuarto ingresado no es valido');
    
    if( !rooms.includes(room) ) throw new Error('El cuarto no existe');
    
    return getCacheActiveRooms(room)
  }catch(_){
    redirect(path)
  }
}
export const  ActionCreateRoomActive = async (description:string,roomNumber:number) => {
  await prisma.roomActive.create({
    data:{
      active:true,
      dateCreated: getNow(),
      dateMoved: getNow(),
      description,
      roomNumber
    }
  })
  
  updateTag(tagCacheActives)
}

export const ActionEditInfoRoomActive = async (description:string,roomNumber:number,id:number) => {

  await prisma.roomActive.update({
    where:{id},
    data:{ description, roomNumber, dateMoved:getNow()}
  })
  
  updateTag(tagCacheActives)
}

export const ActionDisableRoomActive = async (id:number) => {

  await prisma.roomActive.update({
    where:{id},
    data:{active:false}
  })
  
  updateTag(tagCacheActives)
}