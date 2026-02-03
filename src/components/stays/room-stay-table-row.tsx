import { formatDate } from '@/lib'
import React from 'react'

interface Props {
  dateStart: Date
  dateEnd: Date
  name: string
  flag: string
  age: number
  document: number
  typeDocument: string
}

export const RoomStayTableRow = ({dateEnd,dateStart,name,flag,age,document,typeDocument}:Props) => {
  const [fechaInicio,horaInicio] = formatDate(dateStart)
  const [fechaFin,horaFin] = formatDate(dateEnd)

  
  return (
    <div className="w-full flex gap-1 items-center text-body hover:bg-bg-sidebar px-3 md:px-4 ">
      <div className="w-[17%]">
        <p className="font-bold">{fechaInicio}</p>
        <p className="text-done-button-text">{horaInicio}</p>
      </div>
      <div className="w-[43%]">
        <p className="text-lg font-bold"> {name} <span className="hidden md:inline">{age < 18 && '👶'}</span></p>
        <p className="text-done-button-text">{flag} {age} Años</p>
      </div>
      <div className="w-[25%]">
        <p className="text-lg font-bold">{document}</p>
        <p className="text-done-button-text">{typeDocument}</p>
      </div>
      <div className="w-[15%]">
        <p className="font-bold">{fechaFin}</p>
        <p className="text-done-button-text">{horaFin}</p>
      </div>
    </div>

  )
}
