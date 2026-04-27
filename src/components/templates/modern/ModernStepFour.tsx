"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ModernStepFour() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const designs = [
    {
      id: 1,
      title: "COLLECTION BATHMATS [RIS-BTH-8919]",
      image: "/images/bathmats/RIS-BTH-8919-SKY-BLUE-2.jpg",
      tag: "COLLECTION BATHMATS",
      product_Code: "RIS-BTH-8919",
      product_color: "Sky Blue",
      product_size: "60×90 cms",
      product_material: "Front (Pile): 100% cotton",
      gradient: "from-blue-500 to-green-400",
    },
    {
      id: 2,
      title: "COLLECTION BATHMATS [RIS-BTH-7413]",
      image: "/images/bathmats/RIS-BTH-7413-6.jpg",
      tag: "COLLECTION BATHMATS",
      product_Code: "RIS-BTH-7413",
      product_size: "60×90 cms",
      product_material: "Front (Pile): 100% cotton",
      gradient: "from-blue-500 to-green-900",
    },
    {
      id: 3,
      title: "COLLECTION BATHMATS [RIS-BTH-7884]",
      image: "/images/bathmats/RIS-BTH-7884-2.jpg",
      tag: "COLLECTION BATHMATS",
      product_Code: "RIS-BTH-7884",
      product_color: "Multi Color",
      product_size: "60×90 cms",
      product_material: "Front (Pile): 100% cotton",
      gradient: "from-blue-900 to-green-400",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      
      <section className="relative grid min-h-screen lg:grid-cols-2">
  <div className="relative flex items-center justify-center bg-gradient-to-br from-blue-300 to-green-400 p-6 sm:p-8 lg:p-12">
    <div className="absolute inset-2" />
    
    <div className="relative z-10 max-w-xl text-center lg:text-left">
      <div className="mb-6 flex justify-center lg:justify-start sm:mb-8">
        <div className="p-2 sm:p-4">
          <Image
            src="/images/logo/new-logo.png"
            alt="RIS Logo"
            width={800}
            height={88}
            className="w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96"
            priority
          />
        </div>
      </div>

      <div className="space-y-4 sm:space-y-6">
        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl 2xl:text-9xl">
          Luxury Redefined
        </h1>
        
        <p className="text-sm text-white/90 sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          Experience the perfect blend of comfort and elegance with our handcrafted premium bathmats
        </p>

      </div>
    </div>
  </div>

  <div className="relative bg-gray-200 p-4 sm:p-6 md:p-8 lg:p-12">
    <div className="grid h-full grid-cols-2 gap-2 sm:gap-3 md:gap-4">
      <div className="col-span-2 row-span-2 overflow-hidden rounded-xl shadow-2xl sm:rounded-2xl">
        <div className="relative h-full min-h-[250px] w-full sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px]">
          <Image
            src="/education.jpg"
            alt="Luxury bathmat"
            fill
            className="object-cover transition-transform duration-700 hover:scale-110"
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 40vw"
          />
        </div>
      </div>
      
       
    </div>
  </div>
</section>

      {/* Decorative Divider */}
      <div className="relative py-6 md:py-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-gray-200 dark:border-gray-700" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-gradient-to-br from-gray-50 to-gray-100 px-5 py-1.5 text-2xl dark:from-gray-900 dark:to-gray-800 md:px-6 md:py-2 md:text-3xl">
            ✦
          </span>
        </div>
      </div>

      {/* Catalog Grid */}
      <div id="catalog" className="mx-auto  px-4 pb-16 sm:px-6 lg:px-8 md:pb-24">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 dark:text-white md:mb-4 md:text-4xl lg:text-5xl">
            Product Catalog
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-600 dark:text-gray-400 md:text-lg lg:text-xl">
            Browse our complete collection of luxury bathmats
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 lg:gap-12 xl:gap-16">
          {designs.map((design, index) => (
            <div
              key={design.id}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl dark:bg-gray-800"
            >
              {/* Image Section */}
              <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 sm:h-80 md:h-96">
                <Image
                  src={design.image}
                  alt={design.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute left-3 top-3 sm:left-4 sm:top-4">
                  <span className="inline-block rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-gray-900 backdrop-blur-sm dark:bg-gray-900/90 dark:text-white sm:px-3 sm:py-1 sm:text-xs">
                    {design.tag}
                  </span>
                </div>
                {/* <div className="absolute bottom-3 right-3 rounded-full bg-black/50 px-2 py-0.5 text-[10px] text-white backdrop-blur-sm sm:bottom-4 sm:right-4 sm:px-3 sm:py-1 sm:text-xs">
                  {String(index + 1).padStart(2, "0")}/{String(designs.length).padStart(2, "0")}
                </div> */}
              </div>

              {/* Product Details */}
              <div className="flex-1 p-5 sm:p-6 md:p-8">
                <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white sm:mb-5 sm:text-xl md:mb-6 md:text-2xl">
                  {design.title}
                </h3>

                <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 sm:rounded-xl">
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="bg-gray-50 px-3 py-2 text-xs font-semibold text-gray-700 dark:bg-gray-900/50 dark:text-gray-300 sm:px-4 sm:py-2.5 sm:text-sm" 
                        style={{ width: "110px" }}>
                          Product Code
                        </td>
                        <td className="px-3 py-2 text-xs text-gray-900 dark:text-white sm:px-4 sm:py-2.5 sm:text-sm">
                          {design.product_Code}
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="bg-gray-50 px-3 py-2 text-xs font-semibold text-gray-700 dark:bg-gray-900/50 dark:text-gray-300 sm:px-4 sm:py-2.5 sm:text-sm">
                          Color
                        </td>
                        <td className="px-3 py-2 text-xs text-gray-900 dark:text-white sm:px-4 sm:py-2.5 sm:text-sm">
                          {design.product_color}
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="bg-gray-50 px-3 py-2 text-xs font-semibold text-gray-700 dark:bg-gray-900/50 dark:text-gray-300 sm:px-4 sm:py-2.5 sm:text-sm">
                          Size
                        </td>
                        <td className="px-3 py-2 text-xs text-gray-900 dark:text-white sm:px-4 sm:py-2.5 sm:text-sm">
                          {design.product_size}
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-gray-50 px-3 py-2 text-xs font-semibold text-gray-700 dark:bg-gray-900/50 dark:text-gray-300 sm:px-4 sm:py-2.5 sm:text-sm">
                          Material
                        </td>
                        <td className="px-3 py-2 text-xs text-gray-900 dark:text-white sm:px-4 sm:py-2.5 sm:text-sm">
                          {design.product_material}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="dark:border-gray-800">
        <div className="mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Link
              href="https://rugsinstyle.com/"
              target="_blank"
              className="group flex items-center gap-2 text-lg text-gray-600 transition-colors hover:text-amber-600 dark:text-gray-400 dark:hover:text-blue-500 md:text-xl"
            >
              <span>rugsinstyle.com</span>
              <svg
                className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>
      {`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}
      </style>
    </div>
  );
}
