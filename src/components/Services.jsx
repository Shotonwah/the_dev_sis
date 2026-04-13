import { FaPaintBrush, FaCode, FaMobileAlt } from "react-icons/fa";
import FadeIn from "../components/FadeIn";

const services = [
  {
    title: "Frontend Development",
    text: "Building responsive and performant web applications using modern technologies.",
    icon: <FaCode />,
  },
  {
    title: "UI Design",
    text: "Designing intuitive and visually appealing modern user interfaces.",
    icon: <FaPaintBrush />,
  },
  {
    title: "Responsive Design",
    text: "Ensuring seamless experience across mobile, tablet, and desktop devices.",
    icon: <FaMobileAlt />,
  },
];

function Services() {
  return (
    <section className="py-24 px-6 bg-[#0B0F19] text-white">
      <FadeIn>
        <h2 className="text-4xl font-bold text-center mb-16">What I Do</h2>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((item, index) => (
          <FadeIn key={index} delay={index * 0.2}>
            <div className="bg-[#111827] p-8 rounded-2xl border border-gray-700 hover:scale-105 transition duration-300 shadow-lg">
              <div className="text-3xl mb-4 text-white">{item.icon}</div>

              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

export default Services;
