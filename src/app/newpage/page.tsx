"use client";

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { StepProps } from "@/types/template.types";
import Image from "next/image";
import { useState } from "react";

export default function NewPage() {
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
      <Breadcrumb pageName="Newpage-Template" />
      <div className="flex min-h-screen w-full flex-col items-center gap-12 bg-white p-8 dark:bg-gray-900">
        {/* Design 1 */}
        <div
          className={`hover:shadow-3xl group relative h-[500px] w-full cursor-pointer overflow-hidden rounded-3xl bg-white shadow-2xl transition-all duration-500 hover:scale-[1.02]`}
        >
          <div className="absolute right-0 top-0 h-full w-3/5 overflow-hidden">
            <Image
              src="/education.jpg"
              alt="Template Preview"
              width={800}
              height={800}
              className="h-full w-full object-cover transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/20 transition-all group-hover:to-white/0"></div>
          </div>

          <div className="absolute left-0 top-0 z-10 flex h-full w-[45%] flex-col justify-center rounded-r-3xl bg-white/90 p-8 shadow-lg backdrop-blur-sm">
            <Image
              src="/images/logo/new-logo.png.png"
              alt="Template Preview"
              width={200}
              height={200}
              className="object-cover"
            />
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="h-0.5 w-8 rounded-full bg-blue-600"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Premium Collection
              </span>
            </div>

            <h2 className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl font-bold leading-tight text-transparent">
              Bathmats
            </h2>

            <p className="mt-3 text-base font-medium text-gray-500">
              Modern Presentation Template
            </p>

            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              Clean, professional, and fully customizable design for your next
              business presentation.
            </p>
          </div>

          <div className="absolute bottom-0 left-0 z-20 h-16 w-[35%] rounded-tr-3xl bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg"></div>
          <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-100 opacity-50 blur-2xl"></div>
          <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-purple-100 opacity-50 blur-2xl"></div>
          <div className="z-5 absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/5"></div>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {designs.map((design) => (
            <div
              key={design.id}
              className={`group cursor-pointer overflow-hidden rounded-xl bg-white transition-all`}
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
              </div>
            </div>
          ))}
        </div>
        {/* Design 2 */}
        <div
          className={`hover:shadow-3xl group relative h-[500px] w-full cursor-pointer overflow-hidden rounded-3xl border-t-6 border-primary bg-white shadow-2xl transition-all duration-500 hover:scale-[1.02]`}
        >
          <div className="absolute right-0 top-0 h-full w-3/5 overflow-hidden">
            <Image
              src="/education.jpg"
              alt="Template Preview"
              width={800}
              height={800}
              className="group-hover:scale-102 h-full w-full object-cover transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/20 transition-all group-hover:to-white/0"></div>
          </div>

          <div className="absolute left-0 top-0 z-10 flex h-full w-[45%] flex-col justify-center rounded-r-2xl bg-white/90 shadow-lg backdrop-blur-lg">
            <Image
              src="/images/logo/new-logo.png.png"
              alt="Template Preview"
              width={200}
              height={200}
              className="object-cover"
            />
            <div className="mb-4 w-fit rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 p-4 shadow-lg">
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="h-0.5 w-8 rounded-full bg-white"></span>
                <span className="text-xs font-semibold uppercase tracking-wider text-white">
                  Premium Collection
                </span>
              </div>

              <h2 className="text-4xl font-bold leading-tight text-white">
                Bathmats
              </h2>

              <p className="mt-3 text-base font-medium text-white">
                Modern Presentation Template
              </p>

              <p className="mt-2 text-sm leading-relaxed text-gray-200">
                Clean, professional, and fully customizable design for your next
                business presentation.
              </p>

              <button className="group/btn mt-6 flex w-fit transform items-center gap-2 rounded-xl bg-white px-6 py-2.5 text-sm font-medium text-black shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
                <span>Use Template</span>
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
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

          <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-100 opacity-50 blur-2xl"></div>
          <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-purple-100 opacity-50 blur-2xl"></div>
          <div className="z-5 absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/5"></div>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {designs.map((design) => (
            <div
              key={design.id}
              className={`group cursor-pointer overflow-hidden rounded-xl bg-white transition-all`}
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

              <div className="border-t-1 border-2 border-slate-200 p-5">
                <h3 className="mb-2 line-clamp-2 text-lg font-bold text-slate-900">
                  {design.title}
                </h3>
                {design.product_Code && (
                  <div className="mt-3 border-t border-slate-100 pt-3">
                    <div className="space-y-1.5 text-sm">
                      <div className="flex items-baseline gap-1 py-2">
                        <span className="text-xl font-medium text-slate-500">
                          Product Code:{" "}
                        </span>
                        <span className="text-lg text-slate-700">
                          {design.product_Code}
                        </span>
                      </div>
                      <div className="flex items-baseline gap-1 py-2">
                        <span className="text-xl font-medium text-slate-500">
                          Color:{" "}
                        </span>
                        <span className="text-lg text-slate-700">
                          {design.product_color}
                        </span>
                      </div>
                      <div className="flex items-baseline gap-1 py-2">
                        <span className="text-xl font-medium text-slate-500">
                          Size:{" "}
                        </span>
                        <span className="text-lg text-slate-700">
                          {design.product_size}
                        </span>
                      </div>
                      <div className="flex items-baseline gap-1 py-2">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
