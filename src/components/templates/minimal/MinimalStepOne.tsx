'use client'

import { StepProps } from '@/types/template.types'

export default function MinimalStepOne({ next, data, updateData }: StepProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="border-b-2 border-gray-200 pb-4 mb-8">
        <h2 className="text-3xl font-light text-gray-800">Step 01</h2>
        <p className="text-gray-500 text-sm mt-1">Basic Information</p>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <input 
            className="w-full border-b-2 border-gray-300 p-3 focus:border-black focus:outline-none transition text-lg"
            placeholder="John Doe"
            value={data.name}
            onChange={(e) => updateData('name', e.target.value)}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input 
            type="email"
            placeholder="john@example.com"
            className="w-full border-b-2 border-gray-300 p-3 focus:border-black focus:outline-none transition text-lg"
            value={data.email}
            onChange={(e) => updateData('email', e.target.value)}
          />
        </div>
      </div>

      <button
        onClick={next}
        className="w-full bg-black text-white p-4 mt-8 hover:bg-gray-800 transition text-lg font-medium"
        disabled={!data.name || !data.email}
      >
        Next Step →
      </button>
    </div>
  )
}