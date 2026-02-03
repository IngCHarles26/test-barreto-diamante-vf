'use client'

import { IoMdSettings } from 'react-icons/io'
import { TableRow } from '../general'
import { FaCheck } from 'react-icons/fa'
import clsx from 'clsx'
import { ToggleActiveRoom } from './toggle-active'
import { RoomConfig } from './room-config'
import { IoLockClosed } from 'react-icons/io5'

interface Props {
  room: number
  type: string
  price: number
  active: boolean
  floor: number
}


export const RoomTableRow = ({room,type,price,active,floor}:Props) => {
  const [style,activeText,Icon] = active   
                              ? ['bg-green-app','activo',FaCheck ]
                              : ['bg-sub-title','inactivo',IoLockClosed ]

  return (
    <TableRow>

      <div className='w-[16%]'>
        <p className='py-2 bg-back-1 text-sub-title mr-auto rounded-lg text-xl md:text-2xl w-14 md:w-18 text-center font-bold'>
          {room}
        </p> 
      </div>

      <p className='w-[22%] text-left text-lg md:text-2xl'>{type}</p>
      
      <p className='w-[16%] font-bold text-money text-xs md:text-2xl text-center'>S/ {price}.00</p>
      
      <p className='w-[20%] text-center font-bold text-base md:text-xl'>{floor}</p>
      
      <div className={'w-[16%] flex justify-center'}>
        <button popoverTarget={'toggle-status-room'+room} className={clsx('flex text-white items-center gap-2 w-auto capitalize px-2 py-1 rounded-md text-center',style)}>
          <Icon className='size-4 md:size-3'/>
          <p className='hidden md:block text-xl'>{activeText}</p>
        </button>
      </div>

      <div className='w-[10%] text-center'>
        <button popoverTarget={"detail-room"+room} className='cursor-pointer rounded-md p-1 text-primary hover:opacity-80'>
          <IoMdSettings className="mx-auto size-6 md:size-7 " /> 
        </button> 
      </div>

      <ToggleActiveRoom status={active} room={room}/>
      <RoomConfig room={room}/>

    </TableRow>
  )
}
