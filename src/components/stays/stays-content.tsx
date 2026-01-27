import { months, years } from "@/lib"
import { PageContent, PageHeader, Pagination, SearchButton } from "../general"
import { DetailStay } from "./detail-stay"
import { StaysTable } from "./stayst-table"

const rooms = [101,102,304,405,606]

export const reservaciones = [
  {
    names: [["Ricardo", "🇵🇪"], ["Sofía", "🇦🇷"]],
    room: 102,
    start: new Date('2026-05-10T14:00:00'),
    end: new Date('2026-05-15T11:00:00'),
    price: 50,
    user: "admin_user",
    stars: 5
  },
  {
    names: [["Elena", "👶 🇪🇸"]],
    room: 205,
    start: new Date('2026-06-01T15:00:00'),
    end: new Date('2026-06-07T10:00:00'),
    price: 80,
    user: "travel_fan",
    stars: 4
  },
  {
    names: [["Mateo", "🇲🇽"], ["Carla", "🇨🇴"]],
    room: 310,
    start: new Date('2026-07-20T12:00:00'),
    end: new Date('2026-07-25T10:00:00'),
    price: 40,
    user: "guest_99",
    stars: 5
  },
  {
    names: [["Yuki", "🇯🇵"]],
    room: 401,
    start: new Date('2026-08-12T14:00:00'),
    end: new Date('2026-08-18T11:00:00'),
    price: 25,
    user: "global_nomad",
    stars: 5
  }
];



export const StaysContent = () => {
  const meses = months()
  const anios = years()
  return (
    <PageContent maxWRem={80}>
      <PageHeader>
        <div className='flex items-center gap-2 '>
          <label htmlFor="select-pending" className='hidden text-xs md:block md:text-lg'>Habitacion:</label>
          <select id='select-pending'className='border px-1.5 py-1 rounded-lg h-full border-neutral-300 cursor-pointer hover:opacity-80 text-sm md:text-lg shadow focus-within:ring-1  focus-within:ring-details'>
            <option value="" disabled>-- Cuarto --</option>
            {rooms.map( el => <option value={el} key={'select_room_'+el}>{el}</option>)}
          </select>
        </div>

        <div className='flex items-center gap-2 '> {/*Por defecto el actual*/}
          <label htmlFor="select-pending" className='hidden text-xs md:block md:text-lg'>Mes:</label>
          <select id='select-pending' className='border px-1.5 py-1 rounded-lg h-full border-neutral-300 cursor-pointer hover:opacity-80 text-sm md:text-lg shadow focus-within:ring-1 focus-within:ring-details'>
            {meses.map( (el,ix) => <option value={ix} key={'select_month_'+el}>{el}</option>)}
          </select>
        </div>

        <div className='flex items-center gap-2 '> {/*Por defecto el actual*/}
          <label htmlFor="select-pending" className='hidden text-xs md:block md:text-lg'>Año:</label>
          <select id='select-pending' className='border px-1.5 py-1 rounded-lg h-full border-neutral-300 cursor-pointer hover:opacity-80 text-sm md:text-lg shadow focus-within:ring-1 focus-within:ring-details'>
            {anios.map( el => <option value={el} key={'select_room_'+el}>{el}</option>)}
          </select>
        </div>

        <SearchButton/>
      </PageHeader>
      <div className='flex-1 '>  {/* History List se exporta  */}

        <StaysTable staysInfo={reservaciones}/>

      </div>

      <div className="mx-auto pb-1 md:pb-0">
        <Pagination/>
      </div>
      
      <DetailStay/>
    </PageContent>
  )
}
