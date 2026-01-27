import { CenterDialog, DialogContent, DialogFooterSave, DialogHeader, InputApp } from '../general'
import { FaLock, FaUser, FaUserCircle, FaUserNinja, FaUserPlus } from 'react-icons/fa'

export const NewUser = () => {
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
            className=''
          />
          <InputApp
            Icon={FaUserNinja}
            label="Apellidos"
            inputId="input-last-name"
            type="text"
            placeHolder="e.g. Castillo Terrones"
            className=''
          />
          <InputApp
            Icon={FaUserCircle}
            label="Nombre de Usuario"
            inputId="input-user-name"
            type="text"
            placeHolder="e.g. caralbte85"
            className=''
          />
          <InputApp
            Icon={FaLock}
            label="Contraseña"
            inputId="input-password"
            type="password"
            placeHolder="**********"
            className=''
          />
          <InputApp
            Icon={FaLock}
            label="Repite la Contraseña"
            inputId="input-confirm-password"
            type="password"
            placeHolder="**********"
            className=''
          />
        </div>

        <DialogFooterSave id='new-user'/>

      </DialogContent>

    </CenterDialog>
  )
}
