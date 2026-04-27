"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ModernStepThree() {
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
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <section className="relative w-full overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] opacity-30 [background-size:16px_16px]" />

        <div className="relative mx-auto flex  items-center px-4 py-2 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="flex w-full flex-col items-center gap-12 lg:flex-row lg:gap-16 xl:gap-20">
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <div className="mb-8">
                <Image
                  src="/images/logo/new-logo.png"
                  alt="RIS Logo"
                  width={280}
                  height={123}
                  className="mx-auto lg:mx-0"
                  priority
                />
              </div>

              <h1 className="text-6xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-8xl md:text-9xl lg:text-[7rem] xl:text-[10rem]">
                Luxury <span className="text-blue-700">Bathmats</span>
              </h1>

              <p className="mx-auto max-w-xl text-2xl leading-relaxed text-gray-600 md:text-3xl lg:mx-0 lg:text-4xl">
                Handcrafted premium quality bathmats for comfort, style, and
                elegance
              </p>
            </div>

            <div className="w-full flex-shrink-0">
              <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl">
                <div className="relative aspect-[6/3] bg-gray-100">
                <Image
                    src="/education.jpg"
                    alt="Luxury bathmat collection"
                    fill
                    className="object-cover"
                    sizes="50vw"
                    priority
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative py-2">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-gray-200 dark:border-gray-700" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-gradient-to-br from-gray-50 to-gray-100 px-4 text-2xl dark:from-gray-900 dark:to-gray-800">
            ✦
          </span>
        </div>
      </div>

      <div className="max-w-10xl mx-auto px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-20 px-4 py-16">
          {designs.map((design, index) => (
            <div
              key={design.id}
              className={`flex flex-col items-stretch gap-12 md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="group relative w-full md:w-1/2">
                <div className="relative h-[320px] w-full overflow-hidden rounded-2xl shadow-lg md:h-[380px]">
                  <Image
                    src={design.image}
                    alt={design.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="flex w-full items-center md:w-1/2">
                <div className="w-full rounded-r-2xl border-l-4 border-gray-800 bg-white p-8 shadow-md transition-all duration-300 hover:shadow-lg">
                  <h3 className="mb-4 text-xl font-bold text-gray-900">
                    {design.title}
                  </h3>

                  <div className="space-y-2 text-gray-700">
                    <p className="flex items-baseline gap-2">
                      <span className="w-20 font-semibold">Code:</span>
                      <span>{design.product_Code}</span>
                    </p>
                    <p className="flex items-baseline gap-2">
                      <span className="w-20 font-semibold">Color:</span>
                      <span className="capitalize">{design.product_color}</span>
                    </p>
                    <p className="flex items-baseline gap-2">
                      <span className="w-20 font-semibold">Size:</span>
                      <span>{design.product_size}</span>
                    </p>
                    <p className="flex items-baseline gap-2">
                      <span className="w-20 font-semibold">Material:</span>
                      <span className="capitalize">
                        {design.product_material}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Link
              href="https://rugsinstyle.com/"
              target="_blank"
              className="group flex items-center gap-2 text-lg text-gray-600 transition-colors hover:text-amber-600 dark:text-gray-400 dark:hover:text-amber-400 md:text-xl"
            >
              <span>Rugsinstyle.com</span>
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

      <style jsx>{`
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
      `}</style>
    </div>
  );
}

