// app/bookmarks/page.jsx
"use client";

import Image from "next/image";
import { Bookmark } from "lucide-react";

// Mock data for bookmarks
const mockBookmarks = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-help",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
  },
  {
    id: 2,
    title: "Outliers",
    author: "Malcolm Gladwell",
    genre: "Psychology",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/81pN1y-j9BL.jpg",
  },
  {
    id: 3,
    title: "Educated",
    author: "Tara Westover",
    genre: "Memoir",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/81WojUxbbFL.jpg",
  },
];

const BookmarksPage = () => {
  const bookmarks = mockBookmarks; // Replace with your logic later

  return (
    <section className="min-h-screen bg-[#fffaf4] text-amber-800 py-12 px-4">
      <h1 className="text-3xl font-semibold mb-8">Your Bookmarks</h1>

      {bookmarks.length === 0 ? (
        <div className="text-center text-gray-500 mt-20">
          <p className="text-lg">You have no bookmarks yet.</p>
          <p className="mt-2">
            Start browsing books and bookmark your favorites!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {bookmarks.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg shadow-md overflow-hidden p-4 flex flex-col items-center">
              <div className="relative w-32 h-48 mb-4">
                <Image
                  src={book.thumbnail}
                  alt={book.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h2 className="text-lg font-medium">{book.title}</h2>
              <p className="text-sm text-gray-500">{book.author}</p>
              <p className="text-sm mt-1">{book.genre}</p>
              <button className="mt-4 text-amber-500 hover:text-amber-600">
                <Bookmark />
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default BookmarksPage;
