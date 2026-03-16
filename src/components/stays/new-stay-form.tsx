'use client'

import { useMessageStore, useStayStore } from '@/store'
import { CenterDialog, DialogContent, DialogFooterSave, DialogHeader, FilterSelectInput, InputApp } from '../general'
import { FaCalendar, FaCar, FaDoorClosed, FaDoorOpen, FaMapMarkerAlt, FaPlus, FaSearch, FaWallet } from 'react-icons/fa'
import { FaMountainSun } from 'react-icons/fa6'
import { Reason, TypeDocuments } from '@/generated/prisma/enums'
import { filterString, oneSpace, onlyString, noSpace, onlyNumber, closeDialog } from '@/lib/client'
import { dialogClient } from '../clients'
import { useEffect, useState } from 'react'
import { SAcreateStay, SAgetClientByDocument } from '@/lib/server'
import { transformDate } from '@/lib/shared'
import { Room } from '@/generated/prisma/browser'

const dialogId = 'new-stay-dialog'

const initialData = (price:number|null) => ({
  dateStart: transformDate(new Date()).join('T'),
  city: 'Tacna',
  price,
  reason: 'Turismo',
  carPlate: '',
  typeDocument: 'DNI',
  numberDocument: '',
})

interface ClientList {
  id: string
  firstName: string
  lastName: string
  typeDocument: string
  numberDocument: string
  flag: string
  age: number
  banned: boolean
}

interface Props{
  rooms: Room[]
}

