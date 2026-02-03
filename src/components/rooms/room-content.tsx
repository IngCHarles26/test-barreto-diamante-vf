import { MdMeetingRoom } from 'react-icons/md';
import { PageContent, Pagination, TableApp, TableFooter, TableHeader } from '../general'
import { RoomConfig } from './room-config'
import { RoomTableRow } from './room-table-row'
import { ToggleActiveRoom } from './toggle-active';


const rooms = [
  {
    room: 101,
    type: "Individual",
    price: 45,
    active: true,
    floor: 1
  },
  {
    room: 202,
    type: "Doble",
    price: 75,
    active: false,
    floor: 2
  },
  {
    room: 305,
    type: "Suite",
    price: 150,
    active: true,
    floor: 3
  },
  {
    room: 410,
    type: "Matrimonial",
    price: 300,
    active: true,
    floor: 4
  },
  {
    room: 105,
    type: "Económica",
    price: 30,
    active: false,
    floor: 1
  }
];


export const RoomsContent = () => {
  return (
    <PageContent>

      <TableApp pagination>
        <TableHeader>
          <div className='w-[16%] flex items-center gap-2'>
            <MdMeetingRoom className='size-7 block md:hidden'/>
            <p className='hidden md:block'>Habitacion</p>
          </div>
          <p className='w-[22%]'>Tipo</p>
          <p className='w-[16%] text-center'>Precio</p>
          <p className='w-[20%] text-center'>Piso</p>
          <p className='w-[16%] text-center'>Estado</p>
          <p className='w-[10%] text-center'><span className="hidden md:inline">Activar</span></p>
        </TableHeader>
  
        { 
          rooms.map( (el,ix) => <RoomTableRow key={'room_info_row_'+ix} {...el}/>)
        }
  
        <TableFooter/>
      </TableApp>

    </PageContent>
  )
}
