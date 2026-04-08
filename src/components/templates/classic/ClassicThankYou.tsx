 'use client'

import { StepProps } from '@/types/template.types'

export default function ClassicThankYou({ data, onSubmit }: StepProps) {
  return (
    <div className="border-4 border-amber-600 bg-amber-50 p-8 rounded-sm shadow-2xl text-center">
      <div className="border-2 border-amber-300 p-6">
        <div className="text-6xl mb-4">🏆</div>
        <h2 className="text-3xl font-serif font-bold text-amber-900">Gratitude</h2>
        <p className="text-gray-600 font-serif mt-2 italic">We appreciate your submission</p>
        
        <div className="mt-6 p-4 bg-white border border-amber-200 rounded text-left">
          <p className="text-sm text-amber-800 mb-2">Thank you, {data.name}!</p>
          <p className="text-xs text-gray-600">We will contact you at {data.email}</p>
        </div>
        
        <button 
          onClick={onSubmit} 
          className="bg-amber-800 text-white p-3 px-8 mt-6 font-serif hover:bg-amber-900 transition"
        >
          Submit
        </button>
      </div>
    </div>
  )
}