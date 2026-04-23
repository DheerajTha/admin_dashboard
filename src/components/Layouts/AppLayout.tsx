"use client";

import { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import { Header } from "@/components/Layouts/header";
import { Sidebar } from "@/components/Layouts/sidebar";
 
export default function AppLayout({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const isAuthSignIn = pathname === "/auth/sign_in" || pathname === "/auth/sign_in/";
  const isAuthSignUp = pathname === "/auth/sign-up" || pathname === "/auth/sign-up/";

  const templatePage = pathname.startsWith('/templates/')

  if(templatePage ) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-2 dark:bg-[#020d1a] px-4 py-10">
        <main className="w-full md:w-5/6">{children}</main>
      </div>
    );
  }

  if (isAuthSignIn || isAuthSignUp) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-2 dark:bg-[#020d1a] px-4 py-10">
        <main className="w-full md:max-w-[1000px]">{children}</main>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />

      <div className="flex pt-10">
        <Sidebar />

        <main className="flex-1 bg-gray-2 dark:bg-[#020d1a] transition-all duration-600 ease-in-out">
          <div className="isolate  overflow-hidden transition-all duration-600 p-4 md:p-6 2xl:p-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
