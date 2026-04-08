'use client'

import { StepProps } from '@/types/template.types'

export default function MinimalStepTwo({ next, back, data, updateData }: StepProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="border-b-2 border-gray-200 pb-4 mb-8">
        <h2 className="text-3xl font-light text-gray-800">Step 02</h2>
        <p className="text-gray-500 text-sm mt-1">Contact Details</p>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
          <input 
            type="tel"
            placeholder="+91 98765 43210"
            className="w-full border-b-2 border-gray-300 p-3 focus:border-black focus:outline-none transition text-lg"
            value={data.phone}
            onChange={(e) => updateData('phone', e.target.value)}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
          <textarea 
            placeholder="Anything you'd like to add..."
            rows={4}
            className="w-full border-b-2 border-gray-300 p-3 focus:border-black focus:outline-none transition resize-none"
            value={data.message}
            onChange={(e) => updateData('message', e.target.value)}
          />
        </div>
      </div>

      <div className="flex gap-4 mt-8">
        <button 
          onClick={back} 
          className="flex-1 border-2 border-gray-300 p-4 hover:bg-gray-50 transition text-lg"
        >
          ← Back
        </button>
        <button 
          onClick={next} 
          className="flex-1 bg-black text-white p-4 hover:bg-gray-800 transition text-lg"
        >
          Review →
        </button>
      </div>
    </div>
  )
}