import { CenterDialog, DialogContent, DialogFooterSave, DialogHeader, InputApp } from "../general"
import { MdAirlineSeatLegroomReduced, MdChair } from "react-icons/md"
import { IoIosBed } from "react-icons/io"
import { FaDoorOpen } from "react-icons/fa"

export const NewActive = () => {
  return (
    <CenterDialog id="form-create-active">
      <DialogContent maxWRem={25}>
        <DialogHeader
          Icon={MdChair}
          title="Nuevo Activo"
          subTitle="Ingresa la informacion del activo"
        />

        <div className='px-3 grid gap-3 md:gap-4 items-center'>
          <InputApp
            Icon={IoIosBed}
            label="Ingrese la descripcion del activo"
            inputId="new-input-active"
            type="text"
            placeHolder="Mesa marca Dorama"
          />
        </div>

        <div className='px-3 grid gap-3 md:gap-4 items-center'>
          <InputApp
            Icon={FaDoorOpen}
            label="Selecciona la habitacion"
            inputId="new-select-room"
            type="select"
            selectData={['101','102','103']}
          />
        </div>


        <DialogFooterSave id="form-create-active"/>
      </DialogContent>
    </CenterDialog>
  )
}
