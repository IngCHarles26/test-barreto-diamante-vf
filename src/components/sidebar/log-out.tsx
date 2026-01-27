'use client'

import { redirect } from 'next/navigation'
import { IoIosLogOut } from 'react-icons/io'
import { CenterDialog } from '../general'

export const LogOut = () => {

  const onLogOut = () => [
    redirect('/login')
  ]

  return (
    <CenterDialog id='modal-session'>
      <div className="p-6 w-100 bg-background-light flex flex-col items-center gap-2">
        <IoIosLogOut  className="size-18 text-red-500 bg-red-100 p-4.5 rounded-full mb-4"/>
        
        <h3 className="text-xl font-bold">¿Cerrar Sesion?</h3>
        <p className="text-gray-600 mb-6">
          ¿Estas segunro de salir del sistema?
        </p>
        
        <div className='w-full flex items-center justify-between'>
          <button className='px-5 py-2 bg-gray-200 rounded-lg cursor-pointer hover:opacity-80' 
            popoverTarget="modal-session" popoverTargetAction="hide" >
            Cancelar
          </button>
          <button 
            onClick={onLogOut}
            className="bg-primary text-white px-8 py-2 rounded-lg transition-colors cursor-pointer hover:opacity-80"
            popoverTarget="modal-session" popoverTargetAction="hide">
            Salir
          </button>
        </div>
      </div>
    </CenterDialog>
  )
}
