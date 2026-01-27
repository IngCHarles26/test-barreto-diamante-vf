import { ClientsContent, HeaderButton, PageTitle } from "@/components";
import { FaPlus } from "react-icons/fa";


// documento, nombre
export default function ClientsPage() {
  return (
    <div className="h-full w-full flex flex-col">
      
      <PageTitle 
        title="Relacion de Clientes"
        children={ 
          <HeaderButton target={"form-new-client"} Icon={FaPlus} textMobile="Nuevo" textDesktop="Cliente" />
          }  
      />

      <section className="flex-1 ">
        
        <ClientsContent/>
        
      </section>
      
    </div>
  );
} 