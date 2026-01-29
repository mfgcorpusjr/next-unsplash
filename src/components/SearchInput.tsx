"use client";

import { LucideSearch } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

import useSearchStore from "@/store/useSearchStore";
export default function SearchInput() {
  const setSearch = useSearchStore((state) => state.setSearch);

  return (
    <InputGroup className="max-w-lg bg-muted">
      <InputGroupInput
        placeholder="Search photos and illustrations"
        onChange={(e) => setSearch(e.target.value)}
      />

      <InputGroupAddon>
        <LucideSearch />
      </InputGroupAddon>
    </InputGroup>
  );
}
