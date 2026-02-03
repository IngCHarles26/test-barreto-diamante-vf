import Image from "next/image"
import { Room, RoomProps } from './room';
import { Fragment } from "react/jsx-runtime";
import { RoomLegend } from "./room-legend";

interface Floor {
  id: string
  src: string
  name: string,
  rooms: RoomProps[]
}

const pisos:Floor[] = [
  {
    id: 'piso1',
    src: '/plano_prueba.jpg',
    name: 'Piso 1',
    rooms: [
      {number: 101, top: 19, left: 29, status: 'free', },
      {number: 102, top: 36, left: 67, status: 'busy', },
      {number: 103, top: 57, left: 57, status: 'reserved', disabled: true},
      {number: 104, top: 74, left: 25, status: 'free', },
      {number: 105, top: 77, left: 72, status: 'reserved', },
    ]
  },
  {
    id: 'piso2',
    src: '/plano_prueba.jpg',
    name: 'Piso 2',
    rooms:[
      {number: 201, top: 19, left: 29, status: 'free', },
      {number: 202, top: 36, left: 67, status: 'busy', },
      {number: 203, top: 57, left: 57, status: 'free', },
      {number: 204, top: 74, left: 25, status: 'reserved', },
      {number: 205, top: 77, left: 72, status: 'busy', },
    ]
  },
  {
    id: 'piso3',
    src: '/plano_prueba.jpg',
    name: 'Piso 3',
    rooms:[
      {number: 201, top: 19, left: 29, status: 'free', },
      {number: 202, top: 36, left: 67, status: 'free', },
      {number: 203, top: 57, left: 57, status: 'free', },
      {number: 204, top: 74, left: 25, status: 'free', },
      {number: 205, top: 77, left: 72, status: 'free', disabled: true },
    ]
  },
]

const __html = pisos.map( ({id}) => `
  .peer\\/${id}:checked ~ div.peer-checked\\/${id}\\:block { display: block; } 
  body:has(#${id}:checked) label[for="${id}"] { background: #fff; color: #0d5caf; font-weight: bold; }`).join('')

const legend = [
  {color: 'bg-green-500' , label: 'Libre' },
  {color: 'bg-blue-500' , label: 'Separado' },
  {color: 'bg-orange-500' , label: 'Ocupado' },
  {color: 'bg-background-dark' , label: 'No Disponible' },
]


export const RoomMap = () => {
  return (
    <div className="w-full h-full md:w-auto md:h-full max-h-250 min-h-150 flex flex-col md:flex-col-reverse items-center justify-between gap-2">

      <div className="flex w-full justify-center gap-2">
        {legend.map( (el,ix) => <RoomLegend key={'room-legend-'+ix} {...el}/>)}
      </div>

      <div className="relative h-full aspect-11/20 ">

          {
            pisos.map( ({id,rooms,src},ixFloor) => (
              <Fragment key={'floor_'+ixFloor}>
                <input type="radio" id={id} name="piso-selector" className={`hidden peer/${id}`} defaultChecked={ixFloor == 0}/>
                <div className={`hidden peer-checked/${id}:block w-full h-full `}>
                  <Image 
                    src={src}
                    alt={`imagen fondo piso`} 
                    fill 
                    className=''
                  />

                  {rooms.map( (data,ixRoom) => (<Room {...data} key={`room_piso_${ixFloor}_${ixRoom}`}/>))}
                </div>
              </Fragment>
            ))
          }

      </div>

      <div className="flex p-1 bg-back-1 rounded-xl  w-fit">
        {
          pisos.map(({id,name},ix) => (        
          <label 
            className={`px-3 py-1.5 text-lg md:text-base rounded-lg cursor-pointer transition-all hover:opacity-80 text-sub-title`}
            htmlFor={id} key={'label_'+ix}>
            {name}
          </label>))
        }
      </div>

      <style dangerouslySetInnerHTML={{ __html}} />

    </div>
  )
}


