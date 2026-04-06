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
import { TbUserStar, TbUserExclamation } from "react-icons/tb";

type User = {
  id: number;
  name: string;
  email: string;
  role: "Admin" | "Moderator" | "User" | "Manager" | "HR" | "Designer" | "Engineer" | "Support";
  status: "Active" | "Inactive" | "Pending";
  department: string;
  joinDate: string;
  lastActive: string;
  verified: boolean;
};

// Fresh, professional data
const data: User[] = [
  { id: 1, name: "Dr. Sarah Chen", email: "sarah.chen@techcorp.com", role: "Admin", status: "Active", department: "Executive", joinDate: "2023-01-15", lastActive: "2024-12-05", verified: true },
  { id: 2, name: "Michael Rodriguez", email: "michael.rodriguez@techcorp.com", role: "Moderator", status: "Active", department: "Operations", joinDate: "2023-03-20", lastActive: "2024-12-04", verified: true },
  { id: 3, name: "Emma Watson", email: "emma.watson@techcorp.com", role: "User", status: "Inactive", department: "Sales", joinDate: "2023-06-10", lastActive: "2024-11-15", verified: false },
  { id: 4, name: "James Wilson", email: "james.wilson@techcorp.com", role: "Admin", status: "Active", department: "IT", joinDate: "2022-11-01", lastActive: "2024-12-05", verified: true },
  { id: 5, name: "Lisa Kumar", email: "lisa.kumar@techcorp.com", role: "User", status: "Pending", department: "Marketing", joinDate: "2024-10-15", lastActive: "2024-12-03", verified: false },
  { id: 6, name: "David Park", email: "david.park@techcorp.com", role: "Moderator", status: "Active", department: "Support", joinDate: "2023-08-22", lastActive: "2024-12-05", verified: true },
  { id: 7, name: "Sophia Martinez", email: "sophia.martinez@techcorp.com", role: "User", status: "Active", department: "Product", joinDate: "2024-01-30", lastActive: "2024-12-04", verified: true },
  { id: 8, name: "Oliver Thompson", email: "oliver.thompson@techcorp.com", role: "User", status: "Inactive", department: "Finance", joinDate: "2023-09-14", lastActive: "2024-10-20", verified: false },
  { id: 9, name: "Nina Gupta", email: "nina.gupta@techcorp.com", role: "Moderator", status: "Active", department: "HR", joinDate: "2023-04-18", lastActive: "2024-12-05", verified: true },
  { id: 10, name: "Thomas Wright", email: "thomas.wright@techcorp.com", role: "Admin", status: "Active", department: "Security", joinDate: "2022-12-05", lastActive: "2024-12-05", verified: true },
  { id: 11, name: "Grace Lee", email: "grace.lee@techcorp.com", role: "User", status: "Pending", department: "Design", joinDate: "2024-11-01", lastActive: "2024-12-02", verified: false },
  { id: 12, name: "Marcus Johnson", email: "marcus.johnson@techcorp.com", role: "User", status: "Active", department: "Engineering", joinDate: "2023-07-12", lastActive: "2024-12-04", verified: true },
  { id: 13, name: "Isabella Garcia", email: "isabella.garcia@techcorp.com", role: "Moderator", status: "Active", department: "Community", joinDate: "2023-05-08", lastActive: "2024-12-05", verified: true },
  { id: 14, name: "Ryan Taylor", email: "ryan.taylor@techcorp.com", role: "User", status: "Inactive", department: "Research", joinDate: "2024-02-20", lastActive: "2024-11-28", verified: false },
  { id: 15, name: "Olivia Brown", email: "olivia.brown@techcorp.com", role: "User", status: "Active", department: "Legal", joinDate: "2023-10-03", lastActive: "2024-12-03", verified: true },
  { id: 16, name: "Arjun Sharma", email: "arjun.sharma@infotech.com", role: "Admin", status: "Active", department: "IT", joinDate: "2022-03-15", lastActive: "2025-01-10", verified: true },
  { id: 17, name: "Priya Verma", email: "priya.verma@financehub.com", role: "User", status: "Inactive", department: "Finance", joinDate: "2021-11-20", lastActive: "2024-08-12", verified: false },
  { id: 18, name: "Rohit Gupta", email: "rohit.gupta@marketingpro.com", role: "Manager", status: "Active", department: "Marketing", joinDate: "2020-06-05", lastActive: "2025-02-18", verified: true },
  { id: 19, name: "Sneha Kapoor", email: "sneha.kapoor@hrworld.com", role: "HR", status: "Active", department: "Human Resources", joinDate: "2023-01-25", lastActive: "2025-03-01", verified: true },
  { id: 20, name: "Aman Yadav", email: "aman.yadav@salesforce.com", role: "User", status: "Pending", department: "Sales", joinDate: "2024-07-11", lastActive: "2024-12-29", verified: false },
  { id: 21, name: "Neha Singh", email: "neha.singh@designhub.com", role: "Designer", status: "Active", department: "UI/UX", joinDate: "2022-09-09", lastActive: "2025-02-05", verified: true },
  { id: 22, name: "Vikram Mehta", email: "vikram.mehta@buildtech.com", role: "Engineer", status: "Inactive", department: "Development", joinDate: "2021-04-18", lastActive: "2024-06-20", verified: false },
  { id: 23, name: "Pooja Mishra", email: "pooja.mishra@supportdesk.com", role: "Support", status: "Active", department: "Customer Support", joinDate: "2023-05-30", lastActive: "2025-01-28", verified: true },
  { id: 24, name: "Karan Malhotra", email: "karan.malhotra@logisticspro.com", role: "Manager", status: "Active", department: "Operations", joinDate: "2020-12-14", lastActive: "2025-03-03", verified: true },
  { id: 25, name: "Anjali Desai", email: "anjali.desai@medicare.com", role: "User", status: "Pending", department: "Healthcare", joinDate: "2024-02-22", lastActive: "2024-11-15", verified: false }

];

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
  const paginatedData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Users</p>
                <p className="text-2xl font-bold text-gray-800">{stats.total}</p>
              </div>
              <div className="bg-blue-100 rounded-full p-3">
                <HiOutlineUserGroup className="text-blue-600 text-xl" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Active Users</p>
                <p className="text-2xl font-bold text-emerald-600">{stats.active}</p>
              </div>
              <div className="bg-emerald-100 rounded-full p-3">
                <FaUserCheck className="text-emerald-600 text-xl" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Administrators</p>
                <p className="text-2xl font-bold text-purple-600">{stats.admins}</p>
              </div>
              <div className="bg-purple-100 rounded-full p-3">
                <FaUserShield className="text-purple-600 text-xl" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Verified Accounts</p>
                <p className="text-2xl font-bold text-blue-600">{stats.verified}</p>
              </div>
              <div className="bg-blue-100 rounded-full p-3">
                <MdBadge className="text-blue-600 text-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          
          {/* Header with Filters */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h2 className="text-xl font-bold text-gray-800">User Management Dashboard</h2>
              
              <div className="flex gap-3">
                <select
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent"
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
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent"
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
                
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="text"
                    placeholder="Search by name, email, or department..."
                    className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm w-64 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
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

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">User</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Department</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Joined</th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {paginatedData.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                         
                        <div>
                          <div className="flex items-center gap-1">
                            <p className="font-medium text-gray-900">{user.name}</p>
                            {user.verified && <MdVerified className="text-blue-500 text-sm" />}
                          </div>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <MdOutlineEmail className="text-gray-400" />
                            {user.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {getRoleIcon(user.role)}
                        <span className="text-sm text-gray-700">{user.role}</span>
                      </div>
                     </td>
                    
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-600">{user.department}</span>
                     </td>
                    
                    <td className="px-6 py-4">
                      {getStatusBadge(user.status)}
                     </td>
                    
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <p className="text-gray-700">{new Date(user.joinDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                        <p className="text-xs text-gray-400">Active: {new Date(user.lastActive).toLocaleDateString()}</p>
                      </div>
                     </td>
                    
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-3">
                        <button className="text-blue-600 hover:text-blue-800 transition-colors duration-200 p-1 hover:bg-blue-50 rounded-lg">
                          <FaEdit size={18} />
                        </button>
                        <button className="text-red-600 hover:text-red-800 transition-colors duration-200 p-1 hover:bg-red-50 rounded-lg">
                          <FaTrash size={18} />
                        </button>
                      </div>
                     </td>
                   </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-600">
                Showing <span className="font-medium">{((currentPage - 1) * ITEMS_PER_PAGE) + 1}</span> to{" "}
                <span className="font-medium">{Math.min(currentPage * ITEMS_PER_PAGE, filteredData.length)}</span> of{" "}
                <span className="font-medium">{filteredData.length}</span> results
              </div>
              
              <div className="flex gap-2">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  <FaChevronLeft size={12} />
                  Previous
                </button>
                
                <div className="flex gap-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }
                    
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
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
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  Next
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