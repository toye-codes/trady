"use client";

import { useState } from "react";

const mockPurchasedBooks = [
  {
    id: 1,
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    library: "Lagos City Library",
    price: 1500,
    orderDate: "2025-11-10",
    status: "Delivered",
  },
  {
    id: 2,
    title: "The Secret Lives of Baba Segi’s Wives",
    author: "Lola Shoneyin",
    library: "Ibadan Public Library",
    price: 2000,
    orderDate: "2025-11-11",
    status: "Pending",
  },
  {
    id: 3,
    title: "Born a Crime",
    author: "Trevor Noah",
    library: "Abuja Readers Hub",
    price: 2500,
    orderDate: "2025-11-08",
    status: "Processing",
  },
];

export default function PurchasedOrders() {
  const [orders] = useState(mockPurchasedBooks);

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-amber-600">
          Purchased / Ordered Books
        </h2>
        <p className="text-gray-600 text-sm">
          View and track all books you’ve ordered or purchased across libraries.
        </p>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-amber-100">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-amber-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Title
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Author
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Library
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Order Date
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Price (₦)
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {orders.map((book) => (
              <tr
                key={book.id}
                className="hover:bg-amber-50 transition-colors duration-200">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {book.title}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {book.author}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {book.library}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {new Date(book.orderDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {book.price.toLocaleString()}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      book.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : book.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                    }`}>
                    {book.status}
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
