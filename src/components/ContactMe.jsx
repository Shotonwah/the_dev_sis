import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
function ContactMe() {
  return (
    <>
      <section className="overflow-hidden mt-10 py-8 px-4 bg-[#0b0f19]">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-gray-400"
        >
          <div className="flex gap-10 whitespace-nowrap animate-marquee text-xl font-semibold">
            <span>LET'S TALK• LET'S TALK• LET'S TALK •</span>
            <span>LET'S TALK • LET'S TALK • LET'S TALK •</span>
            <span>LET'S TALK • LET'S TALK • LET'S TALK •</span>
            <span>LET'S TALK • LET'S TALK • LET'S TALK •</span>
            <span>LET'S TALK • LET'S TALK • LET'S TALK •</span>
            <span>LET'S TALK • LET'S TALK • LET'S TALK •</span>
            <span>LET'S TALK • LET'S TALK • LET'S TALK •</span>
            <span>LET'S TALK • LET'S TALK • LET'S TALK •</span>
            <span>LET'S TALK • LET'S TALK • LET'S TALK •</span>
          </div>
          <div>
            <h1 className="text-center md:text-5xl text-3xl font-bold py-20 px-10 text-white">
              Got a Project in mind?
            </h1>
          </div>
          <div className="flex justify-center mt-3">
            <NavLink to="/contact">
              <button className="relative overflow-hidden flex justify-center border border-black px-6 py-3 rounded-full group">
                <span className="absolute inset-0 bg-white translate-x-0 group-hover:translate-x-full transition-transform duration-500 ease-in-out"></span>
                <span className="relative z-10 text-black group-hover:text-white md:text-xl text-xl transition font-bold">
                  Let's Connect
                </span>
              </button>
            </NavLink>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default ContactMe;
