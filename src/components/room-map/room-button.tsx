import { Room } from "@/generated/prisma/browser"
import { useStayStore } from "@/store/stay-store"
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

export const RoomButton = ({number,posH,posW,active,status}:Room) => {

  const { setCurrentRoom } = useStayStore( st => st )

  return (
    <div 
      style={{top:`${posH}%`,left:`${posW}%`}}
      className={clsx(
        'absolute -translate-x-1/2 -translate-y-1/2 animate-in fade-in duration-300 px-3 py-1.5 rounded-lg font-bold text-white text-xl',
        active 
          ? `${styleStatus[status]} cursor-pointer hover:opacity-80` 
          : 'bg-background-dark cursor-not-allowed')
      }
      onClick={() => setCurrentRoom(number)}
    >
      <span>{number}</span>
    </div>
  )
}
