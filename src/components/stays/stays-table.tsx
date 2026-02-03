import { MdCalendarMonth, MdMeetingRoom } from 'react-icons/md'
import { TableApp, TableFooter, TableHeader } from '../general'
import { HistoryRow, StaysTableRow } from './stays-table-row'



export interface Props{
  staysInfo: HistoryRow[]
}

export const StaysTable = ({staysInfo}:Props) => {
  return (
    <TableApp pagination>  
      <TableHeader>
        <p className='w-[40%] md:w-[25%] '>Clientes</p>
        <p className='w-[18%] md:w-[17.5%] text-center'>
          <MdMeetingRoom className='size-7 block md:hidden'/>
          <span className='hidden md:block'>Habitacion</span>
        </p>
        <p className='w-[30%] md:w-[17.5%] '>
          <MdCalendarMonth className='size-7 block md:hidden'/>
          <span className="hidden md:inline ">Llegada / Salida</span>
        </p>
        <p className='w-[10%] hidden md:block '>Precio</p>
        <p className='w-[10%] hidden md:block '>Usuario</p>
        <p className='w-[10%] hidden md:block text-center'>Puntaje</p>
        <p className='w-[10%] md:w-[10%] text-center'><span className="hidden md:inline ">Detalles</span></p>
      </TableHeader>

      { 
        staysInfo.map( (el,ix) => <StaysTableRow key={'stays_history_row_'+ix} {...el}/>)
      }

      <TableFooter/>
    </TableApp>
  )
}
