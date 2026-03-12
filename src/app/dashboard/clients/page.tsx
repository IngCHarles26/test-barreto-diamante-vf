import { ClientsContent, dialogClient, HeaderButton, NewClientForm, NewCountryForm, PageTitle } from "@/components";
import { getCacheCountries } from "@/lib/server";
import { FaPlus } from "react-icons/fa";

// documento, nombre
export default async function ClientsPage() {

  const countries = await getCacheCountries()
  
  return (
    <div className="h-full w-full flex flex-col">
      
      <PageTitle 
        title="Busqueda de Clientes"
        children={ 
          <HeaderButton target={dialogClient} Icon={FaPlus} textMobile="Nuevo" textDesktop="Cliente" />
          }  
      />

      <ClientsContent/>

      <NewClientForm countries={countries} />

      <NewCountryForm/>
      
    </div>
  );
} 