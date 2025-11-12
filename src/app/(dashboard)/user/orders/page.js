"use client";

import { useState } from "react";
import PurchasedOrders from "./components/PurchasedOrders";
import BarterOrders from "./components/BarterOrders";

const Orders = () => {
  const [activeTab, setActiveTab] = useState("purchased"); // default tab

  return (
    <section className="min-h-screen bg-[#fffaf4] text-amber-800 p-6">
      {/* Tab Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
            activeTab === "purchased"
              ? "bg-amber-500 text-white"
              : "bg-amber-100 text-amber-800"
          }`}
          onClick={() => setActiveTab("purchased")}>
          Purchased / Ordered Books
        </button>

        <button
          className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
            activeTab === "barter"
              ? "bg-amber-500 text-white"
              : "bg-amber-100 text-amber-800"
          }`}
          onClick={() => setActiveTab("barter")}>
          Barter Orders
        </button>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "purchased" ? <PurchasedOrders /> : <BarterOrders />}
      </div>
    </section>
  );
};

export default Orders;