export const NewStayForm = ({rooms}:Props) => {

  const {currentRoom} = useStayStore()
  const roomPrice = (rooms.find(el => el.number === currentRoom) || {price:0}).price

  const [stayData, setStayData] = useState(initialData(roomPrice));
  const [clientList, setclientList] = useState<ClientList[]>([]);  
  const {stSetStaticMsg, stSetLoadingMsg} = useMessageStore()

  useEffect(() => {
    setStayData(initialData(roomPrice))
  }, [roomPrice]);
  

  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    stSetStaticMsg('')
    
    const name = e.target.name as keyof typeof stayData
    const value = e.target.value

    let newValue = value

    if (name === 'city') {
      newValue = filterString(newValue,{oneSpace, onlyString, maxLimit:20})
      if(newValue.length<3) stSetStaticMsg('La ciudad debe tener al menos 3 caracteres')
    }

    if (name === 'price') newValue = filterString(newValue,{noSpace, onlyNumber, maxLimit:3})
      
    if (name === 'carPlate') {
        newValue = filterString(newValue,{noSpace, onlyNumber,onlyString, maxLimit:8})
      if(newValue.length<5) stSetStaticMsg('La Placa debe tener al menos 5 caracteres')
    }

    if (name === 'numberDocument'){
      const typeDoc = stayData.typeDocument
      newValue = filterString(newValue,{onlyString,noSpace,onlyNumber})//value.replace(/[^0-9a-zA-Z\s]/g,'').trim()
      const lenValue = newValue.length

      if ( newValue.length < 6) stSetStaticMsg('EL Documento debe tener al menos 6 caracteres');
      newValue = filterString(newValue,{maxLimit:15})

      if (typeDoc === 'DNI') {
        newValue = filterString(newValue,{maxLimit:8,onlyNumber})
        if(newValue.length === 8) searchClient('DNI',newValue)
        if (newValue.length < 8)  stSetStaticMsg('EL DNI debe tener 8 numeros sasa');
      }
      else if ( typeDoc === 'Carnet Extranjeria') {
        newValue = filterString(newValue,{maxLimit:12})
        if ( lenValue < 9 ) stSetStaticMsg('EL Carnet de Extranjeria debe tener al menos 9 caracteres');
      }
      else if ( typeDoc === 'Pasaporte') newValue = filterString(newValue,{maxLimit:15})
    }

    if (name === 'typeDocument'){
      if (value === 'DNI') 
        setStayData( prev => ({ ...prev, 
          numberDocument:prev.numberDocument.slice(0,8) 
        }));
      else  if (value === 'Carnet_Extranjeria')
        setStayData( prev => ({ ...prev, 
          numberDocument:prev.numberDocument.slice(0,12) 
        }));
    }

    setStayData(prev => ({...prev, [name]: newValue}))
  }
  
  const handleSearch =  () => {
    const {typeDocument,numberDocument} = stayData
    
    if ( !typeDocument ) return stSetStaticMsg('Selecciona un tipo de documento')

    if ( numberDocument.length < 6 ) 
      return stSetStaticMsg('El Documento debe de ser de mas de 6 caracteres');

    if ( typeDocument === 'DNI' && numberDocument.length !== 8 )
      return stSetStaticMsg('El DNI debe tener 8 numeros')

    if ( clientList.some( el => el.numberDocument === numberDocument && el.typeDocument === typeDocument))
      return stSetStaticMsg('El cliente ya se encuentra en la lista');

    searchClient(typeDocument as TypeDocuments,numberDocument)
  }

  const deleteFromList = (id:string) => {
    setclientList(prev => prev.filter( el => el.id !== id))
  }

  const searchClient = async (typeDocument:TypeDocuments,numberDocument:string) => {
    stSetLoadingMsg('buscando')

    const newTypeDoc = typeDocument.replaceAll(' ','_') as TypeDocuments
    
    let {success,message,client} = await SAgetClientByDocument(newTypeDoc,numberDocument)

    stSetStaticMsg(message,success)
    if ( !success || !client ) return;

    setStayData(prev => ({...prev, numberDocument:''}))

    if( clientList.some( el => el.id === client.id) ) return stSetStaticMsg('El cliente ya esta en la lista')
    
    const flag = client.country.flag
    const age = new Date().getFullYear() - client.born.getFullYear()
    setclientList(prev => [...prev, {...client,typeDocument, numberDocument,flag,age}])
  }
  
  
  const handleCLick = async () => {
    const {carPlate,city,dateStart,price,reason} = stayData

    
    const newCity = city.trim()
    if(!newCity) return stSetStaticMsg('Ingresa la ciudad de origen');

    if(!dateStart) return stSetLoadingMsg('Ingrese la fecha');

    if(carPlate && carPlate.length<5) return stSetLoadingMsg('Ingresa un numero de placa valido');

    if(!price) return stSetLoadingMsg('Ingresa el costo diario');

    if(clientList.length === 0) return stSetStaticMsg('No hay clientes para su registro');

    stSetLoadingMsg('Guardando')

    const newDateStart = new Date()

    const data = {
      dateStart: newDateStart,
      roomId: currentRoom,
      reason: reason as Reason,
      origin:newCity,
      carPlate: carPlate || null,
      clientInStay: {
        create: clientList.map( el => ({
          client: { connect: { id:el.id } }
        }))
      }
    }
    
    const {success,message} = await SAcreateStay(data)

    stSetStaticMsg(message,success)
    if (success) {
      closeDialog(dialogId);
      setStayData(initialData(roomPrice))
    }
  }

  
  return (
    <>
      <div className='h-full w-full flex items-center justify-center'>
        <button 
          className="bg-primary  px-2 md:px-3 py-2 rounded-xl flex items-center gap-1 uppercase text-white"
          popoverTarget={dialogId}
          >
          <FaDoorOpen  className="size-6 md:size-7 2xl:size-8"/>
          <p className='text-xl font-bold'>registrar {currentRoom}</p>
        </button>
      </div>

      <CenterDialog id={dialogId}>
        <DialogContent maxWRem={40}>
          <DialogHeader
            Icon={FaDoorClosed}
            title={`Registro de Estadia HAB ${currentRoom}`}
            subTitle="Ingresa los datos para registrar la estadia (*obligatorio)"
          />
        
          <div className="px-4 grid grid-cols-2 md:grid-cols-3 gap-2">
            <InputApp
              Icon={FaCalendar}
              label="Fecha y Hora de Llegada*"
              inputId="stay_start_time"
              type="datetime-local"
              className='col-span-2'
              name='dateStart'
              value={stayData.dateStart}
              onChange={handleChange}
            />
            <InputApp
              Icon={FaMapMarkerAlt}
              label="Ciudad Origen*"
              inputId="stay_origin"
              type="text"
              name='city'
              value={stayData.city}
              onChange={handleChange}
            />
            <InputApp
              Icon={FaWallet}
              label="Costo Diario*"
              inputId="price"
              type="text"
              placeHolder="***"
              name='price'
              value={stayData.price || 0}
              onChange={handleChange}
            />
            <InputApp
              Icon={FaMountainSun }
              inputId="stay_reason"
              type="select"
              label="Motivo"
              selectData={['Trabajo','Turismo']}
              name='reason'
              value={stayData.reason}
              onChange={handleChange}
            />
            <InputApp
              Icon={FaCar}
              label="Placa del Vehiculo"
              inputId="stay_car"
              type="text"
              placeHolder="***-***"
              name='carPlate'
              value={stayData.carPlate}
              onChange={handleChange}
            />
          </div>

          <p className='px-4 text-lg font-bold mt-5'>Clientes:</p>
          <div className="px-4 flex items-center gap-2 h-10 md:h-10.5">
            <button 
              className="bg-primary text-white px-2 md:px-4 rounded-xl font-bold text-base md:text-xl flex items-center gap-1 h-full"
              onClick={handleSearch}
            >
              <FaSearch className="size-4"/>
              {/* <span className="hidden md:block">Buscar</span> */}
            </button>
            <FilterSelectInput
              id="select_type_document_stay"
              options={Object.keys(TypeDocuments).map( el => el.replaceAll('_',' '))}
              nameInput='numberDocument'
              nameSelect='typeDocument'
              onChangeInput={handleChange}
              onChangeSelect={handleChange}
              valueInput={stayData.numberDocument}
              valueSelect={stayData.typeDocument}
            />


  
            <button popoverTarget={dialogClient} className="bg-gray-01 text-white px-2 md:px-4 rounded-xl font-bold text-base flex items-center gap-1 h-full ml-auto">
              <FaPlus className="size-4"/>
              <span className="hidden md:block uppercase text-base">Nuevo</span>
            </button>
  
          </div>

          <div className='px-4 mt-5'>
            { clientList.map( client => (
              <div 
                key={'posible-client-stay'+client.id}
                className='w-full flex items-center font-bold capitalize px-2 py-1'
              >
                <p className='w-1/4 uppercase'> {client.typeDocument.slice(0,3)} {client.numberDocument} </p>
                <p className='w-auto'>{client.flag} {client.firstName} {client.lastName} {client.age < 18 && '👶'}</p>
                <p className='ml-auto text-right text-nowrap'>{client.age} años</p>
                <button 
                  className='ml-2 uppercase px-3 py-1 bg-orange-1 text-white rounded-xl'
                  onClick={() => deleteFromList(client.id)}
                >
                  Remover
                </button>
              </div>
            ))}
          </div>


        <DialogFooterSave
          id={dialogId }
          saveClick={handleCLick}
        />

        </DialogContent>
      </CenterDialog>
    </>
  )
}
