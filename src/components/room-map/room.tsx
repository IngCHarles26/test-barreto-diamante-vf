import clsx from "clsx"

export interface RoomProps {
  number: number
  top: number
  left: number
  status: 'free' | 'busy' | 'reserved'
  disabled?: true
}

const styleStatus = {
  free: 'bg-green-500',
  busy: 'bg-orange-500',
  reserved: 'bg-blue-500',
}

export const Room = ({number,top,left,disabled,status}:RoomProps) => {
  return (
    <div 
      style={{top:`${top}%`,left:`${left}%`}}
      className={clsx('absolute -translate-x-1/2 -translate-y-1/2 animate-in fade-in duration-300 px-3 py-1.5 rounded-lg font-bold text-white ',
        !disabled 
          ? `${styleStatus[status]} cursor-pointer hover:opacity-80` 
          : 'bg-background-dark cursor-not-allowed')}
    >
      <span>{number}</span>
    </div>
  )
}
