"use client";

import ModernStepOne from "@/components/templates/modern/ModernStepOne";
import ModernStepTwo from "@/components/templates/modern/ModernStepTwo";
import { useParams } from "next/navigation";

const TemplatePage = () => {
  const params = useParams();
  const type = params?.type;

  const renderComponent = () => {
    switch (type) {
      case "one":
        return <ModernStepOne />;
      case "two":
        return <ModernStepTwo />;
   
      default:
        return <div>Template not found</div>;
    }
  };

  return <div>{renderComponent()}</div>;
};

export default TemplatePage;