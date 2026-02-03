import { FilterSelect, FilterSelectInput, PageContent, PageHeader, Pagination, SearchButton, TableApp, TableFooter, TableHeader } from "../general"
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
    country: 'Peru',
    age: 28,
    rank: 1.5,
    banned: true // Este usuario está baneado
  },
  {
    id: 2,
    firstName: "Sofía",
    lastName: "Rodríguez",
    typeDocument: "Pasaporte",
    numberDocument: "A12345678",
    flag: "🇦🇷",
    country:'Argentina',
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
    country:'Colombia',
    age: 35,
    rank: 4.3,
    banned: true
  },
  {
    id: 4,
    firstName: "Elena",
    lastName: "García",
    typeDocument: "NIE",
    numberDocument: "X9876543Z",
    flag: "🇪🇸",
    country:'España',
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
    country:'Japon',
    age: 22,
    rank: 4.3
  }
];

export const ClientsContent = () => {
  return (
    <PageContent>
      <PageHeader>

        <FilterSelectInput
          id='select-type-client-search' 
          options={['nombre','documento']} 
        />
        <FilterSelect 
          id='select-type-country' 
          label='Pais:' 
          options={['Peru','Bolivia','Camerun']} 
        />

        <SearchButton/>
      </PageHeader>

      <TableApp pagination>

        <TableHeader>
          <p className="w-[50%] md:w-[38%]">Nombre</p>
          <p className="w-[10%] md:w-[15%]"><span className="hidden md:inline">PAIS</span></p>
          <p className="w-[30%] md:w-[15%]">Documento</p>
          <p className="md:w-[10%] hidden md:block">Edad</p>
          <p className="md:w-[12%] text-center hidden md:block">Puntaje</p>
          <p className='w-[10%] md:w-[10%] text-center'>Info</p>
        </TableHeader>

        {
          // @ts-ignore
          usuarios.map((el,ix) => <ClientsTableRow key={'client_relation_row'+ix} {...el}/>)
        }

        <TableFooter/>

      </TableApp>

      <NewClientForm/>
      
    </PageContent>
  )
}
