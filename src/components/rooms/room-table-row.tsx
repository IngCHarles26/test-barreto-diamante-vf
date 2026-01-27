import { TableRow } from '../general'
import { FaCheckCircle, FaTools, FaWindowClose } from 'react-icons/fa'

interface Props {
  room: number
  type: string
  price: number
  active: boolean
  floor: number
}


export const RoomTableRow = ({room,type,price,active,floor}:Props) => {

  return (
    <TableRow>
      <p className='w-[16%] text-center'>{room}</p>

      <p className='w-[21%] text-center'>{type}</p>
      
      <p className='w-[16%] text-center'>S/ {price}</p>
      
      <p className='w-[16%] text-center'>{floor}</p>
      
      <div className='w-[16%] flex items-center justify-center'>
        {
          active 
            ? <FaCheckCircle className='size-5 text-green-app'/>
            : <FaWindowClose className='size-5 text-danger'/>
        }
      </div>
      
      <div className='w-[15%] text-center'>
        <button popoverTarget="detail-room" className='cursor-pointer rounded-md p-1 bg-sub-title text-white hover:opacity-80'>
          <FaTools  className="mx-auto size-4 " /> 
        </button> 
      </div>
    </TableRow>
  )
}
