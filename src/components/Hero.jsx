import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function Hero() {
  const name = "I'm Haleemah Shotonwa";
  const role = "a Frontend Developer";
  return (
    <>
      <section className="pt-35 bg-linear-to-br from-[#0B0F19] via-[#0F172A] to-black text-center py-8 px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold md:text-7xl text-gray-400 mb-3 w-full max-w-600 mx-auto"
        >
          Hello!
        </motion.h2>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                delayChildren: 0.6,
                staggerChildren: 0.05,
              },
            },
          }}
        >
          {name.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.3 }}
              className="inline-block text-gray-500 text-lg md:text-6xl font-bold mt-5 drop-shadow-xl ml-1"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                delayChildren: 0.6,
                staggerChildren: 0.05,
              },
            },
          }}
        >
          {role.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.3 }}
              className="inline-block text-white text-sm md:text-5xl font-bold mt-5 drop-shadow-xl ml-1"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-gray-400 w-full max-w-600 mx-auto"
        >
          <div className="text-sm md:text-3xl max-w-5xl mx-auto text-center mt-7 mb-8 text-gray-500">
            I create seamless, user-centered digital experiences that blend
            aesthetics with functionality. If you are looking towards creating
            beautiful, user-friendly and modern web pages.
          </div>
          <div className="flex mt-15 gap-8 justify-center mb-10">
            <NavLink to="/Contact">
              <button className="relative overflow-hidden border border-gray-800 px-6 py-3 rounded-full group">
                <span className="absolute inset-0 bg-gray-800 translate-x-0 group-hover:translate-x-full transition-transform duration-500 ease-in-out"></span>
                <span className="relative z-10 text-white group-hover:text-white md:text-2xl text-sm transition">
                  Let's Start
                </span>
              </button>
            </NavLink>
            <NavLink to="/Projects">
              <button className="relative overflow-hidden border border-gray-800 px-6 py-3 rounded-full group">
                <span className="absolute inset-0 bg-gray-800 group-hover:cursor-pointer -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                <span className="relative z-10 text-white group-hover:text-white md:text-2xl text-sm transition">
                  View Projects
                </span>
              </button>
            </NavLink>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default Hero;
