import { motion } from "framer-motion";

function ProjectCard({ title, image, features = "", github, live, bg, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`${bg} max-w-7xl mx-auto hover:scale-[1.01] transition duration-300 rounded-3xl 
    px-6 py-8 md:px-10 md:py-12 
    flex flex-col md:flex-row 
    gap-8 md:gap-12 
    items-center 
    shadow-xl`}
    >
      <div className="w-full md:w-1/2">
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover rounded-xl"
        />
      </div>

      <div className="flex-1 text-white">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>

        <p className="space-y-2 mb-6 text-gray-300">{features}</p>

        <div className="flex gap-4 flex-wrap">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 border border-white rounded-full hover:bg-white hover:text-black transition"
          >
            GitHub
          </a>

          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 border border-white rounded-full hover:bg-white hover:text-black transition"
          >
            Live Site
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
