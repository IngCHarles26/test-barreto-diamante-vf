'use client'

import { Country } from '@/generated/prisma/browser'
import { NewClientForm, NewCountryForm } from '../clients'
import { CloseStayForm } from './close-stay-form'
import { NewStayForm } from './new-stay-form'
import { RoomStayTable } from './room-stay-table'
import { StayPaysTable } from './stay-pays-table'


interface Props {
  countries: Country[]
}

export const StayRegisterContent = ({ countries }:Props) => {
  return (
    <div className=" w-full h-auto lg:h-full flex flex-col gap-4">
    
      <NewStayForm/>

      <RoomStayTable/>

      <StayPaysTable/>

      <CloseStayForm/>

      <NewClientForm countries={countries}/>
      <NewCountryForm/>
      
    </div>
  )
}
