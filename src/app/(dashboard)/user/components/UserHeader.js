"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, Search, ChevronDown, UserCircle, LogOut } from "lucide-react";
import Link from "next/link";


const UserHeader = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <header className="w-full bg-[#fdfbf8] border-b border-amber-200 px-4 py-3 flex items-center justify-between relative">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        {/* Mobile Search Toggle */}
        <button
          className="lg:hidden text-amber-700"
          onClick={toggleSearch}
          aria-label="Open search">
          <Search className="w-6 h-6" />
        </button>

        {/* Desktop Search */}
        <div className="hidden lg:flex items-center bg-amber-50 border border-amber-200 rounded-full px-3 py-1.5 w-80 shadow-sm">
          <Search className="w-5 h-5 text-amber-700 mr-2" />
          <input
            type="text"
            placeholder="Search books, authors, or barters..."
            className="bg-transparent outline-none text-sm flex-1 text-amber-900 placeholder:text-amber-500"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Notification Icon */}
        <button className="relative text-amber-700 hover:text-amber-900">
          <Bell className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-red-500 w-2.5 h-2.5 rounded-full" />
        </button>

        {/* Avatar / Profile */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-2 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-2 py-1.5 rounded-full">
            <UserCircle className="w-6 h-6 text-amber-800" />
            <ChevronDown
              className={`w-4 h-4 text-amber-700 transition-transform ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-48 bg-white border border-amber-100 rounded-xl shadow-lg py-2 z-50">
                <Link
                  href="/user/profile"
                  className="block px-4 py-2 text-sm text-amber-800 hover:bg-amber-50">
                  Profile
                </Link>

                <Link
                  href="/user/settings"
                  className="block px-4 py-2 text-sm text-amber-800 hover:bg-amber-50">
                  Settings
                </Link>
                <button
                  onClick={() => console.log("Logout clicked")}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-amber-800 hover:bg-amber-50 w-full">
                  <LogOut className="w-4 h-4 text-amber-700" />
                  Logout
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Search (Animated Dropdown) */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-white border-t border-amber-200 p-3 shadow-md lg:hidden">
            <div className="flex items-center bg-amber-50 border border-amber-200 rounded-full px-3 py-1.5">
              <Search className="w-5 h-5 text-amber-700 mr-2" />
              <input
                type="text"
                placeholder="Search books or barters..."
                className="bg-transparent outline-none text-sm flex-1 text-amber-900 placeholder:text-amber-500"
              />
              <button
                onClick={toggleSearch}
                className="ml-2 text-amber-700 font-semibold">
                Cancel
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default UserHeader;
