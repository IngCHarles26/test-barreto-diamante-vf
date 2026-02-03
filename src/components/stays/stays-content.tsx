import { months, years } from "@/lib"
import { FilterSelect, PageContent, PageHeader, SearchButton } from "../general"
import { DetailStay } from "./detail-stay"
import { StaysTable } from "./stays-table"


export const reservaciones = [
  {
    names: [["Ricardo Guarino", "🇵🇪"], ["Sofía Across Teller", "🇦🇷"]],
    room: 102,
    start: new Date('2026-05-10T14:00:00'),
    end: new Date('2026-05-15T11:00:00'),
    price: 50,
    user: "admin_user",
    stars: 5
  },
  {
    names: [["Elena Benfica T. 👶", "🇪🇸"]],
    room: 205,
    start: new Date('2026-06-01T15:00:00'),
    end: new Date('2026-06-07T10:00:00'),
    price: 80,
    user: "travel_fan",
    stars: 4
  },
  {
    names: [["Mateo Pumacahua", "🇲🇽"], ["Carla Tarazona", "🇨🇴"]],
    room: 310,
    start: new Date('2026-07-20T12:00:00'),
    end: new Date('2026-07-25T10:00:00'),
    price: 40,
    user: "guest_99",
    stars: 5
  },
  {
    names: [["Yuki Stary Twich", "🇯🇵"]],
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
    <PageContent maxWRem={110}>
      <PageHeader>
        <FilterSelect
          id='select-stays-room' 
          label='Habitacion:' 
          options={['101','102','103']} 
        />
        <FilterSelect
          id='select-stays-month' 
          label='Mes:' 
          options={meses} 
        />
        <FilterSelect
          id='select-stays-year' 
          label='Año:' 
          options={anios} 
        />


        <SearchButton/>
      </PageHeader>

      <StaysTable staysInfo={reservaciones}/>
      
      <DetailStay/>
      
    </PageContent>
  )
}
