import { DailyResumeContent, PageTitle } from "@/components";
import { FaCalendarDay } from "react-icons/fa";

export default function DailyPage() {
  return (
    <div className="h-full w-full flex flex-col">
      
      <PageTitle 
        title="Flujo diario de caja"
        subTitle="Revisa todos los ingresos de dinero del dia"
        children={<div className=" text-done-button-text  font-extrabold flex items-center gap-1 md:gap-2">
            <FaCalendarDay className="size-6 md:size-9" />
            <p className="text-xl md:text-3xl">10/12/2026</p>
          </div>}
      />

      <DailyResumeContent/>

    </div>
  );
}