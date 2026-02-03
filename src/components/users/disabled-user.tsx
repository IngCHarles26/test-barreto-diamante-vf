import React from 'react'
import { CenterDialog } from '../general'
import { IoIosLogOut } from 'react-icons/io'
import clsx from 'clsx'
import { FaUserCheck, FaUserTimes } from 'react-icons/fa'


interface Props{
  banned: boolean
  userName: string
}

export const DisableUser = ({banned,userName}:Props) => {
  const [Icon,text1,text2] = banned 
                  ? [FaUserCheck,'Habilitar a ','El usuario podra utilizar nuevamente el sistema y sus funciones'] 
                  : [FaUserTimes,'Bloquear a ','El usuario no tendra acceso al sistema hasta que tu lo decidas']
  return (
    <CenterDialog id={'disable-user'+userName}>
      <div className="p-6 w-100 bg-background-light flex flex-col items-center gap-2">
        <Icon  className={clsx(
          "size-18   p-4.5 rounded-full mb-4 text-white",
          banned ? 'bg-green-app' : 'bg-body ')}
        />
        
        <p className="text-xl font-bold">{text1} <span className='font-code text-xl'>{userName}</span></p>
        <p className="text-gray-600 mb-6 text-center">
          {text2}
        </p>
        
        <div className='w-full flex items-center justify-between'>
          <button className='px-5 py-2 bg-gray-200 rounded-lg cursor-pointer hover:opacity-80' 
            popoverTarget={'disable-user'+userName} popoverTargetAction="hide" >
            NO
          </button>
          <button 
            className={clsx(
              "text-white px-8 py-2 rounded-lg transition-colors cursor-pointer hover:opacity-80",
              banned ? 'bg-green-app' : 'bg-body '
            )}
            popoverTarget={'disable-user'+userName} popoverTargetAction="hide">
            SI
          </button>
        </div>
      </div>
    </CenterDialog>
  )
}
