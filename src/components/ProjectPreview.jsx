import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

function ProjectsPreview() {
  return (
    <section className="py-10 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 120 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl text-gray-500 font-bold text-center mb-10"
      >
        Featured Projects
      </motion.h2>

      <div className="relative">
        {projects.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.8, y: 150 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="sticky top-28 mb-20"
            style={{ zIndex: index }}
          >
            <ProjectCard {...item} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsPreview;
