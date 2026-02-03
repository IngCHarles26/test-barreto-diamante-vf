import React from 'react'
import { InputApp } from '../general'
import { FaCalendar, FaCar, FaClipboardList, FaMapMarkerAlt, FaWallet } from 'react-icons/fa'
import { FaMountainSun } from 'react-icons/fa6'

export const NewStayForm = () => {
  return (
    <div className="shadow w-full rounded-xl">
      <div className="w-full bg-bg-sidebar flex px-3 md:px-5 py-2 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-primary/10  px-3 py-2 rounded-xl">
            <FaClipboardList className="text-primary size-8"/>
          </div>
          <p className="font-bold text-xl md:text-2xl text-body">Datos Generales</p>
        </div>
        <p className="text-2xl font-bold text-title-table bg-border-sidebar rounded-xl px-3 py-2">101</p>
      </div>
    
      <div className="p-3 md:p-5 grid grid-cols-2 md:grid-cols-3 gap-2">
        <InputApp
          Icon={FaCalendar}
          inputId="stay_start_time"
          type="datetime-local"
          label="Fecha de Llegada"
        />
        <InputApp
          Icon={FaCalendar}
          inputId="stay_start_time"
          type="datetime-local"
          label="Fecha de Salida"
        />
        <InputApp
          Icon={FaMountainSun }
          inputId="stay_reason"
          type="select"
          label="Motivo"
          selectData={['Trabajo','Turismo']}
        />
        <InputApp
          Icon={FaWallet}
          inputId="stay_price"
          type="number"
          label="Precio"
        />
        <InputApp
          Icon={FaMapMarkerAlt}
          label="Ciudad Origen"
          inputId="stay_origin"
          type="select"
          selectData={['Cuzco, PE','Arequipa, PE','Santiago, CH']}
        />
        <InputApp
          Icon={FaCar}
          label="Placa del Vehiculo"
          inputId="stay_car"
          type="text"
          placeHolder="***-***"
        />

      </div>
    </div>
  )
}
