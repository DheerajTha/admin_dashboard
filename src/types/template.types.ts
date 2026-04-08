export type TemplateType = 'modern' | 'classic' | 'minimal'

export interface TemplateConfig {
  id: TemplateType
  name: string
  description: string
  previewImage: string
  stepOne: React.ComponentType<any>
  stepTwo: React.ComponentType<any>
  thankYou: React.ComponentType<any>
}

export interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

export interface StepProps {
  data: FormData
  updateData: (field: string, value: string) => void
  next?: () => void
  back?: () => void
  onSubmit?: () => void
  templateName?: string
}