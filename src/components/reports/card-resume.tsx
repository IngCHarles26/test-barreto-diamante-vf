import React from 'react'
import { AiOutlineUserSwitch } from 'react-icons/ai'

interface Props{
  percent: number
  user: string
  total: number
}

export const CardResume = ({percent,user,total}:Props) => {
  return (
    <div className='shadow-xl px-3 py-2 md:px-5 md:py-3 w-59 md:w-auto rounded-2xl border border-border-sidebar flex flex-col justify-between'>
      <div className='flex items-center gap-4 justify-between mb-4'>
        <AiOutlineUserSwitch className='bg-primary/10 text-primary size-12 md:size-12 px-2 py-1 rounded-xl'/>
        <p className='bg-in-client/10 text-xs md:text-sm rounded-xl font-bold px-3 py-2 text-in-client'>{percent}%</p>
      </div>
      <p className='text-body text-lg md:text-xl font-bold'>
        <span className='text-done-button-text text-xs md:text-base font-normal'>Percibido por: </span>
        {user}
      </p> 
      <p className='text-body text-2xl font-bold'>s/ {total}</p>
    </div>
  )
}
