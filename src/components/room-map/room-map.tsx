'use client'

import Image from "next/image"
import { RoomButton } from './room-button';
import { RoomLegend } from "./room-legend";
import { useState } from "react";
import { Room } from "@/generated/prisma/browser";


const legend = [
  {color: 'bg-green-500' , label: 'Libre' },
  {color: 'bg-blue-500' , label: 'Separado' },
  {color: 'bg-orange-500' , label: 'Ocupado' },
  {color: 'bg-background-dark' , label: 'No Disponible' },
]


interface Props {
  floors: {  number: number
    name: string
    src: string
    rooms: Room[]}[]
}


export const RoomMap = ({ floors }:Props) => {

  const [floorMap, setFloorMap] = useState(0);
  const {rooms,src} = floors[floorMap]
  
  return (
    <div className="w-full h-full md:w-auto md:h-full md:max-h-180 2xl:max-h-250 min-h-150 flex flex-col items-center justify-between gap-4 md:sticky md:top-10 ">

      <div className="flex w-full justify-center gap-2">
        { legend.map( (el,ix) => <RoomLegend key={'room-legend-'+ix} {...el}/>) }
      </div>

      <div className="relative h-full aspect-9/20 ">

        <div className={` w-full h-full `}>

          <Image src={src}alt='imagen fondo piso' fill />

          { rooms.map( data => <RoomButton key={`room_piso_${data.number}`} {...data} />) }
          
        </div>

      </div>

      <div className="flex items-center gap-2 p-1 bg-back-1 rounded-xl ">
        {
          floors.map( ({number,name}) => (
            <button 
              key={'floor_button'+number}
              onClick={() => setFloorMap(number-1)} 
              className={`px-2 py-1 rounded-lg text-2xl ${floorMap == (number-1) && 'bg-primary/80 text-white font-bold'}`}
            >{name}</button>
          ))
        }
      </div>

    </div>
  )
}