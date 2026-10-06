import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

function ProjectsPreview() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-4xl md:text-6xl text-slate-800 font-black text-center mb-16 tracking-tight"
      >
        Featured <span className="text-slate-400 font-medium">Projects</span>
      </motion.h2>

      <div className="relative max-w-5xl mx-auto flex flex-col items-center gap-24">
        {projects.map((item, index) => {
          const targetScale = 1 - (projects.length - index) * 0.04;

          const cardScale = useTransform(scrollYProgress, [index / projects.length, 1], [1, targetScale]);
          const cardOpacity = useTransform(scrollYProgress, [(index + 0.8) / projects.length, 1], [1, 0.4]);

          return (
            <motion.div
              key={item.id}
              style={{
                scale: cardScale,
                opacity: cardOpacity,
                top: `${80 + index * 32}px`,
                zIndex: index,
              }}
              className="sticky w-full origin-top"
            >
              <div className="bg-white rounded-3xl border border-slate-200/60 shadow-[0_20px_50px_rgba(15,23,42,0.06)] hover:shadow-[0_30px_60px_rgba(15,23,42,0.12)] transition-shadow duration-500 overflow-hidden backdrop-blur-md">
                <ProjectCard {...item} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectsPreview;
