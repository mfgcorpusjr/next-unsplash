import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextUnsplash",
  description:
    "Beautiful, free images and photos that you can download and use for any project. Better than any royalty free or stock photos.",
};

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <QueryClientProvider client={queryClient}>
          <Navbar />

          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
