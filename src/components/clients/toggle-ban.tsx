'use client'

import clsx from 'clsx'
import { CenterDialog } from '../general'
import { FaBan, FaCheckCircle, FaUserCheck, FaUserTimes } from 'react-icons/fa'
import { startTransition, useOptimistic, useState } from 'react'
import { closeDialog, openDialog } from '@/lib/client'
import { SAbanClient, SAunBanClient } from '@/lib/server'
import { useMessageStore } from '@/store'

interface Props{
  banned: boolean
  id: string
  firstName:string
  lastName:string
  userRole:'admin' | 'user'
}



const dialogId = 'confirm-user-ban'

export const ToggleBan = ({banned,id,firstName,lastName,userRole}:Props) => {

  const [optimisticBanned, setOptimisticBanned] = useOptimistic(banned)  
  const {stSetLoadingMsg,stSetStaticMsg} = useMessageStore()

  const name = `${firstName} ${lastName[0]}.`
  const [Icon,text1,text2] = banned 
    ? [FaUserCheck,`Desbloquear a ${name}`,'Este cliente saldra del beto'] 
    : [FaUserTimes,`Betar a ${name}`,'Este cliente no podrá volver a ingresar a el hotel y sus instalaciones, porfavor asegurece de escribir el motivo en los comentarios']

  const handleModal = () => {
    // si banned es true, entonces quieres desbanear, cosa que solo puede hacer el admin
    if( optimisticBanned && userRole !== 'admin' ) 
      return stSetStaticMsg('No puedes quitar el beto a este cliente');

    openDialog(dialogId)
  }
  
  const toggleBan = async () => {
    if( optimisticBanned && userRole !== 'admin' ) 
      return stSetStaticMsg('No puedes quitar el beto a este cliente');

    closeDialog(dialogId)
    startTransition( async () => setOptimisticBanned(!optimisticBanned))
    stSetLoadingMsg('Cambiando')

    const action = optimisticBanned ? SAunBanClient : SAbanClient
    const success = await action(id)
    const message = success 
      ? `Cliente ${!optimisticBanned ? 'betado' : 'desbetado'} correctamente` 
      : 'No se pudo procesar la solicitud'
    stSetStaticMsg(message,success)
  }

    

  return (
    <>
      { (userRole === 'admin' || !optimisticBanned)  &&
        <button
          className={clsx(
            'py-2 px-3 ml-auto mt-auto rounded-md cursor-pointer hover:opacity-80 text-white gap-2 items-center  hidden md:flex text-2xl',
            optimisticBanned ? 'bg-primary/20' : 'bg-red-01/20'
          )}
          onClick={handleModal}
        >
          { optimisticBanned ? <> <FaCheckCircle/> Desbloquear </>:<> <FaBan/> Betar</>}
        </button>
      }

      <CenterDialog id='confirm-user-ban'>
        <div className="p-6 w-100 bg-background-light flex flex-col items-center gap-2">
          <Icon  className={clsx(
            "size-18   p-4.5 rounded-full mb-4 text-white",
            optimisticBanned ? 'bg-details' : 'bg-danger ')}
            />
          
          <h3 className="text-xl font-bold capitalize">{text1}</h3>
          <p className="text-gray-600 mb-6 text-center">
            {text2}
          </p>
          
          <div className='w-full flex items-center justify-between'>
            <button className='px-5 py-2 bg-gray-200 rounded-lg cursor-pointer ' 
              popoverTarget={dialogId} popoverTargetAction="hide" >
              NO
            </button>
            <button 
              className={clsx(
                "text-white px-5 py-2 rounded-lg cursor-pointer",
                optimisticBanned ? 'bg-details' : 'bg-danger '
              )}
              onClick={toggleBan}
            >
              SI
            </button>
          </div>
        </div>
      </CenterDialog>
    </>
  )
}
