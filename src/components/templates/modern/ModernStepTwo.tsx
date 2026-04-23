import Image from "next/image";
import React from "react";

const ModernStepTwo = () => {
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
    <div>
      <div className="flex min-h-screen w-full flex-col items-center bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 py-8">
        <div className="relative h-[600px] w-full overflow-hidden md:h-[800px] lg:h-[100vh]" >
          <div className="absolute inset-0">
            <Image src="/education.jpg" alt="Hero Background" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
          </div>

          <div className="relative flex h-full items-center px-4 sm:px-6 lg:px-8">
            <div className="animate-fade-in-up space-y-6 text-white md:space-y-6">
              <div className="mb-4 md:mb-6">
                  <Image
                      src="/images/logo/new-logo.png"
                      alt="RIS Logo"
                      width={300}
                      height={180}
                      className=" brightness-50 "
                  />
                </div>
          
                <div className="flex items-center gap-3">
                    <div className="h-0.5 w-12 rounded-full bg-blue-100" />
                      <span className="text-sm font-semibold uppercase tracking-wider text-blue-100 md:text-3xl">
                          Premium Collection
                        </span>
                    </div>
          
                  <h1 className="text-4xl font-bold leading-tight sm:text-7xl md:text-9xl lg:text-[140px]">
                      <span className="bg-gradient-to-r from-teal-50 to-blue-500 bg-clip-text text-transparent">
                          Bathmats
                      </span>
                  </h1>
          
                  <p className="  text-lg font-light text-gray-200 md:text-xl lg:text-2xl">
                        Explore our luxurious collection of premium quality bathmats
                        designed for comfort and style
                  </p>
          
                  
              </div>
          </div>

          <div className="absolute bottom-0 left-0 z-20 h-16 w-[55%] rounded-tr-3xl bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg"></div>
          <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-100 opacity-50 blur-2xl"></div>
          <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-purple-100 opacity-50 blur-2xl"></div>
          <div className="z-5 absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/5"></div>
        </div>
 
       <div className="relative py-8">
        <div className="absolute flex items-center">
          <div className="w-full border-t-2 border-gray-900 dark:border-gray-700" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-gradient-to-br from-gray-50 to-gray-100 px-4 text-2xl dark:from-gray-900 dark:to-gray-800">
            ✦
          </span>
        </div>
      </div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {designs.map((design) => (
            <div
              key={design.id}
              className={`border-slate-200 hover:shadow-md" group cursor-pointer overflow-hidden rounded-xl bg-white transition-all hover:border-slate-300`}
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
                          Product Code:
                        </span>
                        <span className="text-lg text-slate-700">
                          {design.product_Code}
                        </span>
                      </div>
                      <div className="flex items-baseline gap-1 py-2">
                        <span className="text-xl font-medium text-slate-500">
                          Color:
                        </span>
                        <span className="text-lg text-slate-700">
                          {design.product_color}
                        </span>
                      </div>
                      <div className="flex items-baseline gap-1 py-2">
                        <span className="text-xl font-medium text-slate-500">
                          Size:
                        </span>
                        <span className="text-lg text-slate-700">
                          {design.product_size}
                        </span>
                      </div>
                      <div className="flex items-baseline gap-1 py-2">
                        <span className="text-xl font-medium text-slate-500">
                          Material:
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
    </div>
  );
};

export default ModernStepTwo;
