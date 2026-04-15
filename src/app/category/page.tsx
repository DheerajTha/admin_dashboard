"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import React, { useState } from "react";

const Category = () => {
  

  return (
    <>
    <Breadcrumb pageName="Category"/>
    <div className="  bg-gradient-to-br from-gray-50 to-gray-100 py-10 px-4 flex items-center justify-center">
      
      <form
         className="w-full   bg-white rounded-2xl shadow-xl overflow-hidden"
      >
        {/* Header */}
        <div className="p-6 space-y-6">
          <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800">
              Add Category
            </h3>
          </div>

          {/* Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category Name *
            </label>
            <input
              type="text"
              placeholder="e.g., Premium Wool Carpet"
               
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black/20 focus:border-black outline-none transition-all"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
          <button
            type="submit"
            
            className={`w-full py-3 rounded-xl font-semibold text-white transition-all duration-200 
             bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-black shadow-md hover:shadow-lg `}
          >
            Submit Category 
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default Category;