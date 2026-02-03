import clsx from 'clsx'
import { FaCheck } from 'react-icons/fa'
import { FaC, FaMoneyBill1 } from 'react-icons/fa6'
import { PiCashRegisterFill } from 'react-icons/pi'
import { RxCross1 } from 'react-icons/rx'
import { PayForm } from './pay-form'

const pagos: PayItemProps[] = [
  {
    payed: true,
    date: "26/10"
  },
  {
    payed: true,
    date: "27/10"
  },
  {
    payed: true,
    date: "28/10"
  },
  {
    payed: true,
    date: "29/10"
  },
  {
    payed: false,
    date: "30/10"
  },
  {
    payed: false,
    date: "31/10"
  }
];


export const StayPaysTable = () => {
  return (
    <div className="shadow w-full rounded-xl overflow-hidden">
              
      <div className="w-full bg-bg-sidebar flex px-3 md:px-5 py-2 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-primary/10  px-3 py-2 rounded-xl">
            <PiCashRegisterFill  className="text-primary size-9"/>
          </div>
          <p className="font-bold text-xl md:text-2xl text-body">Pagos</p>
        </div>

        <button popoverTarget="form-pay-stay" className="bg-primary text-white px-4 rounded-xl font-bold text-base md:text-xl flex items-center gap-1 py-2">
          <FaMoneyBill1  className="size-6"/>
          <span className="hidden 2xl:block">Registrar</span>
        </button>
            
      </div>

      <div className="flex  items-center justify-start flex-wrap gap-2 p-3 md:p-5 ">

        {pagos.map((el,ix) => <PayItem key={'pay_item_stay'+ix} {...el}/>)}
        
      </div>

      <PayForm/>
    </div>
  )
}

interface PayItemProps {
  payed: boolean
  date: string
}

const PayItem = ({payed,date}:PayItemProps) => {
  const [Icon,style] = payed 
                        ? [FaCheck,'bg-green-app']
                        : [RxCross1,'bg-danger']

  return (
    <div className="flex flex-col w-10 items-center  ">
      <p className="writing-vertical rotate-180 text-lg font-bold px-2 h-15">{date}</p>
      <div className={clsx("text-white w-full rounded-xl",style)}>
        <Icon  className="mx-auto size-9 py-2"/>
      </div>
    </div>
  )
}
