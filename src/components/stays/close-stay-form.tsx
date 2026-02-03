'use client'

import { FaRegStar, FaStar } from 'react-icons/fa'
import { CenterDialog } from '../general'
import { FaPersonWalkingLuggage } from 'react-icons/fa6'
import { useState } from 'react'
import clsx from 'clsx'


export const CloseStayForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <CenterDialog id='close-stay-form'>
      <div className="p-6 w-100 bg-background-light flex flex-col items-center gap-2">

        <FaPersonWalkingLuggage    className="size-18   p-4.5 rounded-full mb-4 text-white bg-primary"/>
        
        <p className="text-xl font-bold capitalize">
          ¿Deseas Finalizar la Estadia?
        </p>
        <p className="text-gray-600 mb-6 text-center">
          Llene los siguientes campos para finalizar 
        </p>

        <div className='w-full flex items-center justify-between'>
          <p className='text-done-button-text font-bold text-lg'>Ingresa la puntuacion:</p>

          <div className='flex'>
            {
              [1,2,3,4,5].map((el) => 
              <button 
                key={'star_button_'+el}
                onClick={()=>setRating(el)}
                onMouseEnter={()=>setHover(el)}
                onMouseLeave={()=>setHover(0)}
              >
                {(hover>=el || rating>=el) 
                  ? <FaStar    className='size-6 text-stars'/> 
                  : <FaRegStar className='size-6 text-done-button-text'/>}
              </button>)
            }
          </div>

        </div>

        <div className='flex justify-start flex-col w-full mt-2 gap-2'>
          <label htmlFor="text-stay-coments" className='text-done-button-text font-bold text-lg text-left'>Observaciones:</label>
          <textarea id='text-stay-coments'  placeholder='Comentarios .... ' rows={6} className='w-full shadow rounded focus-within:ring-1 focus-within:ring-primary outline-none border border-neutral-300 resize-none p-1'/>

        </div>

        <div>

        </div>
        
        <div className='w-full flex items-center justify-between'>
          <button className='px-5 py-2 bg-gray-200 rounded-lg cursor-pointer hover:opacity-80' 
            popoverTarget='close-stay-form' popoverTargetAction="hide" >
            NO
          </button>
          <button 
            className="text-white px-8 py-2 rounded-lg transition-colors cursor-pointer hover:opacity-80 bg-primary"
            
            popoverTarget="close-stay-form" popoverTargetAction="hide">
            SI
          </button>
        </div>
      </div>
    </CenterDialog>
  )
}
