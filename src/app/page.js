"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Store, Shield } from "lucide-react";
import night from "../../public/night.jpg";
import quiet from "../../public/quiet.jpg";
import atomic from "../../public/atomic.jpg";
import BookFlipShowcase from "../component/global/BookFlipShowcase";
import FeatureCard from "../component/global/FeatureCard";
import HowStep from "../component/global/HowStep";
import Footer from "../component/Footer";

const BOOKS = [
  { id: 1, title: "The Night Circus", author: "Erin Morgenstern", img: night },
  {
    id: 2,
    title: "The Power of Introverts in a World That Can’t Stop Talking ",
    author: "Susan Cain",
    img: quiet,
  },
  { id: 3, title: "Atomic Habits", author: "James Clear", img: atomic },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function BookIcon() {
  return <BookOpen className="w-5 h-5 text-amber-700" strokeWidth={2} />;
}

function StoreIcon() {
  return <Store className="w-5 h-5 text-amber-700" strokeWidth={2} />;
}

function ShieldIcon() {
  return <Shield className="w-5 h-5 text-amber-700" strokeWidth={2} />;
}

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-amber-100 to-amber-50 text-slate-900">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-amber-200 flex items-center justify-center shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 text-amber-700">
              <path
                fill="currentColor"
                d="M6 2h9a2 2 0 0 1 2 2v16l-7-3-7 3V4a2 2 0 0 1 2-2z"
              />
            </svg>
          </div>
          <h1 className="text-lg font-semibold">Trady</h1>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#features" className="hover:text-slate-900">
            Features
          </a>
          <a href="#how" className="hover:text-slate-900">
            How it Works
          </a>
          <a href="#about" className="hover:text-slate-900">
            About
          </a>
          <a
            href="/sign-up"
            className="bg-amber-600 text-white px-4 py-2 rounded-md shadow hover:opacity-95">
            Get Started
          </a>
          <a
            href="/login"
            className="bg-amber-600 text-white px-4 py-2 rounded-md shadow hover:opacity-95">
            Login
          </a>
        </nav>
      </header>

      <section className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 mt-6">
        {/* Left column - hero text */}
        <motion.div
          className="flex-1"
          initial="hidden"
          animate="show"
          variants={container}>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-extrabold leading-tight">
            Swap. Buy. Discover.
            <span className="block text-amber-700">Books for calm minds.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg text-slate-700 max-w-xl">
            Trady brings together readers who prefer quiet discovery. Find the
            book you want, swap for it, or buy from caring sellers — all without
            the noise.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-6 flex gap-4">
            <a
              href="/sign-up"
              className="inline-flex items-center gap-3 bg-amber-600 text-white px-5 py-3 rounded-lg shadow hover:shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3v18h18"
                />
              </svg>
              Get Started
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 border border-amber-200 px-4 py-3 rounded-lg text-amber-700 hover:bg-amber-50">
              Learn how it works
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 grid grid-cols-3 gap-3 max-w-xs">
            {["Minimal", "Curated", "Quiet"].map((t) => (
              <div
                key={t}
                className="text-xs text-center bg-amber-50 border border-amber-100 px-3 py-2 rounded-md">
                {t}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right column - animated book carousel */}
        <motion.div
          className="flex-1 relative flex items-center justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}>
          <BookFlipShowcase books={BOOKS} />
        </motion.div>
      </section>

      <section id="features" className="max-w-6xl mx-auto px-6 mt-20">
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}>
          <FeatureCard
            icon={BookIcon}
            title="Swap With Ease"
            text="Propose swaps, accept requests, and manage exchanges with zero awkwardness."
          />
          <FeatureCard
            icon={StoreIcon}
            title="Buy From Sellers"
            text="Local sellers list their stock. Buy new or second‑hand and get it delivered."
          />
          <FeatureCard
            icon={ShieldIcon}
            title="Trust & Safety"
            text="Verified sellers, ratings, and secure payments protect everyone."
          />
        </motion.div>
      </section>

      <section id="how" className="max-w-6xl mx-auto px-6 mt-20">
        <h3 className="text-2xl font-semibold mb-6">How Trady works</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <HowStep
            number={1}
            title="Create & List"
            text="Sign up, add books quickly using ISBN or barcode, and choose swap or sell."
          />
          <HowStep
            number={2}
            title="Discover & Request"
            text="Discover local matches, request a swap, or buy instantly from sellers."
          />
          <HowStep
            number={3}
            title="Meet or Ship"
            text="Choose to meet in person or ship via trusted couriers. Rate and review to build trust."
          />
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 mt-20">
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h4 className="text-xl font-bold">Our mission</h4>
            <p className="mt-3 text-slate-700">
              Trady exists to make reading more accessible, sustainable, and
              peaceful. We help people discover books without the noise — just
              good stories and quiet choices.
            </p>
          </div>
          <div className="flex-1 text-right">
            <a
              href="#cta"
              className="inline-block bg-amber-600 text-white px-5 py-3 rounded-md shadow">
              Join the Reading Haven
            </a>
          </div>
        </div>
      </section>

      <section id="cta" className="max-w-6xl mx-auto px-2 mt-20 mb-20">
        <div className="bg-amber-600 text-white rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-3xl font-bold">
              Ready to find your next read?
            </h3>
            <p className="mt-2 text-amber-100">
              Create your shelf, browse nearby books, and swap or buy in a few
              taps — all in your comfort zone.
            </p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <a
              href="/sign-up"
              className="bg-white text-amber-700 px-3 py-2 text-base rounded-lg font-semibold shadow">
              Create Account
            </a>
            <a
              href="/sellers"
              className="border border-white px-3 py-2 rounded-lg text-white">
              Sell Books
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
