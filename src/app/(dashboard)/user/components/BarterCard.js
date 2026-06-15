"use client";

import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";
import { Bookmark, MapPin } from "lucide-react";
import { useState } from "react";

const BarterCard = ({ id, book, owner }) => {
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = (e) => {
    e.stopPropagation();
    setBookmarked((prev) => !prev);
  };

  return (
    <div className="flex flex-col justify-between rounded-md shadow-sm hover:shadow-md transition-all duration-200 w-full max-w-xs mx-auto bg-white border border-amber-100">
      {/* 🖼️ Image Section */}
      <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg p-1">
        <Image
          src={book.image || "/placeholder.jpg"}
          alt={book.title}
          fill
          className="object-cover object-center rounded-md"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        <button
          onClick={toggleBookmark}
          className="absolute top-2 right-2 bg-white/80 hover:bg-white p-1.5 rounded-full shadow-sm transition">
          <Bookmark
            className={`w-5 h-5 ${
              bookmarked ? "fill-amber-600 text-amber-600" : "text-gray-600"
            }`}
          />
        </button>

        <span className="absolute bottom-2 left-2 bg-amber-600 text-white text-xs px-2 py-1 rounded-md shadow-sm">
          {book.condition || "Available for Trade"}
        </span>
      </div>

      {/* 📄 Content Section */}
      <div className="p-3 shadow-md bg-white">
        <div className="flex flex-col flex-grow">
          <h3 className="text-blue-500 font-semibold text-base line-clamp-2 truncate">
            {book.title}
          </h3>
          <p className="text-gray-500 text-sm truncate">
            {book.author || "Unknown Author"}
          </p>
        </div>

        {/* 👤 Owner Info */}
        <div className="mt-3 flex items-center justify-between bg-amber-50 rounded-md p-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-amber-200 flex items-center justify-center font-semibold text-amber-800 text-sm">
              {owner?.name?.charAt(0)?.toUpperCase() || "U"}
            </div>
            <div>
              <p className="text-sm font-medium text-amber-800">
                {owner?.name || "Unknown User"}
              </p>
              <div className="flex items-center text-xs text-amber-600">
                <MapPin className="w-3 h-3 mr-1" />
                {owner?.location || "Unknown Location"}
              </div>
            </div>
          </div>
        </div>

        {/* 🔗 CTA Section */}
        <div className="mt-3 flex items-center justify-between">
          <Link
            href={`/user/barters/${id}-${slugify(book.title)}`}
            className="text-blue-600 text-sm font-medium hover:underline">
            View Details →
          </Link>
          <button className="px-3 py-1.5 text-sm bg-amber-600 hover:bg-amber-700 text-white rounded-md transition">
            Trade Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default BarterCard;
