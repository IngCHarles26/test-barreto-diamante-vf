import { ReactNode } from "react"
import { NumRows, Pagination } from "./pagination"

interface Props {
  children: ReactNode
  pagination?: true
}

export const TableApp = ({children,pagination}:Props) => {
  return (
    <div className='shadow mb-5 rounded-xl md:rounded-2xl flex flex-col overflow-hidden'>
      {children}
      {pagination &&
        <div className="w-full px-2 py-3 flex justify-between items-center border-t border-t-done-button-bg">
          <NumRows/>
          <Pagination/>
        </div>
      }
    </div>
  )
}

export const TableHeader = ({children}:Props) => {
  return (
    <div className='w-full bg-bg-sidebar flex gap-1 items-center text-done-button-text py-3 md:py-4 rounded-t-xl md:rounded-t-2xl px-3 md:px-4 font-extrabold text-base md:text-lg mb-2 uppercase sticky top-0'>
      {children}
    </div>
  )
}


export const TableRow = ({children}:Props) => {
  return (
    <div className='w-full flex gap-1 border-x px-2 py-1.5 lg:py-2 md:px-3 border-bg-sidebar items-center text-body hover:bg-bg-sidebar'>
      {children}
    </div>
  )
}











export const TableSeparator = () => {
  return (
    <div className='w-full border-x h-1.5 border-bg-sidebar'/>
  )
}
export const TableFooter = () => {
  return (
    <div className='w-full border-x border-b rounded-b-lg h-1.5 border-bg-sidebar'/>
  )
}

