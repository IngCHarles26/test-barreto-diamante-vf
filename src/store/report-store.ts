import { create } from "zustand";
import { persist } from "zustand/middleware";

interface DailyReport{
  day: number
  observed: boolean
  total: number
  month:number
  year: number
}

interface State{
  dailyReport: DailyReport[]
  setDailyReport: (data:DailyReport[]) => void
}

export const useReportStore = create<State>()(
  persist(
    (set) => ({
      dailyReport: [],

      setDailyReport: (data) => set({ dailyReport:data }),
    }),
    {
      name: 'report-store'
    }
  )
)