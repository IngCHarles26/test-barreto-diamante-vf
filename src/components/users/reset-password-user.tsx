import React from 'react'
import { CenterDialog, DialogContent, DialogFooterSave, DialogHeader, InputApp } from '../general'
import { FaLock, FaUserPlus } from 'react-icons/fa'
import { GrUserAdmin } from 'react-icons/gr'


interface Props{
  userName: string
}

export const ResetPasswordUser = ({userName}:Props) => {
  return (
    <CenterDialog id={'edit-password-user'+userName}>
      <DialogContent maxWRem={25}>
        <DialogHeader
          Icon={GrUserAdmin}
          title='Editar Contraseña'
          subTitle='Ingresa la nueva clave para el usuario'
        />


        <div className='w-full px-3 grid gap-2'>
          <div className='flex w-full items-center gap-2 justify-between border-b border-done-button-bg pb-3' >
            <p className='text-xl'>Usuario:</p>
            <p className='font-code text-2xl font-bold'>{userName}</p>
          </div>
          <InputApp
            Icon={FaLock}
            label="Nueva Contraseña"
            inputId="input-password-reset"
            type="password"
            placeHolder="**********"
            className=''
          />
          <InputApp
            Icon={FaLock}
            label="Repite la Contraseña"
            inputId="input-confirm-password-reset"
            type="password"
            placeHolder="**********"
            className=''
          />
        </div>

        <DialogFooterSave id={'edit-password-user'+userName}/>

      </DialogContent>

    </CenterDialog>
  )
}
