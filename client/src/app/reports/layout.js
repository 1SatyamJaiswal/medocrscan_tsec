'use client';
import React from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const Reports = ({ children }) => {
  return (
    <>
      <Sidebar />
      <div className="lg:pl-64">
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default Reports;
