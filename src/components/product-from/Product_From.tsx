"use client";

import { useState, useRef } from "react";
import { 
  FaChevronDown, 
  FaChevronRight, 
  FaPlus, 
  FaTrash, 
  FaImage,
  FaCheck,
  FaHome,
  FaRuler,
  FaPalette,
  FaCube,
  FaUpload
} from "react-icons/fa";

type Category = {
  id: string;
  name: string;
  children?: Category[];
};

export const Products: Category[] = [
  {
    id: "home",
    name: "Home",
    children: [
      {
        id: "bathmat",
        name: "Bathmat",
        children: [
          { id: "cotton", name: "Cotton Bathmat" },
          { id: "rubber", name: "Rubber Bathmat" },
        ],
      },
      {
        id: "carpet",
        name: "Carpet",
        children: [
          { id: "wool", name: "Wool Carpet" },
          { id: "synthetic", name: "Synthetic Carpet" },
        ],
      },
      {
        id: "rug",
        name: "Rug",
      },
    ],
  },
];

const constructions = ["Handmade", "Machine-made"];
const colors = ["Red", "Blue", "Green", "Yellow", "Black", "White", "Gray", "Beige", "Navy", "Burgundy"];

type ImageFile = {
  id: string;
  file: File;
  preview: string;
};

