import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TemplateSelector from "@/components/templates/TemplateSelector";
import React, { Suspense } from "react";
  
const Templates = () => {
  return (
    <div>
      <Breadcrumb pageName="Templates" />

      <Suspense fallback={<div>Loading...</div>}>
        <div className="mt-4 ">
          <TemplateSelector />
        </div>
      </Suspense>
    </div>
  );
};

export default Templates;
