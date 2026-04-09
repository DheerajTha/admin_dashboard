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

  return (
    <>
    <div className="w-full flex flex-col items-center gap-12 p-8 bg-white dark:bg-gray-900 min-h-screen">
      {/* Design 1 */}
      <div 
        className={`relative w-full max-w-5xl h-[500px] bg-white rounded-3xl shadow-2xl overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-3xl hover:scale-[1.02] ${
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

          <button className="mt-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2.5 text-sm rounded-xl w-fit font-medium shadow-md hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group/btn">
            <span>Use Template</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div className="absolute bottom-0 left-0 w-[35%] h-16 bg-gradient-to-r from-blue-600 to-blue-500 rounded-tr-3xl z-20 shadow-lg"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-100 rounded-full opacity-50 blur-2xl"></div>
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-100 rounded-full opacity-50 blur-2xl"></div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500 z-5"></div>
      </div>

      {/* Design 2 */}
      <div 
        className={`relative w-full border-t-6 border-primary max-w-5xl h-[500px] bg-white rounded-3xl shadow-2xl overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-3xl hover:scale-[1.02] ${
          selectedDesign === 2 ? 'ring-4 ring-blue-500 ring-offset-4' : ''
        }`}
        onClick={() => handleDesignSelect(2)}
      >
        {selectedDesign === 2 && (
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
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/20 group-hover:to-white/0 transition-all"></div>
        </div>

        <div className="absolute left-0 top-0 h-full w-[45%] flex flex-col justify-center bg-white/90 backdrop-blur-lg z-10 rounded-r-2xl shadow-lg">
        <Image src="/images/logo/RIS-New-LOGO.png" alt="Template Preview" width={200} height={200} className="object-cover" />
          <div className='bg-gradient-to-r from-blue-600 to-blue-500 p-4 rounded-2xl w-fit mb-4 shadow-lg'>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-0.5 bg-white rounded-full"></span>
              <span className="text-xs font-semibold tracking-wider text-white uppercase">
                Premium Collection
              </span>
            </div>

            <h2 className="text-4xl font-bold text-white leading-tight">
              Bathmats
            </h2>

            <p className="text-base text-white mt-3 font-medium">
              Modern Presentation Template
            </p>

            <p className="text-sm text-gray-200 mt-2 leading-relaxed">
              Clean, professional, and fully customizable design for your next
              business presentation.
            </p>

            <button className="mt-6 bg-white text-black px-6 py-2.5 text-sm rounded-xl w-fit font-medium shadow-md hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group/btn">
              <span>Use Template</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-100 rounded-full opacity-50 blur-2xl"></div>
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-100 rounded-full opacity-50 blur-2xl"></div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500 z-5"></div>
      </div>

      {/* Design 3 - New Design */}
      {/* <div 
        className={`relative w-full max-w-5xl h-[500px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-3xl hover:scale-[1.02] ${
          selectedDesign === 3 ? 'ring-4 ring-blue-500 ring-offset-4' : ''
        }`}
        onClick={() => handleDesignSelect(3)}
      >
        {selectedDesign === 3 && (
          <div className="absolute top-4 right-4 z-30 bg-blue-500 text-white rounded-full p-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        )}
        
         <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500"></div>
        </div>

         <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
          <Image
            src='/education.jpg'
            alt="Template Preview"
            width={800}
            height={800}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/80 to-transparent"></div>
        </div>

         <div className="absolute right-0 top-0 h-full w-[55%] p-8 flex flex-col justify-center z-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="flex gap-1">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></span>
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200"></span>
            </div>
            <span className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
              Featured Template
            </span>
          </div>

          <h2 className="text-5xl font-bold text-white leading-tight mb-3">
            CREATIVE
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              STUDIO
            </span>
          </h2>

          <p className="text-base text-gray-300 mt-2 font-medium">
            Modern Creative Portfolio Template
          </p>

          <div className="flex flex-wrap gap-2 mt-3">
            <span className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-lg text-xs text-gray-300">Creative Design</span>
            <span className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-lg text-xs text-gray-300">Modern Layout</span>
            <span className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-lg text-xs text-gray-300">Fully Responsive</span>
          </div>

          <p className="text-sm text-gray-400 mt-3 leading-relaxed">
            Stand out with this creative and modern design perfect for portfolios, 
            creative agencies, and personal branding. Features smooth animations 
            and eye-catching layouts.
          </p>

          <div className="flex items-center gap-4 mt-6">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2.5 text-sm rounded-xl font-medium shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group/btn">
              <span>Choose Template</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1"
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
            <button className="text-gray-300 hover:text-white transition-colors text-sm font-medium flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              Preview Demo
            </button>
          </div>
        </div>

         <div className="absolute bottom-6 left-6 flex gap-2 z-20">
          <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </div>
          <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
      </div> */}

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