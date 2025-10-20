"use client";

import books from "../../../data/books.json";
import BookCard from "../components/BookCard";
import DashboardStats from "../components/DashboardStats";

const Page = () => {
  const favouritesBooks = books.favourites;

  // trending Books
  const trendingBooks = books.trending

  return (
    <div className="p-4 space-y-4">
      <DashboardStats />
      <div className="mb-10 mt-3">
        <h2 className="text-xl font-semibold text-amber-700 mb-4">
          Popular Books This Week
        </h2>

        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.isArray(favouritesBooks) &&
            favouritesBooks.slice(0, 4).map((book) => (
              <BookCard
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                image={book.coverImage}
                // description={book.description}
                // rating={book.rating}
                // price={book.price}
              />
            ))}
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-xl font-semibold text-amber-700 mb-4">
          Trending Books This Week
        </h2>

        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.isArray(trendingBooks) &&
            trendingBooks.slice(0, 4).map((book) => (
              <BookCard
                key={book.id}
                title={book.title}
                author={book.author}
                image={book.coverImage}
                // description={book.description}
                // rating={book.rating}
                // price={book.price}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
