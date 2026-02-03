import { CiSearch } from 'react-icons/ci'
import { FilterInput, FilterSelect, PageContent, PageHeader, Pagination, SearchButton, TableApp, TableFooter, TableHeader, TableSeparator } from '../general'
import { ReservationsTableRow } from './reservation-table-row'
import { ReservationForm } from './reservation-form'


const bookings = [
  { 
    name: 'Carlos Condori',
    phone: 936664619,
    persons: 3,
    rooms: [101, 102],
    start: new Date('2026-01-28'),
    end: new Date('2026-01-30'),
    active: true,
    price: 30
  },
  { 
    name: 'Julio Condori',
    phone: 936664619,
    persons: 10,
    rooms: [101, 202, 203, 204],
    start: new Date('2026-02-01'),
    end: new Date('2026-02-05'),
    active: true, // Lo mantengo activo para consistencia, pero puedes comentarlo
    price: 120
  },
  { 
    name: 'Ana Vizcarra',
    phone: 955123456,
    persons: 2,
    rooms: [305],
    start: new Date('2026-01-29'),
    end: new Date('2026-02-01'),
    active: true,
    price: 45
  },
  { 
    name: 'Marcos Quispe',
    phone: 988765432,
    persons: 5,
    rooms: [105, 106],
    start: new Date('2026-03-10'),
    end: new Date('2026-03-15'),
    active: false,
  },
  { 
    name: 'Lucía Fernández',
    phone: 912345678,
    persons: 1,
    rooms: [401],
    start: new Date('2026-01-20'),
    end: new Date('2026-01-22'),
    active: false,
    price: 25
  },
  { 
    name: 'Carlos Condori',
    phone: 936664619,
    persons: 3,
    rooms: [101, 102],
    start: new Date('2026-01-28'),
    end: new Date('2026-01-30'),
    active: true,
    price: 30
  },
  { 
    name: 'Julio Condori',
    phone: 936664619,
    persons: 10,
    rooms: [101, 202, 203, 204],
    start: new Date('2026-02-01'),
    end: new Date('2026-02-05'),
    active: true, // Lo mantengo activo para consistencia, pero puedes comentarlo
    price: 120
  },
  { 
    name: 'Ana Vizcarra',
    phone: 955123456,
    persons: 2,
    rooms: [305],
    start: new Date('2026-01-29'),
    end: new Date('2026-02-01'),
    active: true,
    price: 45
  },
  { 
    name: 'Marcos Quispe',
    phone: 988765432,
    persons: 5,
    rooms: [105, 106],
    start: new Date('2026-03-10'),
    end: new Date('2026-03-15'),
    active: false,
  },
  { 
    name: 'Lucía Fernández',
    phone: 912345678,
    persons: 1,
    rooms: [401],
    start: new Date('2026-01-20'),
    end: new Date('2026-01-22'),
    active: false,
    price: 25
  },
  { 
    name: 'Carlos Condori',
    phone: 936664619,
    persons: 3,
    rooms: [101, 102],
    start: new Date('2026-01-28'),
    end: new Date('2026-01-30'),
    active: true,
    price: 30
  },
  { 
    name: 'Julio Condori',
    phone: 936664619,
    persons: 10,
    rooms: [101, 202, 203, 204],
    start: new Date('2026-02-01'),
    end: new Date('2026-02-05'),
    active: true, // Lo mantengo activo para consistencia, pero puedes comentarlo
    price: 120
  },
  { 
    name: 'Ana Vizcarra',
    phone: 955123456,
    persons: 2,
    rooms: [305],
    start: new Date('2026-01-29'),
    end: new Date('2026-02-01'),
    active: true,
    price: 45
  },
  { 
    name: 'Marcos Quispe',
    phone: 988765432,
    persons: 5,
    rooms: [105, 106],
    start: new Date('2026-03-10'),
    end: new Date('2026-03-15'),
    active: false,
  },
  { 
    name: 'Lucía Fernández',
    phone: 912345678,
    persons: 1,
    rooms: [401],
    start: new Date('2026-01-20'),
    end: new Date('2026-01-22'),
    active: false,
    price: 25
  },
];

export const ReservationsContent = () => {
  return (
    <PageContent>

      <PageHeader>
        <FilterInput 
          id='search-client-reservations'
          placeholder='Buscar por Cliente' 
        />

        <FilterSelect 
          id='select-type-reservations' 
          label='Estado:' 
          options={['pendiente','registrado','todos']} 
        />

        <SearchButton/>
      </PageHeader>

      <TableApp pagination>
        <TableHeader>
          <p className='w-[35%] md:w-[35%] '>Clientes</p>
          <p className='w-[27%] md:w-[20%] '>Habitaciones</p>
          <p className='w-[15%] md:w-[10%] '>Inicio</p>
          <p className='hidden md:block md:w-[10%] '>Fin</p>
          <p className='hidden md:block md:w-[10%] text-center'>Adelanto</p>
          <p className='w-[20%] md:w-[15%] text-center'>Registro</p>
        </TableHeader>

        {
          bookings.slice(0,5).map((el,ix) => <ReservationsTableRow key={'item_reservation_row'+ix} {...el}/>)
        }

      </TableApp>
      
      <ReservationForm/>

    </PageContent>
  )
}
