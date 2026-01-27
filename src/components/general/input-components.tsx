import clsx from "clsx"
import { JSX, ReactNode } from "react"
import { IconType } from "react-icons"
import { FaAddressBook, FaCalendarAlt, FaUser } from "react-icons/fa"

interface InputContainerProps {
  label: string
  Icon: IconType
  type: 'select' | 'text' | 'number' | 'date' | 'datetime-local' | 'password'
  inputId: string
  className?: string
  placeHolder?: string
  selectData?: string[]
}

export const InputApp = ({Icon,className,label,inputId,placeHolder,type,selectData}:InputContainerProps) => {
  return (
    <div className={clsx("flex flex-col gap-1.5 md:gap-2 text-sub-title",className)}>
      <label htmlFor={inputId} className='text-sm text-body'>{label}</label>
      <div className='flex items-center gap-2 border border-back-header shadow rounded focus-within:ring-1 focus-within:ring-details focus-within:text-details'>

        <Icon className='size-7 px-1.5 '/>
        
        {type == 'select'
          ? <select id={inputId} className='w-full outline-0 cursor-pointer text-sub-title'>
              {/* <option value="" disabled>-- Cuarto --</option> */}
              {selectData?.map( (el,ix) => <option key={'select_'+inputId+ix} value={el} >{el}</option>)}
            </select>

          : <input id={inputId} type={type} placeholder={placeHolder} className='outline-0 text-sm md:text w-full text-sub-title' />
        }
      </div>
    </div>
  )
}

