import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative flex">
      <div className="hidden h-full md:flex md:flex-col md-fixed md:w-72 bg-gray-900">
        <Sidebar />
      </div>

      <main className="flex w-full justify-end">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
