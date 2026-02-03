import { FaBed, FaClipboard, FaUserCog, FaUsers } from 'react-icons/fa'
import { LuHotel } from 'react-icons/lu'
import { SidebarItem } from './sidebar-item'
import { IoIosLogOut } from 'react-icons/io'
import { BiSolidUserRectangle } from 'react-icons/bi'
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
      {name:'Choferes',href:'/dashboard/reports/drivers'},
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
    <div className='h-dvh w-70 flex flex-col sticky bottom-0 bg-bg-1 z-30 bg-bg-sidebar border-r border-border-sidebar'>

      <header className="w-full flex p-4 gap-3 items-center  ">
        <LuHotel className="size-13 bg-primary text-white p-2 rounded-lg"/>

        <div className="h-full">
          <p className="font-extrabold uppercase text-title text-xl ">Hostal BArreto</p>
          <p className=" text-sub-title text-lg">Administrador</p>
        </div>

      </header>

      <section className="flex-1">
        { sideBarItems.map( (item,ix) => <SidebarItem key={'sideBarMenuItem'+ix} {...item}/>) }
      </section>

      <footer className="w-full flex items-center justify-between p-2 gap-2 border-t border-border-sidebar">
        <div className="flex gap-2 items-center">
          <div className='relative'>
            <button >
              <FaUserCog  className="size-9 text-body"/>
            </button>
            {/* Popover */}
            <div className="absolute left-0 bottom-15 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 transform w-max bg-primary text-white px-2 py-1 rounded shadow-lg z-50">
              Configuracion de Usuario
              <div className="absolute left-1.5 -bottom-4 -rotate-90 border-8 border-transparent border-r-primary"/>
            </div>
          </div>

          <p className="font-bold text-title text-xl">Carlos C.</p>
        </div>

        <div className="relative group inline-block ">
          <button className="rounded flex items-center" popoverTarget='modal-session'>
            <IoIosLogOut className="size-9 text-title"/>
          </button>
          {/* Popover */}
          <div className="absolute left-full top-1/2 -translate-y-1/2 ml-5 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 transform w-max bg-primary text-white px-2 py-1 rounded shadow-lg z-50">
            Cerrar Sesion
            <div className="absolute right-full top-1/2 -translate-y-1/2  border-8 border-transparent border-r-primary"/>
          </div>
        </div>
      </footer>
    </div>
  )
}
