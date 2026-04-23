"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ModernStepOne() {
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
      product_color: "Mint Green",
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
      product_color: "Ivory-Black",
      product_size: "60×90 cms",
      product_material: "Front (Pile): 100% cotton",
      gradient: "from-blue-900 to-green-400",
    },
    {
      id: 4,
      title: "COLLECTION BATHMATS [RIS-BTH-7884]",
      image: "/images/bathmats/RIS-BTH-7884-2.jpg",
      tag: "COLLECTION BATHMATS",
      product_Code: "RIS-BTH-7884",
      product_color: "Ivory-Black",
      product_size: "60×90 cms",
      product_material: "Front (Pile): 100% cotton",
      gradient: "from-blue-900 to-green-400",
    },
    {
      id: 5,
      title: "COLLECTION BATHMATS [RIS-BTH-7884]",
      image: "/images/bathmats/RIS-BTH-7884-2.jpg",
      tag: "COLLECTION BATHMATS",
      product_Code: "RIS-BTH-7884",
      product_color: "Ivory-Black",
      product_size: "60×90 cms",
      product_material: "Front (Pile): 100% cotton",
      gradient: "from-blue-900 to-green-400",
    },
    {
      id: 6,
      title: "COLLECTION BATHMATS [RIS-BTH-7884]",
      image: "/images/bathmats/RIS-BTH-7884-2.jpg",
      tag: "COLLECTION BATHMATS",
      product_Code: "RIS-BTH-7884",
      product_color: "Ivory-Black",
      product_size: "60×90 cms",
      product_material: "Front (Pile): 100% cotton",
      gradient: "from-blue-900 to-green-400",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="relative h-[600px] w-full overflow-hidden md:h-[800px] lg:h-[100vh]">
        <div className="absolute inset-0">
          <Image
            src="/education.jpg"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        <div className="relative flex h-full items-center px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up space-y-6 text-white md:space-y-6">
            <div className="mb-4 md:mb-6">
              <Image
                src="/images/logo/new-logo.png"
                alt="RIS Logo"
                width={180}
                height={80}
                className="brightness-200"
              />
            </div>

            <div className="flex items-center gap-3">
              <div className="h-0.5 w-12 rounded-full bg-blue-500" />
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-500 md:text-base">
                Premium Collection
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight sm:text-7xl md:text-9xl lg:text-[140px]">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Bathmats
              </span>
            </h1>

            <p className="max-w-lg text-lg font-light text-gray-200 md:text-xl lg:text-2xl">
              Explore our luxurious collection of premium quality bathmats
              designed for comfort and style
            </p>
             
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-500 via-blue-500 to-transparent" />
      </div>

      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-gray-200 dark:border-gray-700" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-gradient-to-br from-gray-50 to-gray-100 px-4 text-2xl dark:from-gray-900 dark:to-gray-800">
            ✦
          </span>
        </div>
      </div>

      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {designs.map((design) => (
            <div
              key={design.id}
              className="group relative transform overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:bg-gray-800"
              onMouseEnter={() => setHoveredId(design.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
                <Image
                  src={design.image}
                  alt={design.title}
                  fill
                  className={`object-cover transition-transform duration-700 ${
                    hoveredId === design.id ? "scale-110" : "scale-100"
                  }`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
                    hoveredId === design.id ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>

              <div className="space-y-4 p-6">
                <h3 className="line-clamp-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-amber-600 dark:text-white dark:group-hover:text-blue-500">
                  {design.title}
                </h3>

                <div className="space-y-3">
                  <div className="flex items-baseline justify-between border-b border-gray-100 py-2 dark:border-gray-700">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Product Code
                    </span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {design.product_Code}
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between border-b border-gray-100 py-2 dark:border-gray-700">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Color
                    </span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {design.product_color}
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between border-b border-gray-100 py-2 dark:border-gray-700">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Size
                    </span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {design.product_size}
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between py-2">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Material
                    </span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {design.product_material}
                    </span>
                  </div>
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
          }
        `}
      </style>
    </div>
  );
}
