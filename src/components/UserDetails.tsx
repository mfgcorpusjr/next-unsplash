import Image from "next/image";
import Link from "next/link";

import { User } from "@/utils/types";

type UserDetailsProps = {
  user: User;
};

export default function UserDetails({ user }: UserDetailsProps) {
  return (
    <div className="hidden group-hover:block absolute bottom-4 left-4">
      <Link
        href={user.links.html}
        target="_blank"
        className="flex items-center gap-4 cursor-pointer"
      >
        <Image
          src={user.profile_image.small}
          alt={user.name}
          width={32}
          height={32}
          className="size-8 rounded-full"
        />

        <span className="text-white font-semibold">{user.name}</span>
      </Link>
    </div>
  );
}
