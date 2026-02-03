import { ActivesContent, HeaderButton, PageTitle } from "@/components";
import { FaPlus } from "react-icons/fa";

export default function ActivesPage() {
  return (
    <div className="h-full w-full flex flex-col">
        
      <PageTitle  
        title="Activos en Habitaciones"
        children={<HeaderButton target="form-create-active" Icon={FaPlus} textMobile="Nuevo" textDesktop="Activo" />}
      />

      <ActivesContent/>
        
    </div>
  );
}