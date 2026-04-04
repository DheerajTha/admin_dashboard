export type Usertable = {
  id: number;
  name: string;
  email: string;
  role: "Admin" | "User";
  status: "Active" | "Inactive";
};