import { PageTitle, RoomsContent } from "@/components";
import { auth } from "@/lib";
import { headers } from "next/headers";

export default async function RoomsPage() {

  
  return (
    <div className="h-full w-full flex flex-col">
      
      <PageTitle  title="Relacion de Habitaciones"/>

      <RoomsContent/>
     
    </div>
  );
}