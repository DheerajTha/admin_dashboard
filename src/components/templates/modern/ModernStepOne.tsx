'use client'

import { StepProps } from '@/types/template.types'
import Image from 'next/image'
import { useState } from 'react'

export default function ModernStepOne({ next, data, updateData }: StepProps) {
  const [selectedDesign, setSelectedDesign] = useState<number | null>(data?.selectedDesign || null)

  const handleDesignSelect = (designId: number) => {
    setSelectedDesign(designId)
    updateData({ selectedDesign: designId })
  }

  const handleNext = () => {
    if (selectedDesign !== null) {
      next()
    }
  }

  const designs = [
    {
      id: 1,
      title: "COLLECTION BATHMATS [RIS-BTH-8919]",
      image: "/images/bathmats/RIS-BTH-8919-SKY-BLUE-2.jpg",
      tag: "COLLECTION BATHMATS",
      product_Code: "RIS-BTH-8919",
      product_color: "Sky Blue",
      product_size: "60×90 cms",
      product_material: "Front ( Pile ): 100% cotton",
      gradient: "from-blue-500 to-green-400",
    },
    {
      id: 2,
      title: "COLLECTION BATHMATS [RIS-BTH-7413]",
      image: "/images/bathmats/RIS-BTH-7413-6.jpg",
      tag: "COLLECTION BATHMATS",
      product_Code: "RIS-BTH-7413",
      product_color: "Mint Green",
      product_size: "60×90 cms",
      product_material: "Front ( Pile ): 100% cotton",
      gradient: "from-blue-500 to-green-900",
    },
    {
      id: 3,
      title: "COLLECTION BATHMATS [RIS-BTH-7884]",
      image: "/images/bathmats/RIS-BTH-7884-2.jpg",
      tag: "COLLECTION BATHMATS",
      product_Code: "RIS-BTH-7884",
      product_color: "Ivory-Black",
      product_size: "60×90 cms",
      product_material: "Front ( Pile ): 100% cotton",
      gradient: "from-blue-900 to-green-400",
    },
     
  ];

  return (
    <>
    <div className="w-full flex flex-col items-center gap-12 p-8 bg-white dark:bg-gray-900 min-h-screen">
      {/* Design 1 */}
      <div 
        className={`relative w-full   h-[500px] bg-white rounded-3xl shadow-2xl overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-3xl hover:scale-[1.02] ${
          selectedDesign === 1 ? 'ring-4 ring-blue-500 ring-offset-4' : ''
        }`}
        onClick={() => handleDesignSelect(1)}
      >
        {selectedDesign === 1 && (
          <div className="absolute top-4 right-4 z-30 bg-blue-500 text-white rounded-full p-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        )}
        
        <div className="absolute right-0 top-0 h-full w-3/5 overflow-hidden">
          <Image
            src='/education.jpg'
            alt="Template Preview"
            width={800}
            height={800}
            className="h-full w-full object-cover transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/20 group-hover:to-white/0 transition-all"></div>
        </div>

        <div className="absolute left-0 top-0 h-full w-[45%] p-8 flex flex-col justify-center bg-white/90 backdrop-blur-sm z-10 rounded-r-3xl shadow-lg">
        <Image src="/images/logo/RIS-New-LOGO.png" alt="Template Preview" width={200} height={200} className="object-cover" />
          <div className="inline-flex items-center gap-2 mb-4">
            
            <span className="w-8 h-0.5 bg-blue-600 rounded-full"></span>
            <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase">
              Premium Collection
            </span>
          </div>

          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent leading-tight">
            Bathmats
          </h2>

          <p className="text-base text-gray-500 mt-3 font-medium">
            Modern Presentation Template
          </p>

          <p className="text-sm text-gray-400 mt-2 leading-relaxed">
            Clean, professional, and fully customizable design for your next
            business presentation.
          </p>
 
        </div>

        <div className="absolute bottom-0 left-0 w-[35%] h-16 bg-gradient-to-r from-blue-600 to-blue-500 rounded-tr-3xl z-20 shadow-lg"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-100 rounded-full opacity-50 blur-2xl"></div>
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-100 rounded-full opacity-50 blur-2xl"></div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500 z-5"></div>
      </div>

       <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {designs.map((design) => (
                <div
                  key={design.id}
                  onClick={() => handleDesignSelect(design.id)}
                  className={`group cursor-pointer overflow-hidden rounded-xl bg-white transition-all ${
                    selectedDesign === design.id
                      ? "border-blue-500 shadow-lg shadow-blue-100"
                      : "border-slate-200 hover:border-slate-300 hover:shadow-md"
                  }`}
                >
                  <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
                    <Image
                      src={design.image}
                      alt={design.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) rounded-none 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
      
                  <div className="p-5">
                    <h3 className="mb-2 line-clamp-2 text-lg font-bold text-slate-900">
                      {design.title}
                    </h3>
                    {design.product_Code && (
                      <div className="mt-3 border-t border-slate-100 pt-3">
                        <div className="space-y-1.5 text-sm">
                          <div className="flex items-baseline gap-1 border-b-2 py-2">
                            <span className="text-xl font-medium text-slate-500">
                              Product Code:{" "}
                            </span>
                            <span className="text-lg text-slate-700">
                              {design.product_Code}
                            </span>
                          </div>
                          <div className="flex items-baseline gap-1 border-b-2 py-2">
                            <span className="text-xl font-medium text-slate-500">
                              Color:{" "}
                            </span>
                            <span className="text-lg text-slate-700">
                              {design.product_color}
                            </span>
                          </div>
                          <div className="flex items-baseline gap-1 border-b-2 py-2">
                            <span className="text-xl font-medium text-slate-500">
                              Size:{" "}
                            </span>
                            <span className="text-lg text-slate-700">
                              {design.product_size}
                            </span>
                          </div>
                          <div className="flex items-baseline gap-1 border-b-2 py-2">
                            <span className="text-xl font-medium text-slate-500">
                              Material:{" "}
                            </span>
                            <span className="text-lg text-slate-700">
                              {design.product_material}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
      
                    {/* Select Button */}
                    {/* <button
                      className={`mt-4 w-full py-2.5 rounded-lg font-medium transition-colors ${
                        selectedDesign === design.id
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {selectedDesign === design.id ? "Selected " : "Choose Template"}
                    </button> */}
                  </div>
                </div>
              ))}
       </div>
 
      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={selectedDesign === null}
        className={`group mt-8 bg-gradient-to-r from-blue-500 via-blue-600 to-green-500 text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 ${
          selectedDesign === null ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        <span>Next Step</span>
        <svg
          className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </button>
    </div>
    </>
  )
}