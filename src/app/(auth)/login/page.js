"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthLayout from "../component/AuthLayout";


const LoginPage = () => {
    const router = useRouter();

    // handle submit
    const handleSubmit = (e) => {
        e.preventDefault()

        router.push("/user/home")
    }

  return (
    <AuthLayout title="Login to your account">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-5">
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
            placeholder="••••••••"
            className="w-full px-4 py-2 border text-amber-900 border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-amber-700 text-white rounded-lg font-medium hover:bg-amber-800 transition-colors">
          Login
        </button>

        <p className="text-center text-sm text-amber-700">
          Don’t have an account?{" "}
          <Link href="/sign-up" className="font-medium text-amber-800">
            Sign up
          </Link>
        </p>
      </motion.form>
    </AuthLayout>
  );
};

export default LoginPage;
