import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import ContactMe from "../components/ContactMe";


function Projects() {
  return (
    <section>
      <h2 className="text-4xl font-bold text-center mb-16 w-full max-w-600 mx-auto">
        My Projects
      </h2>

      <div className="space-y-16">
        {projects.map((item, index) => (
          <ProjectCard
            key={item.id}
            title={item.title}
            image={item.image}
            features={item.features}
            github={item.github}
            live={item.live}
            bg={item.bg}
            index={index}
          />
        ))}
      </div>
      <div className="w-full max-w-600 mx-auto">
        <ContactMe />
      </div>
    </section>
  );
}

export default Projects;

