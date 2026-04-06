

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
}

export const data: User[] = [
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