import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export const TableHeader = ({children}:Props) => {
  return (
    <div className='w-full bg-details flex gap-1 items-center text-hover-back-1 py-1.5 rounded-t-lg border border-back-header   text-center font-bold '>
      
      {children}
    </div>
  )
}

export const TableSeparator = () => {
  return (
    <div className='w-full border-x h-1.5 border-back-header'/>
  )
}


export const TableRow = ({children}:Props) => {
  return (
    <div className='w-full flex gap-1 border-x py-1 border-back-header items-center text-body hover:bg-back-1'>
      {children}
    </div>
  )
}

export const TableFooter = () => {
  return (
    <div className='w-full border-x border-b rounded-b-lg h-1.5 border-back-header'/>
  )
}

