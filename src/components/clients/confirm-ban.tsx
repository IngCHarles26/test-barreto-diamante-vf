import React from 'react'
import { CenterDialog } from '../general'
import { FaUserCheck, FaUserTimes } from 'react-icons/fa'
import clsx from 'clsx'

interface Props{
  banned: boolean
}

export const ConfirmBan = ({banned}:Props) => {
  const [Icon,text1,text2] = banned 
                  ? [FaUserCheck,'Desbloquear a Carlos C.','La siguiente persona podra volver a registrarse en el hotel y usar sus instalaciones'] 
                  : [FaUserTimes,'Betar a Carlos C.','La siguiente persona no podrá volver a ingresar a el hotel y sus instalaciones, porfavor asegurece de escribir el motivo en los comentarios']
  return (
    <CenterDialog id='confirm-user-ban'>
      <div className="p-6 w-100 bg-background-light flex flex-col items-center gap-2">
        <Icon  className={clsx(
          "size-18   p-4.5 rounded-full mb-4 text-white",
          banned ? 'bg-details' : 'bg-danger ')}
        />
        
        <h3 className="text-xl font-bold">{text1}</h3>
        <p className="text-gray-600 mb-6 text-center">
          {text2}
        </p>
        
        <div className='w-full flex items-center justify-between'>
          <button className='px-5 py-2 bg-gray-200 rounded-lg cursor-pointer ' 
            popoverTarget="confirm-user-ban" popoverTargetAction="hide" >
            NO
          </button>
          <button 
            className={clsx(
              "text-white px-5 py-2 rounded-lg cursor-pointer",
              banned ? 'bg-details' : 'bg-danger '
            )}
            popoverTarget="confirm-user-ban" popoverTargetAction="hide">
            SI
          </button>
        </div>
      </div>
    </CenterDialog>
  )
}
