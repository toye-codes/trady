import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";
import { Bookmark } from "lucide-react";
import { useState } from "react";

const BookCard = ({ image, title, author, id }) => {
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = (e) => {
    e.stopPropagation();
    setBookmarked((prev) => !prev);
  };

  return (
    <div className="flex flex-col justify-between rounded-md shadow-sm hover:shadow-md transition-all duration-200 w-full max-w-xs mx-auto bg-white">
      {/* Image container */}
      <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg p-1">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center rounded-md"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {/* Bookmark Icon */}
        <button
          onClick={toggleBookmark}
          className="absolute top-2 right-2 bg-white/80 hover:bg-white p-1.5 rounded-full shadow-sm transition"
        >
          <Bookmark
            className={`w-5 h-5 ${
              bookmarked ? "fill-blue-500 text-blue-500" : "text-gray-600"
            }`}
          />
        </button>
      </div>

      {/* Card Content */}
      <div className="p-2 shadow-md bg-white">
        <div className="flex flex-col flex-grow p-2">
          <h3 className="text-blue-500 font-semibold text-base line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-500 text-sm truncate">{author}</p>
        </div>

        {/* Link */}
        <Link
          href={`/user/${id}-${slugify(title)}`}
          className="mt-3 text-blue-600 text-sm font-medium hover:underline p-2"
        >
          Read more →
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
