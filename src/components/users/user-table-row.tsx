import React from 'react'
import { TableRow } from '../general'
import { FaAngleDoubleDown, FaCheck, FaCheckCircle, FaKey, FaTools, FaWindowClose } from 'react-icons/fa'
import { IoLockClosed } from 'react-icons/io5'
import clsx from 'clsx'
import { DisableUser } from './disabled-user'
import { MdKey } from 'react-icons/md'
import { ResetPasswordUser } from './reset-password-user'

interface Props{
  name: string
  lastName: string
  userName: string
  active: boolean
}

export const UserTableRow = ({name,lastName,userName,active}:Props) => {
   const [style,activeText,Icon] = active   
                                ? ['bg-green-app','activo',FaCheck ]
                                : ['bg-sub-title','inactivo',IoLockClosed ]
  
  return (
    <TableRow>
      <p className='w-[20%] text-lg md:text-2xl'>{name}</p>

      <p className='w-[20%] text-lg md:text-2xl'>{lastName}</p>

      <p className='w-[30%] text-lg md:text-2xl font-code'>{userName}</p>

      <div className='w-[15%] flex items-center justify-center'>
        <button popoverTarget={'disable-user'+userName} className={clsx('flex text-white items-center gap-2 w-auto capitalize px-2 py-1 rounded-md',style)}>
          <Icon className='size-4 md:size-4'/>
          <p className='hidden md:block text-xl'>{activeText}</p>
        </button>
      </div>

      <div className='w-[15%] text-center'>
        <button popoverTarget={'edit-password-user'+userName} className='cursor-pointer rounded-md p-1 text-primary hover:opacity-80'>
          <MdKey className="mx-auto size-6 md:size-8 " /> 
        </button> 
      </div>

      <DisableUser banned={!active} userName={userName} />
      <ResetPasswordUser userName={userName}/>
    </TableRow>
  )
}
