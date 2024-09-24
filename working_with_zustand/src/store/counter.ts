import { create } from 'zustand';

// Define the shape of your store
interface CounterState {
  count: number;
  increase: () => void;
  decrease: () => void;
}

// Create Zustand store with types
const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
}));

export default useCounterStore;
