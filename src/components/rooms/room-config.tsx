import { MdOutlineRoomPreferences } from "react-icons/md"
import { CenterDialog, DialogContent, DialogFooterSave, DialogHeader, InputApp } from "../general"
import { FaDoorClosed, FaLevelUpAlt, FaMoneyBill, FaSmile } from "react-icons/fa"

export const RoomConfig = () => {
  return (
    <CenterDialog id="detail-room">
      <DialogContent maxWRem={35}>
        
        <DialogHeader
          Icon={MdOutlineRoomPreferences }
          title='Configuracion de Habitacion'
          subTitle="Solo se guardaran los cambios realizados">

          <p className="text-3xl text-back-header font-bold">101</p>
        </DialogHeader>

        <div className='px-3 grid grid-cols-2 gap-3 md:gap-4 items-center'>

          <InputApp
            Icon={FaDoorClosed}
            label="Tipo de Habitacion"
            inputId="input-type-room"
            type="select"
            selectData={['Matrimonial','Simple','Familiar']}
          />

          <InputApp
            Icon={FaMoneyBill}
            label="Precio"
            inputId="input-price"
            type="number"
            placeHolder="S/ 50.01"
          />

          <InputApp
            Icon={FaLevelUpAlt}
            label="Numero de Piso"
            inputId="input-floor"
            type="select"
            selectData={['1','2','3']}
          />

          <InputApp
            Icon={FaSmile}
            label="Estado"
            inputId="input-status"
            type="select"
            selectData={['Activo','Inactivo']}
          />
          
        </div>
        

        <DialogFooterSave id="detail-room"/>

      </DialogContent>
    </CenterDialog>
  )
}
