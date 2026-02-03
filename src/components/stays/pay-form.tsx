import { FaAddressBook, FaBlackberry, FaCalendarAlt, FaCashRegister, FaCoins, FaFlag, FaPhone, FaUser, FaUserNinja, FaUserPlus } from 'react-icons/fa'
import { FaHouse } from 'react-icons/fa6'
import { CenterDialog, DialogContent, DialogFooterSave, DialogHeader, InputApp } from '../general'
import { GrTransaction } from 'react-icons/gr'

export const PayForm = () => {
  return (
    <CenterDialog id='form-pay-stay'>
      <DialogContent maxWRem={30}>
      
        <DialogHeader
          Icon={FaCashRegister}
          title='Registrar Pago'
          subTitle='Ingrese los datos para procesar el pago'
        />

        <div className='px-3 grid grid-cols-1 gap-3 md:gap-4'>
          
          <InputApp
            Icon={FaCoins}
            label="Monto"
            inputId="pay-register-cash"
            type="number"
            placeHolder="s/ 50"
          />
          
          <InputApp
            Icon={GrTransaction }
            label="Medio de Pago"
            inputId="pay-register-type-transaction"
            type="select"
            selectData={['Efectivo','Yape','Transferencia']}
          />

          <InputApp
            Icon={FaBlackberry}
            label="Numero de Operacion"
            inputId="pay-register-transaction-number"
            type="text"
            placeHolder="*****"
          />

          <InputApp
            Icon={FaCalendarAlt}
            label="Hasta cuando"
            inputId="pay-register-new-date-end"
            type="datetime-local"
          />
         
         
          <InputApp
            Icon={FaAddressBook}
            label="Quien hizo el pago"
            inputId="input-whos-pay"
            type="select"
            selectData={['Carlos C','Julio C','Alberto C']}
          />
          
         

        </div>


        <DialogFooterSave id={'form-pay-stay'}/>

      </DialogContent> 
    </CenterDialog>
    
  )
}
