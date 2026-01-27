
import { MdAddAPhoto, MdAttractions, MdLocationPin, MdModeEditOutline } from 'react-icons/md'
import { CenterDialog, DialogContent, DialogHeader } from '../general'
import { FaArrowRight, FaBed, FaCarSide, FaDoorClosed, FaFolder, FaGrinStars, FaRegCalendarAlt, FaRegMoneyBillAlt, FaSave } from 'react-icons/fa'
import { TbZoomMoney } from 'react-icons/tb'

export const DetailStay = () => {
  return (
    <CenterDialog id='detail-stay'>
      <DialogContent maxWRem={35}>

        <DialogHeader
          Icon={FaBed}
          title='Detalle de Estadia'
          subTitle='Informacion completa de estadia'
        >
          <div className='rounded-lg bg-back-header px-3 py-2 flex items-center gap-2 md:gap-3 text-sub-title'>
            <FaRegCalendarAlt className='hidden md:block'/>
            <div className='text-center'>
              <p className='text-xs -mb-1'>Ene 25, 25</p>
              <p className=' text-xs scale-90 -mt-1'>05:56</p>
            </div>
            <FaArrowRight/> 
            <div className='text-center'>
              <p className='text-xs -mb-1'>Feb 25, 25</p>
              <p className=' text-xs scale-90 -mt-1'>12:00</p>
            </div>
          </div>
          <p className='text-sm scale-75 -mt-1'>Carlos C.</p>
        </DialogHeader>       

        <div className='w-full px-3 grid grid-cols-4 gap-2'>

          <div className='text-center col-span-2'>
            <p className='opacity-50 text-sm'>
              <FaDoorClosed className='inline mr-1 mb-0.5'/>Habitacion</p>
            <p className='font-bold text-lg -mt-1'>101</p>
          </div>

          <div className='text-center'>
            <p className='opacity-50 text-sm'>
              <TbZoomMoney  className='inline mr-1 mb-0.5'/>Costo Diario</p>
            <p className='font-bold '>S/ 50</p>
          </div>

          <div className='text-center'>
            <p className='opacity-50 text-sm'>
              <FaRegMoneyBillAlt  className='inline mr-1 mb-0.5'/>Costo Total</p>
            <p className='font-bold  text-green-600'>S/ 300</p>
          </div>

          <div className='text-center'>
            <p className='opacity-50 text-sm'>
              <FaGrinStars className='inline mr-1 mb-0.5'/>Puntaje</p>
            <p className='font-bold  text-yellow-600'>★★★★☆</p>
          </div>

          <div className='text-center'>
            <p className='opacity-50 text-sm'>
              <MdAttractions  className='inline mr-1 mb-0.5'/>Motivo</p>
            <p className='font-bold  '>Trabajo</p>
          </div>

          <div className='text-center'>
            <p className='opacity-50 text-sm'>
              <MdLocationPin className='inline mr-1 mb-0.5'/>Origen</p>
            <p className='font-bold  '>Areuipa, PE</p>
          </div>

          <div className='text-center'>
            <p className='opacity-50 text-sm'> 
              <FaCarSide  className='inline mr-1 mb-0.5'/>Vehiculo</p>
            <p className='font-bold  '>Z6K-946</p>
          </div>
        </div>

        <div className='px-3'>
          <p className='mb-1 text-sm font-bold'>Cuadro de ocupantes</p>

          <div className='border rounded border-neutral-300'>
            <div className='flex bg-neutral-100 items-center border-b border-neutral-300'>
              <p className='w-2/3   p-1 text-center'>Nombre</p>
              <p className='w-1/3  border-l border-neutral-300 p-1 text-center'>Documento</p>
            </div>
            <div className='flex items-center'>
              <div className="w-2/3 px-2 flex justify-between items-center -my-1.5 md:text-lg">
                <p>Carlos Condori</p><p>👶🇵🇪</p>
              </div>
              <p className='w-1/3  border-l border-neutral-300 p-1 text-center'>71799919</p>
            </div>
            <div className='flex items-center -my-2'>
              <div className="w-2/3 px-2 flex justify-between items-center -my-1.5 md:text-lg">
                <p>Carlos Condori</p><p>🇵🇪</p>
              </div>
              <p className='w-1/3  border-l border-neutral-300 p-1 text-center'>71799919</p>
            </div>
            <div className='flex items-center'>
              <div className="w-2/3 px-2 flex justify-between items-center -my-1.5 md:text-lg">
                <p>Carlos Condori</p><p>🇵🇪</p>
              </div>
              <p className='w-1/3  border-l border-neutral-300 p-1 text-center'>71799919</p>
            </div>
          </div>
        </div>

        <div className='px-3'>
          <div className='mb-1 flex text-sm'>
            <p className=' font-bold'>Comentarios</p>
            <button className='py-1.5 px-2 ml-auto bg-gray-400 rounded-md cursor-pointer hover:opacity-80 text-white'>
              <MdModeEditOutline/>
            </button>
            <button className='py-1.5 px-2 ml-1.5 bg-primary rounded-md cursor-pointer hover:opacity-80 text-white'>
              <FaSave />
            </button>
          </div>
          <textarea disabled placeholder='Comentarios .... ' className='w-full shadow rounded focus-within:ring-1 focus-within:ring-primary outline-none border border-neutral-300 resize-none h-20 p-1'/>
        </div>

        <div className='px-3'>
          <div className='mb-1 flex items-center text-sm'>
            <p className='font-bold'>Imagenes y videos</p>
            <a href='#' target='_blank' className='flex items-center text-white gap-2 py-1.5 px-2 ml-auto bg-neutral-400 rounded-md cursor-pointer hover:opacity-80'>
              {/* Agregar enlace prellenado de un formulario de google para subir las fotos */}
              <MdAddAPhoto />
            </a>
            <a href='#' target='_blank' className='flex items-center text-white gap-2 py-1.5 px-2 ml-1.5 bg-primary rounded-md cursor-pointer hover:opacity-80'>
              {/* Enlace de la carpeta  */}
              <FaFolder />
            </a>
          </div>
        </div>
        <p className='px-3 text-xs font-bold ml-auto opacity-50'>id: 144999</p>
      </DialogContent>
    </CenterDialog>
  )
}
