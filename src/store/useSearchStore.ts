import { create } from "zustand";

const DEFAULT_SEARCH = "cat";

type SearchStore = {
  search: string;
  setSearch: (search?: string) => void;
};

const useSearchStore = create<SearchStore>()((set) => ({
  search: DEFAULT_SEARCH,

  setSearch: (search?: string) => {
    set({ search: search || DEFAULT_SEARCH });
  },
}));

export default useSearchStore;
