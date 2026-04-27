"use client";

import ModernStepFour from "@/components/templates/modern/ModernStepFour";
import ModernStepOne from "@/components/templates/modern/ModernStepOne";
import ModernStepThree from "@/components/templates/modern/ModernStepThree";
import ModernStepTwo from "@/components/templates/modern/ModernStepTwo";
import { useParams } from "next/navigation";

const TemplatePage = () => {
  const params = useParams();
  const type = params?.type as string;

  const renderComponent = () => {
    if (!type) {
      return <div>Template type not found</div>;
    }

    switch (type) {
      case "one":
        return <ModernStepOne />;
      case "two":
        return <ModernStepTwo />;
      case "three":
        return <ModernStepThree />;
      case "four":
        return <ModernStepFour />;
      default:
        return <div>Template not found</div>;
    }
  };

  return <div>{renderComponent()}</div>;
};

export default TemplatePage;