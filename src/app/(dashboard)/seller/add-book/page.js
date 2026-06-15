"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const AddBookPage = () => {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setTimeout(() => router.push("/seller/books"), 1600);
  };

  return (
    <section className="min-h-screen bg-[#fffaf4] p-6">
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
          <h1 className="text-3xl font-bold text-amber-900">
            Add a Book Listing
          </h1>
          <p className="mt-2 text-amber-700">
            Enter the book details and simulate adding it to your Trady seller
            inventory.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm space-y-5">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-amber-700">
                Title
              </span>
              <input
                type="text"
                required
                className="mt-2 w-full rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-amber-700">
                Author
              </span>
              <input
                type="text"
                required
                className="mt-2 w-full rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </label>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <label className="block">
              <span className="text-sm font-semibold text-amber-700">
                Category
              </span>
              <input
                type="text"
                required
                className="mt-2 w-full rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-amber-700">
                Condition
              </span>
              <select className="mt-2 w-full rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-500">
                <option>Like New</option>
                <option>Very Good</option>
                <option>Good</option>
                <option>Fair</option>
              </select>
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-amber-700">
                Price
              </span>
              <input
                type="number"
                required
                min="0"
                step="0.01"
                className="mt-2 w-full rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </label>
          </div>

          <label className="block">
            <span className="text-sm font-semibold text-amber-700">
              Description
            </span>
            <textarea
              rows="4"
              className="mt-2 w-full rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </label>

          <button className="w-full rounded-full bg-amber-700 px-6 py-3 text-base font-semibold text-white shadow hover:bg-amber-800">
            {submitted ? "Saving..." : "Add Listing"}
          </button>
        </form>

        <div className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-amber-900">
            What happens next
          </h2>
          <p className="mt-3 text-amber-700">
            This app uses mock front-end data only. Submitting the form
            simulates adding a book, then returns you to your inventory.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AddBookPage;
