import { motion } from "framer-motion";
function Nhero() {
  return (
    <section className="overflow-hidden mt-10 py-6 text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="text-gray-400 max-w-xl"
      >
        <div className="flex gap-10 whitespace-nowrap animate-marquee text-xl font-semibold">
          <span>Creative Developer • UI Designer • React Developer •</span>
          <span>Creative Developer • UI Designer • React Developer •</span>
          <span>Creative Developer • UI Designer • React Developer •</span>
          <span>Creative Developer • UI Designer • React Developer •</span>
          <span>Creative Developer • UI Designer • React Developer •</span>
        </div>
      </motion.div>
    </section>
  );
}

export default Nhero;
