import "@/css/satoshi.css";
import "@/css/style.css";

import { Sidebar } from "@/components/Layouts/sidebar";

import "flatpickr/dist/flatpickr.min.css";
import "jsvectormap/dist/jsvectormap.css";

import { Header } from "@/components/Layouts/header";
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import type { PropsWithChildren } from "react";
import { Providers } from "./providers";
import { Inter } from "next/font/google";



const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


export const metadata: Metadata = {
  title: {
    template: "%s | NextAdmin - Next.js Dashboard Kit",
    default: "NextAdmin - Next.js Dashboard Kit",
  },
  description:
    "Next.js admin dashboard toolkit with 200+ templates, UI components, and integrations for fast dashboard development.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning  className={inter.variable}> 
      <body>
        <Providers>
          <NextTopLoader color="#5750F1" showSpinner={false} />

          <div className="min-h-screen">
            {/* Fixed Header - Full Width */}
            <Header />

            {/* Content Area Below Header */}
            <div className="flex pt-10">
              <Sidebar />

              <main className="flex-1 bg-gray-2 dark:bg-[#020d1a] transition-all duration-600 ease-in-out">
                <div className="isolate mx-auto w-full max-w-screen-2xl overflow-hidden transition-all duration-600 p-4 md:p-6 2xl:p-10">
                  {children}
                </div>
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}


