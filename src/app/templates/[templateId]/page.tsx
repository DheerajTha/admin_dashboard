'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { TemplateType } from '@/types/template.types'
import { templatesConfig } from '@/constants/templates'

export default function TemplatePage() {
  const params = useParams()
  const router = useRouter()
  const templateId = params.templateId as TemplateType
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const currentTemplate = templatesConfig[templateId]
  
  useEffect(() => {
    if (!currentTemplate) {
      router.push('/')
    }
  }, [currentTemplate, router])

  if (!currentTemplate) {
    return <div>Loading...</div>
  }

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async () => {
    console.log('Template:', templateId)
    console.log('Form Data:', formData)
    // Add your API call here
    alert('Form submitted successfully!')
    router.push('/')
  }

  const StepOneComponent = currentTemplate.stepOne
  const StepTwoComponent = currentTemplate.stepTwo
  const ThankYouComponent = currentTemplate.thankYou

  return (
    <div className="py-6">
      <button 
        onClick={() => router.push('/')}
        className="mb-4 text-blue-600 hover:underline flex items-center gap-2"
      >
        ← Change Template
      </button>
      
      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          {currentTemplate.name} - Step {step} of 3
        </h1>
        <div className="mt-2 h-2 bg-gray-200 rounded-full">
          <div 
            className="h-2 bg-blue-600 rounded-full transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>
      
      {step === 1 && (
        <StepOneComponent 
          data={formData}
          updateData={updateFormData}
          next={() => setStep(2)} 
        />
      )}
      {step === 2 && (
        <StepTwoComponent 
          data={formData}
          updateData={updateFormData}
          next={() => setStep(3)}
          back={() => setStep(1)}
        />
      )}
      {step === 3 && (
        <ThankYouComponent 
          data={formData}
          onSubmit={handleSubmit}
          templateName={currentTemplate.name}
        />
      )}
    </div>
  )
}