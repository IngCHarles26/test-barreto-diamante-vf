import { PageContent, PageTitle, TableApp, TableHeader, RoomTableRow } from "@/components";
import { getCacheRooms } from "@/lib/server";
import { MdMeetingRoom } from "react-icons/md";

export default async function RoomsPage() {

  const rooms = (await getCacheRooms()).sort((a,b) => a.number - b.number)
  
  return (
    <div className="h-full w-full flex flex-col">
      
      <PageTitle  title="Relacion de Habitaciones"/>
      
      <PageContent>
  
        <TableApp>
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
            rooms.map( (el,ix) => <RoomTableRow key={'room_info_row_'+ix} {...el}/> )
          }
    
        </TableApp>
  
      </PageContent>
     
    </div>
  );
}