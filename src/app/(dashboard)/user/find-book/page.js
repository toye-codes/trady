"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import BookCard from "../components/BookCard";
import Books from "../../../data/books.json";


// Add sort by location

const FindBookPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("");

  // ✅ Combine all books into a single array
  const allBooks = Object.values(Books).flat();

  // ✅ Extract unique categories (for filter dropdown)
  const categories = ["All", ...new Set(allBooks.map((book) => book.category))];

  // ✅ UseMemo for efficient filtering and sorting
  const filteredBooks = useMemo(() => {
    let books = [...allBooks];

    // Filter by search
    if (searchTerm.trim() !== "") {
      const search = searchTerm.toLowerCase();
      books = books.filter(
        (book) =>
          book.title.toLowerCase().includes(search) ||
          book.author.toLowerCase().includes(search) ||
          book.category.toLowerCase().includes(search)
      );
    }

    // Filter by category
    if (selectedCategory && selectedCategory !== "All") {
      books = books.filter(
        (book) => book.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Sort by criteria
    if (sortBy === "price-low") {
      books.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      books.sort((a, b) => b.price - a.price);
    } else if (sortBy === "popular") {
      books.sort((a, b) => b.popularity - a.popularity); // assuming `popularity` exists
    }

    return books;
  }, [allBooks, searchTerm, selectedCategory, sortBy]);

  return (
    <section className="min-h-screen p-6 bg-[#fffaf4] text-amber-800">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-amber-900">
          Find Your Next Book
        </h1>
        <p className="text-sm md:text-base text-amber-700 mt-1">
          Search, filter, and explore books available for trade or purchase.
        </p>
      </div>

      {/* Search + Filters */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        {/* Search Bar */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 text-amber-600 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by title, author, or genre..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-amber-200 rounded-xl bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        {/* Filter + Sort Controls */}
        <div className="flex gap-2">
          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-amber-200 rounded-xl px-3 py-2 text-sm bg-amber-50 focus:ring-2 focus:ring-amber-500">
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
            className="border border-amber-200 rounded-xl px-3 py-2 text-sm bg-amber-50 focus:ring-2 focus:ring-amber-500">
            <option value="">Sort by</option>
            <option value="popular">Most Popular</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Book Results */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5">
        {filteredBooks.length > 0 ? (
          filteredBooks.map(({ id, title, author, coverImage, price }) => (
            <BookCard
              key={id}
              title={title}
              author={author}
              image={coverImage}
              price={price}
              id={id}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-amber-700">
            No books found. Try adjusting your search or filters.
          </p>
        )}
      </div>
    </section>
  );
};

export default FindBookPage;
