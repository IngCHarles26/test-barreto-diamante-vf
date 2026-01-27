import Link from 'next/link'
import React from 'react'
import { TbListDetails } from 'react-icons/tb'
import { TableRow } from '../general'

interface Props {
  id: number
  firstName: string
  lastName: string
  typeDocument: string
  numberDocument: string
  flag: string
  age: number
  rank: number
  banned?: true
}

export const ClientsTableRow = ({id,firstName,lastName,typeDocument,numberDocument,flag,age,rank,banned}:Props) => {
  return (
    <TableRow>

      <div className="w-[43%] md:w-[38%] px-2 flex justify-between">
        <p className=''>{lastName}, {firstName}</p>
        <p className='text-red-500'>{banned && '🛇'} </p>
      </div>

      <div className="w-[25%] md:w-[15%] text-center">
        <p className='text-sm -mb-1'>{numberDocument}</p>
        <p className='text-neutral-500 scale-90 -mt-1'>{typeDocument}</p>
      </div>

      <p className="w-[10%] md:w-[15%] text-center">{flag}</p>

      <p className="md:w-[10%] hidden md:block text-center">{age}</p>

      <p className="w-[10%] md:w-[12%] text-center">{rank}</p>

      <div className='w-[12%] md:w-[10%] flex justify-center '>
        <Link href={`/dashboard/clients/${id}`}>
          <div  className='cursor-pointer rounded-md p-1.5 md:px-2 bg-green-app text-white hover:opacity-80'>
            <TbListDetails className="mx-auto size-4 md:size-4.5" /> 
          </div> 
        </Link>
      </div>
      
    </TableRow>
  )
}
