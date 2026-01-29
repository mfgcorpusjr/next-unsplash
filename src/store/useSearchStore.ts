import { create } from "zustand";

type SearchStore = {
  search: string;
  setSearch: (search: string) => void;
};

const useSearchStore = create<SearchStore>()((set) => ({
  search: "cat",

  setSearch: (search: string) => set({ search }),
}));

export default useSearchStore;
