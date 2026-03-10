'use client'

import { CenterDialog, DialogContent, DialogFooterSave, DialogHeader, InputApp } from "../general"
import { MdChair } from "react-icons/md"
import { IoIosBed } from "react-icons/io"
import { FaDoorOpen } from "react-icons/fa"
import { ChangeEvent, useState } from "react"
import { ActionCreateRoomActive } from "@/lib/server/action-rooms"
import { closeDialog } from "@/lib/client"

interface Props{
  rooms:number[]
}
const initialData = {
    description: '',
    room: '',
  }


export const NewActive = ( {rooms}:Props ) => {
  const dialogId = 'form-create-active'
  const [errorMessage, setErrorMessage] = useState('');
  const [newRoomActive, setNewRoomActive] = useState(initialData);


  const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const name = e.target.name as keyof typeof newRoomActive
    const value = e.target.value
    
    setErrorMessage('')
    setNewRoomActive(prev => ({...prev,[name]:value}))
  }
  

  const handleCLick = async () => {
    const { description,room } = newRoomActive

    if(description.length < 20) return setErrorMessage('La descripcion del articulo es muy pequeña');

    setErrorMessage('cargando...')

    await ActionCreateRoomActive(description.replace(/\s+/g, ' '),room)
    
    setErrorMessage('')
    closeDialog(dialogId)
    setNewRoomActive(initialData)
  }
  
  
  return (
    <CenterDialog id={dialogId}>
      <DialogContent maxWRem={45}>
        <DialogHeader
          Icon={MdChair}
          title="Nuevo Activo"
          subTitle="Ingresa la informacion del activo"
        />

        <div className='px-3 grid grid-cols-[5fr_2fr] gap-3 md:gap-4 items-center'>
          <InputApp
            Icon={IoIosBed}
            label="Ingrese la descripcion del activo"
            inputId="new-input-active"
            type="text"
            placeHolder="Mesa marca Dorama"
            name="description"
            value={newRoomActive.description}
            onChange={handleChange}
          />

          <InputApp
            Icon={FaDoorOpen}
            label="Selecciona la habitacion"
            inputId="new-select-room"
            type="select"
            selectData={rooms}
            name="room"
            value={newRoomActive.room}
            onChange={handleChange}
          />
        </div>


        <DialogFooterSave 
          id={dialogId}
          error={errorMessage}
          saveClick={handleCLick}
        />
      </DialogContent>
    </CenterDialog>
  )
}
