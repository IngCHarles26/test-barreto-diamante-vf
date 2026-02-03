import clsx from "clsx"
import { IconType } from "react-icons"

interface InputContainerProps {
  label: string
  Icon: IconType
  type: 'select' | 'text' | 'number' | 'date' | 'datetime-local' | 'password'
  inputId: string
  className?: string
  placeHolder?: string
  selectData?: string[]
  value?: string
  onChange?: () => void
}

export const InputApp = ({Icon,className,label,inputId,placeHolder,type,selectData,value,onChange}:InputContainerProps) => {
  
  return (
    <div className={clsx("flex flex-col gap-1.5 md:gap-2 text-gray-05",className)}>
      <label htmlFor={inputId} className='text-sm md:text-base text-body'>{label}</label>
      <div className='flex items-center gap-2 border border-white-04 shadow rounded focus-within:ring-1 focus-within:ring-primary focus-within:text-primary'>

        <Icon className='size-7 md:size-9 px-1.5 md:px-2.5'/>
        
        {type == 'select'
          ? <select 
              id={inputId} 
              // value={value}
              // onChange={() => null }
              className='w-full outline-0 cursor-pointer md:text-lg'
            >
              {/* <option value="" disabled>-- Cuarto --</option> */}
              {selectData?.map( (el,ix) => <option key={'select_'+inputId+ix} value={el} >{el}</option>)}
            </select>

          : <input 
              id={inputId} 
              type={type} 
              placeholder={placeHolder} 
              // value={value}
              // onChange={() => null }
              className='outline-0 text-sm md:text w-full md:text-lg' />
        }
      </div>
    </div>
  )
}

