import { formatDate } from '@/lib'
import { TableRow } from '../general'
import { FaEye, FaStar, FaWalking } from 'react-icons/fa'

export interface HistoryRow {
  names: [string,string][]
  room: number
  start: Date
  end: Date
  price: number
  user: string
  stars: number
}

export const StaysTableRow = ({names,room,stars,start,end,price,user}:HistoryRow) => {
  const [startDate,startTime] = formatDate(start)
  const [endDate,endTime] = formatDate(end)
  return (
    <TableRow>

      <div className='w-[40%] md:w-[25%]'>
        {
          names.map( ([name,flag],ix) =>  
            <p key={'name_row_history_stay_'+name+ix} className="-my-1.5 md:text-xl font-bold ml-2">
              {flag} {name}
            </p>)
        }
      </div>

      <div className='w-[18%] md:w-[17.5%] '> 
        <p className='py-2 bg-back-1 text-sub-title mr-auto md:mx-auto rounded-lg w-12 md:w-14 text-center font-bold'>
          {room}
        </p> 
      </div>

      <div className='w-[30%] md:w-[17.5%] flex flex-col gap-0.5'>
        <div className='flex gap-1 items-center'>
            <FaWalking className='text-in-client px-1.5 py-1 rounded-md bg-in-client/20 size-6'/>
            <p className='md:text-lg'>{startDate}</p>
            <p className='text-neutral-500 text-sm mt-auto'>{startTime}</p>
        </div>
        <div className='flex gap-1 items-center'>
            <FaWalking className='text-out-client px-1.5 py-1 rounded-md bg-out-client/20 size-6 -scale-x-100'/>
            <p className='md:text-lg'>{endDate}</p>
            <p className='text-neutral-500 text-sm mt-auto'>{endTime}</p>
        </div>
      </div>

      <p className='md:w-[10%] hidden md:block text-money font-bold'>S/ {price}.00</p>

      <p className='md:w-[10%] hidden md:block'>{user}</p>

      <div className='md:w-[10%] hidden md:flex justify-center '>
        {Array.from({length:stars}, (_,ix) => <FaStar key={'star_'+ix} className='text-stars'/>)}
      </div>

      <div className='w-[10%] md:w-[10%] text-center '>
        <button popoverTarget="detail-stay" className='cursor-pointer rounded-md p-1.5 bg-primary text-white hover:opacity-80'>
          <FaEye className="mx-auto size-4 md:size-4.5" /> 
        </button> 
      </div>

    </TableRow>
  )
}
