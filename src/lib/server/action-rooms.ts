'use server'

import { cacheTag, updateTag } from "next/cache";
import { prisma } from "../prisma"
import { TypeRoom } from "@/generated/prisma/enums";
import { redirect } from "next/navigation";
import { getNow } from "../shared";
import { Room } from "@/generated/prisma/client";

//!_____________________________ ROOMS
  const tagCacheRooms = 'all-rooms'
  const path = '/dashboard/rooms/actives'
  export const getCacheRooms = async () => {
    'use cache'
    cacheTag(tagCacheRooms)

    return await prisma.room.findMany()
  }

  interface Floors{
    number: number
    name: string
    src: string
    rooms: Room[]
  }
  
  export const ActionGetFloors = async () => {
    const floors:Floors[] = [
      { number: 1, name: 'Piso 1', src: '/piso_1.jpg', rooms: []}, 
      { number: 2, name: 'Piso 2', src: '/piso_2_3.jpg', rooms: []}, 
      { number: 3, name: 'Piso 3', src: '/piso_2_3.jpg', rooms: []}, 
    ]
    
    const rooms = await getCacheRooms()

    for(let room of rooms){
      const { floor } = room
      floors[floor-1].rooms.push(room)
    }

    return floors
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

  export const getCacheActiveOutRooms = async () => {
    'use cache'
    cacheTag(tagCacheActives+'out')

    return await prisma.roomActive.findMany({where:{room:null}})
  }
  
  export const getCacheActiveRooms = async (room?:number) => {
    'use cache'
    
    cacheTag(tagCacheActives)
    if(!room) return await prisma.roomActive.findMany();
    
    cacheTag(tagCacheActives+room)
    return await prisma.roomActive.findMany({where:{room}})
  }


  

  export type ParamsActives = { room?: string | undefined }
  export const ActionGetFilteredActives = async (params:ParamsActives,rooms:number[]) => {
    
    try{
      const isEmptyObject = (obj:Object) => Object.keys(obj).length === 0 
      if( isEmptyObject(params) ) {
        return getCacheActiveRooms()
      }
      
      const roomInput = params.room
      if( roomInput === 'afuera' ) return await getCacheActiveOutRooms();
      
      const room = Number(roomInput)
      if( isNaN(room) ) throw new Error('El cuarto ingresado no es valido');
      
      if( !rooms.includes(room) ) throw new Error('El cuarto no existe');
      
      return await getCacheActiveRooms(room)
    }catch(_){
      redirect(path)
    }
  }

  export const  ActionCreateRoomActive = async (description:string,_room:string) => {

    const room = _room === '' ? null : Number(_room)
    
    await prisma.roomActive.create({
      data:{
        active:true,
        dateCreated: getNow(),
        dateMoved: getNow(),
        description,
        room
      }
    })
    
    if( _room ) updateTag(tagCacheActives+_room)
    else updateTag(tagCacheActives+'out')

    updateTag(tagCacheActives)
  }

  export const ActionEditInfoRoomActive = async (description:string,room:number,id:number) => {

    await prisma.roomActive.update({
      where:{id},
      data:{ description, room, dateMoved:getNow()}
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