const sellerOrders = [
  {
    id: 1,
    book: "The Night Circus",
    buyer: "Ada",
    status: "Shipped",
    date: "2025-11-08",
  },
  {
    id: 2,
    book: "Atomic Habits",
    buyer: "Michael",
    status: "Pending",
    date: "2025-11-11",
  },
  {
    id: 3,
    book: "Fourth Wing",
    buyer: "Chioma",
    status: "Delivered",
    date: "2025-11-12",
  },
];

const SellerOrdersPage = () => {
  return (
    <section className="min-h-screen bg-[#fffaf4] p-6">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
          <h1 className="text-3xl font-bold text-amber-900">Seller Orders</h1>
          <p className="mt-2 text-amber-700">
            Review recent orders and manage your shipping status for sold books.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-amber-100 bg-white shadow-sm">
          <table className="min-w-full divide-y divide-amber-100 text-left">
            <thead className="bg-amber-50">
              <tr>
                <th className="px-6 py-4 text-sm font-semibold text-amber-800">
                  Book
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-amber-800">
                  Buyer
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-amber-800">
                  Status
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-amber-800">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-amber-100">
              {sellerOrders.map((order) => (
                <tr key={order.id} className="hover:bg-amber-50">
                  <td className="px-6 py-4 text-sm text-slate-700">
                    {order.book}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700">
                    {order.buyer}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700">
                    {order.status}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700">
                    {order.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default SellerOrdersPage;
