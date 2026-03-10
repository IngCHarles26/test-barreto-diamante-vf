'use server'

import { cacheTag, updateTag } from "next/cache"
import { prisma } from "../prisma"
import { nodeENV } from "better-auth"
import { Country } from "@/generated/prisma/client"

//!_____________________________ COUNTRIES

  const tagCacheCountries = 'all-countries'

  export const getCacheCountries = async () => {
    'use cache'
    cacheTag(tagCacheCountries)
    
    return await prisma.country.findMany({orderBy:{name:'asc'}})
  }

//!_____________________________ CITIES
  const tagCacheCities = 'all-cities'

  
  export const isValidCountry = async (countryId:string) => {
    const countries = await getCacheCountries()
    if( !countries.some( el => el.id === countryId) ) throw new Error('El pais no existe')
  }
  

  export const getCacheCities = async (countryId:string) => {
    'use cache'
    cacheTag(tagCacheCities+countryId)

    try{
      isValidCountry(countryId)
      return await prisma.city.findMany({ where:{ countryId } })
    }catch(_){
      return []
    }
  }


  interface TypeFetchCountries {
    success: boolean
    ans: [string,string,string][]
  }

  export const getRestCountries = async () => {

    const {API_COUNTRIES} = process.env

    if(!API_COUNTRIES) return []
      
    const data:TypeFetchCountries = await (await fetch(API_COUNTRIES,{
      next: {revalidate: 3600}})).json();
      
    const {success, ans} = data
    if(!success) { console.log('GoogleScript API is not working'); return [] }
    
    const countries = (await getCacheCountries()).map(el => el.id)
    const filtered = []

    for(let i=0; i<ans.length; i++){
      if(countries.length === 0) { filtered.push(ans[i]); continue }

      const [id] = ans[i]
      const ix = countries.indexOf(id)

      if(ix >= 0){ countries.splice(ix,1); continue }
      
      filtered.push(ans[i])
    }

    return filtered
  } 

  export const addCountry = async (data:Country) => {
    await prisma.country.create({data})
    updateTag(tagCacheCountries)
  }
