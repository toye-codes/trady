"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  LayoutDashboard,
  Repeat,
  ShoppingBag,
  Heart,
  BookOpenText,
  UserCircle,
  Bell,
  LogOut,
  Menu,
  X,
  BookMarkedIcon
} from "lucide-react";

const navItems = [
  { name: "Overview", href: "/user/home", icon: LayoutDashboard },
  { name: "Find Book", href: "/user/find-book", icon: Search },
  { name: "Barter", href: "/user/barters", icon: Repeat },
  { name: "Orders", href: "/user/orders", icon: ShoppingBag },
  { name: "Bookmarks", href: "/user/bookmarks", icon:BookMarkedIcon  },
  // { name: "My Library", href: "/user/library", icon: BookOpenText },
  { name: "Profile", href: "/user/profile", icon: UserCircle },
];

const UserSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* MOBILE HEADER BAR */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b bg-[#fdfbf8]">
        <div className="flex items-center gap-2">
          <BookOpenText className="w-6 h-6 text-amber-700" />
          <h2 className="font-semibold text-amber-800">Trady</h2>
        </div>

        <motion.button
          onClick={toggleSidebar}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
          aria-label="Toggle sidebar">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isOpen ? "x" : "menu"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.25 }}>
              {isOpen ? (
                <X className="w-6 h-6 text-amber-700" />
              ) : (
                <Menu className="w-6 h-6 text-amber-700" />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </div>

      {/* SIDEBAR */}
      <AnimatePresence>
        {(isOpen || true) && (
          <motion.aside
            initial={{ x: -260 }}
            animate={{ x: 0 }}
            exit={{ x: -260 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`fixed lg:static top-0 left-0 h-screen w-64 bg-[#fdfbf8] border-r border-amber-200 shadow-sm flex flex-col justify-between p-4 z-50
              ${isOpen ? "block" : "hidden lg:flex"}`}>
            {/* TOP SECTION */}
            <div>
              <div className="hidden lg:flex items-center mb-8 px-2">
                <BookOpenText className="w-7 h-7 text-amber-700 mr-2" />
                <h2 className="text-xl font-semibold text-amber-800 font-serif">
                  Trady
                </h2>
              </div>

              <nav className="space-y-1">
                {navItems.map(({ name, href, icon: Icon }) => {
                  const active = pathname === href;
                  return (
                    <Link
                      key={name}
                      href={href}
                      onClick={closeSidebar}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                        active
                          ? "bg-amber-100 text-amber-800 font-medium"
                          : "text-amber-700 hover:bg-amber-50"
                      }`}>
                      <Icon className="w-5 h-5 text-amber-700" />
                      <span>{name}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* BOTTOM SECTION */}
            <div className="border-t border-amber-100 pt-4">
              <Link
                href="/user/notifications"
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-amber-700 hover:bg-amber-50"
                onClick={closeSidebar}>
                <Bell className="w-5 h-5 text-amber-700" />
                <span>Notifications</span>
              </Link>
              <button
                className="flex items-center gap-3 px-3 py-2 mt-2 w-full rounded-lg text-amber-700 hover:bg-amber-50"
                onClick={() => {
                  closeSidebar();
                  console.log("Logout clicked");
                }}>
                <LogOut className="w-5 h-5 text-amber-700" />
                <span>Logout</span>
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* MOBILE OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}
    </>
  );
};

export default UserSidebar;
