import { Stay } from "@/generated/prisma/browser";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface ActiveStay {
  id: number;
  dateStart: Date;
  paidUntil: Date
  roomId: number;
  reason: string | null; // Cambia a tu Enum 'Reason' si lo tienes definido
  carPlate: string | null;
  origin: string;
  user: { email: string }
  room: { price: number | null }
  pays: { 
    startDayDate: Date | null,
    endDayDate: Date | null,
    mount: number,
  }[]
  clientInStay: ClientInStayRelation[];
}

export interface ClientInStayRelation {
  client: {
    id:string
    firstName: string;
    lastName: string;
    typeDocument: string; // O tu Enum 'TypeDocuments'
    numberDocument: string;
    born: Date;
    country: {
      flag: string;
    } | null;
  };
}

export interface FoundStay extends Stay{
  user: {
    email:string
  },
  clientInStay: {
    client: {
      firstName: string
      lastName: string
      country: {flag:string}
      born: Date
      numberDocument: string
    }
  }[]
}


interface State{
  currentRoom: number
  stayData: Record<number,ActiveStay>
  currentData: ActiveStay | null

  foundData: FoundStay[]
  
  setCurrentRoom: (room:number) => void
  setStayData: (data:Record<number,ActiveStay>) => void
  setFoundData: (data:FoundStay[]) => void
}

export const useStayStore = create<State>()(
  persist(
    (set,get) => ({
      currentRoom: 0,
      stayData: {},
      currentData: null,
      foundData: [],

      setCurrentRoom: (currentRoom) => set({ 
        currentRoom, 
        currentData: get().stayData[currentRoom] 
      }),

      setStayData: (stayData) => set({stayData}),

      setFoundData: (foundData) => set({foundData}),

    }),
    {
      name: 'stay-store'
    }
  )
)