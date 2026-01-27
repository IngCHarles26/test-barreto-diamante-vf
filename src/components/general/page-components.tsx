import { JSX, ReactNode } from "react"
import { MdOutlineSearch } from "react-icons/md"
import { IconType } from 'react-icons'

interface Props {
  target: string
  textMobile: string
  textDesktop: string
  Icon: IconType
}

export const HeaderButton = ({target,textDesktop,textMobile,Icon}:Props) => {
  return (
    <button popoverTarget={target}
      className="cursor-pointer hover:opacity-80 bg-primary rounded-lg px-3 py-2 text-back-white font-bold text-xs md:text-sm flex items-center gap-1 transition-all duration-200"
      >
      <Icon/>
        {textMobile}
      <span className="hidden md:inline"> {textDesktop}</span>
    </button>
  )
}


export const SearchButton = () => {
  return (
    <button popoverTarget="form-create-reservation" className="bg-back-header rounded-lg px-4 py-2 text-body font-bold text-xs md:text-sm flex items-center gap-2 hover:opacity-80 cursor-pointer transition-all duration-200">
      <MdOutlineSearch className="size-4"/> 
      <span className="hidden md:inline"> Buscar</span>
    </button>
  )
}


interface PageTitleProps {
  title: string
  children?: JSX.Element
}

export const PageTitle = ({title,children}:PageTitleProps) => {
  return (
    <header className="w-full px-2 md:px-3 py-2 flex justify-between items-center shadow">
      <p className="text-2xl md:text-3xl text-title font-bold">{title}</p>

      {children}
    </header>
  )
}

interface PageContentProps {
  children: ReactNode
  maxWRem: number
}

export const PageContent = ({children,maxWRem}:PageContentProps) => {
  return (
    <section className='w-full mx-auto h-full p-2 md:p-3 flex flex-col text-body justify-end'
      style={{maxWidth: maxWRem+'rem'}}
    >
      {children}
    </section>
  )
}

interface PageHeaderProps {
  children: ReactNode
}

export const PageHeader = ({children}:PageHeaderProps) => {
  return (
    <header className='flex w-full mb-4 text-sub-title gap-3'>
      {children}
    </header>
  )
}
