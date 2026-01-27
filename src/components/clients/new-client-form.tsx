import { FaAddressBook, FaBlackberry, FaCalendar, FaCalendarAlt, FaFlag, FaPhone, FaUser, FaUserNinja, FaUserPlus } from 'react-icons/fa'
import { FaHouse } from 'react-icons/fa6'
import { CenterDialog, DialogContent, DialogFooterSave, DialogHeader, InputApp } from '../general'

export const NewClientForm = () => {
  return (
    <CenterDialog id='form-new-client'>
      <DialogContent maxWRem={40}>
      
        <DialogHeader
          Icon={FaUserPlus}
          title='Nuevo Cliente'
          subTitle='Ingresa toda la informacion del cliente'

        />

        <div className='px-3 grid grid-cols-2 gap-3 md:gap-4'>
          
          <InputApp
            Icon={FaUser}
            label="Nombres"
            inputId="input-name"
            type="text"
            placeHolder="e.g. Carlos Alberto"
            className='col-span-2 md:col-span-1'
          />
          
          <InputApp
            Icon={FaUserNinja}
            label="Apellidos"
            inputId="input-last-name"
            type="text"
            placeHolder="e.g. Castillo Terrones"
            className='col-span-2 md:col-span-1'
          />
          
          <InputApp
            Icon={FaAddressBook}
            label="Tipo de Documento"
            inputId="input-type-document"
            type="select"
            selectData={['DNI','Pasaporte','Carnet']}
          />
          
          <InputApp
            Icon={FaBlackberry}
            label="Numero de Documento"
            inputId="input-document"
            type="text"
            placeHolder="**** *****"
          />
          
          <InputApp
            Icon={FaPhone}
            label="Telefono"
            inputId="input-phone-number"
            type="text"
            placeHolder="+51 *** *** ***"
          />
                    
          <InputApp
            Icon={FaFlag}
            label="Nacionalidad"
            inputId="input-type-document"
            type="select"
            selectData={['🇯🇵 Japon','🇪🇸 España','🇨🇴 Colombia']}
          />
                    
          <InputApp
            Icon={FaCalendarAlt}
            label="Fecha Nacimiento"
            inputId="input-birthday"
            type="date"
          />
                    
          <InputApp
            Icon={FaAddressBook}
            label="Genero"
            inputId="input-gender"
            type="select"
            selectData={['masculino','femenito','otros']}
          />
                    
          <InputApp
            Icon={FaHouse}
            label="Dirección"
            inputId="input-address"
            type="text"
            placeHolder='Cll. Lorem Ipsum'
            className='col-span-2'
          />

        </div>


        <DialogFooterSave id={'form-new-client'}/>

      </DialogContent> 
    </CenterDialog>
    
  )
}
