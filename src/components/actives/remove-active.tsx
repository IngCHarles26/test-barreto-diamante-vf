import React from 'react'
import { CenterDialog } from '../general'
import { FaRegTrashAlt, FaTrash } from 'react-icons/fa'
import clsx from 'clsx'

interface Props {
  id: string
  description: string
}

export const RemoveActive = ({id,description}:Props) => {
  return (
    <CenterDialog id={'confirm-remove-active'+id}>
      <div className="p-6 w-100 bg-background-light flex flex-col items-center gap-2">
        <FaRegTrashAlt className="size-18   p-4.5 rounded-full mb-4 text-white bg-danger"/>
        
        <h3 className="text-xl font-bold">¿Estas seguro de remover el activo? </h3>
        <p className="text-gray-600 mb-6 text-center">
          {description}
        </p>
        
        <div className='w-full flex items-center justify-between'>
          <button className='px-5 py-2 bg-gray-200 rounded-lg cursor-pointer ' 
            popoverTarget={'confirm-remove-active'+id} popoverTargetAction="hide" >
            NO
          </button>
          <button 
            className="text-white px-5 py-2 rounded-lg cursor-pointer bg-danger"
            popoverTarget={'confirm-remove-active'+id} popoverTargetAction="hide">
            SI
          </button>
        </div>
      </div>
    </CenterDialog>
  )
}
