import { ReactNode } from "react"
import { FaFilter, FaSearch } from "react-icons/fa"



interface FilterContainerProps {
  children: ReactNode
}
const FilterContainer = ({children}:FilterContainerProps) => {
  return (
    <div className='flex justify-start items-center py-2 px-2 md:px-4 gap-1.5 mdgap-2 rounded-xl overflow-hidden focus-within:ring-1 focus-within:ring-primary h-auto bg-white shadow border border-back-1'>
      {children}
    </div>
  )
}

interface FilterInputProps {
  id: string
  placeholder: string
}
export const FilterInput = ({id,placeholder}:FilterInputProps) => {
  return (
    <FilterContainer>
      <label htmlFor={id}><FaSearch  className="size-3 md:size-4 text-done-button-text" /></label>
      <input id={id} type="text" placeholder={placeholder} className='outline-0 text-base md:text-lg' />
    </FilterContainer>
  )
}

interface FilterSelectProps {
  id:string
  options: string[]
  label:string
}

export const FilterSelect = ({id,options,label}:FilterSelectProps) => {

  return (
    <FilterContainer>
      <label htmlFor={id} className='hidden  md:block'>{label}</label>
      <select id={id} className='h-full px-0 md:px-2 outline-0 font-bold md:text-lg'>
         {options.map( (el,ix) => <option key={'select_'+id+ix} value={el} className="text-xs font-normal" >{el}</option>)}
      </select>
    </FilterContainer>
  )
}

interface FilterSelectInputProps{
  id:string
  options: string[]
}

export const FilterSelectInput = ({id,options}:FilterSelectInputProps) => {

  return (
    <FilterContainer>
      <label htmlFor={id}><FaSearch  className="size-3 md:size-4 text-done-button-text hidden md:block" /></label>
      <select id={id} className='h-full px-0 md:px-2 outline-0 font-bold text-sm md:text-base'>
         {options.map( (el,ix) => <option key={'select_'+id+ix} value={el} className="text-xs md:text-sm font-normal" >{el}</option>)}
      </select>
      <input id={id} type="text" placeholder={'******'} className='outline-0 text-base md:text-lg  w-25 md:w-35' />
    </FilterContainer>
  )
}

export const SearchButton = () => {
  return (
    <button className="bg-white rounded-lg px-4 py-2 text-body font-bold flex items-center gap-2 hover:opacity-80 cursor-pointer transition-all duration-200 shadow h-full border border-back-1 ">
      <FaFilter  className="size-4"/> 
      <p className="hidden md:inline text-xl">Aplicar Filtros</p>
    </button>
  )
}