import tech from "../assets/layo2.jpg";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import FadeIn from "../../src/components/FadeIn";
import Nhero from "../../src/components/Nhero";
import SkillsPreview from "../../src/components/SkillsPreview";
import ContactMe from "../../src/components/ContactMe";

function About() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className=" relative h-100 md:h-150 pt-10 px-6"
      >
        <img
          src={tech}
          alt="profile"
          className="w-full h-full object-cover object-[60%_25%]"
        />
        <div className="absolute bg-black/60 flex items-center justify-center bottom-0">
          <h1 className="text-5xl md:text-8xl font-bold text-white">
            About Haleemah
          </h1>
        </div>
      </motion.div>
      <FadeIn>
        <Nhero />
      </FadeIn>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center gap-8 mx-auto px-6 py-4 mt-15"
      >
        <h2 className="text-2xl md:text-4xl max-w-2xl md:-mt-20 mt-0 font-semibold">
          Hi, I'm Haleemah Shotonwa, a Frontend developer and UI Designer based
          in Lagos,Nigeria.
        </h2>
        <div>
          <p className="text-black text-sm md:text-lg  max-w-7xl">
            I focused on creating seamless, user-centered digital experiences. I
            blend clean design with functional development to build modern web
            interfaces. My design philosophy is rooted in empathy—understanding
            users' needs, behaviors, and goals to craft products that feel
            effortless and intuitive. My goal is simple: to design experiences
            that don't just look good but truly make a difference.
          </p>
          <NavLink to="/Contact">
            <button className="relative overflow-hidden border border-black mt-5 px-6 py-3 rounded-full group">
              <span className="absolute inset-0 bg-black translate-x-0 group-hover:translate-x-full transition-transform duration-500 ease-in-out"></span>
              <span className="relative z-10 text-white group-hover:text-black md:text-2xl text-xl transition">
                Say Hello
              </span>
            </button>
          </NavLink>
        </div>
      </motion.div>{" "}
      <hr className="w-full px-8 text-gray-400" />
      <SkillsPreview />
      <ContactMe />
    </>
  );
}

export default About;
