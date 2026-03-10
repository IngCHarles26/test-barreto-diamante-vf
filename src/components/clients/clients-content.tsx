'use client'

import { ActionGetClientsByFilters, SearchClientsInterface } from "@/lib/server";
import { FilterContainer, PageContent, PageHeader, SearchButton, TableApp, TableHeader } from "../general"
import { ClientsTableRow } from "./clients-table-row";
import { FaSearch } from "react-icons/fa";
import { ChangeEvent, useState } from "react";
import { useClientFoundStore, useLoadingStore } from "@/store";

const msg = 'Por favor selecciona el tipo de busqueda: documento o nombres'

export const ClientsContent = () => {
  const {clientsFound,setClientList,resetClientList} = useClientFoundStore( st => st )
  const [mainText, setMainText] = useState(msg);
  const [searchData, setSearchData] = useState<SearchClientsInterface>({type:'name',input:''});
  const {togleLoading} = useLoadingStore( st => st );

  const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const name = e.target.name as keyof typeof searchData
    const value = e.target.value as string

    const valueFiltered = value.replace(/[^a-zA-Z0-9ñÑ\s]/g,'').replace(/\s+/g, ' ')
    
    setSearchData(prev => ({...prev,[name]:valueFiltered.toLowerCase()}))
  }
 
  const handleClick = async () => {

    const { input,type } = searchData

    togleLoading()
    const data = await ActionGetClientsByFilters({type,input:input.trim()})

    togleLoading()
    if( data.length === 0 ){
      resetClientList()
      return setMainText(`No hay resultados para "${input}"`)
    }
    
    setMainText('')
    setClientList(data)
  }

  return (
    <PageContent >
      <PageHeader>

        <FilterContainer>
          <label>
            <FaSearch  className="size-3 md:size-4 text-gray-02 hidden md:block" />
          </label>
          <select 
            className='h-full px-0 md:px-2 outline-0 font-bold text-sm md:text-lg'
            name='type'
            value={searchData.type}
            onChange={handleChange}
          >
            <option value='name' className="text-xs md:text-xl font-normal" >Nombre</option>
            <option value='document' className="text-xs md:text-xl font-normal" >Documento</option>
          </select>
          <input 
            name='input'
            value={searchData.input}
            onChange={handleChange}
            type="text" 
            placeholder='---------------------' 
            className='outline-0 text-base md:text-lg  w-45 md:w-55' 
          />
        </FilterContainer>

        <SearchButton onCLick={handleClick}/>
      </PageHeader>

      {
        !clientsFound.length 
          ? <p className="text-gray-04 text-xl">{mainText}</p>
          : <TableApp>

              <TableHeader>
                <p className="w-[50%] md:w-[38%]">Nombre</p>
                <p className="w-[10%] md:w-[15%]"><span className="hidden md:inline">PAIS</span></p>
                <p className="w-[30%] md:w-[15%]">Documento</p>
                <p className="md:w-[10%] hidden md:block">Edad</p>
                <p className="md:w-[12%] text-center hidden md:block">Puntaje</p>
                <p className='w-[10%] md:w-[10%] text-center'>Info</p>
              </TableHeader>

              {
                clientsFound.map( el => <ClientsTableRow key={'client_relation_row'+el.id} {...el}/>)
              }

            </TableApp>
      }

    </PageContent>
  )
}
