"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BookOpenText,Repeat, ShoppingBag, Bookmark, ArrowLeftRight} from "lucide-react";

const DashboardStats = () => {
  const [randoms, setRandoms] = useState([]);
  const [tradeStreak, setTradeStreak] = useState(7); // example trade streak

  useEffect(() => {
    // Generate random growth percentages after hydration
    setRandoms(Array.from({ length: 4 }, () => Math.floor(Math.random() * 10)));
  }, []);

  const stats = [
    { id: 1, title: "My Library", value: 14, icon: BookOpenText },
    { id: 2, title: "Barters Made", value: 5, icon: Repeat },
    { id: 3, title: "Orders", value: 3, icon: ShoppingBag },
    { id: 4, title: "Bookmarks", value: 8, icon: Bookmark },
  ];

  const goal = 10;
  const progress = (tradeStreak / goal) * 100;

  return (
    <section className=" space-y-6">
      {/* Greeting */}
      <div>
        <h2 className="text-xl md:text-2xl font-semibold text-amber-800">
          Welcome back, Toye 👋
        </h2>
        <p className="text-sm text-amber-700 mt-1">
          Here’s a quick look at your recent book and barter activity.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map(({ id, title, value, icon: Icon }, index) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: id * 0.1 }}
            className="p-4 rounded-xl border border-amber-100 shadow-sm bg-[#fdfbf8] hover:shadow-md transition-all cursor-pointer">
            <div className="flex items-center justify-between mb-2">
              <Icon className="w-6 h-6 text-amber-700" />
              <span className="text-xs font-medium text-amber-600">
                {randoms[index] !== undefined ? `+${randoms[index]}%` : "+0%"}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-amber-800">{value}</h3>
            <p className="text-sm text-amber-700">{title}</p>
          </motion.div>
        ))}
      </div>

      {/* Trade Streak */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#fffaf4] border border-amber-100 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between shadow-sm">
        <div className="flex items-center gap-3 mb-3 sm:mb-0">
          <div className="p-3 bg-amber-50 rounded-full">
            <ArrowLeftRight className="w-6 h-6 text-amber-600" />
          </div>
          <div>
            <h4 className="font-medium text-amber-800">
              You’re on a {tradeStreak}-day trade streak! 🔁
            </h4>
            <p className="text-sm text-amber-700">
              Keep connecting and trading — reach {goal} days to unlock a
              reward!
            </p>
          </div>
        </div>

        <div className="w-full sm:w-1/3 mt-2 sm:mt-0">
          <div className="w-full bg-amber-100 h-2 rounded-full overflow-hidden">
            <motion.div
              className="h-2 bg-amber-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
          <p className="text-xs text-amber-700 mt-1 text-right">
            {progress.toFixed(0)}% complete
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default DashboardStats;
