export type TemplateType = "bathmats" | "classic" | "minimal";

export interface TemplateConfig {
  id: TemplateType;
  name: string;
  description: string;
  previewImage: string;
  stepOne: React.ComponentType<any>;
  stepTwo: React.ComponentType<any>;
  thankYou: React.ComponentType<any>;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface StepProps {
  updateData: (newData: Partial<StepProps["data"]>) => void;
  onSubmit?: () => void;
  templateName?: string;
  next: () => void;
  back: () => void;
  data: {
    selectedDesign?: number;
    selectedLayout?: number;
    [key: string]: any;
  };
}
