import { FaCalendarDay } from "react-icons/fa"

export const SelectDay = () => {
  return (
    <div className="bg-bg-sidebar rounded-2xl px-4 py-2  flex items-center gap-2">
      <FaCalendarDay className="size-6 text-done-button-text"/> 
      <label htmlFor="input-day-report" className="hidden md:block text-body text-lg font-bold">Fecha de Reporte:</label>
      <input id="input-day-report" type="date" className="text-primary text-lg md:text-xl"/>
    </div>
  )
}
