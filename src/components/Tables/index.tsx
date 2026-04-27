"use client";
import React, { useState, useMemo } from "react";
import { 
  FaEdit, 
  FaTrash, 
  FaUserShield, 
  FaUser, 
  FaSearch,
  FaChevronLeft,
  FaChevronRight,
  FaEllipsisH,
  FaUserCheck,
  FaUserTimes
} from "react-icons/fa";
import { MdVerified, MdOutlineEmail, MdBadge } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { TbUserStar } from "react-icons/tb";

import { data } from "./tabler-helper";
const ITEMS_PER_PAGE = 10;

export default function TableComponent() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1); 
  const [selectedRole, setSelectedRole] = useState<string>("All");
  const [selectedStatus, setSelectedStatus] = useState<string>("All");
  // Filter data based on search, role, and status
  const filteredData = useMemo(() => {
    return data.filter((user) => {
      const matchesSearch = user.name.toLowerCase().includes(search.toLowerCase()) ||
                           user.email.toLowerCase().includes(search.toLowerCase()) ||
                           user.department.toLowerCase().includes(search.toLowerCase());
      const matchesRole = selectedRole === "All" || user.role === selectedRole;
      const matchesStatus = selectedStatus === "All" || user.status === selectedStatus;
      return matchesSearch && matchesRole && matchesStatus;
    });
  }, [search, selectedRole, selectedStatus]);

  // Pagination
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const firstIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const lastIndex = firstIndex + ITEMS_PER_PAGE 
  const paginatedData = filteredData.slice(firstIndex, lastIndex)  

  // Statistics
  const stats = {
    total: data.length,
    active: data.filter(u => u.status === "Active").length,
    admins: data.filter(u => u.role === "Admin").length,
    verified: data.filter(u => u.verified).length,
  };

  const getRoleIcon = (role: string) => {
    switch(role) {
      case "Admin": return <FaUserShield className="text-purple-500" />;
      case "Moderator": return <TbUserStar className="text-blue-500" />;
      default: return <FaUser className="text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const config = {
      Active: { bg: "bg-emerald-50", text: "text-emerald-700", icon: <MdVerified className="text-emerald-500" />, label: "Active" },
      Inactive: { bg: "bg-gray-50", text: "text-gray-600", icon: <FaUserTimes className="text-gray-500" />, label: "Inactive" },
      Pending: { bg: "bg-amber-50", text: "text-amber-700", icon: <FaEllipsisH className="text-amber-500" />, label: "Pending" }
    };
    const style = config[status as keyof typeof config];
    return (
      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${style.bg} ${style.text}`}>
        {style.icon}
        {style.label}
      </span>
    );
  };

  // date modified 

  const formatDate = (date: string) => {
    if( typeof window === "undefined") return date; // ssr safety check
    return new Date(date).toLocaleDateString('en-US', 
      {month: 'short', day: 'numeric', year: 'numeric'}
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-3 sm:p-4 md:p-6 lg:p-8">
  <div className="mx-auto max-w-7xl">
    
    {/* Header Stats */}
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
      <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Total Users</p>
            <p className="text-xl sm:text-2xl font-bold text-gray-800">{stats.total}</p>
          </div>
          <div className="bg-blue-100 rounded-full p-3">
            <HiOutlineUserGroup className="text-blue-600 text-lg sm:text-xl" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Active Users</p>
            <p className="text-xl sm:text-2xl font-bold text-emerald-600">{stats.active}</p>
          </div>
          <div className="bg-emerald-100 rounded-full p-3">
            <FaUserCheck className="text-emerald-600 text-lg sm:text-xl" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Administrators</p>
            <p className="text-xl sm:text-2xl font-bold text-purple-600">{stats.admins}</p>
          </div>
          <div className="bg-purple-100 rounded-full p-3">
            <FaUserShield className="text-purple-600 text-lg sm:text-xl" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Verified Accounts</p>
            <p className="text-xl sm:text-2xl font-bold text-blue-600">{stats.verified}</p>
          </div>
          <div className="bg-blue-100 rounded-full p-3">
            <MdBadge className="text-blue-600 text-lg sm:text-xl" />
          </div>
        </div>
      </div>
    </div>

    {/* Main Card */}
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      
      {/* Header with Filters */}
      <div className="p-4 sm:p-6 border-b border-gray-200">
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800">
            User Management Dashboard
          </h2>

          <div className="flex flex-col sm:flex-row sm:flex-wrap xl:flex-nowrap gap-3 w-full xl:w-auto">
            <select
              className="w-full sm:w-auto px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              value={selectedRole}
              onChange={(e) => {
                setSelectedRole(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="All">All Roles</option>
              <option value="Admin">Admin</option>
              <option value="Moderator">Moderator</option>
              <option value="User">User</option>
            </select>

            <select
              className="w-full sm:w-auto px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              value={selectedStatus}
              onChange={(e) => {
                setSelectedStatus(e.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Pending">Pending</option>
            </select>

            <div className="relative w-full sm:flex-1 xl:w-72">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="Search users..."
                className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="min-w-[900px] w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">User</th>
              <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Role</th>
              <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Department</th>
              <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
              <th className="px-4 sm:px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Joined</th>
              <th className="px-4 sm:px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {paginatedData.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 transition-colors duration-200">
                <td className="px-4 sm:px-6 py-4">
                  <div className="flex items-center gap-3 min-w-[220px]">
                    <div>
                      <div className="flex items-center gap-1">
                        <p className="font-medium text-sm sm:text-base text-gray-900">{user.name}</p>
                        {user.verified && <MdVerified className="text-blue-500 text-sm" />}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500 break-all">
                        <MdOutlineEmail className="text-gray-400 shrink-0" />
                        {user.email}
                      </div>
                    </div>
                  </div>
                </td>

                <td className="px-4 sm:px-6 py-4">
                  <div className="flex items-center gap-2 text-sm">
                    {getRoleIcon(user.role)}
                    <span className="text-gray-700">{user.role}</span>
                  </div>
                </td>

                <td className="px-4 sm:px-6 py-4">
                  <span className="text-sm text-gray-600">{user.department}</span>
                </td>

                <td className="px-4 sm:px-6 py-4">
                  {getStatusBadge(user.status)}
                </td>

                <td className="px-4 sm:px-6 py-4">
                  <p className="text-sm text-gray-700 whitespace-nowrap">
                    {new Date(user.joinDate).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </td>

                <td className="px-4 sm:px-6 py-4">
                  <div className="flex items-center justify-center gap-2 sm:gap-3">
                    <button className="text-blue-600 hover:text-blue-800 transition-colors duration-200 p-2 hover:bg-blue-50 rounded-lg">
                      <FaEdit size={16} />
                    </button>
                    <button className="text-red-600 hover:text-red-800 transition-colors duration-200 p-2 hover:bg-red-50 rounded-lg">
                      <FaTrash size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-4 sm:px-6 py-4 border-t border-gray-200 bg-gray-50">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600 text-center lg:text-left">
            Showing <span className="font-medium">{(currentPage - 1) * ITEMS_PER_PAGE + 1}</span> to{" "}
            <span className="font-medium">
              {Math.min(currentPage * ITEMS_PER_PAGE, filteredData.length)}
            </span>{" "}
            of <span className="font-medium">{filteredData.length}</span> results
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaChevronLeft size={12} />
              <span className="hidden sm:inline">Previous</span>
            </button>

            <div className="flex gap-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) pageNum = i + 1;
                else if (currentPage <= 3) pageNum = i + 1;
                else if (currentPage >= totalPages - 2) pageNum = totalPages - 4 + i;
                else pageNum = currentPage - 2 + i;

                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium ${
                      currentPage === pageNum
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="hidden sm:inline">Next</span>
              <FaChevronRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}