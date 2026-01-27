import { formatDate } from '@/lib'
import { FaUser, FaUserCheck, FaUserPlus } from 'react-icons/fa'
import { TableRow } from '../general'


interface Props {
  name: string
  phone: number
  persons: number
  rooms: number[]
  start: Date
  end: Date
  price: number
  active?: boolean
}

export const ReservationsTableRow = ({name,persons,phone,rooms,start,end, active, price}:Props) => {
  const [startDate,startTime] = formatDate(start)
  const [endDate,endTime] = formatDate(end)
  
  return (
    <TableRow>

      <div className='w-[40%] md:w-[35%] px-2 md:px-3 flex justify-between items-center'>
        <div>
          <p className='md:text-lg font-bold'>{name}</p>
          <p className='text-sm text-neutral-500'>{phone}</p>
        </div>

        <div className='flex justify-center items-center gap-1'>
          <p>{persons}</p>
          <FaUser className='text-neutral-600'/>
        </div>
      </div>

      <p className='w-[25%] md:w-[20%] text-center text-wrap'>{rooms.join(', ')}</p>

      <div className='w-[15%] md:w-[10%] text-center'>
        <p className='text-sm -mb-1'>{startDate}</p>
        <p className='text-neutral-500 scale-90 -mt-1'>{startTime}</p>
      </div>

      <div className='hidden md:block md:w-[10%] text-center'>
        <p className='text-sm -mb-1'>{endDate}</p>
        <p className='text-neutral-500 scale-90 -mt-1'>{endTime}</p>
      </div>


      <p className='hidden md:block md:w-[10%] text-center'>S/ {price}</p>

      <div className='w-[20%] md:w-[15%] px-2 py-1 flex items-center justify-center'>
        {active 
          ? <button className='cursor-pointer flex items-center justify-center gap-2 rounded-lg px-2 md:px-4 py-1.5 bg-green-app text-white hover:opacity-80'>
              <FaUserPlus /> 
              <p className='hidden md:block'>Registrar</p>
            </button>
          : <div className='cursor-not-allowed flex items-center justify-center gap-2 border  rounded-lg px-2 py-1.5 bg-sub-title text-back-white'>
              <FaUserCheck/> 
              <p className='hidden md:block'>Registrado</p>
            </div>}
      </div>
      
    </TableRow>
  )
}
