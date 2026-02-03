import { PageContent, TableApp, TableHeader, TableRow } from '../general'
import { CardResume } from './card-resume';
import { IoMdWallet } from 'react-icons/io';
import { DailyTableRow, DailyTableRowProps } from './daily-table-row';
import { FaCheckCircle, FaList } from 'react-icons/fa';
import { IoShieldCheckmark } from 'react-icons/io5';
import { GoAlertFill } from 'react-icons/go';
import { DailyReportObservation } from './daily-report-observ';
import { DailyReportConfirm } from './daily-report-confirm';

const estadisticas= [
  {
    percent: 40,
    user: "user_jose",
    total: 2000
  },
  {
    percent: 25,
    user: "use_juan",
    total: 1250
  },
  {
    percent: 20,
    user: "user_elena",
    total: 1000
  },
  {
    percent: 15,
    user: "user_pedro",
    total: 750
  }
];

const transacciones:DailyTableRowProps[] = [
  {
    hour: "08:30",
    room: 104,
    newDateEnd: new Date('2026-02-05T12:00:00'),
    user: "Facundo Melgar",
    payMethod: "transfe",
    operation: 485960,
    price: 180.00
  },
  {
    hour: "11:15",
    room: 304,
    newDateEnd: new Date('2026-02-04T11:00:00'),
    user: "Isabella Silva",
    payMethod: "yape",
    operation: 992837,
    price: 250.00
  },
  {
    hour: "02:45",
    room: 102,
    newDateEnd: new Date('2026-02-03T12:00:00'),
    user: "Carlos Huamán",
    payMethod: "efectivo",
    price: 90.00
  },
  {
    hour: "06:20",
    room: 205,
    newDateEnd: new Date('2026-02-10T12:00:00'),
    user: "Sofía Martínez",
    payMethod: "plin",
    operation: 774122,
    price: 145.00
  }
];

export const DailyResumeContent = () => {
  return (
    <PageContent>
      <div className='flex flex-wrap items-center justify-between gap-3 mb-5'>

        {estadisticas.map((el,ix) => <CardResume key={'card_resume'+ix} {...el}/>)}

        <div className='shadow-xl px-3 py-2 md:px-5 md:py-3 rounded-2xl bg-primary w-120 md:w-100   flex flex-col justify-between'>
          <div className='flex items-center gap-4 justify-between mb-4'>
            <IoMdWallet className='bg-primary-bg text-white size-12 md:size-12 px-2 py-1 rounded-xl'/>
            <p className='bg-primary-bg-2 text-xs md:text-sm rounded-xl font-bold px-3 py-2 text-white'>100%</p>
          </div>
          <p className='text-white text-xs md:text-base font-normal'>
            Ingresos Totales:
          </p> 
          <p className='text-white text-2xl font-bold'>s/ 5000.00</p>
        </div>
      </div>

      <div>
        <div className='w-full flex items-center gap-2 mt-3 px-3 mb-4'>
          <FaList className='text-primary size-6 md:size-7'/> 
          <p className='text-sub-title font-bold text-lg md:text-2xl'>Detalle de Transacciones</p>
        </div>

        <TableApp>
          <TableHeader>
            <p className='w-[15%] md:w-[12.5%]'>Hora</p>
            <p className='w-[40%] md:w-[30%]'>Descripcion</p>
            <p className='md:w-[20%] hidden md:block'>Usuario</p>
            <p className='w-[30%] md:w-[20%] text-center'>
              <span className='hidden md:inline'>Metodo Pago</span>
            </p>
            <p className='w-[15%] md:w-[12.5%] text-center'>Monto</p>
          </TableHeader>

          {transacciones.map((el,ix) => <DailyTableRow key={'row-table-daily'+ix} {...el}/>)}

        </TableApp>
      </div>

      <div className='w-full'>
        <div className='w-full flex items-center gap-2 mt-3 px-3 mb-4'>
          <IoShieldCheckmark className='text-primary size-6 md:size-7'/> 
          <p className='text-sub-title font-bold text-lg md:text-2xl'>Observaciones de Usuario Maestro</p>
        </div>

        <textarea placeholder='Observaciones .... ' rows={5} className='w-full shadow-xl rounded-xl focus-within:ring-1 focus-within:ring-primary outline-none border border-neutral-300 resize-none p-2 md:p-3 md:text-2xl text-lg'/>
      </div>

      <div className='w-full flex justify-end items-center gap-3 md:gap-5 my-3 md:my-5'>

        <button popoverTarget='obser-daily-report' className='text-danger text-sm md:text-xl border border-danger px-4 md:px-6 py-2 md:py-3 rounded-lg flex items-center gap-3 font-bold'>
          <GoAlertFill/>
          Observar Reporte 
        </button>
        <DailyReportObservation/>
        <button popoverTarget='confirm-daily-report' className='text-white text-sm md:text-xl bg-primary px-4 md:px-6 py-2 md:py-3 rounded-lg flex items-center gap-3 font-bold'>
          <FaCheckCircle />
          Observar Reporte 
        </button>
        <DailyReportConfirm/>

      </div>
    </PageContent>
  )
}
