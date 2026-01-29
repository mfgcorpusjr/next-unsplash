import Image from "next/image";

import SearchInput from "@/components/SearchInput";

import logoImg from "@/assets/images/logo.svg";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur-md">
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
