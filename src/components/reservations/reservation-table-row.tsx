'use client'

import { FaPhoneAlt, FaUser} from 'react-icons/fa'
import { TableRow } from '../general'
import { formatDate, penFormat, transformDate } from '@/lib/shared'
import { Reservation } from '@/generated/prisma/browser'
import { ReservationName } from './reservation-name'
import { DisableReservation } from './disable-reservation'

interface Props extends Reservation {
  user: { email: string }
}



export const ReservationsTableRow = ({id,name,persons,phone,date,amount,numberRooms,typeRooms,user}:Props) => {
  // const [nowDateCompare] = transformDate(new Date())
  const [startDate,startTime] = formatDate(date)
  const [rowDateCompare] = transformDate(date)
  const [nowDateCompare] = transformDate(new Date())

  const isToday = rowDateCompare === nowDateCompare

  return (
    <TableRow className={isToday && 'bg-primary/10'}>

      <div className='w-[35%] md:w-[25%] pr-2  flex gap-2'>

        <ReservationName name={name} /> 
 
        <div>
          <p className='md:text-lg font-bold'>{name}</p>
          <div className='text-sm text-neutral-500 flex items-center gap-1'>
            <FaUser className='text-sub-title ml-2'/>
            <p>{persons}</p>
            <p className='hidden md:block'> personas</p>
            {phone && <>
              <FaPhoneAlt className='text-sub-title ml-2'/> 
              <p>{phone}</p> 
            </>}
          </div>
        </div>

      </div>

      <div className='w-[30%] md:w-[30%] flex flex-wrap gap-1 md:gap-3'>
        {typeRooms.map( (room,ix) => 
          <p 
            key={'room_item_'+ix+room} 
            className='px-2 py-1 rounded-md bg-done-button-bg font-bold text-xs md:text-sm'
          >{numberRooms[ix]+' '+room.replaceAll('_',' ')}
          </p>)}
      </div>

      <div className='w-[15%] md:w-[10%] '>
        <p className='text-sm md:text-base -mb-1 font-bold'>{startDate}</p>
        <p className='text-neutral-500 -mt-1 text-xs md:text-sm'>{startTime}</p>
      </div>

      <div className='hidden md:block md:w-[10%] text-center'>
        <p className='text-money font-bold'>{penFormat(amount)}</p> 
      </div>

      <div className='hidden md:block md:w-[10%] text-center'>
        <p className='font-code font-bold'>{user.email.split('@')[0]}</p> 
      </div>

      <DisableReservation id={id}/>

    </TableRow>
  )
}

