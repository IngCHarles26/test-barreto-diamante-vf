import Image from "next/image"
import { Room, RoomProps } from './room';
import { Fragment } from "react/jsx-runtime";

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
      {number: 101, top: 20, left: 33, status: 'free', },
      {number: 102, top: 33, left: 63, status: 'busy', },
      {number: 103, top: 58, left: 57, status: 'reserved', disabled: true},
      {number: 104, top: 77, left: 34, status: 'free', },
      {number: 105, top: 80, left: 67, status: 'reserved', },
    ]
  },
  {
    id: 'piso2',
    src: '/plano_prueba.jpg',
    name: 'Piso 2',
    rooms:[
      {number: 201, top: 20, left: 33, status: 'free', },
      {number: 202, top: 33, left: 63, status: 'busy', },
      {number: 203, top: 58, left: 57, status: 'free', },
      {number: 204, top: 77, left: 34, status: 'reserved', },
      {number: 205, top: 80, left: 67, status: 'busy', },
    ]
  },
  {
    id: 'piso3',
    src: '/plano_prueba.jpg',
    name: 'Piso 3',
    rooms:[
      {number: 201, top: 20, left: 33, status: 'free', },
      {number: 202, top: 33, left: 63, status: 'free', },
      {number: 203, top: 58, left: 57, status: 'free', },
      {number: 204, top: 77, left: 34, status: 'free', },
      {number: 205, top: 80, left: 67, status: 'free', disabled: true },
    ]
  },
]

const __html = pisos.map( ({id}) => `
  .peer\\/${id}:checked ~ div.peer-checked\\/${id}\\:block { display: block; } 
  body:has(#${id}:checked) label[for="${id}"] { background: #137fec; color: white; }`).join('')


export const RoomMap = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-4 ">

      <div className="flex w-full justify-center gap-3 mb-3">
        <div className="flex items-center gap-1">
          <div className="size-2 rounded bg-green-500"/>
          <p className="text-xs">Libre</p>
        </div>
        <div className="flex items-center gap-1">
          <div className="size-2 rounded bg-blue-500"/>
          <p className="text-xs">Separado</p>
        </div>
        <div className="flex items-center gap-1">
          <div className="size-2 rounded bg-red-500"/>
          <p className="text-xs">Ocupado</p>
        </div>
        <div className="flex items-center gap-1">
          <div className="size-2 rounded bg-background-dark"/>
          <p className="text-xs">No Disponible</p>
        </div>
      </div>
      
      <div className="relative w-full max-w-lg  p-6 min-h-150">

        {
          pisos.map( ({id,rooms,src},ixFloor) => (
            <Fragment key={'floor_'+ixFloor}>
              <input type="radio" id={id} name="piso-selector" className={`hidden peer/${id}`} defaultChecked={ixFloor == 0}/>
              <div className={`hidden peer-checked/${id}:block animate-in fade-in zoom-in-95 duration-300`}>
                <Image 
                  src={src}
                  alt={`imagen fondo piso`} 
                  fill 
                  className='object-contain image-room-map'
                />

                {rooms.map( (data,ixRoom) => (<Room {...data} key={`room_piso_${ixFloor}_${ixRoom}`}/>))}
              </div>
            </Fragment>
          ))
        }
        
      </div>

      <div className="mt-6 flex p-1 bg-blue-50/50 rounded-xl border border-primary w-fit">
        {
          pisos.map(({id,name},ix) => (        
          <label 
            className={`px-4 py-2 text-sm font-medium rounded-lg cursor-pointer transition-all peer-checked/${id}:bg-white peer-checked/${id}:shadow-md peer-checked/${id}:text-blue-600 hover:bg-primborder-primary/50 text-gray-500`}
            htmlFor={id} key={'label_'+ix}>
            {name}
          </label>))
        }
      </div>

      <style dangerouslySetInnerHTML={{ __html}} />

    </div>
  )
}
