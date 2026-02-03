import { formatDate } from '@/lib'
import { TableRow } from '../general'
import { FaMoneyBill, FaTrash } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { MdDryCleaning } from 'react-icons/md'
import { ConfigActive } from './config-active'
import { RemoveActive } from './remove-active'

interface Props {
  room: number
  description: string
  dateMoved: Date
  dateBuyed: Date
  id:string
}

export const ActivesTableRow = ({room,description,dateBuyed,dateMoved,id}:Props) => {
  const dateBuy = formatDate(dateBuyed)[0]
  const dateMove = formatDate(dateMoved)[0]

  return (
    <TableRow>
      <p className='w-[52.5%] text-base md:text-2xl text-wrap '>{description}</p>

      <div className='w-[20%] flex flex-col gap-1 md:gap-2 text-lg md:text-xl'>
        <div className='flex items-center gap-1 md:gap-3'>
          <MdDryCleaning className='size-7 md:size-9 px-1 py-0.5 bg-primary/20 text-primary rounded-lg'/>
          <p>
            <span className='hidden md:inline'>{dateMove.slice(0,3)}</span>
            {dateMove.slice(3)}
          </p>
        </div>
        <div className='flex items-center gap-1 md:gap-3'>
          <FaMoneyBill className='size-7 md:size-9 px-1 py-0.5 bg-money/20 text-money rounded-lg'/>
          <p>
            <span className='hidden md:inline'>{dateBuy.slice(0,3)}</span>
            {dateBuy.slice(3)}
          </p>
        </div>
      </div>

      <div className='w-[12.5%] '>
        <p className='py-2 bg-back-1 text-sub-title mr-auto rounded-lg text-xl md:text-2xl w-14 md:w-18 text-center font-bold'>
          {room}
        </p> 
      </div>

      <div className='w-[7.5%] text-center'>
        <button popoverTarget={"form-edit-active"+id} className='cursor-pointer rounded-md p-1 text-primary hover:opacity-80'>
          <IoMdSettings className="mx-auto size-6 md:size-7 " /> 
        </button> 
      </div>

      <div className='w-[7.5%] text-center'>
        <button popoverTarget={'confirm-remove-active'+id} className='cursor-pointer rounded-md p-1 text-sub-title hover:opacity-80'>
          <FaTrash   className="mx-auto size-6 md:size-7 " /> 
        </button> 
      </div>

      <ConfigActive description={description} id={id} room={room} />
      <RemoveActive description={description} id={id}/>
      
    </TableRow>
  )
}
