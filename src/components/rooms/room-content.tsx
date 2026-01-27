import { MdMeetingRoom } from 'react-icons/md';
import { PageContent, Pagination, TableFooter, TableHeader } from '../general'
import { RoomConfig } from './room-config'
import { RoomTableRow } from './room-table-row'


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
    type: "Penthouse",
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
    <PageContent maxWRem={40}>

      <div className='flex-1'>
        <TableHeader>
          <div className='w-[16%]'><MdMeetingRoom className='size-7 mx-auto'/></div>
          <p className='w-[21%]'>Tipo</p>
          <p className='w-[16%]'>Precio</p>
          <p className='w-[16%]'>Piso</p>
          <p className='w-[16%]'>Activo</p>
          <p className='w-[15%]'><span className="hidden md:inline">Config</span></p>
        </TableHeader>
  
        { 
          rooms.map( (el,ix) => <RoomTableRow key={'room_info_row_'+ix} {...el}/>)
        }
  
        <TableFooter/>
      </div>
      
      <div className="mx-auto pb-1 md:pb-0">
        <Pagination/>
      </div>

      <RoomConfig/>

    </PageContent>
  )
}
