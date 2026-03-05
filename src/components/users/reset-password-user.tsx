'use client'

import { zPassword } from '@/lib/shared/zod-schemas'
import { CenterDialog, DialogContent, DialogFooterSave, DialogHeader, InputApp } from '../general'
import { FaLock } from 'react-icons/fa'
import { GrUserAdmin } from 'react-icons/gr'
import z from 'zod'
import { ChangeEvent, useState } from 'react'
import { authClient } from '@/lib/auth-client'


interface Props{
  userName: string
  userId:string
}

export const ResetPasswordUser = ({userName,userId}:Props) => {
  const [passwordValues, setPasswordValues] = useState({password:'',confirmPassword:''});
  const [errorMessage, setErrorMessage] = useState('');

  const dialogId = 'edit-password-user'+userName

  const schema = z.object({
    password: zPassword,
    confirmPassword: z.string()
  }).refine( data => data.confirmPassword === data.password,{
    message: 'Las contraseñas no son las mismas',
    path:['password']
  })

  const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const name = e.target.name as keyof typeof passwordValues
    const value = e.target.value

    const input = {...passwordValues,[name]:value}

    setPasswordValues( prev => ({
      ...prev,
      [name]:value
    }))

    const result = schema.safeParse(input)
    if(result.error){
      const errors = result.error.issues.map( issue => issue.message)

      setErrorMessage(errors[0])
    }else{
      setErrorMessage('')
    }

  }

  const handleClick = async () => {
    setErrorMessage('Procesando...')

    const result = schema.safeParse(passwordValues)

    if(result.error) return
    
    const { error } = await authClient.admin.setUserPassword({
      newPassword: passwordValues.password,
      userId
    })

    setErrorMessage('')

    if(error){
      const message = error.message || 'Algo salió mal'
      return setErrorMessage(message)
    }

    await authClient.admin.revokeUserSessions({userId})

    setPasswordValues({password:'',confirmPassword:''})

    const centerDialog = document.getElementById(dialogId) as HTMLDialogElement
    centerDialog.hidePopover()
  }
  
  
  return (
    <CenterDialog id={dialogId}>
      <DialogContent maxWRem={25}>
        <DialogHeader
          Icon={GrUserAdmin}
          title='Editar Contraseña'
          subTitle='Ingresa la nueva clave para el usuario'
        />


        <div className='w-full px-3 grid gap-2'>
          <div className='flex w-full items-center gap-2 justify-between border-b border-done-button-bg pb-3' >
            <p className='text-xl'>Usuario:</p>
            <p className='font-code text-xl font-bold'>{userName}</p>
          </div>
          <InputApp
            Icon={FaLock}
            label="Nueva Contraseña"
            inputId="input-password-reset"
            type="text"
            placeHolder="**********"
            name='password'
            value={passwordValues.password}
            onChange={handleChange}
            />
          <InputApp
            Icon={FaLock}
            label="Repite la Contraseña"
            inputId="input-confirm-password-reset"
            type="text"
            placeHolder="**********"
            className=''
            name='confirmPassword'
            value={passwordValues.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <DialogFooterSave 
          id={'edit-password-user'+userName}
          error={errorMessage}
          saveClick={handleClick}
        />

      </DialogContent>

    </CenterDialog>
  )
}
