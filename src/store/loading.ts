import { create } from "zustand";

interface State{
  isLoading: boolean
  togleLoading: () => void
}

export const useLoadingStore = create<State>()(
  (set,get) => ({
    isLoading: false,

    togleLoading: () => {
      const actualValue = get().isLoading

      set({isLoading: !actualValue})
    }
  }),
)