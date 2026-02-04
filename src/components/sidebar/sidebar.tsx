import { FaBed, FaClipboard, FaUserCog, FaUsers } from 'react-icons/fa'
import { LuHotel } from 'react-icons/lu'
import { SidebarItem } from './sidebar-item'
import { IoIosLogOut } from 'react-icons/io'
import { BsDoorOpenFill, BsMotherboardFill } from 'react-icons/bs'

const sideBarItems= [
  {
    title: 'Estadias', 
    Icon: FaBed , 
    options:[
      {name:'Registro',href:'/dashboard/stays/register'},
      {name:'Reservaciones',href:'/dashboard/stays/reservations'},
      {name:'Historial',href:'/dashboard/stays'},
    ]
  },
  {
    title: 'Clientes', 
    Icon: FaUsers , 
    options:[
      {name:'Relacion',href:'/dashboard/clients'},
    ]
  },
  {
    title: 'Habitaciones', 
    Icon: BsDoorOpenFill  , 
    options:[
      {name:'Relacion',href:'/dashboard/rooms'},
      {name:'Activos',href:'/dashboard/rooms/actives'},
    ]
  },
  {
    title: 'Reportes', 
    Icon: FaClipboard  , 
    options:[
      {name:'Flujo de Caja',href:'/dashboard/reports/daily'},
      // {name:'Choferes',href:'/dashboard/reports/drivers'},
    ]
  },
  {
    title: 'Extras', 
    Icon: BsMotherboardFill   , 
    options:[
      {name:'Usuarios',href:'/dashboard/extras/users'},
    ]
  },
]

export const Sidebar = () => {
  return (
    <div className='h-dvh flex flex-col sticky bottom-0 bg-bg-1 z-30 bg-bg-sidebar border-r border-border-sidebar'>

      <header className="w-full flex px-3 py-2 gap-3 items-center  ">
        <LuHotel className="size-11 md:size-13 bg-blue-02 text-white p-1.5 rounded-lg"/>

        <div className="h-full">
          <p className="font-extrabold uppercase text-black-01 text-lg md:text-xl ">Hostal BArreto</p>
          <p className=" text-gray-02 text-base md:text-lg">Administrador</p>
        </div>

      </header>

      <section className="flex-1 ml-1">
        { sideBarItems.map( (item,ix) => <SidebarItem key={'sideBarMenuItem'+ix} {...item}/>) }
      </section>

      <footer className="w-full flex items-center justify-between px-3 py-2 gap-2 border-t border-border-sidebar">
        <div className="flex gap-2 items-center">
          <div className='relative'>
            <button >
              <FaUserCog  className="size-7 text-gray-03"/>
            </button>
           
          </div>

          <p className="font-bold text-gray-03 text-xl font-code">User_Carlos</p>
        </div>

        <div className="relative group inline-block ">
          <button className="rounded flex items-center" popoverTarget='modal-session'>
            <IoIosLogOut className="size-8 text-gray-05"/>
          </button>
          {/* Popover */}
          <div className='hidden 2xl:block'>
            <div className="absolute left-full top-1/2 -translate-y-1/2 ml-5 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 transform w-max bg-blue-02 text-white px-2 py-1 rounded shadow-lg z-50 font-bold">
            Cerrar Sesion
            <div className="absolute right-full top-1/2 -translate-y-1/2  border-8 border-transparent border-r-blue-02"/>
          </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
