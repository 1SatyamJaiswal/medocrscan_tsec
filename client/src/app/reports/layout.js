import React from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Toolbar from "@/components/Toolbar";

const navigation = [
  { name: "Reports", href: "/reports" }
];

const Reports = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className="lg:pl-64">
        <Navbar current="Reports"/>
        {children}
      </div>
    </>
  );
};

export default Reports;
