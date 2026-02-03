import { formatDate } from '@/lib'
import { TableRow } from '../general'
import clsx from 'clsx'

type Method = 'efectivo' | 'yape' | 'transfe' | 'plin'

interface Props{
  hour: string
  room: number
  newDateEnd: Date
  user: string
  payMethod: Method
  operation?: number
  price: number
}

const methodStyles:Record<Method,string> = {
  efectivo: 'text-money bg-money/10',
  plin: 'text-white bg-plin',
  transfe: 'text-white bg-sub-title',
  yape: 'text-white bg-yape',
}

export const DailyTableRow = ({hour,room,newDateEnd,user,payMethod,operation,price}:Props) => {
  const [date,hourEnd] = formatDate(newDateEnd)
  
  return (
    <TableRow>
      <p className='w-[15%] md:w-[12.5%] text-lg md:text-xl font-bold'>{hour}</p>
      
      <div className='w-[40%] md:w-[30%]'>
        <p className='text-xl md:text-2xl font-bold'>Habitacion {room}</p>
        <p className='text-xs md:text-base  text-done-button-text'>Estadia hasta: {date} {hourEnd}</p>
      </div>
      
      <p className='md:w-[20%] hidden md:block text-done-button-text font-bold font-code text-xl capitalize'>{user}</p>
      
      <div className='w-[30%] md:w-[20%] text-center flex flex-col items-center gap-1'>
        <p className={clsx(
            'px-3 py-1 rounded-lg font-bold text-base md:text-xl capitalize',
            methodStyles[payMethod])
          }
        >
          {payMethod}
        </p>
        <p className='text-xs md:text-base text-done-button-text'>{operation}</p>
      </div>

      <p className='w-[15%] md:w-[12.5%] text-sub-title font-extrabold text-lg md:text-2xl text-center'>s/ {price}</p>
    </TableRow>
  )
}
