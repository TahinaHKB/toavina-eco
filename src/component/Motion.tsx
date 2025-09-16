import { motion } from "framer-motion";

export default function AvantageCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-green-600 cursor-pointer"
    >
      <h4 className="text-xl font-bold text-green-700 mb-2">{title}</h4>
      <p className="text-gray-700">{text}</p>
    </motion.div>
  );
}
