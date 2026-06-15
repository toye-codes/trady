"use client";

import { useState } from "react";
import { Bell } from "lucide-react";

// Mock notifications data
const mockNotifications = [
  {
    id: 1,
    type: "trade",
    message: "John wants to trade 'Atomic Habits' with you.",
    read: false,
  },
  {
    id: 2,
    type: "bookmark",
    message: "Your bookmarked book 'Outliers' has a new trade request.",
    read: false,
  },
  {
    id: 3,
    type: "general",
    message: "Welcome to BookBarter! Start trading books today.",
    read: true,
  },
];

const Notifications = () => {
  const [notifications, setNotifications] = useState(mockNotifications);

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  return (
    <section className="min-h-screen bg-[#fffaf4] p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-amber-800">Notifications</h2>
        <Bell className="w-6 h-6 text-amber-800" />
      </div>

      <ul className="space-y-4">
        {notifications.map((notif) => (
          <li
            key={notif.id}
            className={`p-4 rounded-lg border border-[#FEF3C7] shadow-sm transition ${
              notif.read
                ? "bg-gray-100 text-gray-500"
                : "bg-white text-amber-800"
            }`}>
            <p>{notif.message}</p>
            {!notif.read && (
              <button
                onClick={() => markAsRead(notif.id)}
                className="mt-2 text-sm text-amber-600 hover:underline">
                Mark as read
              </button>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Notifications;
