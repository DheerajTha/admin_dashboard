"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

interface Template {
  id: number;
  name: string;
  description: string;
  previewImage: string;
  layout: 'modern' | 'classic' | 'minimal';
}


const TemplateComponent = () => {
   const Router = useRouter()
   const [showTemplates, setShowTemplates] = useState(true);

   const templates: Template[] = [
    {
      id: 1,
      name: "Modern Template",
      description: "Clean and minimal design with bold typography",
      previewImage: "/templates/modern-preview.jpg",
      layout: "modern"
    },
    {
      id: 2,
      name: "Classic Template",
      description: "Traditional layout with elegant styling",
      previewImage: "/templates/classic-preview.jpg",
      layout: "classic"
    },
    {
      id: 3,
      name: "Creative Template",
      description: "Unique and artistic design elements",
      previewImage: "/templates/creative-preview.jpg",
      layout: "minimal"
    }
   ]

   const handleTemplateClick = (templateId: number) => {
      Router.push(`/templates/${templateId}`)
   }

   if(!showTemplates) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <button
          onClick={() => setShowTemplates(true)}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          View Templates
        </button>
      </div>
    )
   }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Choose Your Template
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Select a template that best fits your needs
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <div
              key={template.id}
              onClick={() => handleTemplateClick(template.id)}
              className="cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">{template.name}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {template.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {template.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Layout: {template.layout}</span>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                      Select
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default TemplateComponent;