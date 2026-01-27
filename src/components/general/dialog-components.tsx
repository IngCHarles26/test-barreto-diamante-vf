import { JSX, ReactNode } from "react"
import { IconType } from "react-icons"
import { FaSave } from "react-icons/fa"

interface CenterDialogProps {
  id: string
  children: JSX.Element
}
export const CenterDialog = ({id,children}:CenterDialogProps) => {
  return (
    <dialog 
      className="p-0 rounded-lg shadow-2xl border-none backdrop:bg-body/80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      id={id} popover="auto" 
    >
      {children}
    </dialog>
  )
}



interface DialogFooterSaveProps {
  id:string
}
export const DialogFooterSave = ({id}:DialogFooterSaveProps) => {
  return (
    <div className='p-3 flex justify-end items-center gap-4 mt-2'>
      <p className=' mr-auto text-xs text-danger'>Mensaje de error</p>
      
      <button popoverTarget={id} className='px-3 py-1.5 bg-neutral-200 rounded-lg shadow text-neutral-600 hover:opacity-80 transition-all duration-300 cursor-pointer'>
        Cancelar
      </button>

      <button className='px-3 py-1.5 bg-details rounded-lg shadow text-white hover:opacity-80 transition-all duration-300 cursor-pointer flex gap-3 items-center'>
        <FaSave />
        Guardar
      </button>

    </div>
  )
}


interface DialogContentProps {
  children: ReactNode
  maxWRem: number
}
export const DialogContent = ({children,maxWRem}:DialogContentProps) => {
  return (
    <div className='flex flex-col gap-1 w-[95dvw] text-body shadow-xl'
      style={{maxWidth: maxWRem+'rem'}}>
      {children}
    </div>
  )
}



interface DialogHeaderProps {
  Icon: IconType
  title: string
  subTitle: string
  children?: ReactNode
}
export const DialogHeader = ({Icon,title,subTitle,children}:DialogHeaderProps) => {
  return (
    <div className='bg-details w-full p-3 border-b border-gray-300 flex items-center gap-3 text-white mb-2'>
      <Icon  className='size-10 md:size-13 bg-back-white text-details px-2 rounded-lg'/>
      <div>
        <p className='text-xl md:text-2xl font-bold '>{title}</p>
        <p className='hidden md:block text-sm text-back-1'>{subTitle}</p>
      </div>

      <div className='ml-auto flex flex-col items-end'>
        {children}
      </div>
    </div>
  )
}
