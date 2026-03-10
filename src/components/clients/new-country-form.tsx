'use client'

import { FaFlag, FaUser, FaUserPlus } from 'react-icons/fa'
import { CenterDialog, DialogContent, DialogFooterSave, DialogHeader, InputApp } from '../general'
import { addCountry, getRestCountries } from '@/lib/server'
import { useEffect, useRef, useState } from 'react'
import { closeDialog, openDialog } from '@/lib/client'


interface Props {
  dialogId: string
  dialogClient: string
}


export const NewCountryForm = ({dialogId,dialogClient}:Props) => {

  const dialogRef = useRef<HTMLDialogElement>(null)
  const [message, setMessage] = useState('');
  const [countriesData, setCountriesData] = useState<string[]>([]);
  const [countrySelected, setCountrySelected] = useState('');
  
  useEffect(() => {
    // Solo se dispara el event cuando el se abre el dialog desde HTML
    const el = dialogRef.current;
    if (!el) return;

    setMessage('Cargando....')
    const handleToggle = (event: any) => {
      if (event.newState === "open") {
        getRestCountries().then( res => {
          setMessage('')
          setCountriesData(res.map( el => el.join('  ')))
        })
      }
    };

    el.addEventListener("beforetoggle", handleToggle);
    return () => el.removeEventListener("beforetoggle", handleToggle);
  }, []);
  
  
  const handleClick = async () => {
    if( countrySelected === '' ) return setMessage('Debes seleccionar un pais');

    const [id,flag,name] = countrySelected.split('  ')

    await addCountry({flag,id,name})
    setCountriesData([])
    setCountrySelected('')
    closeDialog(dialogId)
    openDialog(dialogClient)
  }
  
  return (
    <CenterDialog id={dialogId} ref={dialogRef}>
      <DialogContent maxWRem={30}>
      
        <DialogHeader
          Icon={FaUserPlus}
          title='Nuevo Pais'
          subTitle='Selecciona el pais que desees agrergar'
        />

        <div className='px-3 grid grid-cols-1 gap-3 md:gap-4'>
          
          <InputApp
            Icon={FaFlag}
            label="Nombres"
            inputId="input-name"
            type="select"
            placeHolder="e.g. Carlos Alberto"
            className='col-span-2 md:col-span-1'
            name='pais'
            value={countrySelected}
            selectData={countriesData}
            onChange={ e => {setMessage('');setCountrySelected(e.target.value)}}
          />

        </div>

        <DialogFooterSave 
          id={dialogId}
          error={message}
          saveClick={handleClick}
        />

      </DialogContent> 
    </CenterDialog>
    
  )
}
