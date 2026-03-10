'use server'

import { cacheTag, updateTag } from "next/cache";
import { prisma } from "../prisma";
import { TypeDocuments } from "@/generated/prisma/enums";
import { getUserInfo, isAdminUser } from "./action-auth";




const tagCacheClients = 'all-clients'
const path = '/dashboard/clients'

const maxClientsPerPet = 108;

// //!_____________________________ Clients
  // Se va a guardar el cache por la primera letra del nombre

  export interface SearchClientsInterface {
    type: 'name' | 'document'
    input: string
  }
  export const ActionGetClientsByFilters = async (data:SearchClientsInterface) => {
    const {type,input} = data
    try{
      
      if(type === 'document') 
        return await prisma.client.findMany({ 
          where:{ numberDocument:{ contains:input} }, 
          orderBy:{ lastName: 'asc'},
          include:{ country: {select: { flag: true, name: true }}}
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
        orderBy:{ lastName: 'asc' },
        include:{ country: {select: { flag: true, name: true }}}
      })
      
    }catch(_){
      return []
    }
  }

  export const ActionGetClientById = async (clientId:string) => {
    'use cache'
    cacheTag(tagCacheClients+clientId)

    return await prisma.client.findUnique({
      where:{id:clientId},
      include:{
        country:{ select:{flag:true} }
      }
    })
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
  
  export const ActionCreateClient = async (data:CreateClientInterface) => {
    try{
      await prisma.client.create({data})
      return true
    }catch (_){
      console.log('Cant create')
      return false
    }
  }

  export const ActionBanClient = async (userId:string) => {
    try{
      await prisma.client.update({where:{id:userId},data:{banned:true}})
      updateTag(tagCacheClients+userId)
      return true
    }catch(_){
      return false
    }
  }
  
  export const ActionUnBanClient = async (userId:string) => {
    try{
      await isAdminUser()
      
      await prisma.client.update({where:{id:userId},data:{banned:false}})
      updateTag(tagCacheClients+userId)
      return true
    }catch(_){
      return false
    }
  }

  export const ActionAddCommentsClient = async (userId:string,comments:string) => {
    try{
      await prisma.client.update({where:{id:userId},data:{comments}})
      updateTag(tagCacheClients+userId)
      return true
    }catch(_){
      return false
    }
  }
  
  export const ActionAddBanReasonClient = async (userId:string,banReason:string) => {
    try{
      await prisma.client.update({where:{id:userId},data:{banReason}})
      updateTag(tagCacheClients+userId)
      return true
    }catch(_){
      return false
    }
  }

