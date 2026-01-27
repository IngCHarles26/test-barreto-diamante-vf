import React from 'react'
import { TableRow } from '../general'
import { FaAngleDoubleDown, FaCheckCircle, FaTools, FaWindowClose } from 'react-icons/fa'

interface Props{
  name: string
  lastName: string
  userName: string
  active: boolean
}

export const UserTableRow = ({name,lastName,userName,active}:Props) => {
  return (
    <TableRow>
      <p className='w-[25%] text-center'>{name}</p>

      <p className='w-[25%] text-center'>{lastName}</p>

      <p className='w-[20%] text-center'>{userName}</p>

      <div className='w-[15%] flex items-center justify-center'>
        {
          active 
            ? <FaCheckCircle className='size-5 text-green-app'/>
            : <FaWindowClose className='size-5 text-danger'/>
        }
      </div>

      <div className='w-[10%] text-center'>
        <button popoverTarget="disable-user" className='cursor-pointer rounded-md p-1 bg-sub-title text-white hover:opacity-80'>
          <FaAngleDoubleDown  className="mx-auto size-4 " /> 
        </button> 
      </div>

    </TableRow>
  )
}
