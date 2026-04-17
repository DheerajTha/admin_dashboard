'use client'

 import Image from 'next/image'
 
export default function ModernStepOne( ) {
   
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
    <div className="w-full flex flex-col items-center gap-12 p-8 bg-white dark:bg-gray-900 min-h-screen">
      {/* Design 1 */}
      <div 
  className={`relative w-full h-[500px] md:h-[700px] lg:h-[900px] bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02]`}>

  {/* Check Icon */}
  <div className="absolute top-3 right-3 md:top-4 md:right-4 z-30 bg-blue-500 text-white rounded-full p-2">
    <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  </div>

  {/* Image Section */}
  <div className="absolute right-0 top-0 h-full w-3/5 md:w-3/5">
    <Image
      src='/education.jpg'
      alt="Template Preview"
      width={800}
      height={800}
      className="h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/30 md:to-white/20"></div>
  </div>

  {/* Content Section */}
  <div className="absolute top-0 left-0 h-full w-full md:w-[45%] p-4 md:p-8 flex flex-col justify-center bg-white/90 backdrop-blur-sm z-10">

    <Image 
      src="/images/logo/RIS-New-LOGO.png" 
      alt="logo" 
      width={120} 
      height={120} 
      className="mb-2 md:mb-4"
    />

    <div className="flex items-center gap-2 mb-2 md:mb-4">
      <span className="w-6 md:w-8 h-0.5 bg-blue-600 rounded-full"></span>
      <span className="text-lg md:text-2xl lg:text-4xl font-semibold text-blue-600 uppercase">
        Premium Collection
      </span>
    </div>

    <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[120px] font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent leading-tight">
      Bathmats
    </h2>

    <p className="text-sm sm:text-base md:text-xl lg:text-3xl text-gray-800 mt-2 md:mt-3 font-medium">
      EXPLORE OUR STYLISH FURNITURE COLLECTION
    </p>
  </div>

  {/* Bottom Strip */}
  <div className="absolute bottom-0 left-0 w-1/2 md:w-[35%] h-10 md:h-16 bg-gradient-to-r from-blue-600 to-blue-500 rounded-tr-2xl md:rounded-tr-3xl"></div>

</div>
       <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {designs.map((design) => (
                <div key={design.id} className={`group cursor-pointer overflow-hidden rounded-xl bg-white transition-all 
                  border-slate-200 hover:border-slate-300 hover:shadow-md `} >
                  <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
                    <Image
                      src={design.image} alt={design.title} fill className="object-cover" sizes="(max-width: 768px) rounded-none 100vw, (max-width: 1200px) 50vw, 33vw"/>
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
 
      
        
    </div>
    </>
  )
}