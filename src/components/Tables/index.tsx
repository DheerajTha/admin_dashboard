"use client";
import React, { useState, useMemo } from "react";
import { FaEdit, FaTrash, FaUserShield } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

type User = {
  id: number;
  name: string;
  email: string;
  role: "Admin" | "User";
  status: "Active" | "Inactive";
};

const data: User[] = [
  { id: 1, name: "Amit Sharma", email: "amit@gmail.com", role: "Admin", status: "Active" },
  { id: 2, name: "Rahul Verma", email: "rahul@gmail.com", role: "User", status: "Inactive" },
  { id: 3, name: "Neha Singh", email: "neha@gmail.com", role: "User", status: "Active" },
  { id: 4, name: "Priya Kapoor", email: "priya@gmail.com", role: "Admin", status: "Active" },
  { id: 5, name: "Rohit Yadav", email: "rohit@gmail.com", role: "User", status: "Inactive" },
  { id: 6, name: "Ankit Gupta", email: "ankit@gmail.com", role: "User", status: "Active" },
  { id: 7, name: "Simran Kaur", email: "simran@gmail.com", role: "Admin", status: "Active" },
  { id: 8, name: "Vikas Mishra", email: "vikas@gmail.com", role: "User", status: "Inactive" },
  { id: 9, name: "Sneha Jain", email: "sneha@gmail.com", role: "User", status: "Active" },
  { id: 10, name: "Arjun Patel", email: "arjun@gmail.com", role: "Admin", status: "Active" },
  { id: 11, name: "Karan Mehta", email: "karan@gmail.com", role: "User", status: "Inactive" },
  { id: 12, name: "Pooja Sharma", email: "pooja@gmail.com", role: "User", status: "Active" },
];

const ITEMS_PER_PAGE = 10;

export default function TableComponent() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // 🔍 Search
  const filteredData = useMemo(() => {
    return data.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  // 📄 Pagination
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <div className="bg-white rounded-xl shadow p-5">

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">User Management</h2>

          <input
            type="text"
            placeholder="Search users..."
            className="border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-3">User</th>
                <th className="p-3">Role</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {paginatedData.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-50">

                  {/* User */}
                  <td className="p-3">
                    <div className="font-medium">{user.name}</div>
                    <div className="text-gray-500 text-xs">{user.email}</div>
                  </td>

                  {/* Role */}
                  <td className="p-3">
                    <span className="flex items-center gap-2">
                      {user.role === "Admin" && <FaUserShield />}
                      {user.role}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {user.status === "Active" && <MdVerified className="inline mr-1" />}
                      {user.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="p-3 flex justify-center gap-3">
                    <button className="text-blue-500 hover:scale-110 transition">
                      <FaEdit />
                    </button>
                    <button className="text-red-500 hover:scale-110 transition">
                      <FaTrash />
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">

          <span className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </span>

          <div className="flex gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Prev
            </button>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}