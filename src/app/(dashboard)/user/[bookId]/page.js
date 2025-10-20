import Image from "next/image";
import books from "../../../data/books.json"

const page = async ({ params }) => {
  const { bookId } = params;
  const id = bookId.split("-")[0];
  const allBooks = Object.values(books).flat();
  const pickedBook = allBooks.find((b) => b.id === Number(id));

  if (!pickedBook)
    return <p className="text-center mt-10 text-amber-700">Book not found</p>;

  return (
    <section className="max-w-6xl mx-auto py-12 px-4 bg-[#fdfbf8]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Cover */}
        <div className="flex justify-center">
          <div className="relative w-64 h-96 shadow-sm rounded-lg overflow-hidden bg-amber-50">
            <Image
              src={pickedBook.coverImage}
              alt={pickedBook.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Details */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-amber-800">
            {pickedBook.title}
          </h1>
          <p className="text-amber-700 text-lg">by {pickedBook.author}</p>

          <div className="flex items-center gap-3">
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              ⭐ {pickedBook.rating}
            </span>
            <span className="text-sm text-amber-600">
              Category: {pickedBook.category}
            </span>
          </div>

          <p className="text-amber-700 leading-relaxed">
            {pickedBook.description}
          </p>

          <p className="text-2xl font-semibold text-amber-800">
            ₦{pickedBook.price}
          </p>

          <div className="flex gap-4 mt-6">
            <button className="bg-amber-700 text-white px-5 py-2 rounded-lg hover:bg-amber-800 transition">
              Buy Book
            </button>
            <button className="border border-amber-200 text-amber-700 px-5 py-2 rounded-lg hover:bg-amber-50 transition">
              Trade Book
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
