'use client'

import { StepProps } from '@/types/template.types'

export default function ClassicStepTwo({ next, back, data, updateData }: StepProps) {
  return (
    <div className="border-4 border-amber-600 bg-amber-50 p-8 rounded-sm shadow-2xl">
      <div className="border-2 border-amber-300 p-6">
        <h2 className="text-2xl font-serif font-bold text-amber-900 text-center mb-6">
          Additional Information
        </h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-serif text-amber-800 mb-1">Phone Number</label>
            <input 
              placeholder="+91 XXXXX XXXXX" 
              className="border border-amber-300 p-3 w-full bg-white font-serif focus:border-amber-600 focus:outline-none"
              value={data.phone}
              onChange={(e) => updateData('phone', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-serif text-amber-800 mb-1">Your Message</label>
            <textarea 
              placeholder="Write your message here..." 
              rows={4}
              className="border border-amber-300 p-3 w-full bg-white font-serif focus:border-amber-600 focus:outline-none"
              value={data.message}
              onChange={(e) => updateData('message', e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          <button 
            onClick={back} 
            className="flex-1 bg-gray-500 text-white p-3 font-serif hover:bg-gray-600 transition"
          >
            ← Back
          </button>
          <button 
            onClick={next} 
            className="flex-1 bg-amber-800 text-white p-3 font-serif hover:bg-amber-900 transition"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  )
}