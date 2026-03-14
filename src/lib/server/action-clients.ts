'use server'

import { cacheTag, updateTag } from "next/cache";
import { prisma } from "../prisma";
import { TypeDocuments } from "@/generated/prisma/enums";
import { getUserInfo, isAdminUser } from "./action-auth";
import { consoleError } from "./helpers";




const tagCacheClients = 'all-clients'
const path = '/dashboard/clients'

const maxClientsPerPet = 108;

// //!_____________________________ Clients
  // Se va a guardar el cache por la primera letra del nombre

  export interface SearchClientsInterface {
    type: 'name' | 'document'
    input: string
  }
  export const SAgetClientsByFilters = async (data:SearchClientsInterface) => {
    const {type,input} = data
    try{
      
      if(type === 'document') 
        return await prisma.client.findMany({ 
          where:{ numberDocument:{ contains:input} }, 
          orderBy:{ lastName: 'asc'},
          include:{ country: {select: { flag: true, name: true }} },
          take: 12,
        });

      const values = input.split(' ')
      return await prisma.client.findMany({ 
        where:{ 
          OR: values.map( val => ({
            OR:[
              {firstName: {contains: val}},
              {lastName: {contains: val}},
            ]
          }))
        },
        take: 12,
        orderBy:{ lastName: 'asc' },
        include:{ country: {select: { flag: true, name: true }}}
      })
      
    }catch(err){
      consoleError(err)
      return []
    }
  }

  export const SAgetClientById = async (clientId:string) => {
    'use cache'
    try{
      cacheTag(tagCacheClients+clientId)
      const client = await prisma.client.findUnique({
        where:{id:clientId},
        include:{
          country:{ select:{flag:true} }
        }
      })
      
      if(!client) return null

      return client
    }catch(err){
      consoleError(err)
      return null
    }
  }

  interface CreateClientInterface  {
    typeDocument: TypeDocuments,
    numberDocument: string,
    firstName: string,
    lastName: string,
    countryId: string,
    address?: string,
    phone?: string,
    born: Date
  }
  
  export const SAcreateClient = async (data:CreateClientInterface) => {
    try{
      const {numberDocument,typeDocument} = data
      const client = await prisma.client.findFirst({where:{typeDocument,numberDocument}})
      
      if(client) 
        return {
          sucess:false,
          message:`ya hay un cliente registrado con ${typeDocument}:${numberDocument}`
        }

      await prisma.client.create({data})

      return {success:true,message:'Cliente creado correctamente'}
    }catch (err){
      consoleError(err)
      return {success:false,message:'No se pudo crear el cliente'}
    }
  }

  export const SAbanClient = async (userId:string) => {
    try{
      await prisma.client.update({where:{id:userId},data:{banned:true}})
      updateTag(tagCacheClients+userId)
      return true
    }catch(err){
      consoleError(err)
      return false
    }
  }
  
  export const SAunBanClient = async (userId:string) => {
    try{
      await isAdminUser()
      
      await prisma.client.update({where:{id:userId},data:{banned:false,banReason:''}})
      updateTag(tagCacheClients+userId)
      
      return true
    }catch(err){
      consoleError(err)
      return false
    }
  }

  export const SAaddCommentsClient = async (userId:string,comments:string) => {
    try{
      await prisma.client.update({where:{id:userId},data:{comments}})
      updateTag(tagCacheClients+userId)
      return true

    }catch(_){
      return false
    }
  }
  
  export const SAaddBanReasonClient = async (userId:string,banReason:string) => {
    try{
      await prisma.client.update({where:{id:userId},data:{banReason}})

      updateTag(tagCacheClients+userId)

      return true

    }catch(err){
      consoleError(err)
      return false
    }
  }

