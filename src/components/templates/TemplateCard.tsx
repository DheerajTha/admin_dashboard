'use client'

import { TemplateConfig } from '@/types/template.types'
import Image from 'next/image'
 
interface TemplateCardProps {
  template: TemplateConfig
  onSelect: () => void
}

export default function TemplateCard({ template, onSelect }: TemplateCardProps) {
  return (
    <div 
      className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
      onClick={onSelect}
    >
      <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <span className="text-white text-xl font-bold">{template.name}</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {template.name}
        </h3>
        <p className="text-gray-600 mb-4">
          {template.description}
        </p>
        
        <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors">
          Select Template →
        </button>
      </div>
    </div>
  )
}