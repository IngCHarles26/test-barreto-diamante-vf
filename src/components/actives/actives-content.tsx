import { FaTools } from 'react-icons/fa'
import { PageContent, PageHeader, Pagination, SearchButton, TableFooter, TableHeader, TableRow } from '../general'
import { MdMeetingRoom } from 'react-icons/md'
import { ActivesTableRow } from './actives-table-row';
import { NewActive } from './new-active';
import { ConfigActive } from './config-active';

const furnitureInventory = [
  {
    room: 101,
    description: "Ropero de madera de cedro con dos puertas correderas y espejo central.",
    dateMoved: new Date('2026-01-10'),
    dateBuyed: new Date('2025-11-20')
  },
  {
    room: 101,
    description: "Escritorio ergonómico blanco con base de metal y pasacables.",
    dateMoved: new Date('2026-01-12'),
    dateBuyed: new Date('2025-12-05')
  },
  {
    room: 202,
    description: "Silla de oficina giratoria con soporte lumbar y tela transpirable negra.",
    dateMoved: new Date('2025-05-20'),
    dateBuyed: new Date('2025-05-15')
  },
  {
    room: 305,
    description: "Mesa de comedor redonda para 4 personas, acabado en roble natural.",
    dateMoved: new Date('2025-08-14'),
    dateBuyed: new Date('2025-07-01')
  },
  {
    room: 410,
    description: "Cajonera metálica gris con cerradura de seguridad para documentos.",
    dateMoved: new Date('2026-01-25'),
    dateBuyed: new Date('2025-09-10')
  }
];

export const ActivesContent = () => {
  return (
    <PageContent maxWRem={50}>
      
      <PageHeader>
        <div className='flex items-center gap-2 '>
          <label htmlFor="select-pending" className='hidden text-xs md:block md:text-lg'>Filtrar Por:</label>
          <select id='select-pending' className='border pl-1 py-1 rounded-lg h-full border-back-header cursor-pointer hover:opacity-80 text-sm md:text-lg shadow focus-within:ring-1 focus-within:ring-details'>
            <option value="pending">--Habitacion--</option>
            <option value="pending">101</option>
            <option value="already">102</option>
            <option value="already">103</option>
          </select>
        </div>

        <SearchButton/>
      </PageHeader>

      {/*  habitacion descripcion puesto adquirido config */}
      <div className='flex-1'> 
        <TableHeader>
          <p className='w-[50%]'>Descripcion</p>
          <p className='w-[15%]'>Puesto<span className="hidden md:inline"> el</span></p>
          <div className='w-[10%]'><MdMeetingRoom className='size-7 mx-auto'/></div>
          <p className='w-[15%]'>Comprado<span className="hidden md:inline"> en</span></p>
          <p className='w-[10%]'><span className="hidden md:inline">Config</span></p>
        </TableHeader>
  
        { 
          furnitureInventory.map( (el,ix) => <ActivesTableRow key={'actives_table_row_'+ix} {...el}/>)
        }

        <TableFooter/>

      </div>


      <div className="mx-auto pb-1 md:pb-0">
        <Pagination/>
      </div>

      <NewActive/>
      <ConfigActive/>

    </PageContent>
  )
}
