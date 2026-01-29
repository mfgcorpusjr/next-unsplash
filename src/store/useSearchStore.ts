import { create } from "zustand";

type SearchStore = {
  search: string;
  setSearch: (search?: string) => void;
};

const useSearchStore = create<SearchStore>()((set) => ({
  search: "cat1",

  setSearch: (search?: string) => set({ search: search ?? "cat" }),
}));

export default useSearchStore;
