import { PageContent, PageHeader, Pagination, SearchButton, TableFooter, TableHeader } from "../general"
import { CiSearch } from "react-icons/ci"
import { ClientsTableRow } from "./clients-table-row";
import { NewClientForm } from "./new-client-form";

const usuarios= [
  {
    id: 1,
    firstName: "Ricardo",
    lastName: "Pérez",
    typeDocument: "DNI",
    numberDocument: "72839405",
    flag: "🇵🇪",
    age: 28,
    rank: 1,
    banned: true // Este usuario está baneado
  },
  {
    id: 2,
    firstName: "Sofía",
    lastName: "Rodríguez",
    typeDocument: "Pasaporte",
    numberDocument: "A12345678",
    flag: "🇦🇷",
    age: 24,
    rank: 5
    // banned es opcional, así que aquí no lo incluimos
  },
  {
    id: 3,
    firstName: "Miguel",
    lastName: "Santos",
    typeDocument: "Cédula",
    numberDocument: "1.085.432-K",
    flag: "🇨🇴",
    age: 35,
    rank: 10,
    banned: true
  },
  {
    id: 4,
    firstName: "Elena",
    lastName: "García",
    typeDocument: "NIE",
    numberDocument: "X9876543Z",
    flag: "🇪🇸",
    age: 31,
    rank: 3
  },
  {
    id: 5,
    firstName: "Yuki",
    lastName: "Tanaka",
    typeDocument: "Pasaporte",
    numberDocument: "TK900211",
    flag: "🇯🇵",
    age: 22,
    rank: 8
  }
];

export const ClientsContent = () => {
  return (
    <PageContent maxWRem={70}>
      <PageHeader>
        <div className='flex items-center gap-2 border border-neutral-300 shadow rounded-lg overflow-hidden focus-within:ring-1 focus-within:ring-details '>
          <p className='bg-slate-200 h-full py-1 pl-2 pr-1 flex items-center'>
            <CiSearch className="mr-2"/>
            <select name="" id="">
              <option value="" disabled>-- Buscar Por --</option>
              <option value="">Nombre</option>
              <option value="">Documento</option>
            </select>
          </p>
          <input type="text" placeholder='Ingrese Nombre' className='outline-0 w-40 md:w-50 text-sm md:text-lg ' />
        </div>

        <SearchButton/>
      </PageHeader>

      <div className='flex-1 '>

        <TableHeader>
          <p className="w-[43%] md:w-[38%]">Nombre</p>
          <p className="w-[25%] md:w-[15%]">Documento</p>
          <p className="w-[10%] md:w-[15%]"><span className="hidden md:inline">Nacionalidad</span></p>
          <p className="md:w-[10%] hidden md:block">Edad</p>
          <p className="w-[10%] md:w-[12%]"><span className="hidden md:inline">Puntaje</span> ★</p>
          <p className='w-[12%] md:w-[10%]'>Info</p>
        </TableHeader>
        {
          // @ts-ignore
          usuarios.map((el,ix) => <ClientsTableRow key={'client_relation_row'+ix} {...el}/>)
        }

        <TableFooter/>

      </div>

      <div className="mx-auto pb-1 md:pb-0">
        <Pagination/>
      </div>
      
      <NewClientForm/>
      
    </PageContent>
  )
}
