"use client";

import { LucideSearch } from "lucide-react";
import { useDebouncedCallback } from "use-debounce";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

import useSearchStore from "@/store/useSearchStore";
export default function SearchInput() {
  const setSearch = useSearchStore((state) => state.setSearch);

  const debounced = useDebouncedCallback((value: string) => {
    setSearch(value.trim());
  }, 1000);

  return (
    <InputGroup className="max-w-lg bg-muted">
      <InputGroupInput
        placeholder="Search photos and illustrations"
        onChange={(e) => debounced(e.target.value)}
      />

      <InputGroupAddon>
        <LucideSearch />
      </InputGroupAddon>
    </InputGroup>
  );
}
