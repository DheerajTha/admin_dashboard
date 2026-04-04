import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableComponent from "@/components/Tables";
    
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Tables",
};

const TablesPage = () => {
  return (
    <>
      <Breadcrumb pageName="Tables" />
      <Suspense fallback={<div>Loading...</div>}>
          <TableComponent />
      </Suspense>
    </>
  );
};

export default TablesPage;
