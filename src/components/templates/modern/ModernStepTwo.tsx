'use client'

import { StepProps } from '@/types/template.types'

export default function ModernStepTwo({ next, back, data, updateData }: StepProps) {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-8 rounded-2xl">
      <div className="bg-white p-8 rounded-xl shadow-2xl">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-4">
            <span className="text-3xl">📝</span>
          </div>
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            Additional Details
          </h2>
          <p className="text-gray-600">Help us understand you better</p>
        </div>
        
        <div className="space-y-4">
          <input 
            placeholder="Phone Number" 
            type="tel"
            className="border-2 border-gray-300 p-3 w-full rounded-lg focus:border-purple-500 focus:outline-none transition"
            value={data.phone}
            onChange={(e) => updateData('phone', e.target.value)}
          />
          <textarea 
            placeholder="Your Message" 
            rows={4}
            className="border-2 border-gray-300 p-3 w-full rounded-lg focus:border-purple-500 focus:outline-none transition"
            value={data.message}
            onChange={(e) => updateData('message', e.target.value)}
          />
        </div>

        <div className="flex gap-4 mt-6">
          <button
            onClick={back}
            className="flex-1 bg-gray-500 text-white p-3 rounded-lg hover:bg-gray-600 transition"
          >
            ← Back
          </button>
          <button
            onClick={next}
            className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-lg hover:opacity-90 transition"
          >
            Review →
          </button>
        </div>
      </div>
    </div>
  )
}