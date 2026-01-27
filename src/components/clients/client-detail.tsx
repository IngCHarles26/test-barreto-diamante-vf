import { FaBan, FaCalendar, FaCalendarAlt, FaCheckCircle, FaDoorOpen, FaMapMarkedAlt, FaPhoneAlt, FaSave, FaStar, FaUser } from "react-icons/fa"
import { IoWallet } from "react-icons/io5"
import { MdModeEditOutline } from "react-icons/md"
import { DetailStay } from "../stays/detail-stay"
import { reservaciones } from "../stays/stays-content"
import { StaysTable } from "../stays/stayst-table"
import clsx from "clsx"
import { ConfirmBan } from "./confirm-ban"
import { PageContent } from "../general"


const estadias = reservaciones

interface Props {
  id: number
}

export const ClientDetailContent = ({id}:Props) => {

  const banned = Boolean(id%2)

  return (
    <PageContent maxWRem={90}>

      <div className='bg-back-1 w-full p-3 border-b border-gray-300 flex items-center gap-3 rounded-t-md mb-2'>
        <FaUser className={clsx('size-13 text-white  py-1 px-2 rounded-lg',
          banned ? 'bg-danger' : 'bg-primary'
        )}/>

        <div>
          <div className="flex flex-col md:flex-row gap-0 md:gap-1 text-title">
            <p className='md:text-xl font-bold -mb-0.5'>Condori Llerena,</p>
            <p className='md:text-xl font-bold -mt-0.5'>Carlos Rodrigo</p>
          </div>
          <p className='text-sm -mt-0.5 '>
            🇨🇴 ID:254632 
            {banned && <span className="ml-1 bg-red-200 text-red-500 px-2 py-0.5 rounded-lg text-xs">🚫 BETADO</span>}
          </p>
        </div>

        <div className='ml-auto flex flex-col items-end text-xs md:text-base text-sub-title'>
          <div className="flex gap-1 items-center md:-mb-0.5">
            <p className="font-bold hidden md:block">Total Estadias: </p>
            <p>35</p>
            <FaDoorOpen/>
          </div>
          <div className="flex gap-1 items-center md:-my-0.5">
            <p className="font-bold hidden md:block">Puntaje: </p>
            <p>4.7</p>
            <FaStar />
          </div>
          <div className="flex gap-1 items-center md:-mt-0.5">
            <p className="font-bold hidden md:block">Ultima Estadia: </p>
            <p>25/04/26</p>
            <FaCalendar />
          </div>
        </div>
        
      </div>   

      <div className='w-full px-3 grid grid-cols-3 md:grid-cols-5 gap-2 mb-2'>
      
        <div className='text-center md:col-span-1 col-span-2'>
          <p className='opacity-50 text-sm'>
            <IoWallet  className='inline mr-1 mb-0.5'/>DNI</p>
          <p className='font-bold text-lg -mt-1'>71799919</p>
        </div>

        <div className='text-center'>
          <p className='opacity-50 text-sm'>
            <FaCalendarAlt className='inline mr-1 mb-0.5'/>Nacimiento</p>
          <p className='font-bold '>26/10/1995</p>
        </div>

        <div className='text-center col-span-2'>
          <p className='opacity-50 text-sm'>
            <FaMapMarkedAlt  className='inline mr-1 mb-0.5'/>Direccion</p>
          <p className='font-bold'>Los Zafiros 301, Arequipa, Peru</p>
        </div>

        <div className='text-center'>
          <p className='opacity-50 text-sm'>
            <FaPhoneAlt  className='inline mr-1 mb-0.5'/>Telefono</p>
          <p className='font-bold '>936 664 619</p>
        </div>
          
      </div>
      {/* cambiar para tener un text area con los comentarios por cliente y agregar el boton de betar */}

      <div className='w-full mb-3'>
        <div className='mb-1 flex text-sm  gap-2'>
          <p className=' font-bold text-body'>Comentarios:</p>
          <button className='py-1.5 px-2 bg-body rounded-md cursor-pointer hover:opacity-80 text-white ml-auto'>
            <MdModeEditOutline/>
          </button>
          <button className='py-1.5 px-2 bg-green-app rounded-md cursor-pointer hover:opacity-80 text-white'>
            <FaSave />
          </button>
        </div>
        <textarea disabled placeholder='Comentarios .... ' 
          className={clsx(
            'w-full shadow rounded focus-within:ring-1  outline-none border  resize-none h-20 p-1 ',
            banned ? 'text-danger ring-danger' : 'ring-back-1 text-sub-title')}
        />
      </div> 


      <div className="w-full">
        <StaysTable staysInfo={estadias}/>        
      </div>

     <button popoverTarget="confirm-user-ban"
        className={clsx(
          'py-1 px-3 ml-auto mt-auto rounded-md cursor-pointer hover:opacity-80 text-white flex gap-2 items-center',
          banned ? 'bg-details' : 'bg-danger')}
      >
        { banned ? <> <FaCheckCircle/> Desbloquear </>:<> <FaBan/> Betar</>}
      </button>
      <ConfirmBan banned={banned}/>

      <DetailStay/>
    </PageContent>
  )
}
