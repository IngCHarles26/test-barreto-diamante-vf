'use client'

import { ChangeEvent, useState } from 'react'
import { CenterDialog, DialogContent, DialogFooterSave, DialogHeader, InputApp } from '../general'
import { FaLock, FaUser, FaUserCircle, FaUserNinja, FaUserPlus } from 'react-icons/fa'
import z from 'zod'
import { zEmail, zPassword } from '@/lib/shared/zod-schemas'
import { authClient } from '@/lib/auth-client'
import { useLoadingStore } from '@/store'

const initialData = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

const schema = z.object({
    name: z.string().min(3,'Los Nombres deben tener al menos 3 letras'),
    lastName:  z.string().min(3,'Los Apellido debe tener al menos 3 letras'),
    email: zEmail,
    password: zPassword,
    confirmPassword: z.string()
  }).strict()
  .refine( data => data.password === data.confirmPassword,{
    message: 'Las contraseñas deben ser las mismas',
    path:['confirmPassword']
    })

export const NewUser = () => {

  const [newUserData, setNewUserData] = useState( initialData );
  const [errorMessage, setErrorMessage] = useState('');
  

  const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

    const name = e.target.name as keyof typeof newUserData
    const value = e.target.value

    const input = {...newUserData,[name]:value}

    setNewUserData( prev => ({
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

  const handleSubmit = async () => {

    setErrorMessage('Procesando...')

    const result = schema.safeParse(newUserData)

    if(result.error) return
    
    const { error } = await authClient.admin.createUser({
      email:newUserData.email,
      password: newUserData.password,
      name: newUserData.name,
      data:{
        lastName: newUserData.lastName
      }
    })
    
    setErrorMessage('')

    if(error){
      const message = error.message || 'Algo salió mal'
      return setErrorMessage(message)
    }

    setNewUserData(initialData)

    const centerDialog = document.getElementById('new-user') as HTMLDialogElement
    centerDialog.hidePopover()

  }
  
  
  return (
    <CenterDialog id='new-user'>
      <DialogContent maxWRem={25}>
        <DialogHeader
          Icon={FaUserPlus}
          title='Nuevo Usuario'
          subTitle='Ingresa los datos del nuevo usuario'
        />

        <div className='w-full px-3 grid gap-2'>
           <InputApp
            Icon={FaUser}
            label="Nombres"
            inputId="input-name"
            type="text"
            placeHolder="e.g. Carlos Alberto"
            value={newUserData.name}
            name='name'
            onChange={handleChange}
          />
          <InputApp
            Icon={FaUserNinja}
            label="Apellidos"
            inputId="input-last-name"
            type="text"
            placeHolder="e.g. Castillo Terrones"
            name='lastName'
            value={newUserData.lastName}
            onChange={handleChange}
            />
          <InputApp
            Icon={FaUserCircle}
            label="correo"
            inputId="input-user-name"
            type="email"
            placeHolder="e.g. caralbte85"
            name='email'
            value={newUserData.email}
            onChange={handleChange}
            />
          <InputApp
            Icon={FaLock}
            label="Contraseña"
            inputId="input-password"
            type="text"
            placeHolder="**********"
            name='password'
            value={newUserData.password}
            onChange={handleChange}
            />
          <InputApp
            Icon={FaLock}
            label="Repite la Contraseña"
            inputId="input-confirm-password"
            type="text"
            placeHolder="**********"
            className=''
            name='confirmPassword'
            value={newUserData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <DialogFooterSave 
          id='new-user'
          error={errorMessage}
          saveClick={handleSubmit}
        />

      </DialogContent>

    </CenterDialog>
  )
}
