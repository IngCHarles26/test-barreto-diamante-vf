import { PageTitle, StaysContent } from "@/components";

export default function HistoryStaysPage() {
  return (
    <div className="h-full w-full flex flex-col">
      
      <PageTitle  title="Historial de Estadias"/>

      <section className="flex-1">
        
        <StaysContent/>
        
      </section>
     
    </div>
  );
}