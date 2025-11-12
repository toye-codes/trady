"use client";
import { useState } from "react";

const mockBarterOrders = [
  {
    id: 1,
    yourBook: "The Alchemist",
    requestedBook: "Purple Hibiscus",
    partner: "Aisha Bello",
    initiatedOn: "2025-11-06",
    status: "Accepted",
  },
  {
    id: 2,
    yourBook: "Rich Dad Poor Dad",
    requestedBook: "The Power of Habit",
    partner: "David Okoro",
    initiatedOn: "2025-11-09",
    status: "Pending",
  },
  {
    id: 3,
    yourBook: "The Subtle Art of Not Giving a F*ck",
    requestedBook: "Atomic Habits",
    partner: "Blessing Udeh",
    initiatedOn: "2025-11-10",
    status: "Completed",
  },
];

const BarterOrders = () => {
  const [barters] = useState(mockBarterOrders);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-amber-600">Barter Orders</h2>
        <p className="text-gray-600 text-sm">
          Track all your active and completed book trades with other users.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-amber-100">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-amber-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Your Book
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Requested Book
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Trade Partner
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Initiated On
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {barters.map((trade) => (
              <tr
                key={trade.id}
                className="hover:bg-amber-50 transition-colors duration-200">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {trade.yourBook}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {trade.requestedBook}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {trade.partner}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {new Date(trade.initiatedOn).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      trade.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : trade.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : trade.status === "Accepted"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-red-100 text-red-700"
                    }`}>
                    {trade.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BarterOrders;