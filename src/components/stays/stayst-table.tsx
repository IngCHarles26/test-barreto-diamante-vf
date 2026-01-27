import { MdMeetingRoom } from 'react-icons/md'
import { TableFooter, TableHeader } from '../general'
import { HistoryRow, StaysTableRow } from './stays-table-row'



export interface Props{
  staysInfo: HistoryRow[]
}

export const StaysTable = ({staysInfo}:Props) => {
  return (
    <>  
      <TableHeader>
        <p className='w-[56%] md:w-[37%] '>Clientes</p>
        <div className='w-[18%] md:w-[10%]'><MdMeetingRoom className='size-7 mx-auto'/></div>
        <p className='w-[16%] md:w-[10%] '>Llegada</p>
        <p className='w-[10%] hidden md:block '>Salida</p>
        <p className='w-[7%] hidden md:block '>Precio</p>
        <p className='w-[12%] hidden md:block '>Usuario</p>
        <p className='w-[8%] hidden md:block '>Puntaje</p>
        <p className='w-[10%] md:w-[8%]'><span className="hidden md:inline">Detalles</span></p>
      </TableHeader>

      { 
        staysInfo.map( (el,ix) => <StaysTableRow key={'stays_history_row_'+ix} {...el}/>)
      }

      <TableFooter/>
    </>
  )
}
