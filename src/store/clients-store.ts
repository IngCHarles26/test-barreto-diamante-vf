import { Client } from "@/generated/prisma/client";
import { genRandomColor, getAge } from "@/lib/shared";
import { create } from "zustand";
import { persist } from "zustand/middleware";



export interface ClientsFoundData extends Client {
  country: {flag: string, name:string}
  color: string
  age: number
}

interface State{
  clientsFound: ClientsFoundData[]
  setClientList: (data:Omit<ClientsFoundData,'color'|'age'>[]) => void
  resetClientList: () => void
}

export const useClientFoundStore = create<State>()(
  persist(
    (set) => ({
      clientsFound: [],
      
      resetClientList: () => set({clientsFound:[]}),

      setClientList: (data) => {
        const ans = []
        for(let i=0; i<data.length; i++){
          const color = genRandomColor()
          const age = getAge(data[i].born)
          ans.push({...data[i],color,age})
        }
        set({clientsFound:ans})
      }
    }),
    {
      name: 'clients-founded-list'
    }
  )
)