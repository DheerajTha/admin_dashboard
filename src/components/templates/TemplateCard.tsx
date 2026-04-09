'use client'

import { TemplateConfig } from '@/types/template.types'
import Image from 'next/image'
import { SlArrowRight } from "react-icons/sl";

 
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
      <div className="h-80 relative overflow-hidden">
        
        <Image
          src={template.previewImage}
          alt={template.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />

        <div className="absolute inset-0 bg-black/65 flex items-center justify-center">
          <span className="text-white text-xl font-bold">
            {template.name}
          </span>
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
          See Full Details <SlArrowRight className="inline-block ml-2" />
        </button>
      </div>
    </div>
  
  )
}