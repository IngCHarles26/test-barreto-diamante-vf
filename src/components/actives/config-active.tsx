import { CenterDialog, DialogContent, DialogFooterSave, DialogHeader, InputApp } from "../general"
import { MdChair } from "react-icons/md"
import { IoIosBed } from "react-icons/io"
import { FaBan, FaDoorOpen } from "react-icons/fa"

interface Props {
  id: string
  room: number
  description: string
}

export const ConfigActive = ({id,room,description}:Props) => {
  return (
    <CenterDialog id={"form-edit-active"+id}>
      <DialogContent maxWRem={25}>
        <DialogHeader
          Icon={MdChair}
          title="Editar Activo"
          subTitle="Ingresa la nueva informacion del activo"
        />
        <div className='px-3 grid gap-3 md:gap-4 items-center '>
          <InputApp
            Icon={IoIosBed}
            label="Ingrese la descripcion del activo"
            inputId="new-input-active"
            type="text"
            value={description}
            placeHolder="Mesa marca Dorama"
          />
          <InputApp
            Icon={FaDoorOpen}
            label="Selecciona la habitacion"
            inputId="new-select-room"
            type="select"
            value={room.toString()}
            selectData={['101','102','103']}
          />
        </div>

        <DialogFooterSave id={"form-edit-active"+id}/>
      </DialogContent>
    </CenterDialog>
  )
}
