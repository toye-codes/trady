import { useMemo } from "react";
import barterListings from "../../../../data/barterListing.json";

const BarterDetailPage = ({ params }) => {
  const barterId = Number(params.barter?.split("-")[0]);
  const listing = useMemo(
    () => barterListings.find((item) => item.id === barterId),
    [barterId],
  );

  if (!listing) {
    return (
      <section className="min-h-screen bg-[#fffaf4] p-6">
        <div className="mx-auto max-w-4xl rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-semibold text-amber-900">
            Barter not found
          </h1>
          <p className="mt-2 text-amber-700">
            Try selecting another listing from the barter page.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#fffaf4] p-6">
      <div className="mx-auto max-w-5xl rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-amber-900">
              {listing.book.title}
            </h1>
            <p className="mt-2 text-amber-700">by {listing.book.author}</p>
          </div>
          <span className="rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">
            {listing.status.toUpperCase()}
          </span>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-amber-100 bg-amber-50 p-5">
            <p className="text-sm uppercase tracking-[0.2em] text-amber-600">
              Owner
            </p>
            <h2 className="mt-3 text-xl font-semibold text-amber-900">
              {listing.owner.name}
            </h2>
            <p className="mt-2 text-amber-700">{listing.owner.location}</p>
          </div>
          <div className="rounded-3xl border border-amber-100 bg-amber-50 p-5">
            <p className="text-sm uppercase tracking-[0.2em] text-amber-600">
              Genre
            </p>
            <h2 className="mt-3 text-xl font-semibold text-amber-900">
              {listing.book.genre}
            </h2>
            <p className="mt-2 text-amber-700">
              Condition: {listing.book.condition}
            </p>
          </div>
          <div className="rounded-3xl border border-amber-100 bg-amber-50 p-5">
            <p className="text-sm uppercase tracking-[0.2em] text-amber-600">
              Swap interest
            </p>
            <p className="mt-3 text-amber-700">{listing.exchangeInterest}</p>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-amber-900">
            Book description
          </h2>
          <p className="mt-3 text-amber-700">{listing.book.description}</p>
          <p className="mt-4 text-xl font-semibold text-amber-800">
            Available: {listing.available ? "Yes" : "No"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BarterDetailPage;
