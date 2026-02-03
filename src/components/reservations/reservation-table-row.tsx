import { formatDate, genRandomColor } from '@/lib'
import { FaPhoneAlt, FaUser, FaUserCheck, FaUserPlus } from 'react-icons/fa'
import { TableRow } from '../general'


interface Props {
  name: string
  phone: number
  persons: number
  rooms: number[]
  start: Date
  end: Date
  price?: number
  active?: boolean
}

export const ReservationsTableRow = ({name,persons,phone,rooms,start,end, active, price}:Props) => {
  const [startDate,startTime] = formatDate(start)
  const [endDate,endTime] = formatDate(end)
  const color = genRandomColor()
  
  return (
    <TableRow>

      <div className='w-[35%] md:w-[35%] pr-2  flex gap-2 '>
        <div className='rounded-full text-2xl font-bold w-16 h-12 md:flex items-center justify-center hidden mr-2'  
          style={{backgroundColor: `${color}10`,color: `${color}`}}>
          <p>{name[0]}</p>
        </div>

        <div>
          <p className='md:text-lg font-bold'>{name}</p>
          <div className='text-sm text-neutral-500 flex items-center gap-1'>
            <FaPhoneAlt className='text-sub-title ml-2'/> 
            <p>{phone}</p>
            <FaUser className='text-sub-title ml-2'/>
            <p>{persons}</p>
            <p className='hidden md:block'> personas</p>
          </div>
        </div>
      </div>

      <div className='w-[30%] md:w-[20%] flex flex-wrap gap-1 md:gap-3'>
        {rooms.map( (room,ix) => <p key={'room_item_'+ix+room} className='px-2 py-1 rounded-md bg-done-button-bg font-bold text-xs md:text-sm'>{room}</p>)}
      </div>

      <div className='w-[15%] md:w-[10%] '>
        <p className='text-sm md:text-base -mb-1 font-bold'>{startDate}</p>
        <p className='text-neutral-500 -mt-1 text-xs md:text-sm'>{startTime}</p>
      </div>

      <div className='hidden md:block md:w-[10%] '>
        <p className='text-sm md:text-base -mb-1 font-bold'>{endDate}</p>
        <p className='text-neutral-500 -mt-1 text-xs md:text-sm'>{endTime}</p>
      </div>


      <div className='hidden md:block md:w-[10%] text-center'>
        {price 
          ? <p className='text-money font-bold'>S/ ${price}.00</p> 
          : <p className='text-done-button-text italic'> Sin Adelanto </p>}
      </div>

      <div className='w-[20%] md:w-[15%] px-2 py-1 flex items-center justify-center'>
        {active 
          ? <button className='cursor-pointer flex items-center justify-center gap-2 rounded-lg px-2 md:px-4 py-1.5 bg-primary/90 text-white hover:opacity-80'>
              <FaUserPlus className='size-5 md:size-6' /> 
              <p className='hidden md:block text-lg'>Registrar</p>
            </button>
          : <div className='cursor-not-allowed flex items-center justify-center gap-2 rounded-lg px-2 md:px-3 py-1.5 bg-done-button-bg text-done-button-text'>
              <FaUserCheck className='size-5 md:size-6'/> 
              <p className='hidden md:block text-lg'>Registrado</p>
            </div>}
      </div>
    </TableRow>
  )
}
