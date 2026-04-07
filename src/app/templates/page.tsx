import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import React, { Suspense } from "react";
 import TemplatePage from "./-components/template-component";

const Templates = () => {
  return (
    <div>
      <Breadcrumb pageName="Templates" />

      <Suspense fallback={<div>Loading...</div>}>
        <div className="mt-4 ">
          <TemplatePage />
        </div>
      </Suspense>
    </div>
  );
};

export default Templates;
