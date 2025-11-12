import Image from "next/image";
import { motion } from "framer-motion";


const BookFlipShowcase = ({ books }) => {
  // a layered card stack with subtle rotation and a "flip" animation on hover
  return (
    <div className="w-full max-w-md flex items-center justify-center">
      <div className="relative w-72 h-96 perspective-1000">
        {books.map((b, i) => {
          const idx = books.length - 1 - i;
          const offset = (i - 1) * 10;
          return (
            <motion.div
              key={b.id}
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-88 md:w-72 md:h-96 rounded-lg shadow-2xl bg-white overflow-hidden`}
              style={{ zIndex: i }}
              initial={{ scale: 0.92 - i * 0.02, rotate: -6 + i * 6, y: i * 8 }}
              whileHover={{
                scale: 1.02,
                rotate: 0,
                y: -6,
                transition: { type: "spring", stiffness: 280, damping: 20 },
              }}
              whileTap={{ scale: 0.98 }}>
              <div className="h-3/5 relative bg-amber-50">
                <Image
                  src={b.img}
                  alt={b.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-4 h-2/5 flex items-start flex-col">
                <h5 className="font-semibold text-lg">{b.title}</h5>
                <p className="text-sm text-slate-600 mt-2">{b.author}</p>
                <div className="mt-auto w-full flex items-center justify-between">
                  <button className="text-xs px-3 py-2 rounded-md bg-amber-100">
                    Swap
                  </button>
                  <button className="text-xs px-3 py-2 rounded-md border border-amber-200">
                    Buy
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default BookFlipShowcase;