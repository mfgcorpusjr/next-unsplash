"use client";

import { useQuery } from "@tanstack/react-query";
import { LucideLoaderCircle } from "lucide-react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import ImageListItem from "@/components/ImageListItem";

import useSearchStore from "@/store/useSearchStore";
import api from "@/lib/axios";

export default function ImageList() {
  const search = useSearchStore((state) => state.search);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["images", { search }],
    queryFn: () => api.get(`/search/photos?per_page=${30}&query=${search}`),
  });

  if (isLoading) {
    return (
      <div className="flex-1 flex justify-center items-center">
        <LucideLoaderCircle className="size-16 animate-spin" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex-1 flex justify-center items-center">
        Something went wrong
      </div>
    );
  }

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry>
        {data?.data.results.map((result: any) => (
          <ImageListItem image={result} />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}
