"use client";

import SellerSidebar from "./components/SellerSidebar";
import SellerHeader from "./components/SellerHeader";

export default function SellerLayout({ children }) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#fffaf4] overflow-hidden">
      {/* Sidebar */}
      <aside className="w-full lg:w-64 lg:h-screen border-r border-amber-200 overflow-y-auto">
        <SellerSidebar />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:h-screen overflow-hidden">
        <SellerHeader />
        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>
  );
}
