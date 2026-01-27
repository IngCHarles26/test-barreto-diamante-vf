import { CenterDialog, DialogContent, DialogFooterSave, DialogHeader, InputApp } from "../general"
import { MdAirlineSeatLegroomReduced, MdChair } from "react-icons/md"
import { IoIosBed } from "react-icons/io"
import { FaBan, FaDoorOpen } from "react-icons/fa"

export const ConfigActive = () => {
  return (
    <CenterDialog id="form-edit-active">
      <DialogContent maxWRem={25}>
        <DialogHeader
          Icon={MdChair}
          title="Editar Activo"
          subTitle="Ingresa la nueva informacion del activo"
        />

        <div className='px-3 grid gap-3 grid-cols-2 md:gap-4 items-center '>

          <InputApp
            Icon={IoIosBed}
            label="Ingrese la descripcion del activo"
            inputId="new-input-active"
            type="text"
            placeHolder="Mesa marca Dorama"
            className="col-span-2"
          />
          <InputApp
            Icon={FaDoorOpen}
            label="Selecciona la habitacion"
            inputId="new-select-room"
            type="select"
            selectData={['101','102','103']}
          />
          <InputApp
            Icon={FaBan}
            label="Dar de baja"
            inputId="new-select-active"
            type="select"
            selectData={['NO','SI']}
          />
        </div>

        <DialogFooterSave id="form-edit-active"/>
      </DialogContent>
    </CenterDialog>
  )
}
