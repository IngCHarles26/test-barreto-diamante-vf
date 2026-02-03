import { FaPlus, FaSearch } from "react-icons/fa"
import { FilterSelectInput } from "../general"
import { NewClientForm } from "../clients/new-client-form"
import { RoomStayTableRow } from "./room-stay-table-row";

const personas = [
  {
    dateStart: new Date('2026-02-10T08:00:00'),
    dateEnd: new Date('2026-02-15T18:00:00'),
    name: "Facundo Melgar",
    flag: "🇦🇷", // Argentina
    age: 29,
    document: 38445566,
    typeDocument: "DNI"
  },
  {
    dateStart: new Date('2026-03-05T09:00:00'),
    dateEnd: new Date('2026-03-10T17:00:00'),
    name: "Isabella Silva",
    flag: "🇧🇷", // Brasil
    age: 24,
    document: 99887711,
    typeDocument: "CPF"
  },
  {
    dateStart: new Date('2026-04-12T10:30:00'),
    dateEnd: new Date('2026-04-20T19:00:00'),
    name: "Carlos Huamán",
    flag: "🇵🇪", // Perú
    age: 35,
    document: 45778822,
    typeDocument: "DNI"
  },
  {
    dateStart: new Date('2026-05-15T08:00:00'),
    dateEnd: new Date('2026-05-17T20:00:00'),
    name: "Mateo Iturra",
    flag: "🇨🇱", // Chile
    age: 31,
    document: 18443322,
    typeDocument: "RUT"
  },
  {
    dateStart: new Date('2026-06-01T07:00:00'),
    dateEnd: new Date('2026-06-05T22:00:00'),
    name: "Sofía Martínez",
    flag: "🇲🇽", // México
    age: 27,
    document: 77665500,
    typeDocument: "INE"
  }
];

export const RoomStayTable = () => {
  return (
    <div className="shadow w-full rounded-xl">
    
      <div className="w-full bg-bg-sidebar flex px-3 md:px-5 py-2 items-center justify-between">
        <div className="flex items-center gap-2">
          <p className="bg-primary/10  px-4 py-2 rounded-xl text-primary text-4xl font-bold">4</p>
          <p className="font-bold text-xl md:text-2xl text-body hidden md:block">Clientes</p>
        </div>

        <div className="flex items-center gap-2 h-10 md:h-11">
          <FilterSelectInput
            id="select_type_document_stay"
            options={['DNI','PAS.','C.E.']}
          />
          <button className="bg-sub-title text-white px-4 rounded-xl font-bold text-base md:text-xl flex items-center gap-1 h-full">
            <FaSearch className="size-4"/>
            <span className="hidden md:block">Buscar</span>
          </button>

          <button popoverTarget="form-new-client" className="bg-primary text-white px-4 rounded-xl font-bold text-base md:text-xl flex items-center gap-1 h-full">
            <FaPlus className="size-4"/>
            <span className="hidden 2xl:block">Nuevo</span>
          </button>

          <NewClientForm/>
        </div>
        
      </div>

      <div className="flex flex-col gap-2">

        <div className="flex items-center font-extrabold text-base md:text-lg border-b border-border-sidebar p-3 md:p-4 text-done-button-text gap-2 uppercase">
          <p className="w-[17%]">Llegada</p>
          <p className="w-[43%]">Nombres</p>
          <p className="w-[25%]">Documento</p>
          <p className="w-[15%]">Salida</p>
        </div>

        {personas.map((el,ix) => <RoomStayTableRow key={'row-table-client-data-stay'+el.document} {...el}/>)}

      </div>

    </div>
  )
}
