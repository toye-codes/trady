import { motion } from "framer-motion";


const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const FeatureCard = ({ icon: Icon, title, text }) => {
  return (
    <motion.div
      variants={fadeUp}
      className="bg-white rounded-xl p-6 shadow-md ">
      <div className="w-12 h-12 rounded-md bg-amber-50 flex items-center justify-center mb-4">
        <Icon />
      </div>
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="mt-3 text-slate-600">{text}</p>
    </motion.div>
  );
}

export default FeatureCard;