import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import type { Metadata } from "next";
import { ContactForm } from "./_components/contact-form";
 
export const metadata: Metadata = {
  title: "Form Layout",
};

export default function Page() {
  return (
    <>
      <Breadcrumb pageName="Form Page" />

      <div className="grid grid-cols-1 gap-9  ">
        <div className="flex flex-col gap-9">
          <ContactForm />
        </div>
 
         
      </div>
    </>
  );
}
