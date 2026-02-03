import { FaTools } from 'react-icons/fa'
import { FilterSelect, PageContent, PageHeader, Pagination, SearchButton, TableApp, TableFooter, TableHeader, TableRow } from '../general'
import { MdMeetingRoom } from 'react-icons/md'
import { ActivesTableRow } from './actives-table-row';
import { NewActive } from './new-active';
import { ConfigActive } from './config-active';

const furnitureInventory = [
  {
    id:'1',
    room: 101,
    description: "Ropero de madera de cedro con dos puertas correderas y espejo central.",
    dateMoved: new Date('2026-01-10'),
    dateBuyed: new Date('2025-11-20')
  },
  {
    id:'2',
    room: 101,
    description: "Escritorio ergonómico blanco con base de metal y pasacables.",
    dateMoved: new Date('2026-01-12'),
    dateBuyed: new Date('2025-12-05')
  },
  {
    id:'3',
    room: 202,
    description: "Silla de oficina giratoria con soporte lumbar y tela transpirable negra.",
    dateMoved: new Date('2025-05-20'),
    dateBuyed: new Date('2025-05-15')
  },
  {
    id:'4',
    room: 305,
    description: "Mesa de comedor redonda para 4 personas, acabado en roble natural.",
    dateMoved: new Date('2025-08-14'),
    dateBuyed: new Date('2025-07-01')
  },
  {
    id:'5',
    room: 410,
    description: "Cajonera metálica gris con cerradura de seguridad para documentos.",
    dateMoved: new Date('2026-01-25'),
    dateBuyed: new Date('2025-09-10')
  }
];

export const ActivesContent = () => {
  return (
    <PageContent>
      
      <PageHeader>
        <FilterSelect
          id='filter-select-room-active'
          label='Habitacion'
          options={['101','102','103']}
        />

        <SearchButton/>
      </PageHeader>

      {/*  habitacion descripcion puesto adquirido config */}
      <TableApp pagination> 
        <TableHeader>
          <p className='w-[52.5%]'>Descripcion</p>
          <p className='w-[20%]'><span className="hidden md:inline">Ubicado / Comprado</span></p>
          <div className='w-[12.5%]'>
            <MdMeetingRoom className='size-7 block lg:hidden'/>
            <p className='hidden lg:block'>Habitacion</p>
          </div>
          <p className='w-[7.5%] text-center'><span className="hidden lg:inline">Config</span></p>
          <p className='w-[7.5%] text-center'><span className="hidden lg:inline">Retirar</span></p>
        </TableHeader>
  
        { 
          furnitureInventory.map( (el,ix) => <ActivesTableRow key={'actives_table_row_'+ix} {...el}/>)
        }


      </TableApp>

      <NewActive/>

    </PageContent>
  )
}
