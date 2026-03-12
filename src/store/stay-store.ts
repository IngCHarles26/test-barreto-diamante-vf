import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State{
  roomNumber: number
  isOcupated: boolean
  setCurrentRoom: (room:number) => void
}

export const useStayStore = create<State>()(
  persist(
    (set) => ({
      roomNumber: 0,
      isOcupated: true,

      setCurrentRoom: (roomNumber) => set({ roomNumber }),
    }),
    {
      name: 'stay-store'
    }
  )
)