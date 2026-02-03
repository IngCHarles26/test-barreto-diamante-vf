import { PageTitle, StaysContent } from "@/components";

export default function HistoryStaysPage() {
  return (
    <div className="h-full w-full flex flex-col">
      
      <PageTitle  
        title="Historial de Estadias"
        subTitle="Visualice y filtre las estadias del hotel"
      />

      <StaysContent/>
        
    </div>
  );
}