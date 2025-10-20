"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const AuthLayout = ({ children, title }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5ecde] px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-white/90 shadow-lg rounded-2xl p-8 border border-amber-100 backdrop-blur-sm">
        <div className="flex items-center justify-center mb-6">
          <BookOpen className="w-8 h-8 text-amber-700 mr-2" />
          <h1 className="text-2xl font-semibold text-amber-800 font-serif">
            Trady
          </h1>
        </div>

        <h2 className="text-lg font-medium text-center text-amber-700 mb-4">
          {title}
        </h2>

        {children}
      </motion.div>
    </div>
  );
};

export default AuthLayout;
