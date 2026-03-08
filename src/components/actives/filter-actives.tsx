'use client'

import { ChangeEvent, useState } from 'react'
import { FilterSelect, SearchButton } from '../general'
import { useRouter, useSearchParams } from 'next/navigation'

interface Props {
  rooms:number[]
}

export const FilterActives = ({rooms}:Props) => {
  const params = useSearchParams()
  const roomParam = params.get('room') || 'todos'

  const [room, setRoom] = useState({room:roomParam});
  const router = useRouter()

  const handleChange = (e:ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value

    setRoom({room:value})
  }

  const handleClick = () => {
    const roomPage = room.room;

    let path = '/dashboard/rooms/actives'
    if(roomPage !== 'todos') path += `?room=${roomPage}`;

    router.replace(path)
  }
  
  return (
    <>
      <FilterSelect
        id='filter-select-room-active'
        label='Habitacion'
        options={['todos',...rooms]}
        name='room'
        onChange={handleChange}
        value={room.room}
      />

      <SearchButton onCLick={handleClick}/>
    </>
  )
}
