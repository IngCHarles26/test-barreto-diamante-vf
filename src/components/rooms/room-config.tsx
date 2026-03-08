'use client'

import { MdOutlineRoomPreferences } from "react-icons/md"
import { CenterDialog, DialogContent, DialogFooterSave, DialogHeader, InputApp } from "../general"
import { FaDoorClosed, FaMoneyBill } from "react-icons/fa"
import { IoMdSettings } from "react-icons/io"
import { roomTypesList } from "@/lib/shared"
import { ChangeEvent, useState } from "react"
import { TypeRoom } from "@/generated/prisma/enums"
import { closeDialog } from "@/lib/client"
import { ActionConfigRoomInfo } from "@/lib/server"

interface Props {
  room: number
  dialogId: string
  type: TypeRoom
  price:number
}


export const RoomConfig = ({room,dialogId,type,price}:Props) => {

  const [roomData, setRoomData] = useState({type,price});
  const [errorMessage, setErrorMessage] = useState('');

  
  const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const name = e.target.name as keyof typeof roomData
    const value = e.target.value

    setErrorMessage('')
    setRoomData({...roomData, [name]:value})
  }
  
  const handleClick = async () => {
    const {type:newType,price} = roomData

    if(!price) return setErrorMessage('El precio no puede estar vacío o ser 0')

    setErrorMessage('Cargando')

    const data = {
      type: newType.replaceAll(' ','_') as TypeRoom,
      price: +price,
    }

    await ActionConfigRoomInfo(room,data)
    closeDialog(dialogId)
  }
  
  return (
    <>
      <div className='w-[10%] text-center'>
        <button popoverTarget={dialogId} className='cursor-pointer rounded-md p-1 text-primary hover:opacity-80'>
          <IoMdSettings className="mx-auto size-6 md:size-7 " /> 
        </button> 
      </div>
    
      <CenterDialog id={dialogId}>
        <DialogContent maxWRem={35}>
          
          <DialogHeader
            Icon={MdOutlineRoomPreferences }
            title='Configuracion de Habitacion'
            subTitle="Solo se guardaran los cambios realizados">

            <p className="text-3xl text-back-header font-bold">{room}</p>
          </DialogHeader>

          <div className='px-3 grid grid-cols-2 gap-3 md:gap-4 items-center'>

            <InputApp
              Icon={FaDoorClosed}
              label="Tipo de Habitacion"
              inputId="input-type-room"
              type="select"
              selectData={roomTypesList.map(el => el.replaceAll('_',' '))}
              name="type"
              value={roomData.type}
              onChange={handleChange}
              />

            <InputApp
              Icon={FaMoneyBill}
              label="Precio Referencial"
              inputId="input-price"
              type="number"
              placeHolder="S/ 50.01"
              name="price"
              value={roomData.price}
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
