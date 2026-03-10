import { ClientsContent, HeaderButton, NewClientForm, NewCountryForm, PageTitle } from "@/components";
import { getCacheCountries } from "@/lib/server";
import { FaPlus } from "react-icons/fa";

// documento, nombre
export default async function ClientsPage() {

  const dialogClient = 'form-new-client'
  const dialogCountry = 'form-new-country'

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

      <NewClientForm dialogId={dialogClient} dialogNewCountry={dialogCountry} countries={countries} />

      <NewCountryForm dialogId={dialogCountry} dialogClient={dialogClient}/>
      
    </div>
  );
} 