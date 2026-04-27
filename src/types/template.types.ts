export interface StepProps {
  id: number;
  title: string;
  image: string;
  tag: string;
  product_Code: string;
  product_color: string;
  product_size: string;
  product_material: string;
  gradient: string;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  template?: string;
}