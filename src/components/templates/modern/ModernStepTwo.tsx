"use client";
import { StepProps } from "@/types/template.types";
import Image from "next/image";
import { useState } from "react";

export default function ModernStepTwo({
  next,
  back,
  data,
  updateData,
}: StepProps) {
  const [selectedDesign, setSelectedDesign] = useState<number | null>(
    data?.selectedDesign || null
  );

  const handleDesignSelect = (designId: number) => {
    setSelectedDesign(designId);
    updateData({ selectedDesign: designId });
  };

  const handleNext = () => {
    if (selectedDesign !== null) next();
  };

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
    <div className="flex flex-col items-center w-full min-h-screen px-4 py-8 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      
      <div className="relative mb-8 text-center">
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 4h16v16H4z" />
          </svg>
        </div>
        <div className="relative">
         
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Choose Your Design
          </h2>
          <p className="text-slate-500 text-base sm:text-lg mt-2 max-w-md mx-auto">
            Select the perfect template that matches your vision
          </p>
        </div>
      </div>

     
      <div className="grid w-full max-w-6xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {designs.map((design) => (
          <div
            key={design.id}
            onClick={() => handleDesignSelect(design.id)}
            className={`group cursor-pointer rounded-xl overflow-hidden bg-white border-2 transition-all ${
              selectedDesign === design.id
                ? "border-blue-500 shadow-lg shadow-blue-100"
                : "border-slate-200 hover:border-slate-300 hover:shadow-md"
            }`}
          >
             
            <div className="relative w-full aspect-square bg-slate-100 overflow-hidden">
              <Image
                src={design.image}
                alt={design.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

            
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

               <div className="absolute top-3 left-3">
                <div
                  className={`px-3 py-1 rounded-full text-white font-medium text-xs bg-gradient-to-r ${design.gradient} shadow-sm`}
                >
                  {design.tag?.toLowerCase()}
                </div>
              </div>

             
              {selectedDesign === design.id && (
                <div className="absolute top-3 right-3 bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center shadow-md">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}

               
               
            </div>

           
            <div className="p-5">
              <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2">
                {design.title}
              </h3>

              
              {design.product_Code && (
                <div className="mt-3 pt-3 border-t border-slate-100">
                  <div className="space-y-1.5 text-sm">
                    <div className="flex justify-between items-baseline">
                      <span className="text-slate-500 text-xs font-medium">Product Code</span>
                      <span className="text-slate-700 font-mono text-xs">{design.product_Code}</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-slate-500 text-xs font-medium">Color</span>
                      <span className="text-slate-700 text-xs">{design.product_color}</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-slate-500 text-xs font-medium">Size</span>
                      <span className="text-slate-700 text-xs">{design.product_size}</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-slate-500 text-xs font-medium">Material</span>
                      <span className="text-slate-700 text-xs">{design.product_material}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Select Button */}
              <button
                className={`mt-4 w-full py-2.5 rounded-lg font-medium transition-colors ${
                  selectedDesign === design.id
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {selectedDesign === design.id ? "Selected ✓" : "Choose Template"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mt-10 w-full max-w-md">
        <button
          onClick={back}
          className="flex-1 py-3 rounded-lg border-2 border-slate-200 text-slate-700 font-medium hover:bg-slate-50 hover:border-slate-300 transition-colors"
        >
          ← Back
        </button>

        <button
          onClick={handleNext}
          disabled={selectedDesign === null}
          className={`flex-1 py-3 rounded-lg font-medium transition-colors ${
            selectedDesign === null
              ? "bg-slate-200 text-slate-400 cursor-not-allowed border-2 border-slate-200"
              : "bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-200"
          }`}
        >
          Continue →  
        </button>
      </div>

      
    </div>
  );
}