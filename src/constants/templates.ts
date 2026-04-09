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
  bathmats: {
    id: 'bathmats',
    name: 'Bathmats Collection',
    description: 'At Rugs In Style, cotton bath mats are more than just a bathroom accessory; they’re a thoughtful addition to your space, blending comfort with visual appeal. Designed to offer softness underfoot and a neat, dry surface post-shower, our cotton bath mats bring in both utility and elegance.',
    previewImage: '/images/bathmats/RIS-BTH-8919-SKY-BLUE-2.jpg',
    stepOne: ModernStepOne,
    stepTwo: ModernStepTwo,
    thankYou: ModernThankYou,
  },
  classic: {
    id: 'classic',
    name: 'Classic Template',
    description: 'Traditional elegant design with vintage feel',
    previewImage: '/images/bathmats/RIS-BTH-8919-SKY-BLUE-2.jpg',
    stepOne: ClassicStepOne,
    stepTwo: ClassicStepTwo,
    thankYou: ClassicThankYou,
  },
  minimal: {
    id: 'minimal',
    name: 'Minimal Template',
    description: 'Clean and simple design focusing on content',
    previewImage: '/images/bathmats/RIS-BTH-8919-SKY-BLUE-2.jpg',
    stepOne: MinimalStepOne,
    stepTwo: MinimalStepTwo,
    thankYou: MinimalThankYou,
  },
}