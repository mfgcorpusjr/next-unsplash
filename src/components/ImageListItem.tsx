import Image from "next/image";
import Link from "next/link";

import UserDetails from "@/components/UserDetails";

import { Image as TImage } from "@/utils/types";

type ImageListItemProps = {
  image: TImage;
};

export default function ImageListItem({ image }: ImageListItemProps) {
  return (
    <div key={image.id} className="relative group">
      <Link href={image.links.html} target="_blank">
        <Image
          src={image.urls.regular}
          alt={image.slug}
          width={400}
          height={250}
          priority
          className="w-full object-cover cursor-copy hover:brightness-75 transition-all duration-300"
        />
      </Link>

      <UserDetails user={image.user} />
    </div>
  );
}
