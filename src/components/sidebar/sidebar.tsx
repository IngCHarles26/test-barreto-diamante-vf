import { FaBed, FaClipboard, FaUsers } from 'react-icons/fa'
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
      {name:'Registro',href:'#'},
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
      {name:'Flujo de Caja',href:'#'},
      {name:'Turistas',href:'#'},
      {name:'Estadias',href:'#'},
      {name:'Ingresos',href:'#'},
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
    <div className='h-dvh w-55 flex flex-col fixed md:sticky top-0 transition-all shadow bg-bg-1 z-30 bg-back-1'>

      <header className="w-full flex p-3 gap-3 items-center  ">
        <LuHotel className="size-10 bg-primary text-white p-1.5 rounded-lg"/>

        <div className="h-full">
          <p className="font-extrabold uppercase text-title">Hostal BArreto</p>
          <p className="text-xs opacity-80 text-sub-title">Administrador</p>
        </div>

      </header>

      <section className="flex-1">
        { sideBarItems.map( (item,ix) => <SidebarItem key={'sideBarMenuItem'+ix} {...item}/>) }
      </section>

      <footer className="w-full flex items-center justify-between p-2 gap-2">
        <div className="flex gap-2 items-center">
          <BiSolidUserRectangle className="size-7 text-primary"/>
          <p className="font-bold text-title">Carlos C.</p>
        </div>

        <div className="relative group inline-block">
          <button className="rounded flex items-center" popoverTarget='modal-session'>
            <IoIosLogOut className="size-6 text-title"/>
          </button>

          <div className="absolute left-full top-1/2 -translate-y-1/2 ml-5 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 transform w-max bg-details text-white text-xs p-2 rounded shadow-lg z-50">
            Cerrar Sesion
            <div className="absolute right-full top-1/2 -translate-y-1/2  border-8 border-transparent border-r-details"/>
          </div>
        </div>
      </footer>
    </div>
  )
}
