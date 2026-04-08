'use client'

import { StepProps } from '@/types/template.types'

export default function MinimalThankYou({ data, onSubmit }: StepProps) {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="border-t-2 border-gray-200 pt-12">
        <div className="text-6xl mb-4 text-green-600">✓</div>
        <h2 className="text-4xl font-light text-gray-800">Submission Complete</h2>
        <p className="text-gray-500 mt-3 text-lg">We'll get back to you soon</p>
        
        <div className="mt-8 p-6 bg-gray-50 rounded-lg text-left">
          <p className="text-sm text-gray-600">A confirmation email has been sent to</p>
          <p className="text-lg font-medium text-gray-800 mt-1">{data.email}</p>
        </div>
        
        <button 
          onClick={onSubmit} 
          className="bg-black text-white p-4 px-10 mt-8 hover:bg-gray-800 transition text-lg"
        >
          Done
        </button>
      </div>
    </div>
  )
}