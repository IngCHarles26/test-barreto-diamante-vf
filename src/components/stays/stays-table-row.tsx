import { formatDate } from '@/lib'
import { TbListDetails } from 'react-icons/tb'
import { TableRow } from '../general'

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

      <div className='px-1 w-[56%] md:w-[37%]'>
        {
          names.map( ([name,flag],ix) =>  
            <div key={'name_row_history_stay_'+name+ix} className="w-full flex justify-between items-center -my-1.5 md:text-lg">
            <p>{name}</p><p>{flag}</p>
          </div>)
        }
      </div>

      <p className='text-center w-[18%] md:w-[10%] '> {room} </p>

      <div className='text-center w-[16%] md:w-[10%] '>
        <p className='text-sm -mb-1'>{startDate}</p>
        <p className='text-neutral-500 scale-80 -mt-1'>{startTime}</p>
      </div>

      <div className='text-center w-[10%] hidden md:block '>
        <p className='text-sm -mb-1'>{endDate}</p>
        <p className='text-neutral-500 scale-80 -mt-1'>{endTime}</p>
      </div>

      <p className='text-center w-[7%] hidden md:block '>S/ {price}</p>

      <p className='text-center w-[12%] hidden md:block text-xs '>{user}</p>

      <p className='text-center w-[8%] hidden md:block '>
        {stars}
        <span className="text-xl">★</span>
      </p>

      <div className='text-center w-[10%] md:w-[8%]'>
        <button popoverTarget="detail-stay" className='cursor-pointer rounded-md p-1.5 bg-green-app text-white hover:opacity-80'>
          <TbListDetails className="mx-auto size-4 md:size-4.5" /> 
        </button> 
      </div>

    </TableRow>
  )
}
