import { PageTitle, RoomsContent } from "@/components";

export default function RoomsPage() {
  return (
    <div className="h-full w-full flex flex-col">
      
      <PageTitle  title="Relacion de Habitaciones"/>

      <section className="flex-1">

        <RoomsContent/>
        
      </section>
     
    </div>
  );
}