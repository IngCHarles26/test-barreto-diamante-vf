'use client'

import { CenterDialog, DialogContent, DialogFooterSave, DialogHeader, HeaderButton, InputApp } from '../general'
import { FaCalendarCheck, FaMoneyBill, FaPeopleArrows, FaPhoneAlt, FaPlus, FaUser } from 'react-icons/fa'
import { MdOutlineMeetingRoom, MdRoomPreferences } from 'react-icons/md'
import { ChangeEvent, useState } from 'react'
import { Reservation, TypeRoom } from '@/generated/prisma/browser'
import { SAcreateReservation } from '@/lib/server'
import { closeDialog, filterString, onlyString, oneSpace, onlyNumber, noSpace } from '@/lib/client'
import { useMessageStore } from '@/store'

const initialData = {
  name: '',
  date: '',
  phone: '9',
  persons: '',
  amount: '',
  Doble: '',
  Doble_Familiar: '',
  Matrimonial: '',
  Matrimonial_Simple: '',
  Personal: '',
  Triple_Familiar: '',
}

const dialogId = 'form-create-reservation'


export const ReservationForm = () => {
  const [reservationData, setReservationData] = useState(initialData);
  const [errorMessage, setErrorMessage] = useState('');
  const {stSetLoadingMsg,stSetStaticMsg} = useMessageStore()
  

  const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    stSetStaticMsg('')
    
    const name = e.target.name as keyof typeof reservationData
    const value = e.target.value

    let newValue = value

    if(name === 'name') 
      newValue = filterString(newValue,{oneSpace,onlyString,maxLimit:20});

    if(name === 'phone') 
      newValue = filterString(newValue,{onlyNumber,noSpace,maxLimit:9});

    if(name === 'amount') 
      newValue = filterString(newValue,{onlyNumber,noSpace,maxLimit:3});

    if(name === 'persons') 
      newValue = filterString(newValue,{onlyNumber,noSpace,maxLimit:2});

    setReservationData( prev => ({ ...prev, [name]:newValue }))
  }

  const handleClick = async () => {
    const {name,date,phone,persons,amount,...rooms} = reservationData
    
    const ans = {} as Omit<Reservation,'id' | 'active' | 'userId'>

    if( !name ) return stSetStaticMsg('El Nombre no puede estar vacio');
    if( name.length < 3) return stSetStaticMsg('El nombre es muy pequeño')
    ans.name = name

    if( !date ) return stSetStaticMsg('Debes ingresar la fecha completa');

    const reservDate = new Date(date) 
    const nowDate = new Date()
    if( reservDate < nowDate ) return stSetStaticMsg('La fecha ingresada es anterior a la de hoy');
    
    const diff = (+reservDate - +nowDate)/86400000
    if( diff > 30 ) return stSetStaticMsg('La fecha de reservacion no debe superar los 30 dias desde hoy');
    ans.date = nowDate

    if( phone !== '' && phone.length !==9 ) return stSetStaticMsg('Debes ingresar un telefono de 9 digitos');
    ans.phone = phone

    if( !persons ) return stSetStaticMsg('Debes ingresar la cantidad de personas');
    ans.persons = +persons

    if( !amount ) return stSetStaticMsg('Debes ingresar el monto en soles');
    ans.amount = +amount

    const typeRooms:TypeRoom[] = [] 
    const numberRooms:number[] = []
    let anyFilled = false
    for(let [type,number] of Object.entries(rooms)){
      if( number ){
        anyFilled = true
        numberRooms.push(+number)
        typeRooms.push(type as TypeRoom)
      }
    }
    if( !anyFilled ) return setErrorMessage('Debes seleccionar al menos una habitacion');
    ans.typeRooms = typeRooms
    ans.numberRooms = numberRooms

    closeDialog(dialogId)
    stSetLoadingMsg('Creando')
    
    const success = await SAcreateReservation(ans)
    if(success) setReservationData(initialData)
    const message = success ? 'Reservacion creada con exito' : 'No se pudo crear la reservacion'
    stSetStaticMsg(message,success)
  }
  
  
  return (
    <>
      <HeaderButton 
        target={dialogId} 
        Icon={FaPlus} 
        textMobile="Nueva" 
        textDesktop="Reservacion" 
      />
    
      <CenterDialog id={dialogId}>
        <DialogContent maxWRem={50}>

          <DialogHeader
            Icon={MdRoomPreferences}
            title='Nueva Reservacion'
            subTitle='LLena toda la informacion para completar la reservacion (* obligatorio)'
            />

          <div className='px-3 grid grid-cols-2 md:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] gap-3 md:gap-4 items-center'>

            <InputApp
              Icon={FaUser}
              label="Nombre*"
              inputId="input-client"
              type="text"
              placeHolder="Nombre del titular"
              className='col-span-3'
              name='name'
              value={reservationData.name}
              onChange={handleChange}
              />
            <InputApp
              Icon={FaCalendarCheck }
              className='col-span-3'
              label="Llegada* (formato 24h)"
              inputId="input-dateIn"
              type="datetime-local"
              name='date'
              value={reservationData.date}
              onChange={handleChange}
              />
            <InputApp
              Icon={FaPhoneAlt}
              className='col-span-2'
              label="Número de contacto"
              inputId="input-phone"
              type="text"
              placeHolder="+51 *** *** ***"
              name='phone'
              value={reservationData.phone}
              onChange={handleChange}
              />
            <InputApp
              Icon={FaPeopleArrows}
              className='col-span-2'
              label="Cantidad de Personas*"
              inputId="input-persons"
              type="text"
              name='persons'
              value={reservationData.persons}
              onChange={handleChange}
              />
            <InputApp
              Icon={FaMoneyBill}
              className='col-span-2'
              label="Soles*"
              inputId="input-dateOut"
              type="text"
              name='amount'
              value={reservationData.amount}
              onChange={handleChange}
            />

          </div>

          <div className='px-3 mt-3'>
            <p className='mb-1 text-sm font-bold'>Seleccciona las habitaciones*</p>

            <div className='grid grid-cols-3 gap-3'>
              <InputApp
                Icon={MdOutlineMeetingRoom}
                label="Doble"
                inputId="input-dateOut"
                type="select"
                name='Doble'
                value={reservationData.Doble}
                onChange={handleChange}
                selectData={[1,2,3,4]}
              />

              <InputApp
                Icon={MdOutlineMeetingRoom}
                label="Doble Familiar"
                inputId="input-dateOut"
                type="select"
                name='Doble_Familiar'
                value={reservationData.Doble_Familiar}
                onChange={handleChange}
                selectData={[1,2]}
              />

              <InputApp
                Icon={MdOutlineMeetingRoom}
                label="Matrimonial"
                inputId="input-dateOut"
                type="select"
                name='Matrimonial'
                value={reservationData.Matrimonial}
                onChange={handleChange}
                selectData={[1,2,3,4,5,6,7]}
              />

              <InputApp
                Icon={MdOutlineMeetingRoom}
                label="Matrimonial Simple"
                inputId="input-dateOut"
                type="select"
                name='Matrimonial_Simple'
                value={reservationData.Matrimonial_Simple}
                onChange={handleChange}
                selectData={[1,2,3]}
              />

              <InputApp
                Icon={MdOutlineMeetingRoom}
                label="Personal"
                inputId="input-dateOut"
                type="select"
                name='Personal'
                value={reservationData.Personal}
                onChange={handleChange}
                selectData={[1,2,3,4,5,6]}
              />

              <InputApp
                Icon={MdOutlineMeetingRoom}
                label="Triple Familiar"
                inputId="input-dateOut"
                type="select"
                name='Triple_Familiar'
                value={reservationData.Triple_Familiar}
                onChange={handleChange}
                selectData={[1,2,3]}
              />
            </div>

          </div>

          <DialogFooterSave 
            id={dialogId}
            saveClick={handleClick}
          />
          
        </DialogContent>
      </CenterDialog>
    </>
  )
}
