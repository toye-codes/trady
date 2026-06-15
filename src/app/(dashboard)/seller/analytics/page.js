import { ChartBar, TrendingUp, Star } from "lucide-react";

const metrics = [
  { label: "Weekly Views", value: "1.2k", icon: ChartBar },
  { label: "Swap Requests", value: 18, icon: TrendingUp },
  { label: "Positive Reviews", value: "4.9/5", icon: Star },
];

const AnalyticsPage = () => {
  return (
    <section className="min-h-screen bg-[#fffaf4] p-6">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
          <h1 className="text-3xl font-bold text-amber-900">
            Seller Analytics
          </h1>
          <p className="mt-2 text-amber-700">
            Track how your books are performing on Trady and where the most
            interest is coming from.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {metrics.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.label}
                className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="mt-5 text-sm uppercase tracking-[0.2em] text-amber-600">
                  {item.label}
                </p>
                <p className="mt-3 text-3xl font-semibold text-amber-900">
                  {item.value}
                </p>
              </article>
            );
          })}
        </div>

        <div className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-amber-900">
            Top performing books
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {[
              { title: "Atomic Habits", trend: "High demand" },
              { title: "The Alchemist", trend: "Great swap interest" },
            ].map((book) => (
              <div key={book.title} className="rounded-3xl bg-amber-50 p-5">
                <p className="font-semibold text-amber-900">{book.title}</p>
                <p className="mt-2 text-sm text-amber-700">{book.trend}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsPage;
