import FadeIn from "./FadeIn";

function AboutPreview() {
  const skills = [
    "JavaScript(ES6+)",
    "React.js",
    "TailwindCss",
    "HTML5 & Semantic Markup",
    "Responsive & Mobile-First Design",
    "Git & GitHub",
    "Vite/Webpack",
    "Design Tools",
    "Problem Solving",
    "Critical Thinking",
    "Continous Learning",
  ];

  return (
    <section className="mt-15 px-6">
      <FadeIn>
        <h2 className="text-center text-gray-600 md:text-5xl text-3xl font-bold mb-10">
          Skills <span className="text-gray-300">& Tools</span>
        </h2>
      </FadeIn>
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full max-w-600 mx-auto">
        {skills.map((item, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <button className="relative overflow-hidden border border-black px-6 py-3 rounded-full group">
              <span className="absolute inset-0 bg-black translate-x-0 group-hover:translate-x-full transition-transform duration-500 ease-in-out"></span>
              <span
                className="relative z-10 text-white group-hover:text-black md:text-2xl sm:text-base 
                            hover:scale-105 transition duration-300 cursor-default shadow-md"
              >
                {item}
              </span>
            </button>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

export default AboutPreview;
