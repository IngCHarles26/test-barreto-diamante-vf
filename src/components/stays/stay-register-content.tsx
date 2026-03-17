'use client'

import { Room } from '@/generated/prisma/browser'
import { CloseStayForm } from './close-stay-form'
import { NewStayForm } from './new-stay-form'
import { useStayStore } from '@/store'
import { FaDoorClosed, FaWallet } from 'react-icons/fa'
import { transformDate } from '@/lib/shared'
import { RoomStayTableRow } from './room-stay-table-row'
import { PiCashRegisterFill } from 'react-icons/pi'
import { PayForm } from './pay-form'
import { genVisualDate, penFormat } from '../../lib/shared/date-helpers';



interface Props {
  rooms: Room[]
}

export const StayRegisterContent = ({ rooms }:Props) => {

  const {currentRoom, stayData} = useStayStore()
  const currentData = stayData[currentRoom]
  
  if(currentRoom === 0) return (
    <div className='w-full h-auto flex items-center justify-center'>
      <p className='text-primary font-bold uppercase animate-pulse'>
        Selecciona una habitacion
      </p>
    </div>
  )
  
  if(!currentData || !currentData.dateStart ) return <NewStayForm rooms={rooms}/>
  const {carPlate,clientInStay,dateStart,origin,reason,id,pays} = currentData

  const [newDateStart,newTimeStart] = genVisualDate(dateStart)

  console.log(pays)

  return (
    <div className=" w-full flex flex-col gap-2">
      
      {/*_________________________________________ GENERALES */}

      <div className="w-full flex px-3 md:px-5 py-2 items-center bg-white-01 rounded-t-2xl">
        <div className="font-bold text-lg md:text-xl 2xl:text-2xl text-gray-05 flex items-center gap-2 py-2 w-full uppercase">
          <FaDoorClosed className='size-7'/> 
          <p>Datos de Registro {currentRoom}</p>
        </div>

        <CloseStayForm stayId={id} pays={pays} room={currentRoom}/>
      </div>

      <div className='px-3 w-full grid grid-cols-3 gap-5 mt-4'>
        <div> 
          <p className='text-gray-03 font-bold uppercase'>Fecha </p>
          <p className='text-gray-02 text-xl'>{newDateStart}</p>
        </div>
        <div> 
          <p className='text-gray-03 font-bold uppercase'>HORA </p>
          <p className='text-gray-02 text-xl'>{newTimeStart}</p>
        </div>
        <div> 
          <p className='text-gray-03 font-bold uppercase'>Ciudad Origen</p>
          <p className='text-gray-02 text-xl'>{origin}</p>
        </div>
        <div> 
          <p className='text-gray-03 font-bold uppercase'>Motivo</p>
          <p className='text-gray-02 text-xl'>{reason}</p>
        </div>
        <div> 
          <p className='text-gray-03 font-bold uppercase'>Placa Vehiculo</p>
          <p className='text-gray-02 text-xl'>{carPlate || '---'}</p>
        </div>
        <div> 
          <p className='text-gray-03 font-bold uppercase'>Creado Por</p>
          <p className='text-gray-02 text-xl'>{currentData.user.email.split('@')[0]}</p>
        </div>
      </div>
      
      {/*_________________________________________ CLIENTES */}

      <div className="flex flex-col gap-2 mt-6">

        <div className="flex items-center font-extrabold text-base md:text-lg border-b pb-2 border-border-sidebar px-4 text-done-button-text gap-2 uppercase">
          <p className="w-[17%]">Edad</p>
          <p className="w-[43%]">Nombres y APellidos</p>
          <p className="w-[25%]">TIPO</p>
          <p className="w-[15%]">Documento</p>
        </div>

        {clientInStay.map((el) => 
          <RoomStayTableRow 
            key={'row-table-client-data-stay'+el.client.numberDocument} 
            {...el}
            stayId={id}
          />
        )}

      </div>

      {/*_________________________________________ PAGOS */}
      <div className="w-full rounded overflow-hidden mt-5">
                
        <div className="w-full bg-white-01 text-gray-05 flex px-3 md:px-5 py-2 items-center justify-between rounded-t-2xl">
          <div className="flex items-center gap-2 uppercase">
            <PiCashRegisterFill  className="size-7"/>
            <p className="font-bold text-lg md:text-xl 2xl:text-2xl ">Pagos</p>
          </div>

          
          <PayForm currentData={currentData}/>
              
        </div>
  
        <div className="flex flex-col flex-wrap gap-2 mt-2 w-full">
          <div className="flex items-center font-extrabold text-base md:text-lg border-b pb-2 border-border-sidebar px-4 text-done-button-text gap-2 uppercase">
            <p className="w-[40%]">Desde</p>
            <p className="w-[40%]">Hasta</p>
            <p className="w-[20%] text-center">Total</p>
          </div>

          {pays.map(({endDayDate,mount,startDayDate},ix) => {

            const [startDatePay,startTimePay] = genVisualDate(startDayDate || new Date())
            const [endDatePay,endTimePay] = genVisualDate(endDayDate || new Date())
            
            return (
            <div 
              className="w-full items-center flex px-4 text-gray-05 ="
              key={'pay-row-info'+ix}
            >
              <p className="w-[40%]"> 
                <span className='font-bold text-2xl'>{startDatePay}</span>&nbsp;
                <span className='text-lg'>{startTimePay}</span>
              </p>
              <p className="w-[40%]"> 
                <span className='font-bold text-2xl'>{endDatePay}</span> &nbsp;
                <span className=''>{endTimePay}</span>
              </p>
              <p className='w-[20%] text-right'>{penFormat(mount)}</p>
            </div>)
          })} 
          
        </div>
  
      </div>
      
    </div>
  )
}
