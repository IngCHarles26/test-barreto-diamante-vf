import { format0 } from "@/lib"
import clsx from "clsx"
import Link from "next/link"

interface Props{
  day: number
  aprobed: boolean
  total: number
}

export const DayCalendarCard = ({day,aprobed,total}:Props) => {
  const [text,style] = aprobed 
              ? ['aprobado','text-in-client bg-in-client/10']
              : ['observado','text-orange-1 bg-orange-1/10']
  
  return (
    <Link href={'/dashboard/reports/daily/1'}>
      <div className="rounded-xl border-border-sidebar shadow-lg px-3 py-2">
        <div className="flex flex-col items-end 2xl:flex-row 2xl:items-center 2xl:justify-between mb-3">
          <p className="text-done-button-text text-3xl md:text-5xl  2xl:text-7xl ">{format0(day)}</p>
          <p className={clsx("px-2 py-1 text-sm rounded-lg capitalize", style)}>
            {text}
          </p>
        </div>
        <p className="text-gray-10 text-xs md:text-sm 2xl:text-base">
          INGRESOS <span className="hidden md:inline">TOTALES</span>:
        </p>
        <p className="text-primary text-xl font-bold">S/ {total}</p>
      </div>
    </Link>
  )
}
