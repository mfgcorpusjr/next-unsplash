import Image from "next/image";

import SearchInput from "@/components/SearchInput";

import logoImg from "@/assets/images/logo.svg";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto p-4 flex items-center gap-8">
        <Image
          src={logoImg}
          alt="logo"
          width={24}
          height={24}
          className="size-6"
        />

        <SearchInput />
      </div>
    </nav>
  );
}
