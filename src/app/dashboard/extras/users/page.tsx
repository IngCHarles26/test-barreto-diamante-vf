import { HeaderButton, PageTitle, UsersContent } from "@/components";
import { FaPlus } from "react-icons/fa";

export default function UsersPage() {
  return (
    <div className="h-full w-full flex flex-col">
        
      <PageTitle  
        title="Usuarios"
        children={<HeaderButton target="new-user" Icon={FaPlus} textMobile="Nuevo" textDesktop="Usuario" />}
      />

      <section className="flex-1 ">

        <UsersContent/>
        
      </section>
        
    </div>
  );
}