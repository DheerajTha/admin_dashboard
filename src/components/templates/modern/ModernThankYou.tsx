'use client'

import { StepProps } from '@/types/template.types'
import Image from 'next/image'
import { FaDownload, FaRegCheckCircle } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { CiStar } from "react-icons/ci";
import { MdArrowRightAlt } from "react-icons/md";




export default function ModernThankYou({   }: StepProps) {
  return (
    <div className="  w-full bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-green-500 px-6 py-20 text-center shadow-xl">
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-white/20 p-4 backdrop-blur-sm">
              <FaRegCheckCircle className="h-16 w-16 text-white" strokeWidth={1.5} />
            </div>
          </div>
          <h1 className="mb-3 text-4xl font-bold text-white md:text-5xl">
            Thank You! 🎉
          </h1>
          <p className="text-lg text-white/90">
            Your template has been successfully selected. Get ready to create
            something amazing!
          </p>
           
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="h-12 w-full text-gray-50"
            preserveAspectRatio="none"
            viewBox="0 0 1440 54"
            fill="currentColor"
          >
            <path d="M0 22L60 25.3C120 28.7 240 35.3 360 35.3C480 35.3 600 28.7 720 24.7C840 20.7 960 19.3 1080 21.3C1200 23.3 1320 28.7 1380 31.3L1440 34V54H1380C1320 54 1200 54 1080 54C960 54 840 54 720 54C600 54 480 54 360 54C240 54 120 54 60 54H0V22Z" />
          </svg>
        </div>
      </div>

 

       
    </div>
  )
}
