import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function HowStep({ number, title, text }) {
  return (
    <motion.div
      variants={fadeUp}
      className="bg-white rounded-lg p-6 shadow-lg">
      <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center font-semibold">
        {number}
      </div>
      <h5 className="mt-4 font-semibold">{title}</h5>
      <p className="mt-2 text-slate-600">{text}</p>
    </motion.div>
  );
}
export default HowStep;