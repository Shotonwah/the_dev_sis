import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaSearch, FaPenNib, FaPalette, FaCode } from "react-icons/fa";

const steps = [
  {
    title: "Research",
    text: "Understanding user needs and defining clear design goals.",
    icon: <FaSearch />,
  },
  {
    title: "Wireframing",
    text: "Structuring layout and building intuitive user flows.",
    icon: <FaPenNib />,
  },
  {
    title: "Design",
    text: "Crafting visually appealing and modern interfaces.",
    icon: <FaPalette />,
  },
  {
    title: "Development",
    text: "Building fast, responsive, and scalable applications.",
    icon: <FaCode />,
  },
];

function DesignProcess() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <div className="py-5 bg-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-600 mb-4">
          Design <span className="text-gray-300">Process</span>
        </h2>
      </div>
      <section ref={ref} className="relative py-24 px-6 bg-[#0b0f19]">
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute left-1/2 top-0 w-0.75 h-full bg-gray-800 -translate-x-1/2" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-1/2 top-0 w-0.75 bg-white -translate-x-1/2"
          />

          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative mb-32 flex ${index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
            >
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="w-[40%] bg-[#111827] border border-gray-700 p-8 md:p-10 rounded-2xl shadow-xl"
              >
                <h3 className="text-sm md:text-2xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-xl leading-relaxed">
                  {step.text}
                </p>
              </motion.div>
              <div
                className={`absolute top-1/2 -translate-y-1/2 text-6xl md:text-7xl font-bold text-gray-700 ${index % 2 === 0
                    ? "left-[60%] md:left-[60%]"
                    : "right-[60%] md:right-[60%]"
                  }`}
              >
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="absolute left-1/2 -translate-x-1/2">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black text-xl shadow-lg border-4 border-[#0b0f19]">
                  {step.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default DesignProcess;
