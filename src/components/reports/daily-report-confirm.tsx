import { CenterDialog } from '../general'
import { FaClipboardCheck } from 'react-icons/fa'

export const DailyReportConfirm = () => {
  return (
    <CenterDialog id='confirm-daily-report'>
      <div className="p-6 w-100 bg-background-light flex flex-col items-center gap-2">
          <div className='p-5 rounded-full bg-primary/10 mb-5'>
            <FaClipboardCheck  className="size-10 text-primary "/>
          </div>
        
        <h3 className="text-xl font-bold">Reporte Correcto</h3>
        <p className="text-gray-600 mb-6">
          ¿Estas seguro de validarh el reporte?
        </p>
        
        <div className='w-full flex items-center justify-between'>
          <button className='px-5 py-2 bg-gray-200 rounded-lg cursor-pointer hover:opacity-80' 
            popoverTarget="confirm-daily-report" popoverTargetAction="hide" >
            Cancelar
          </button>
          <button 
            className="bg-primary text-white px-8 py-2 rounded-lg transition-colors cursor-pointer hover:opacity-80"
            popoverTarget="confirm-daily-report" popoverTargetAction="hide">
            Validar
          </button>
        </div>
      </div>
    </CenterDialog>
  )
}
