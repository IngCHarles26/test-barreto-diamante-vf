import { formatDate } from '@/lib'
import { TableRow } from '../general'
import { FaTools } from 'react-icons/fa'

interface Props {
  room: number
  description: string
  dateMoved: Date
  dateBuyed: Date
}

export const ActivesTableRow = ({room,description,dateBuyed,dateMoved}:Props) => {
  return (
    <TableRow>
      <p className='w-[50%] text-sm pl-2'>{description}</p>
      <p className='w-[15%] text-center'>{formatDate(dateMoved)[0]}</p>
      <p className='w-[10%] text-center'>{room}</p>
      <p className='w-[15%] text-center'>{formatDate(dateBuyed)[0]}</p>
      <div className='w-[10%] text-center'>
        <button popoverTarget="form-edit-active" className='cursor-pointer rounded-md p-1 bg-sub-title text-white hover:opacity-80'>
          <FaTools  className="mx-auto size-4 " /> 
        </button> 
      </div>
    </TableRow>
  )
}
