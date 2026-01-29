"use client";

import { useState } from "react";
import { LucideSearch } from "lucide-react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export default function SearchInput() {
  const [search, setSearch] = useState("");

  return (
    <InputGroup className="max-w-lg bg-muted">
      <InputGroupInput
        placeholder="Search photos and illustrations"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <InputGroupAddon>
        <LucideSearch />
      </InputGroupAddon>
    </InputGroup>
  );
}
