'use client'

import { useState } from "react"
import { FaPen, FaSave } from "react-icons/fa"
import clsx from "clsx";
import { ActionAddBanReasonClient, ActionAddCommentsClient } from "@/lib/server";

interface Props {
  userRole: 'admin' | 'user'
  userName: string
  banned: boolean
  banReason: string | null
  comments: string | null
  id: string
}

export const SetClientComments = ({
  banned,banReason,comments,userRole,id,userName
}:Props) => {

  const startBanReason = banReason || ''
  const isAdmin = userRole === 'admin'

  const [message, setMessage] = useState('');
  const [canEditBanReason, setCanEditBanReason] = useState(false);
  const [canEditComment, setCanEditComment] = useState(false);
  const [inputBanReason, setInputBanReason] = useState(isAdmin ? startBanReason : '');
  const [inputComments, setInputComments] = useState(comments || '');

  const handleSubmitBanReason = async() => {
    if(!canEditBanReason) return setMessage('Debes habilitar la edicion para poder guardar los cambios motivos de beto');
    
    if(!inputBanReason) return setMessage('No hay razones de beto para guardar')
      
    setMessage('Subiendo a la base de datos.....')

    const finalBanReason = isAdmin ? inputBanReason : `${startBanReason} __${userName}:_${inputBanReason}`

    const success = await ActionAddBanReasonClient(id,finalBanReason.replace(/\s+/g, ' ').trim())
    if(!success) setMessage('No se pudieron guardar los cambios');

    setMessage('Motivos de beto guardados correctamente')
    setCanEditBanReason(false)
  }

  const handleSubmitComments = async() => {
    if(!canEditComment) return setMessage('Debes habilitar la edicion para poder guardar los comentarios') 
    
      if(!inputComments) return setMessage('No hay nada que guardar')
        
    setMessage('Subiendo a la base de datos.....')
    
    const success = await ActionAddCommentsClient(id,inputComments.replace(/\s+/g, ' ').trim())
    if(!success) setMessage('No se pudieron guardar los cambios');

    setMessage('Comentarios guardados correctamente')
    setCanEditComment(false)
  }
  
  
  
  return (
    <>
      {banned && 
        <div className='w-full mb-3 md:mb-6'>

          <div className='mb-2 md:mb-3 flex gap-2 items-center justify-between '>

            <p className=' font-bold text-danger/60 text-lg md:text-2xl'>Razon de Beto:</p>
            
            <button 
              className={clsx(
                'py-2 px-2 rounded-md flex items-center ml-auto border',
                canEditBanReason ?  'border-gray-01 text-gray-01' : 'bg-gray-01 text-white border-transparent'
              )}
              onClick={() => {setMessage('');setCanEditBanReason(!canEditBanReason)}}
            >
              <FaPen className="md:size-7 size-5" />
            </button>
            
            
            
            {canEditBanReason &&
              <button  
                className={'py-2 px-2  rounded-md flex items-center gap-2 border border-danger bg-danger text-white'}
                onClick={handleSubmitBanReason}
              >
                <FaSave className="md:size-7 size-5" />
                <p className="uppercase font-bold hidden md:block">Guardar</p>
              </button>
            }
            
            
          </div>

          <textarea 
            className={clsx(
              'w-full  rounded-xl outline-none  shadow  resize-none p-3 text-lg md:text-xl text-danger border',
              canEditBanReason ? 'border-danger' : 'border-transparent'
            )}
            rows={2}
            placeholder={ `Ingresa las razones para betar a este cliente ${!isAdmin&&'(solo los usuarios admin, pueden editar datos guardados)'} `
            }
            value={isAdmin || canEditBanReason 
              ? inputBanReason 
              : (startBanReason || inputBanReason) ? `${startBanReason} ${inputBanReason}` : ''
            } 
            disabled={!canEditBanReason}
            onChange={ (e) => { setMessage('');setInputBanReason(e.target.value) } }
          />

        </div> 
      }

      <div className='w-full mb-3 md:mb-6'>

        <div className='mb-2 md:mb-3 flex gap-2 items-center '>

          <p className=' font-bold text-done-button-text text-lg md:text-2xl'>Comentarios:</p>
          
          <button 
            className={clsx(
              'py-2 px-2 bg-stars rounded-md  flex items-center ml-auto border ',
              !canEditComment ? 'bg-stars text-white border-transparent' : 'bg-white border-stars text-stars'
            )}
            onClick={() => {setMessage('');setCanEditComment(!canEditComment)}}
          >
            <FaPen className="md:size-7 size-5" />
          </button>
          
          {canEditComment && 
            <button 
              className='py-2 px-2 rounded-md  flex items-center border-primary border gap-2 transition-all bg-primary text-white'
              onClick={handleSubmitComments}
            >
              <FaSave className="md:size-7 size-5" />
              <p className="uppercase font-bold hidden md:block">Guardar</p>
            </button>
          }
          
        </div>

        <textarea 
          className={clsx(
            'w-full  rounded-xl outline-none shadow resize-none p-3 text-lg md:text-xl text-sub-title border',
            canEditComment ? 'border-gray-01' : 'border-transparent'
          )}
          rows={3}
          placeholder='Ingresa los comentarios a agregar sobre el cliente (p.e. se olvidó algo en la habitación)' 
          value={inputComments} 
          disabled={!canEditComment}
          onChange={ (e) => {setMessage('');setInputComments(e.target.value)} }
        />

      </div> 

      <p className="mx-auto text-xl uppercase text-gray-05 font-bold mb-5">{message}</p>
    </>
  )
}
