import Link from "next/link";

const Templates = () => {
  const links = [
    {
      name: "Template One",
      href: "/templates/one",
      image: "/education.jpg",
       
    },
    {
      name: "Template Two",
      href: "/templates/two",
      image: "/education.jpg",
      
    },
    {
      name: "Template Three",
      href: "/templates/three",
      image: "/education.jpg",
      
    },
    {
      name: "Template Four",
      href: "/templates/four",
      image: "/education.jpg",
      
    },
  ];
 
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {links.map((item, index) => (
        <Link key={index} href={item.href}>
          <div className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer 
                          hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            
            {/* Image */}
            <div className="h-96 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover hover:scale-110 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h2 className="text-lg font-semibold">{item.name}</h2>
             </div>

          </div>
        </Link>
      ))}
    </div>
  );
};

export default Templates;