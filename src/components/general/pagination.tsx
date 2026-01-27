import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'


const number = 10

export const Pagination = () => {
  
  return (
    <div className='flex gap-2 items-center h-8  '>
      <FaChevronLeft className='border px-2 py-1 rounded-lg w-7 h-full text-body border-back-header cursor-pointer hover:border-details'/>

      <select className='border pl-3 pr-1 rounded-lg h-full text-neutral-500 border-neutral-300 cursor-pointer hover:opacity-80 text-sm md:text-[1rem] shadow focus-within:ring-1 focus-within:ring-details hover:border-details '>
        {
          Array.from({length:number}, (_,ix) => <option value={+ix+1} key={'page_'+ix}>Pagina {+ix+1}</option>)
        }
      </select>

      <FaChevronRight className='border px-2 py-1 rounded-lg w-7 h-full text-body border-back-header cursor-pointer hover:border-details'/>
    </div>
  )
}
