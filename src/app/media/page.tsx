"use client";
import React, { useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";
import { FaEllipsisV, FaCheck, FaTrash, FaDownload, FaShare, FaCopy } from "react-icons/fa";

const products = [
  { id: 1, image: "/images/bathmats/RIS-BTH-7884-2.jpg", name: "Bath Mat 1", size: "2.4 MB", date: "2024-01-15" },
  { id: 2, image: "/images/bathmats/RIS-BTH-7884-2.jpg", name: "Bath Mat 2", size: "1.8 MB", date: "2024-01-14" },
  { id: 3, image: "/images/bathmats/RIS-BTH-7884-2.jpg", name: "Bath Mat 3", size: "3.2 MB", date: "2024-01-13" },
  { id: 4, image: "/images/bathmats/RIS-BTH-7884-2.jpg", name: "Bath Mat 4", size: "2.1 MB", date: "2024-01-12" },
  { id: 5, image: "/images/bathmats/RIS-BTH-7884-2.jpg", name: "Bath Mat 5", size: "1.5 MB", date: "2024-01-11" },
  { id: 6, image: "/images/bathmats/RIS-BTH-7884-2.jpg", name: "Bath Mat 6", size: "2.9 MB", date: "2024-01-10" },
  { id: 7, image: "/images/bathmats/RIS-BTH-7884-2.jpg", name: "Bath Mat 7", size: "3.1 MB", date: "2024-01-09" },
  { id: 8, image: "/images/bathmats/RIS-BTH-7884-2.jpg", name: "Bath Mat 8", size: "1.9 MB", date: "2024-01-08" },
  { id: 9, image: "/images/bathmats/RIS-BTH-7884-2.jpg", name: "Bath Mat 9", size: "2.6 MB", date: "2024-01-07" },
];

export default function Media() {
  const [selected, setSelected] = useState<number[]>([]);
  const [menuOpen, setMenuOpen] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const toggleSelect = (id: number) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const selectAll = () => {
    if (selected.length === products.length) {
      setSelected([]);
    } else {
      setSelected(products.map(p => p.id));
    }
  };

  const deleteSelected = () => {
    // Implement delete logic here
    console.log("Deleting:", selected);
    setSelected([]);
  };

  return (
    <>
      <Breadcrumb pageName="Media" />

      <div className="p-4 md:p-6">
        {/* Top Action Bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {selected.length > 0 && (
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-700">
                  {selected.length} selected
                </span>
                <button
                  onClick={deleteSelected}
                  className="flex items-center gap-2 rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-100"
                >
                  <FaTrash size={14} />
                  Delete
                </button>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3">
            {/* View Toggle */}
            <div className="flex rounded-lg border border-gray-200 bg-white p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`rounded-md px-3 py-1.5 text-sm transition ${
                  viewMode === "grid"
                    ? "bg-black text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`rounded-md px-3 py-1.5 text-sm transition ${
                  viewMode === "list"
                    ? "bg-black text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                List
              </button>
            </div>

            {/* Select All Button */}
            <button
              onClick={selectAll}
              className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
            >
              {selected.length === products.length ? "Deselect All" : "Select All"}
            </button>
          </div>
        </div>

        {/* Media Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {products.map((item) => {
              const isSelected = selected.includes(item.id);
              const isMenuOpen = menuOpen === item.id;

              return (
                <div
                  key={item.id}
                  className={`group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-lg ${
                    isSelected ? "ring-2 ring-black ring-offset-2" : ""
                  }`}
                >
                  {/* Image Container */}
                  <div className="relative h-[260px] overflow-hidden bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                    
                    {/* Selection Overlay */}
                    {isSelected && (
                      <div className="absolute inset-0 bg-black/20 transition duration-300" />
                    )}

                    {/* Checkbox */}
                    <div className="absolute left-3 top-3">
                      <button
                        onClick={() => toggleSelect(item.id)}
                        className={`flex h-5 w-5 items-center justify-center rounded border-2 transition ${
                          isSelected
                            ? "border-black bg-black text-white"
                            : "border-white bg-white/20 backdrop-blur group-hover:bg-white/40"
                        }`}
                      >
                        {isSelected && <FaCheck size={12} />}
                      </button>
                    </div>

                    {/* 3 dots menu */}
                    <div className="absolute right-3 top-3">
                      <button
                        onClick={() => setMenuOpen(isMenuOpen ? null : item.id)}
                        className="rounded-full bg-white/90 p-2 shadow-md backdrop-blur transition hover:bg-white"
                      >
                        <FaEllipsisV size={14} className="text-gray-700" />
                      </button>
                      
                      {/* Dropdown Menu */}
                      {isMenuOpen && (
                        <>
                          <div
                            className="fixed inset-0 z-10"
                            onClick={() => setMenuOpen(null)}
                          />
                          <div className="absolute right-0 top-full mt-2 z-20 min-w-[160px] overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black/5">
                            <button className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm text-gray-700 transition hover:bg-gray-50">
                              <FaDownload size={14} />
                              Download
                            </button>
                            <button className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm text-gray-700 transition hover:bg-gray-50">
                              <FaShare size={14} />
                              Share
                            </button>
                            <button className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm text-gray-700 transition hover:bg-gray-50">
                              <FaCopy size={14} />
                              Copy Link
                            </button>
                            <hr className="my-1" />
                            <button className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm text-red-600 transition hover:bg-red-50">
                              <FaTrash size={14} />
                              Delete
                            </button>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Bottom Info */}
                    <div className="absolute bottom-0 left-0 right-0 translate-y-full transform bg-gradient-to-t from-black/80 to-transparent p-3 transition-transform duration-300 group-hover:translate-y-0">
                      <p className="text-sm font-medium text-white">{item.name}</p>
                      <p className="text-xs text-white/80">{item.size}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* List View */
          <div className="overflow-hidden rounded-xl bg-white shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="w-12 px-4 py-3">
                    <button
                      onClick={selectAll}
                      className={`flex h-5 w-5 items-center justify-center rounded border-2 ${
                        selected.length === products.length
                          ? "border-black bg-black text-white"
                          : "border-gray-300 bg-white"
                      }`}
                    >
                      {selected.length === products.length && <FaCheck size={12} />}
                    </button>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Preview
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Size
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Date
                  </th>
                  <th className="w-12 px-4 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {products.map((item) => {
                  const isSelected = selected.includes(item.id);
                  const isMenuOpen = menuOpen === item.id;

                  return (
                    <tr
                      key={item.id}
                      className={`transition hover:bg-gray-50 ${
                        isSelected ? "bg-blue-50/30" : ""
                      }`}
                    >
                      <td className="px-4 py-3">
                        <button
                          onClick={() => toggleSelect(item.id)}
                          className={`flex h-5 w-5 items-center justify-center rounded border-2 transition ${
                            isSelected
                              ? "border-black bg-black text-white"
                              : "border-gray-300 bg-white hover:border-gray-400"
                          }`}
                        >
                          {isSelected && <FaCheck size={12} />}
                        </button>
                      </td>
                      <td className="px-4 py-3">
                        <div className="relative h-12 w-12 overflow-hidden rounded-lg bg-gray-100">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        {item.name}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">{item.size}</td>
                      <td className="px-4 py-3 text-sm text-gray-500">{item.date}</td>
                      <td className="px-4 py-3">
                        <div className="relative">
                          <button
                            onClick={() => setMenuOpen(isMenuOpen ? null : item.id)}
                            className="rounded-lg p-1.5 transition hover:bg-gray-100"
                          >
                            <FaEllipsisV size={14} className="text-gray-500" />
                          </button>
                          {isMenuOpen && (
                            <>
                              <div
                                className="fixed inset-0 z-10"
                                onClick={() => setMenuOpen(null)}
                              />
                              <div className="absolute right-0 top-full z-20 mt-1 min-w-[160px] overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black/5">
                                <button className="flex w-full items-center gap-3 px-4 py-2 text-left text-sm text-gray-700 transition hover:bg-gray-50">
                                  <FaDownload size={14} />
                                  Download
                                </button>
                                <button className="flex w-full items-center gap-3 px-4 py-2 text-left text-sm text-gray-700 transition hover:bg-gray-50">
                                  <FaShare size={14} />
                                  Share
                                </button>
                                <hr className="my-1" />
                                <button className="flex w-full items-center gap-3 px-4 py-2 text-left text-sm text-red-600 transition hover:bg-red-50">
                                  <FaTrash size={14} />
                                  Delete
                                </button>
                              </div>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Empty State */}
        {products.length === 0 && (
          <div className="flex flex-col items-center justify-center rounded-xl bg-white py-16 text-center">
            <div className="mb-4 rounded-full bg-gray-100 p-4">
              <svg className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-medium text-gray-900">No media files</h3>
            <p className="text-sm text-gray-500">Upload your first image or video to get started</p>
          </div>
        )}
      </div>
    </>
  );
}