import React from 'react'
import { CenterDialog } from '../general'
import { IoIosLogOut } from 'react-icons/io'
import { FaDoorClosed, FaDoorOpen } from 'react-icons/fa'
import clsx from 'clsx'

interface Props {
  status: boolean
  room: number
}

export const ToggleActiveRoom = ({status,room}:Props) => {
  const [Icon,text] = status  
              ? [FaDoorClosed,'desactivar']
              : [FaDoorOpen,'activar']
  
  return (
    <CenterDialog id={'toggle-status-room'+room}>
      <div className="p-6 w-100 bg-background-light flex flex-col items-center gap-2">
        <Icon  className={clsx(
          "size-18   p-4.5 rounded-full mb-4 text-white",
          !status ? 'bg-primary' : 'bg-sub-title ')}
        />
        
        <p className="text-xl font-bold capitalize">
          ¿{text} la Habitacion?
        </p>
        <p className="text-gray-600 mb-6 text-center">
          Esta seguro de {text} la habitacion: <span className='font-bold'>{room}</span>
        </p>
        
        <div className='w-full flex items-center justify-between'>
          <button className='px-5 py-2 bg-gray-200 rounded-lg cursor-pointer hover:opacity-80' 
            popoverTarget={'toggle-status-room'+room} popoverTargetAction="hide" >
            NO
          </button>
          <button 
            className={clsx(
              "text-white px-8 py-2 rounded-lg transition-colors cursor-pointer hover:opacity-80",
              !status ? 'bg-primary' : 'bg-sub-title '
            )}
            popoverTarget="disable-user" popoverTargetAction="hide">
            SI
          </button>
        </div>
      </div>
    </CenterDialog>
  )
}
