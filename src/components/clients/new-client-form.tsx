'use client'

import { FaAddressBook, FaBlackberry, FaCalendarAlt, FaFlag, FaPhone, FaUser, FaUserNinja, FaUserPlus } from 'react-icons/fa'
import { FaHouse } from 'react-icons/fa6'
import { CenterDialog, DialogContent, DialogFooterSave, DialogHeader, InputApp } from '../general'
import { TypeDocuments } from '@/generated/prisma/enums'
import { Country } from '@/generated/prisma/client'
import { closeDialog, openDialog } from '@/lib/client'
import { ChangeEvent, useState } from 'react'
import { ActionCreateClient } from '@/lib/server'
import { dialogCountry } from './new-country-form'


const initialData = {
  firstName: '',
  lastName: '',
  typeDocument: 'DNI', // no mover
  numberDocument: '',
  phone: '',
  country: '',
  born: '',
  address: ''
}

interface Props {
  countries: Country[]
}

export const dialogClient = 'form-new-client'


export const NewClientForm = ({countries}:Props) => {

  const [newClientData, setNewClientData] = useState(initialData);
  const [errorMessage, setErrorMessage] = useState('');


  const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

    setErrorMessage('')
    
    const name = e.target.name as keyof typeof newClientData
    const value = e.target.value

    let newValue:string = value

    if(name === 'address') newValue = value.replace(/\s+/g, ' ');
    
    if(name === 'phone') {
      newValue = value.replace(/[^0-9\s]/g,'').trim();
      if(newValue.length<9) setErrorMessage(`El telefono debe ser de al menos 9 digitos`);
    }

    if(name === 'firstName' || name === 'lastName'){
      newValue = value.replace(/[^a-zA-ZñÑ\s]/g,'').replace(/\s+/g, ' ')
      const nameSpanish = name === 'firstName' ? 'nombre(s)' : 'apellido(s)'
      if(newValue.length<3) setErrorMessage(`El/Los ${nameSpanish} tiene que tener mas de 2 caracteres`);
    }
    
    if(name === 'numberDocument'){
      const typeDoc = newClientData.typeDocument
      newValue = value.replace(/[^0-9a-zA-Z\s]/g,'').trim()
      const lenValue = newValue.length

      if( typeDoc === 'Otros' && lenValue < 6) setErrorMessage('EL Documento debe tener al menos 6 caracteres');
      
      if(typeDoc === 'DNI') {
        newValue = value.replace(/[^0-9\s]/g,'').trim()
        if(newValue.length !== 8)  setErrorMessage('EL DNI debe tener 8 numeros');
      }

      if( typeDoc === 'Carnet Extranjeria') {
        if( lenValue < 9 ) setErrorMessage('EL Carnet de Extranjeria debe tener al menos 9 caracteres');
        if( lenValue > 12 ) setErrorMessage('EL Carnet de Extranjeria debe tener maximo 12 caracteres');
      }

      if( typeDoc === 'Pasaporte') {
        if( lenValue < 6 ) setErrorMessage('EL Pasaporte debe tener al menos 6 caracteres');
        if( lenValue > 15 ) setErrorMessage('EL Pasaporte debe tener maximo 15 caracteres');
      }
    }

    setNewClientData( prev => ({ ...prev, [name]:newValue }))
  }

  const handleClick = async () => {
    const {born,country,firstName,lastName,typeDocument,numberDocument,phone,address} = newClientData

    console.log( {born,country,firstName,lastName,typeDocument,numberDocument,phone,address})

    if(errorMessage) return;

    if(!born && !country && !firstName && !lastName && !typeDocument && !numberDocument) return setErrorMessage('Debe ingresar todos los campos');

    if( (phone !== '') && (phone.length < 9) ) return setErrorMessage('El telefono debe ser de al menos 9 caracteres');

    if( firstName.length < 3 || lastName.length < 3 ) return setErrorMessage('El Nombre/Apellido debe de ser de mas de 2 caracteres');

    if( numberDocument.length < 6 ) return setErrorMessage('El Documento debe de ser de mas de 6 caracteres');

    const [countryId] = country.split("  ")
    const bornDate = new Date(born)

    const typeDoc = typeDocument as TypeDocuments
    
    setErrorMessage('cargando')

    const result = await ActionCreateClient({
      numberDocument,countryId,address,phone,
      typeDocument:typeDoc,
      firstName:firstName.toLowerCase(), 
      lastName:lastName.toLowerCase(),
      born: bornDate
    })

    if(!result) return setErrorMessage('El cliente ya se encuentra registrado');

    setErrorMessage('')
    setNewClientData(initialData)
    closeDialog(dialogClient)
  }
  
  return (
    <CenterDialog id={dialogClient}>
      <DialogContent maxWRem={40}>
      
        <DialogHeader
          Icon={FaUserPlus}
          title='Nuevo Cliente'
          subTitle='Ingresa toda la informacion del cliente ( * es obligatorio )'
        />

        <div className='px-3 grid grid-cols-2 gap-3 md:gap-4'>

          <InputApp
            Icon={FaBlackberry}
            label="Numero de Documento *"
            inputId="input-document"
            type="text"
            placeHolder="*********"
            name='numberDocument'
            value={newClientData.numberDocument}
            onChange={handleChange}
          />
          
          <InputApp
            Icon={FaAddressBook}
            label="Tipo de Documento *"
            inputId="input-type-document"
            type="select"
            selectData={Object.values(TypeDocuments).map(el => el.replaceAll('_',' '))}
            name='typeDocument'
            value={newClientData.typeDocument}
            onChange={handleChange}
          />
          

          <InputApp
            Icon={FaUser}
            label="Nombres *"
            inputId="input-name"
            type="text"
            placeHolder="e.g. Carlos Alberto"
            className='col-span-2 md:col-span-1'
            name='firstName'
            value={newClientData.firstName}
            onChange={handleChange}
            />
          
          <InputApp
            Icon={FaUserNinja}
            label="Apellidos *"
            inputId="input-last-name"
            type="text"
            placeHolder="e.g. Castillo Terrones"
            className='col-span-2 md:col-span-1'
            name='lastName'
            value={newClientData.lastName}
            onChange={handleChange}
            />
          
          
          <InputApp
            Icon={FaPhone}
            label="Telefono"
            inputId="input-phone-number"
            type="text"
            placeHolder="+51 *** *** ***"
            name='phone'
            value={newClientData.phone}
            onChange={handleChange}
            />

          <InputApp
            Icon={FaCalendarAlt}
            label="Fecha Nacimiento *"
            inputId="input-birthday"
            type="date"
            name='born'
            value={newClientData.born}
            onChange={handleChange}
            />
                    
          <InputApp
            Icon={FaFlag}
            label="Nacionalidad *"
            inputId="input-type-document"
            type="select"
            className='col-span'
            selectData={countries.map( ({flag,id,name}) => `${id}  ${flag}  ${name}`)}
            name='country'
            value={newClientData.country}
            onChange={handleChange}
            />

          <div className='flex items-end justify-center'>
            <button 
              className='py-2 w-full  rounded bg-primary/70 text-white font-bold hover:underline tracking-widest'
              onClick={() => { closeDialog(dialogClient); openDialog(dialogCountry) }}
              >
              ¿El pais no está?
            </button>
          </div>
                    
          <InputApp
            Icon={FaHouse}
            label="Dirección"
            inputId="input-address"
            type="text"
            placeHolder='Cll. Lorem Ipsum'
            className='col-span-2'
            name='address'
            value={newClientData.address}
            onChange={handleChange}
          />

        </div>

        <DialogFooterSave 
          id={dialogClient}
          error={errorMessage}
          saveClick={handleClick}
        />

      </DialogContent> 
    </CenterDialog>
    
  )
}
