"use client";

import Link from "next/link";
import slugify from "slugify";
import books from "../../../../data/books.json";

const SellerBooksPage = () => {
  const inventory = [...books.favourites, ...books.trending].slice(0, 10);

  return (
    <section className="min-h-screen bg-[#fffaf4] p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-amber-900">
              My Book Listings
            </h1>
            <p className="mt-2 text-amber-700 max-w-2xl">
              Manage your current stock, update prices, and keep your inventory
              fresh for readers and traders.
            </p>
          </div>
          <Link
            href="/seller/add-book"
            className="inline-flex items-center justify-center rounded-full bg-amber-700 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-amber-800">
            Add new book
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {inventory.map((book) => (
            <article
              key={book.id}
              className="rounded-3xl border border-amber-100 bg-white shadow-sm overflow-hidden transition hover:-translate-y-1 hover:shadow-lg">
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                    {book.category}
                  </span>
                  <span className="text-sm font-semibold text-amber-900">
                    ₦{book.price}
                  </span>
                </div>
                <h2 className="text-lg font-semibold text-amber-800">
                  {book.title}
                </h2>
                <p className="text-sm text-slate-600">{book.author}</p>
                <p className="text-sm text-slate-500 line-clamp-3">
                  {book.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="rounded-full bg-amber-50 px-3 py-1 text-xs text-amber-700">
                    In stock
                  </span>
                  <Link
                    href={`/seller/books/${book.id}-${slugify(book.title)}`}
                    className="text-sm font-semibold text-amber-700 hover:underline">
                    View details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SellerBooksPage;
