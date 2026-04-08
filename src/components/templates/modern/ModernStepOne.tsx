'use client'

import { StepProps } from '@/types/template.types'

export default function ModernStepOne({ next, data, updateData }: StepProps) {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-2xl">
      <div className="bg-white p-8 rounded-xl shadow-2xl">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4">
            <span className="text-3xl">✨</span>
          </div>
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Welcome to Modern Template
          </h2>
          <p className="text-gray-600 mt-2">Tell us about yourself</p>
        </div>
        
        <div className="space-y-4">
          <input 
            placeholder="Full Name" 
            className="border-2 border-gray-300 p-3 w-full rounded-lg focus:border-blue-500 focus:outline-none transition"
            value={data.name}
            onChange={(e) => updateData('name', e.target.value)}
          />
          <input 
            placeholder="Email Address" 
            type="email"
            className="border-2 border-gray-300 p-3 w-full rounded-lg focus:border-blue-500 focus:outline-none transition"
            value={data.email}
            onChange={(e) => updateData('email', e.target.value)}
          />
        </div>

        <button
          onClick={next}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-lg mt-6 font-semibold hover:opacity-90 transition transform hover:scale-[1.02]"
          disabled={!data.name || !data.email}
        >
          Continue →
        </button>
      </div>
    </div>
  )
}