import React, { useState } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";

const Layout = ({ children }: any) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex items-start justify-center w-full">{children}</main>
    </div>
  );
};

export default Layout;
