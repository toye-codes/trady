import Link from "next/link";

const SellerProfilePage = () => {
  return (
    <section className="min-h-screen bg-[#fffaf4] p-6">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
          <h1 className="text-3xl font-bold text-amber-900">Seller Profile</h1>
          <p className="mt-2 text-amber-700">
            Manage your public seller profile, contact settings, and Trady
            reputation.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          <div className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-amber-600">
              Account
            </p>
            <h2 className="mt-4 text-xl font-semibold text-amber-900">
              Book Seller
            </h2>
            <p className="mt-2 text-amber-700">toyebooklover@example.com</p>
          </div>
          <div className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-amber-600">
              Location
            </p>
            <h2 className="mt-4 text-xl font-semibold text-amber-900">
              Lagos, Nigeria
            </h2>
            <p className="mt-2 text-amber-700">
              Local meetups preferred for swap and delivery.
            </p>
          </div>
          <div className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-amber-600">
              Reputation
            </p>
            <h2 className="mt-4 text-xl font-semibold text-amber-900">4.9 ★</h2>
            <p className="mt-2 text-amber-700">
              Highly rated by book buyers and swappers.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-amber-900">Quick links</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Link
              href="/seller/settings"
              className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-amber-700 hover:bg-amber-100">
              Account settings
            </Link>
            <Link
              href="/seller/books"
              className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-amber-700 hover:bg-amber-100">
              Manage inventory
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellerProfilePage;
