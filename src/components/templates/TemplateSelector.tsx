'use client'

import { useRouter } from 'next/navigation'
 import { templatesConfig } from '@/constants/templates'
import { TemplateType } from '@/types/template.types'
import TemplateCard from './TemplateCard'

export default function TemplateSelector() {
  const router = useRouter()

  const handleTemplateSelect = (templateId: TemplateType) => {
    router.push(`/templates/${templateId}`)
  }

  return (
    <div className="py-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Choose Your Template
        </h1>
        <p className="text-gray-600 text-lg">
          Select a template that best fits your needs
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.values(templatesConfig).map((template) => (
          <TemplateCard
            key={template.id}
            template={template}
            onSelect={() => handleTemplateSelect(template.id)}
          />
        ))}
      </div>
    </div>
  )
}