export default function ProductPage() {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const [showCategory, setShowCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCategoryPath, setSelectedCategoryPath] = useState("");
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  
  const [images, setImages] = useState<ImageFile[]>([]);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    construction: "",
    height: "",
    width: "",
    length: "",
    color: "",
    name: "",
    stock: "",
    description: "",
  });

  const toggle = (id: string) => {
    setOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const findCategoryPath = (nodes: Category[], targetName: string, path: string[] = []): string | null => {
    for (const node of nodes) {
      const currentPath = [...path, node.name];
      if (node.name === targetName) {
        return currentPath.join(" > ");
      }
      if (node.children) {
        const result = findCategoryPath(node.children, targetName, currentPath);
        if (result) return result;
      }
    }
    return null;
  };

  const handleCategorySelect = (categoryName: string, nodes: Category[]) => {
    setSelectedCategory(categoryName);
    const path = findCategoryPath(nodes, categoryName);
    setSelectedCategoryPath(path || categoryName);
    setShowCategory(false);
  };

  const renderTree = (nodes: Category[], level = 0) => {
    return nodes.map((node) => {
      const isOpen = open[node.id];
      const isSelected = selectedCategory === node.name;
      const isHovered = hoveredCategory === node.id;

      return (
        <div key={node.id}>
          <div
            className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-all duration-200 
            ${isSelected ? "bg-gradient-to-r from-black to-gray-800 text-white shadow-md" : "hover:bg-gray-50"}
            ${isHovered && !isSelected ? "bg-gray-50" : ""}`}
            style={{ paddingLeft: `${level * 20 + 8}px` }}
            onMouseEnter={() => setHoveredCategory(node.id)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            {node.children ? (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggle(node.id);
                }}
                className={`p-1 rounded hover:bg-black/10 transition-colors ${isSelected ? "text-white/80" : "text-gray-400"}`}
              >
                {isOpen ? <FaChevronDown size={10} /> : <FaChevronRight size={10} />}
              </button>
            ) : (
              <span className="w-5" />
            )}

            <span 
              onClick={() => handleCategorySelect(node.name, Products)}
              className="flex-1 text-sm"
            >
              {node.name}
            </span>
            {isSelected && <FaCheck size={12} className="text-green-400" />}
          </div>

          {node.children && isOpen && renderTree(node.children, level + 1)}
        </div>
      );
    });
  };

  const handleImageUpload = (files: FileList | null) => {
    if (!files) return;
    
    const newImages: ImageFile[] = [];
    const currentCount = images.length;
    
    for (let i = 0; i < files.length && currentCount + i < 4; i++) {
      const file = files[i];
      if (file.size > 2 * 1024 * 1024) {
        alert(`Image "${file.name}" exceeds 2MB limit`);
        continue;
      }
      newImages.push({
        id: `${Date.now()}-${i}`,
        file: file,
        preview: URL.createObjectURL(file),
      });
    }
    
    if (currentCount + newImages.length > 4) {
      alert("Maximum 4 images allowed");
    }
    
    setImages((prev) => [...prev, ...newImages].slice(0, 4));
  };

  const removeImage = (id: string) => {
    setImages((prev) => {
      const imageToRemove = prev.find(img => img.id === id);
      if (imageToRemove) {
        URL.revokeObjectURL(imageToRemove.preview);
      }
      return prev.filter((img) => img.id !== id);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);
    
    // Simulate upload
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log({
      ...form,
      category: selectedCategory,
      categoryPath: selectedCategoryPath,
      images: images.map(img => img.file.name),
    });
    
    alert("Product submitted successfully!");
    setUploading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="  mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            Add New Product
          </h1>
          <p className="text-gray-500 text-sm mt-1">Fill in the details below to add a new Product to your inventory</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Form Sections */}
          <div className="p-6 space-y-8">
            
            {/* Basic Information Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
                
                <h3 className="font-semibold text-gray-700">Basic Information</h3>
              </div>
              
              {/* Product Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1"> Product Name *</label>
                <input
                  type="text"
                  placeholder="e.g., Premium Wool Carpet"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black/20 focus:border-black outline-none transition-all"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>

              {/* Product Selector */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                <div className="relative">
                  <div
                    className="border border-gray-300 rounded-xl p-3 cursor-pointer flex justify-between items-center hover:border-gray-400 transition-colors"
                    onClick={() => setShowCategory(!showCategory)}
                  >
                    <div>
                      {selectedCategory ? (
                        <div>
                          <span className="font-medium text-gray-800">{selectedCategory}</span>
                          {selectedCategoryPath && selectedCategoryPath !== selectedCategory && (
                            <span className="text-xs text-gray-400 ml-2">({selectedCategoryPath})</span>
                          )}
                        </div>
                      ) : (
                        <span className={`text-gray-400 transition-transform ${showCategory ? "rotate-180" : ""}`}>Select a Product</span>
                      )}
                    </div>
                    <FaChevronDown className={`text-gray-400 transition-transform ${showCategory ? "rotate-180" : ""}`} />
                  </div>

                  {showCategory && (
                    <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-72 overflow-y-auto">
                      <div className="sticky top-0 bg-gray-50 px-3 py-2 border-b border-gray-200 text-xs text-gray-500">
                        Select a category
                      </div>
                      {renderTree(Products)}
                    </div>
                  )}
                </div>
              </div>

               
            </div>

            {/* Product Details Section */}
            <div className="space-y-2">
              
              {/* Construction */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Construction</label>
                <div className="flex gap-3">
                  {constructions.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setForm({ ...form, construction: c })}
                      className={`px-5 py-2 rounded-xl border transition-all duration-200 font-medium
                      ${form.construction === c 
                        ? "bg-black text-white border-black shadow-md" 
                        : "border-gray-300 text-gray-600 hover:border-gray-400 hover:bg-gray-50"}`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              

              {/* Dimensions */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Dimensions (H × W × L) - inches</label>
                <div className="grid grid-cols-3 gap-3">
                  {["height", "width", "length"].map((dim) => (
                    <div key={dim}>
                      <input
                        type="number"
                        step="0.1"
                        placeholder={dim.charAt(0).toUpperCase() + dim.slice(1)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black/20 focus:border-black outline-none"
                        onChange={(e) => setForm({ ...form, [dim]: e.target.value })}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Color & Description Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
                 <h3 className="font-semibold text-gray-700">Color & Description</h3>
              </div>

              {/* Color */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
                <div className="flex flex-wrap gap-2">
                  {colors.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setForm({ ...form, color: c })}
                      className={`px-4 py-1.5 rounded-full text-sm transition-all duration-200
                      ${form.color === c
                        ? "bg-black text-white shadow-md"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  rows={3}
                  placeholder="Describe your product..."
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black/20 focus:border-black outline-none resize-none"
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                />
              </div>
            </div>

            {/* Images Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
                 <h3 className="font-semibold text-gray-700">Product Images</h3>
                <span className="text-xs text-gray-400 ml-2">Max 4 images (2MB each)</span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Image upload boxes */}
                {[...Array(4)].map((_, index) => {
                  const image = images[index];
                  return (
                    <div
                      key={index}
                      className={`relative aspect-square rounded-xl border-2 border-dashed transition-all duration-200
                        ${image 
                          ? "border-transparent bg-gray-100" 
                          : "border-gray-300 bg-gray-50 hover:border-gray-400 hover:bg-gray-100 cursor-pointer"
                        }`}
                      onClick={() => !image && fileInputRef.current?.click()}
                    >
                      {image ? (
                        <>
                          <img
                            src={image.preview}
                            alt={`Product ${index + 1}`}
                            className="w-full h-full object-cover rounded-xl"
                          />
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeImage(image.id);
                            }}
                            className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-md"
                          >
                            <FaTrash size={12} />
                          </button>
                          <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded-full">
                            {index + 1}/4
                          </div>
                        </>
                      ) : (
                        <div className="flex flex-col items-center justify-center h-full text-gray-400">
                          <FaImage size={28} />
                          <span className="text-xs mt-2">Upload Image</span>
                          <span className="text-[10px] mt-1">{index + 1}/4</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={(e) => handleImageUpload(e.target.files)}
              />

              {images.length < 4 && (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <FaPlus size={12} />
                  Add more images ({images.length}/4)
                </button>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <button
              type="submit"
              disabled={uploading}
              className={`w-full py-3 rounded-xl font-semibold text-white transition-all duration-200
                ${uploading 
                  ? "bg-gray-400 cursor-not-allowed" 
                  : "bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-black shadow-md hover:shadow-lg"
                }`}
            >
              {uploading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                "Submit Product"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}