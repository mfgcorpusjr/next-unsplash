"use client";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { LucideLoaderCircle } from "lucide-react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import useSearchStore from "@/store/useSearchStore";
import api from "@/lib/axios";

import result from "@/data";

export default function ImageList() {
  const search = useSearchStore((state) => state.search);

  //   const { data, isLoading, isError } = useQuery({
  //     queryKey: ["images", { search }],
  //     queryFn: () => api.get(`/search/photos?query=${search}`),
  //   });

  //   if (isLoading) {
  //     return (
  //       <div className="flex-1 flex justify-center items-center">
  //         <LucideLoaderCircle className="size-16 animate-spin" />
  //       </div>
  //     );
  //   }

  //   if (isError) {
  //     return <div className="flex-1 flex justify-center items-center">Something went wrong</div>;
  //   }

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
      <Masonry>
        {result.results.map((r) => (
          <Image
            src={r.urls.regular}
            alt={r.slug}
            width={400}
            height={250}
            priority
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}
