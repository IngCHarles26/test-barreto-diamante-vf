import { CiSearch } from 'react-icons/ci'
import { PageContent, PageHeader, Pagination, SearchButton, TableFooter, TableHeader, TableSeparator } from '../general'
import { ReservationsTableRow } from './reservation-table-row'
import { ReservationForm } from './reservation-form'
import { MdMeetingRoom } from 'react-icons/md'


const dataRows = [
  { 
    name: 'Carlos Condori',
    phone: 936664619,
    persons: 3,
    rooms: [101,102],
    start: new Date(),
    end: new Date(),
    active: true,
    price: 30
  },
  { 
    name: 'Julio Condori',
    phone: 936664619,
    persons: 10,
    rooms: [101,202,203,204],
    start: new Date(),
    end: new Date(),
    // active: true,
    price: 30
  },
]

export const ReservationsContent = () => {
  return (
    <PageContent maxWRem={60}>
      <PageHeader>
        <div className='flex items-center gap-2 border border-back-header shadow rounded-lg overflow-hidden focus-within:ring-1 focus-within:ring-details '>
          <p className='bg-back-header h-full py-1 px-2 flex items-center'>
            <CiSearch />
          </p>
          <input type="text" placeholder='Busqueda por Cliente' className='outline-0 w-36 md:w-auto text-sm md:text-lg' />
        </div>

        <div className='flex items-center gap-2 '>
          <label htmlFor="select-pending" className='hidden text-xs md:block md:text-lg'>Filtrar Por:</label>
          <select id='select-pending' className='border pl-1 py-1 rounded-lg h-full border-back-header cursor-pointer hover:opacity-80 text-sm md:text-lg shadow focus-within:ring-1 focus-within:ring-details'>
            <option value="pending">Todos</option>
            <option value="pending">Pendientes</option>
            <option value="already">Registrados</option>
          </select>
        </div>

        <SearchButton/>
      </PageHeader>
      <div className='flex-1 '>

        <TableHeader>
          <p className='w-[40%] md:w-[35%]'>Clientes</p>
          <p className='w-[25%] md:w-[20%] text-center'>Habitaciones</p>
          <p className='w-[15%] md:w-[10%] text-center'>Inicio</p>
          <p className='hidden md:block md:w-[10%] text-center'>Fin</p>
          <p className='hidden md:block md:w-[10%]'>Adelanto</p>
          <p className='w-[20%] md:w-[15%]'>Registro</p>
        </TableHeader>

        <TableSeparator/>

        {
          dataRows.map((el,ix) => <ReservationsTableRow key={'item_reservation_row'+ix} {...el}/>)
        }

        <TableFooter/>

      </div>

      <div className="mx-auto pb-1 md:pb-0">
        <Pagination/>
      </div>
      
      <ReservationForm/>
    </PageContent>
  )
}
