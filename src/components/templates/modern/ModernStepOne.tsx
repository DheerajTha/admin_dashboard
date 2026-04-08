'use client'

import { StepProps } from '@/types/template.types'
import Image from 'next/image'

export default function ModernStepOne({ next, data, updateData }: StepProps) {
  return (
    <div className="w-full flex flex-col items-center gap-12 p-8 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      {/* Card Container */}
      <div
        className="relative w-full max-w-5xl h-[500px] bg-white rounded-3xl shadow-2xl overflow-hidden group cursor-pointer transition-all duration-500 hover:shadow-3xl hover:scale-[1.02]"
      >
        {/* Image - Right Side with Parallax Effect */}
        <div className="absolute right-0 top-0 h-full w-3/5 overflow-hidden">
          <Image
            src='/education.jpg'
            alt="Template Preview"
            width={800}
            height={800}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Gradient Overlay on Image for Better Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/20 group-hover:to-white/0 transition-all"></div>
        </div>

        {/* Left Content - Glassmorphism Effect */}
        <div className="absolute left-0 top-0 h-full w-[45%] p-8 flex flex-col justify-center bg-white/90 backdrop-blur-sm z-10 rounded-r-3xl shadow-lg">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-0.5 bg-blue-600 rounded-full"></span>
            <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase">
              Premium Collection
            </span>
          </div>

          {/* Title with Gradient */}
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent leading-tight">
            BUSINESS
          </h2>

          {/* Subtitle */}
          <p className="text-base text-gray-500 mt-3 font-medium">
            Modern Presentation Template
          </p>

          {/* Description */}
          <p className="text-sm text-gray-400 mt-2 leading-relaxed">
            Clean, professional, and fully customizable design for your next
            business presentation.
          </p>

          {/* Button with Hover Animation */}
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

        {/* Bottom Blue Shape - Redesigned as Diagonal Accent */}
        <div className="absolute bottom-0 left-0 w-[35%] h-16 bg-gradient-to-r from-blue-600 to-blue-500 rounded-tr-3xl z-20 shadow-lg"></div>

        {/* Decorative Circle */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-100 rounded-full opacity-50 blur-2xl"></div>
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-100 rounded-full opacity-50 blur-2xl"></div>

        {/* Hover Overlay with Ripple Effect */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500 z-5"></div>
      </div>

      {/* Next Button - Enhanced */}
      <button
        onClick={next}
        className="group mt-8 bg-gradient-to-r from-blue-500 via-blue-600 to-green-500 text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
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
  )
}