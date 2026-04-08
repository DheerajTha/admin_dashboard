'use client'

import { useState } from 'react'
import { FormData } from '@/types/template.types'
import ModernStepOne from '@/components/templates/modern/ModernStepOne'
import ModernStepTwo from '@/components/templates/modern/ModernStepTwo'
import ModernThankYou from '@/components/templates/modern/ModernThankYou'

export default function TemplateFlow() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    template: undefined,
  })

  const next = () => setStep((prev) => prev + 1)
  const back = () => setStep((prev) => prev - 1)

  const updateData = (field: string, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <>
      {step === 1 && (
        <ModernStepOne next={next} back={back} data={data} updateData={updateData} />
      )}

      {step === 2 && (
        <ModernStepTwo next={next} back={back} data={data} updateData={updateData} />
      )}

      {step === 3 && (
        <ModernThankYou data={data} onSubmit={() => {}} updateData={updateData} />
      )}
    </>
  )
}