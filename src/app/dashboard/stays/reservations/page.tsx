import { HeaderButton, PageTitle, ReservationsContent } from "@/components";
import { FaPlus } from "react-icons/fa";

export default function ReservationsPage() {
  return (
    <div className="h-full w-full flex flex-col">
      
      <PageTitle 
        title="Reservaciones"
        children={ 
          <HeaderButton target={"form-create-reservation"} Icon={FaPlus} textMobile="Nueva" textDesktop="Reservacion" />
          }  
      />

      <section className="flex-1 ">

        <ReservationsContent/>
        
      </section>
     
    </div>
  );
}