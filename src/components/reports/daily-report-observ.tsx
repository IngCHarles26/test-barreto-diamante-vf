import { FaCheckCircle } from 'react-icons/fa'
import { CenterDialog } from '../general'
import { GoAlertFill } from 'react-icons/go'
import { FaClipboardQuestion } from 'react-icons/fa6'

export const DailyReportObservation = () => {
  return (
    <CenterDialog id='obser-daily-report'>
      <div className="p-6 w-100 bg-background-light flex flex-col items-center gap-2">
        <div className='p-5 rounded-full bg-danger/10 mb-5'>
          <FaClipboardQuestion  className="size-10 text-danger "/>
        </div>
        
        <h3 className="text-xl font-bold">Reporte inconsistente</h3>
        <p className="text-gray-600 mb-6">
          ¿Estas seguro de Observar el reporte?
        </p>
        
        <div className='w-full flex items-center justify-between'>
          <button className='px-5 py-2 bg-gray-200 rounded-lg cursor-pointer hover:opacity-80' 
            popoverTarget="obser-daily-report" popoverTargetAction="hide" >
            Cancelar
          </button>
          <button 
            className="bg-danger text-white px-8 py-2 rounded-lg transition-colors cursor-pointer hover:opacity-80"
            popoverTarget="obser-daily-report" popoverTargetAction="hide">
            Observar
          </button>
        </div>
      </div>
    </CenterDialog>
  )
}
