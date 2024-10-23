import { create } from 'zustand';

interface CounterStore {
    count: number;
    inc: () => void;
}

export const useCounterStore = create<CounterStore>((set) => ({
    count: 1,
    inc: () => set((state) => ({ count: state.count + 1 })),
}));
