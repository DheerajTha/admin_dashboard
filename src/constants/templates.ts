import ClassicStepOne from '@/components/templates/classic/ClassicStepOne'
import ClassicStepTwo from '@/components/templates/classic/ClassicStepTwo'
import ClassicThankYou from '@/components/templates/classic/ClassicThankYou'
import MinimalStepOne from '@/components/templates/minimal/MinimalStepOne'
import MinimalStepTwo from '@/components/templates/minimal/MinimalStepTwo'
import MinimalThankYou from '@/components/templates/minimal/MinimalThankYou'
 import ModernStepOne from '@/components/templates/modern/ModernStepOne'
import ModernStepTwo from '@/components/templates/modern/ModernStepTwo'
import ModernThankYou from '@/components/templates/modern/ModernThankYou'
import { TemplateConfig, TemplateType } from '@/types/template.types'
 
export const templatesConfig: Record<TemplateType, TemplateConfig> = {
  modern: {
    id: 'modern',
    name: 'Modern Template',
    description: 'A contemporary design with bold colors and gradients',
    previewImage: '/templates/modern-preview.jpg',
    stepOne: ModernStepOne,
    stepTwo: ModernStepTwo,
    thankYou: ModernThankYou,
  },
  classic: {
    id: 'classic',
    name: 'Classic Template',
    description: 'Traditional elegant design with vintage feel',
    previewImage: '/templates/classic-preview.jpg',
    stepOne: ClassicStepOne,
    stepTwo: ClassicStepTwo,
    thankYou: ClassicThankYou,
  },
  minimal: {
    id: 'minimal',
    name: 'Minimal Template',
    description: 'Clean and simple design focusing on content',
    previewImage: '/templates/minimal-preview.jpg',
    stepOne: MinimalStepOne,
    stepTwo: MinimalStepTwo,
    thankYou: MinimalThankYou,
  },
}