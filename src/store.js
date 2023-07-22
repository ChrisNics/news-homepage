import { create } from 'zustand';

const useSideBar = create((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useSideBar;
