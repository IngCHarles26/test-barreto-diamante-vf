import { FaBan, FaBed, FaBirthdayCake, FaCalendar, FaMapMarkedAlt, FaPhoneAlt, FaSave, FaStar, FaUser } from "react-icons/fa"
import { IoWallet } from "react-icons/io5"
import { DetailStay } from "../stays/detail-stay"
import { reservaciones } from "../stays/stays-content"
import { StaysTable } from "../stays/stays-table"
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
    <PageContent >

      <div className='bg-back-1 w-full p-3 border-b border-gray-300 flex items-center justify-between gap-3 rounded-t-md mb-3 text-done-button-text md:mb-5 sticky top-0 z-20'>
        <div className="flex items-center gap-1 md:gap-4">
          <FaUser className={clsx('size-13 md:size-18 text-white  py-1 px-2 md:rounded-lg rounded-default',
            banned ? 'bg-danger' : 'bg-primary'
          )}/>

          <div className="h-full flex flex-col justify-center gap-1">
            <p className='md:text-2xl text-lg font-extrabold md:font-bold text-title'>Condori Llerena, Carlos Rodrigo</p>
            <div className='text-base md:text-lg -mt-0.5 md:mt-0 flex items-center gap-2'>
              <p className="text-base md:text-lg">🇨🇴 ID:254632</p> 
              {banned && 
                <div className="ml-1 bg-danger text-white px-2 py-0.5 rounded-lg text-xs flex items-center gap-1">
                  <FaBan />  
                  <p className="text-sm md:text-base">BETADO</p>
                </div>
              }
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-1 md:gap-2 items-end text-sub-title  text-lg md:text-xl leading-0 md:w-70 '>
          <div className="flex gap-1 items-center w-full">
            <p className="font-bold hidden md:block text-done-button-text  ">Puntaje: </p>
            <p className="ml-auto">4.7</p>
            <FaStar className="scale-90 text-stars"/>
          </div>
          <div className="flex gap-1 items-center w-full">
            <p className="font-bold hidden md:block text-done-button-text  ">Total Estadias: </p>
            <p className="ml-auto">47</p>
            <FaBed className="m-0 p0"/>
          </div>
          <div className="flex gap-1 items-center w-full">
            <p className="font-bold hidden md:block text-done-button-text  ">Ultima Estadia: </p>
            <p className="ml-auto">25/04/26</p>
            <FaCalendar className="scale-80"/>
          </div>
        </div>
        
      </div>   

      <div className='w-full px-3 grid grid-cols-3 md:grid-cols-5 gap-2 mb-5 md:mb-7 items-center'>
      
        <div className='text-center flex flex-col gap-1 md:gap-2 md:col-span-1 col-span-2 '>
          <p className='text-done-button-text text-lg md:text-2xl'>
            <IoWallet  className='inline mr-1 mb-0.5'/>DNI</p>
          <p className='font-bold text-xl md:text-2xl'>71799919</p>
        </div>

        <div className='text-center flex flex-col gap-1 md:gap-2'>
          <p className='text-done-button-text text-lg md:text-2xl'>
            <FaBirthdayCake className='inline mr-1 mb-0.5'/>Nacimiento</p>
          <p className='font-bold text-xl md:text-2xl'>26/10/1995</p>
        </div>

        <div className='text-center flex flex-col gap-1 md:gap-2 col-span-2'>
          <p className='text-done-button-text text-lg md:text-2xl'>
            <FaMapMarkedAlt  className='inline mr-1 mb-0.5'/>Direccion</p>
          <p className='font-bold text-lg md:text-2xl text-wrap'>Los Zafiros 301, Arequipa, Peru</p>
        </div>

        <div className='text-center flex flex-col gap-1 md:gap-2'>
          <p className='text-done-button-text text-lg md:text-2xl'>
            <FaPhoneAlt  className='inline mr-1 mb-0.5'/>Telefono</p>
          <p className='font-bold text-xl md:text-2xl'>936 664 619</p>
        </div>
          
        {/* <button popoverTarget="confirm-user-ban" 
          className={clsx(
            'py-2 px-3 ml-auto mt-auto rounded-md cursor-pointer hover:opacity-80 text-white gap-2 items-center  hidden md:flex text-2xl',
            banned ? 'bg-details' : 'bg-danger')}
        >
          { banned ? <> <FaCheckCircle/> Desbloquear </>:<> <FaBan/> Betar</>}
        </button> */}
          
      </div>
      {/* cambiar para tener un text area con los comentarios por cliente y agregar el boton de betar */}

      <div className='w-full mb-3 md:mb-6'>
        <div className='mb-2 md:mb-3 flex gap-2 items-center justify-between'>
          <p className=' font-bold text-done-button-text text-lg md:text-2xl'>Comentarios:</p>
          <button className='py-2 px-2 bg-primary rounded-md cursor-pointer hover:opacity-80 text-white flex items-center gap-2'>
            <FaSave className="md:size-7 size-5" />
            <p className="hidden md:block text-lg font-bold pr-1">Guardar</p>
          </button>
        </div>
        <textarea placeholder='Comentarios o recordatorios respecto al usuario.... ' rows={4}
          className={clsx(
            'w-full  rounded-xl focus-within:ring-1   outline-none border  resize-none p-3 text-lg md:text-xl text-sub-title',
            banned ? 'border-danger/20 ring-danger' : 'border-done-button-bg shadow  focus-within:ring-primary')}
        />
      </div> 


      <div className="w-full">
        <StaysTable staysInfo={estadias}/>        
      </div>

      <ConfirmBan banned={banned}/>

      <DetailStay/>
    </PageContent>
  )
}
