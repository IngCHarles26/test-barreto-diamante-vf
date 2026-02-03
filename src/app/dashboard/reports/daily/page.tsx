import { CalendarReportContent, PageTitle } from "@/components";



export default function ReportsPage() {
  return (
    <div className="h-full w-full flex flex-col">
          
      <PageTitle 
        title="Archivo de Rendiciones"
        subTitle="Ingresa el mes y año para ver los reportes del mes"
      />

      <CalendarReportContent/>

    </div>
  );
}