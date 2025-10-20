"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import BarterCard from "../components/BarterCard";
import barterListings from "../../../data/barterListing.json";

const BarterPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("");

  // Extract unique categories (genres)
  const categories = [
    "All",
    ...new Set(barterListings.map((item) => item.book.genre)),
  ];

  // Filter + Search + Sort Logic
  const filteredListings = barterListings
    .filter((item) => {
      const query = searchTerm.toLowerCase();
      return (
        item.book.title.toLowerCase().includes(query) ||
        item.book.author.toLowerCase().includes(query) ||
        item.book.genre.toLowerCase().includes(query)
      );
    })
    .filter(
      (item) =>
        selectedCategory === "All" || item.book.genre === selectedCategory
    )
    .sort((a, b) => {
      if (sortBy === "recent") {
        return new Date(b.dateListed) - new Date(a.dateListed);
      }
      if (sortBy === "available") {
        return b.available - a.available;
      }
      return 0;
    });

  return (
    <section className="min-h-screen bg-[#fffaf4] p-3 md:p-10">
      {/* 🪶 Header */}
      <div className="max-w-6xl mx-auto mb-8 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-amber-900">
          Book Barter
        </h1>
        <p className="text-sm md:text-base text-amber-700 mt-1">
          Exchange your books with others — connect, trade, and grow your
          library.
        </p>
      </div>

      {/* 🔍 Search + Filters */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        {/* Search Bar */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 text-amber-600 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by title, author, or genre..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-amber-200 rounded-xl 
              placeholder:text-amber-600 text-amber-600 bg-amber-50 
              focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        {/* Filter + Sort Controls */}
        <div className="flex gap-2">
          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-amber-200 rounded-xl px-3 py-2 text-sm 
              bg-amber-50 text-amber-600 placeholder:text-amber-600 
              focus:ring-2 focus:ring-amber-500">
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-amber-200 rounded-xl px-3 py-2 text-sm 
              bg-amber-50 text-amber-600 placeholder:text-amber-600 
              focus:ring-2 focus:ring-amber-500">
            <option value="">Sort by</option>
            <option value="recent">Recently Added</option>
            <option value="available">Availability</option>
          </select>
        </div>
      </div>

      {/* 📚 Barter Books Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-5">
        {filteredListings.length > 0 ? (
          filteredListings.map((listing) => (
            <BarterCard
              key={listing.id}
              id={listing.id}
              book={listing.book}
              owner={listing.owner}
              exchangeInterest={listing.exchangeInterest}
              available={listing.available}
              status={listing.status}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-amber-700 py-10">
            No books found matching your search.
          </p>
        )}
      </div>
    </section>
  );
};

export default BarterPage;
