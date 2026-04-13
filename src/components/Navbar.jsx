import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaGithub, FaTimes, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Footer from "../components/Footer";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-4">
          <h1 className="text-xl text-[#25282e] font-bold">S.Haleemah</h1>
          <div className="hidden md:flex gap-10 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative group transition text-xl ${
                    isActive ? "text-[#0f1420] font-semibold" : "text-gray-500"
                  }`
                }
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 h-0.5 bg-black w-0 group-hover:w-full transition-all"></span>
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6 text-xl">
            <NavLink to="https://github.com/dashboard">
              <FaGithub className="cursor-pointer hover:scale-110 transition" />
            </NavLink>
            <NavLink to="https://linkedin.com/in/shotonwa-haleemah-2918a731a">
              <FaLinkedin className="cursor-pointer hover:scale-110 transition" />
            </NavLink>
            <NavLink to="https://x.com/the_dev_sis?s=21">
              <FaTwitter className="cursor-pointer hover:scale-110 transition" />
            </NavLink>
          </div>

          <div
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <FaBars />
          </div>
        </div>
      </nav>
      <div
        className={`fixed inset-0 z-50 backdrop-blur-lg bg-white/90 flex flex-col items-center justify-center gap-8 text-2xl transition-transform duration-500 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div
          className="absolute top-6 right-6 text-3xl cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes />
        </div>
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `relative group transition text-2xl ${
                isActive ? "text-[#0f1420] font-semibold" : "text-gray-500"
              }`
            }
          >
            {link.name}
            <span className="absolute left-0 -bottom-1 h-0.5 bg-black w-0 group-hover:w-full transition-all"></span>
          </NavLink>
        ))}
        <Footer />
      </div>
    </>
  );
}

export default Navbar;
