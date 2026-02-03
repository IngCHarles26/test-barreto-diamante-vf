import { CloseStayForm } from './close-stay-form'
import { NewStayForm } from './new-stay-form'
import { RoomStayTable } from './room-stay-table'
import { StayPaysTable } from './stay-pays-table'
import { FaArrowRight } from 'react-icons/fa'

export const StayRegisterContent = () => {
  return (
    <div className=" w-full h-auto lg:h-full flex flex-col gap-5">
    
      <NewStayForm/>

      <RoomStayTable/>

      <StayPaysTable/>

      <div className='w-full'>
        <button popoverTarget='close-stay-form' className='ml-auto flex items-center gap-2 text-white bg-danger rounded-2xl text-xl px-4 py-2 font-bold'>
          Finalizar Estadia
          <FaArrowRight/> 
        </button>
      </div>
      
      <CloseStayForm/>
      
    </div>
  )
}
