import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaShareAlt,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { FiCopy, FiCheck } from "react-icons/fi";

function Footer() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const portfolioLink = window.location.href;

  const handleCopy = () => {
    navigator.clipboard.writeText(portfolioLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <section className="mt-5 py-4 text-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center static bottom-0 gap-6 justify-center"
        >
          <NavLink to="https://github.com/dashboard">
            <FaGithub className="cursor-pointer hover:scale-110 transition" />
          </NavLink>
          <NavLink to="https://linkedin.com/in/shotonwa-haleemah-2918a731a">
            <FaLinkedin className="cursor-pointer hover:scale-110 transition" />
          </NavLink>
          <NavLink to="https://x.com/the_dev_sis?s=21">
            <FaTwitter className="cursor-pointer hover:scale-110 transition" />
          </NavLink>
          <button onClick={() => setOpen(true)}>
            <FaShareAlt />
          </button>

          <div>
            <p>&copy; Copyright Haleemah 2026</p>
          </div>

          {open && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
              <div className="bg-[#111827] p-6 rounded-2xl w-[90%] max-w-md text-center">
                <h3 className="text-xl text-white font-semibold mb-4">
                  Share Portfolio
                </h3>
                <div className="relative mb-4">
                  <input
                    type="text"
                    value={portfolioLink}
                    readOnly
                    className="w-full p-3 pr-12 rounded-lg bg-white text-black border border-gray-600"
                  />

                  <button
                    onClick={handleCopy}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
                  >
                    {copied ? <FiCheck /> : <FiCopy />}
                  </button>
                </div>

                {copied && (
                  <p className="text-green-400 text-sm mt-2">Link copied!</p>
                )}

                <div className="flex justify-center rounded-full text-white gap-6 text-2xl">
                  <a
                    href={`https://wa.me/?text=${portfolioLink}`}
                    target="_blank"
                  >
                    <FaWhatsapp />
                  </a>
                  <a
                    href={`https://wa.me/?text=${portfolioLink}`}
                    target="_blank"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${portfolioLink}`}
                    target="_blank"
                  >
                    <FaLinkedin />
                  </a>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="mt-6 text-gray-400 text-lg"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </section>
    </>
  );
}

export default Footer;
