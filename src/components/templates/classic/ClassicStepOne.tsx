'use client'

import { StepProps } from '@/types/template.types'

export default function ClassicStepOne({ next, data, updateData }: StepProps) {
  return (
    <div className="border-4 border-amber-600 bg-amber-50 p-8 rounded-sm shadow-2xl">
      <div className="border-2 border-amber-300 p-6">
        <div className="text-center mb-6">
          <div className="w-24 h-24 mx-auto bg-amber-100 rounded-full flex items-center justify-center mb-4 border-2 border-amber-400">
            <span className="text-4xl">📜</span>
          </div>
          <h2 className="text-3xl font-serif font-bold text-amber-900">Classic Elegance</h2>
          <p className="text-gray-600 font-serif italic">Timeless design for timeless memories</p>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-serif text-amber-800 mb-1">Your Name</label>
            <input 
              placeholder="Enter your full name" 
              className="border border-amber-300 p-3 w-full bg-white font-serif focus:border-amber-600 focus:outline-none"
              value={data.name}
              onChange={(e) => updateData('name', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-serif text-amber-800 mb-1">Email Address</label>
            <input 
              placeholder="your@email.com" 
              type="email"
              className="border border-amber-300 p-3 w-full bg-white font-serif focus:border-amber-600 focus:outline-none"
              value={data.email}
              onChange={(e) => updateData('email', e.target.value)}
            />
          </div>
        </div>

        <button
          onClick={next}
          className="w-full bg-amber-800 text-white p-3 mt-6 font-serif tracking-wide hover:bg-amber-900 transition"
        >
          Proceed →
        </button>
      </div>
    </div>
  )
}