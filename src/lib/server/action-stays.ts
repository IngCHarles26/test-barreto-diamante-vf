'use server'

import { cacheLife, cacheTag, updateTag } from "next/cache"
import { prisma } from "../prisma"
import { consoleError } from "./helpers"
import { Pay, Reason } from "@/generated/prisma/client"
import { getUserInfo } from "./action-auth"



const tagCacheStays = 'all-stays' 



export const SAgetActiveStays = async () => {
  'use cache'
  cacheLife('hours')
  cacheTag(tagCacheStays)
  try{
    return await prisma.stay.findMany({
      where:{ dateEnd: null },
      select: { 
        id:true,
        dateStart:true,
        roomId: true,
        reason: true,
        carPlate: true,
        origin: true,
        paidUntil:true,
        room:{ select:{ price:true }},
        user:{ select:{ email:true } },
        pays:{ 
          select: { startDayDate: true, endDayDate: true, mount: true }, 
          orderBy: { endDayDate:'desc' } 
        },
        clientInStay: { select :{ 
          client: { select : {
            id:true,
            firstName: true,
            lastName: true,
            typeDocument: true,
            numberDocument: true,
            born: true,
            country:{ 
              select:{flag:true}
            }
          }},
        }
      }}
    })
  }catch(err){
    consoleError(err)
    return []
  }
}

interface CreateStay {
  dateStart:Date
  roomId: number
  reason: Reason
  origin: string
  carPlate: string | null
  clientInStay: {
    create: {
      client: {
        connect: {id:string,},
      }
    }[]
  }
}

interface TypeFetchGoogleFolder {
  success: boolean
  ans?: string
  msg?: string
}


export const SAcreateStay = async (data:CreateStay) => {
  try{
    const { API_GOOGLE_FOLDERS, GOOGLE_FOLDER_BASE } = process.env
    if(!API_GOOGLE_FOLDERS) throw new Error('Faltan los datos de la carpeta api')
    
    const {roomId,dateStart} = data
    
    await prisma.$transaction( async tx => {
      const room = await tx.room.findUnique({where:{number:roomId}})

      if(!room) throw new Error('La habitacion no existe')

      if(room.status === 'busy') throw new Error('La habitacion se encuentra ocupada')

      await tx.room.update({
        where:{number:roomId},
        data:{status:'busy'}
      })
      const user = await getUserInfo()

      
      const newStay = await tx.stay.create({
        data:{ ...data, 
          userId:user.id, 
          paidUntil:dateStart 
        },
        include:{
          clientInStay: true
        }
      })
      // TODO: Agregar la creacion de la carpeta en google drive
      const stayId = newStay.id
      const dataFetch:TypeFetchGoogleFolder = await (await fetch(API_GOOGLE_FOLDERS+stayId,{
        next: {revalidate: 3600}})).json();
        
      const {success, ans} = dataFetch
      if(!success) throw new Error('No se pudo generar la carpeta de imagenes');

      const images = ans || GOOGLE_FOLDER_BASE

      await tx.stay.update({
        where:{ id: stayId},
        data: { images }
      })
    },{
      timeout: 20000,
    })
    updateTag(tagCacheStays)
    updateTag('all-rooms')

    return {success:true,message:'Registro exitoso'}

  }catch(err:any){
    consoleError(err)
    const message = err.message || 'No se pudo crear la estadia'
    return{success:false,message}
  }
}

interface SaveStayInterface extends Omit<Pay,'id'| 'userId' | 'endDayDate'> {
  stayId: number
  endDayDate: Date
}
export const SAsaveStayPay = async (data:SaveStayInterface) => {
  try{
    const {id:userId} = await getUserInfo()

    await prisma.pay.create({
      data: {...data,userId}
    })

    const {endDayDate,stayId} = data

    await prisma.stay.update({
      where:{id:stayId},
      data:{ paidUntil: endDayDate }
    })
    
    updateTag(tagCacheStays)
    return true
  }catch(err){
    consoleError(err)
    return false
  }
}

interface CloseStayInterface {
  totalCost: number
  stayId: number
  dateEnd: Date
  stars: number
  comments: string
  roomNumber: number
}

export const SAcloseStay = async (data:CloseStayInterface) => {
  // ESTADIA
  // escribir la fecha final --ya--
  // calcular la suma de los pagos --ya--
  // escribir los comentarios --ya--
  // guardar las estrellas --ya--
  // CUARTO
  // cambiar el estado del cuarto a libre --ya--
  // CLIENTES
  // sumar uno al total de estadias
  // recalcular las estrellas
  const {stayId,dateEnd,totalCost,stars,comments,roomNumber} = data
  try{
    await prisma.$transaction( async tx => {

      await tx.stay.update({
        where: { id: stayId },
        data: { dateEnd, totalCost, comments, stars }
      })

      await tx.room.update({
        where: { number:roomNumber },
        data: { status:'free' }
      })

      const clients = await tx.clientInStay.findMany({
        where: {stayId},
        select: { client: {
            select: { id: true, stars: true, totalStays: true }
        }}
      })

      for(let {client} of clients){
        const {id:clientId,stars:clientStars,totalStays} = client
        const newTotal = totalStays + 1
        const newStars = +Number(( totalStays*clientStars + stars )/newTotal).toFixed(2)
        
        await tx.client.update({
          where: { id:clientId },
          data: { stars: newStars, totalStays: newTotal, lastStay: dateEnd }
        })
      }

    })
    updateTag(tagCacheStays)
    updateTag('all-rooms')
    return true
  }catch(err){
    consoleError(err)
    return false
  }
}

export const SAgetStaysByFilters = async (year:number,month:number,room:number) => {
  try{
    if(!month || !room || !year) return []

    const startDate = new Date(year,month,1)
    const endDate = new Date(year,month+1,0)

    return await prisma.stay.findMany({
      where: { 
        roomId: room, 
        dateStart: { gte: startDate, lte: endDate }
      },
      include:{
        user: { select:{ 
          email:true
        }},
        clientInStay: { select: { client: {
          select:{
            firstName: true,
            lastName: true,
            country: { select: {flag: true}},
            born: true,
            numberDocument: true,
          }
        }}}
      }
      
    })
  }catch(err){
    consoleError(err)
    return []
  }
}


export const SAgetStaysByClient = async (clientId:string) => {
  try{
    return await prisma.stay.findMany({
        where: { 
          clientInStay:{some:{clientId}}
        },
        include:{
          user: { select:{ 
            email:true
          }},
          clientInStay: { select: { client: {
            select:{
              firstName: true,
              lastName: true,
              country: { select: {flag: true}},
              born: true,
              numberDocument: true,
            }
          }}}
        }
      })
  }catch(err){
    consoleError(err)
    return []
  }
}