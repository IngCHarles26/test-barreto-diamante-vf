'use client'

import { CenterDialog, DialogContent, DialogFooterSave, DialogHeader, InputApp } from "../general"
import { MdChair } from "react-icons/md"
import { IoIosBed, IoMdSettings } from "react-icons/io"
import { FaBan, FaDoorOpen } from "react-icons/fa"
import { ChangeEvent, useState } from "react"
import { ActionEditInfoRoomActive } from "@/lib/server"
import { closeDialog } from "@/lib/client"

interface Props {
  id: number
  room: number
  description: string
  rooms: number[]
}



export const ConfigActive = ({id,room,description,rooms}:Props) => {

  const dialogId = "form-edit-active"+id
  const [initialRoom,initialDescription] = [room,description]
  const [newData, setNewData] = useState({room,description});
  const [errorMessage, setErrorMessage] = useState('');

  
  const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const name = e.target.name as keyof typeof newData
    const value = e.target.value

    setErrorMessage('')
    setNewData(prev => ({...prev, [name]:value}))
  }
  
  const handleClick = async () => {
    const {room,description} = newData

    if(!room || !description) return setErrorMessage('Los campos no pueden estar vacios');
    if(room === initialRoom && description === initialDescription) return closeDialog(dialogId);
    setErrorMessage('cargando...')
    
    await ActionEditInfoRoomActive(description,+room,id)
    closeDialog(dialogId)
    setErrorMessage('')
  }

  return (
    <>
      <div className='w-[7.5%] text-center'>
        <button popoverTarget={dialogId} className='cursor-pointer rounded-md p-1 text-primary hover:opacity-80'>
          <IoMdSettings className="mx-auto size-6 md:size-7 " /> 
        </button> 
      </div>
      <CenterDialog id={dialogId}>
        <DialogContent maxWRem={45}>

          <DialogHeader
            Icon={MdChair}
            title="Editar Activo"
            subTitle="Ingresa la nueva informacion del activo"
          />

          <div className='px-3 grid grid-cols-1 md:grid-cols-[5fr_2fr] gap-3 md:gap-4 items-center '>
            <InputApp
              Icon={IoIosBed}
              label="Ingrese la descripcion del activo"
              inputId="new-input-active"
              type="text"
              placeHolder="Mesa marca Dorama"
              name="description"
              value={newData.description}
              onChange={handleChange}
              />
            <InputApp
              Icon={FaDoorOpen}
              label="Selecciona la habitacion"
              inputId="new-select-room"
              type="select"
              selectData={rooms}
              name="room"
              value={newData.room}
              onChange={handleChange}
            />
          </div>

          <DialogFooterSave 
            id={dialogId}
            error={errorMessage}
            saveClick={handleClick}
          />

        </DialogContent>
      </CenterDialog>
    </>
  )
}
