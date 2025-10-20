"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import AuthLayout from "../component/AuthLayout";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push("/user/home")
  }

  return (
    <AuthLayout title="Create your account">
      <motion.form
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        onSubmit={handleSubmit}
        className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-amber-800 mb-1">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border text-amber-900 border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-amber-800 mb-1">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 border text-amber-900 border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-amber-800 mb-1">
            Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-2 border text-amber-900 border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-amber-700 text-white rounded-lg font-medium hover:bg-amber-800 transition-colors">
          Create Account
        </button>

        <p className="text-center text-sm text-amber-700">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-amber-800">
            Login
          </Link>
        </p>
      </motion.form>
    </AuthLayout>
  );
};

export default SignupPage;
