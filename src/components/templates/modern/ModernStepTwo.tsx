"use client";
import { StepProps } from "@/types/template.types";
import Image from "next/image";
export default function ModernStepTwo({ next, back }: StepProps) {
  return (
    <div className="flex w-full flex-col items-center gap-12 bg-gradient-to-br from-gray-50 to-white p-8">
      
      <div className="group relative h-[500px] w-full max-w-5xl cursor-pointer overflow-hidden rounded-3xl shadow-2xl">
      
        <Image
          src="/education.jpg"
          alt="Template Preview"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        /> 
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>{" "}
       
        <div className="absolute inset-0 z-10 flex max-w-xl flex-col justify-center p-10 text-white">
       
          <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-green-400 px-5 py-2 text-xs font-semibold uppercase tracking-wider">
            {" "}
            <span className="h-[2px] w-6 bg-white"></span> Premium
            Collection{" "}
          </div>{" "}
          {/* Title */}{" "}
          <h2 className="text-5xl font-bold leading-tight"> BUSINESS </h2>{" "}
          {/* Subtitle */}{" "}
          <p className="mt-2 text-lg text-gray-200">
            {" "}
            Modern Presentation Template{" "}
          </p>{" "}
          {/* Description */}{" "}
          <p className="mt-2 text-sm leading-relaxed text-gray-300">
            {" "}
            Clean, professional, and fully customizable design for your next
            business presentation.{" "}
          </p>{" "}
          {/* Button */}{" "}
          <button className="group/btn mt-6 flex w-fit items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-medium text-black shadow-lg transition-all duration-300 hover:shadow-xl">
            {" "}
            <span>Use Template</span>{" "}
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />{" "}
            </svg>{" "}
          </button>{" "}
        </div>{" "}
        {/* Blur Glow Effects */}{" "}
        <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-blue-500/20 blur-3xl"></div>{" "}
        <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl"></div>{" "}
      </div>{" "}
      {/* Buttons */}{" "}
      <div className="flex gap-5">
        {" "}
        <button
        onClick={back}
        className="group mt-8 bg-gradient-to-r from-blue-500 via-blue-600 to-green-500 text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
      >
        <span>Back</span>
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
    </div>
  );
}
