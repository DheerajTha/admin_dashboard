'use client'

import { StepProps } from '@/types/template.types'

export default function ModernThankYou({ data, onSubmit, templateName }: StepProps) {
  return (
    <div className="bg-gradient-to-r from-green-500 to-teal-600 p-8 rounded-2xl">
      <div className="bg-white p-8 rounded-xl shadow-2xl text-center">
        <div className="text-7xl mb-4 animate-bounce">🎉</div>
        <h2 className="text-3xl font-bold text-green-600">Thank You!</h2>
        <p className="text-gray-600 mt-2">Your submission has been received</p>
        
        <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg text-left">
          <h3 className="font-semibold text-lg mb-3">Submission Summary:</h3>
          <div className="space-y-2">
            <p><strong>Template:</strong> {templateName}</p>
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Email:</strong> {data.email}</p>
            {data.phone && <p><strong>Phone:</strong> {data.phone}</p>}
            {data.message && <p><strong>Message:</strong> {data.message}</p>}
          </div>
        </div>
        
        <button
          onClick={onSubmit}
          className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-3 px-8 rounded-lg mt-6 font-semibold hover:opacity-90 transition transform hover:scale-105"
        >
          Submit Form
        </button>
      </div>
    </div>
  )
}