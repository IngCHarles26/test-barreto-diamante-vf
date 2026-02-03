import React from 'react'
import { FilterSelect, PageContent, PageHeader, SearchButton } from '../general'
import { months, years } from '@/lib'
import { RoomLegend } from '../room-map/room-legend'
import { DayCalendarCard } from './day-calendar-card'

const legends = [
  {color: 'bg-in-client', label: 'Aprobado'},
  {color: 'bg-orange-1', label: 'Observado'},
]

const staticDays = [
  { day: 1, aprobed: true, total: 1200 },
  { day: 2, aprobed: false, total: 850 },
  { day: 3, aprobed: true, total: 2100 },
  { day: 4, aprobed: true, total: 450 },
  { day: 5, aprobed: false, total: 120 },
  { day: 6, aprobed: true, total: 3200 },
  { day: 7, aprobed: true, total: 1500 },
  { day: 8, aprobed: false, total: 0 },
  { day: 9, aprobed: true, total: 980 },
  { day: 10, aprobed: true, total: 2500 },
  { day: 11, aprobed: false, total: 670 },
  { day: 12, aprobed: true, total: 1300 },
  { day: 13, aprobed: true, total: 4100 },
  { day: 14, aprobed: false, total: 220 },
  { day: 15, aprobed: true, total: 1750 },
];


export const CalendarReportContent = () => {
  return (
    <PageContent>
      <PageHeader>
        <div className="flex items-center gap-2">
          <FilterSelect
            id="select-month-report"
            label="Mes"
            options={months()}
            />
          <FilterSelect
            id="select-year-report"
            label="Año"
            options={years()}
            />
          <SearchButton/>
        </div>

        <div className="flex flex-col md:flex-row  md:items-center md:gap-4 ml-auto">
          {legends.map( (el,ix) => <RoomLegend key={'room-legend-'+ix} {...el}/>)}
        </div>
      </PageHeader>

      <div className="grid grid-cols-4 md:grid-cols-7 gap-2">

        {staticDays.map( (el,ix) => <DayCalendarCard key={'day-calendar-'+ix} {...el}/>)}

        
      </div>

      <div className="mt-auto">
        footer
      </div>
    </PageContent>
  )
}
