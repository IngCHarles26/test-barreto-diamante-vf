import { CenterDialog, DialogContent, DialogFooterSave, DialogHeader, InputApp } from '../general'
import { FaCalendarCheck, FaCalendarTimes, FaPhoneAlt, FaUser } from 'react-icons/fa'
import { FaPeopleGroup } from 'react-icons/fa6'
import { MdOutlineMeetingRoom, MdRoomPreferences } from 'react-icons/md'


const habitaciones = [
  {
    type: 'Simple',
    rooms: [101,102,103]
  },
  {
    type: 'Matrimonial',
    rooms: [201,202,203,204,205,206,207]
  },
  {
    type: 'Doble',
    rooms: [301,302,304]
  },
  {
    type: 'Familiar',
    rooms: [401,402,403,404]
  },
]

export const ReservationForm = () => {


  return (
    <CenterDialog id='form-create-reservation'>
      <DialogContent maxWRem={50}>

        <DialogHeader
          Icon={MdRoomPreferences}
          title='Nueva Reservacion'
          subTitle='LLena toda la informacion para completar la reservacion'
        />

        <div className='px-3 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 items-center'>

          <InputApp
            Icon={FaUser}
            label="Ingrese el Cliente"
            inputId="input-client"
            type="text"
            placeHolder="Nombre del titular"
            className='col-span-2'
          />
          <InputApp
            Icon={FaPhoneAlt}
            label="Ingrese el Teléfono"
            inputId="input-phone"
            type="number"
            placeHolder="+51 *** *** ***"
          />
          <InputApp
            Icon={FaPeopleGroup }
            label="Numero de Personas"
            inputId="input-persons"
            type="number"
          />
          <InputApp
            Icon={FaCalendarCheck }
            label="Fecha y Hora de Llegada"
            inputId="input-dateIn"
            type="datetime-local"
          />
          <InputApp
            Icon={FaCalendarTimes}
            label="Fecha y Hora de Salida"
            inputId="input-dateOut"
            type="datetime-local"
          />

        </div>

        <div className='px-3 mt-1'>
          <p className='mb-1 text-sm font-bold'>Seleccciona las habitaciones</p>

          <div className='border rounded border-neutral-300'>

            <div className='flex bg-back-1 items-center border-b border-hover-back-1'>
              <p className='w-1/3 p-1 text-center'>Tipo</p>
              <p className='w-2/3 border-l border-neutral-300 p-1 text-center'>Habitaciones Disponibles</p>
            </div>

            {habitaciones.map( ({type,rooms}) => 
              <div key={'input_type_'+type} className='flex items-center'>
                <div className='w-1/3 border-hover-back-1 p-1 text-sm flex items-center justify-between '>
                  <p>{type}</p>
                  <div className='flex items-center'>
                    <p className='md:mb-0.5'>{rooms.length}</p>
                    <MdOutlineMeetingRoom className='size-4'/>
                  </div>
                </div>
                <div className='w-2/3 border-l border-hover-back-1 p-1.5 flex flex-wrap gap-2'>

                  {rooms.map( el => 
                      <div key={'chheckbox_'+el}>
                        <input id={'checkbox_'+el} type="checkbox" className="hidden peer" />
                        <label htmlFor={'checkbox_'+el}
                          className=" inline-flex items-center justify-center px-3 py-1  rounded-md border border-neutral-200 shadow cursor-pointer select-none transition-all duration-200 text-sm font-medium bg-white peer-checked:bg-details text-body peer-checked:text-white peer-checked:border-details peer-checked:shadow-inner hover:opacity-80">
                          {el}
                        </label>
                      </div>)
                  }
                </div>
              </div> )
            }

          </div>

        </div>

        <div className='px-3 mt-1'>
          <p className='mb-1 text-sm font-bold'>Observaciones</p>
          <textarea placeholder='Escribe aqui cualquier observacion .... ' className='w-full shadow rounded focus-within:ring-1 focus-within:ring-details outline-none border border-hover-back-1 resize-none h-20 p-1'/>
        </div>


        <DialogFooterSave id='form-create-reservation'/>
        
      </DialogContent>
    </CenterDialog>
  )
}
