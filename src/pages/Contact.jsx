import layo from "../assets/img2.jpg";
import img from "../assets/img1.jpg";
import { useState } from "react";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:haleemahshotonwa82@gmail.com
    ?subject=New message from ${name}
    &body=Name: ${name}%0AEmail: ${email}%0A%0A${message}`;

    window.location.href = mailtoLink;
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <>
      <section className="min-h-screen py-15 pt-15">
        <div className="relative h-80 md:h-100 px-6">
          <img
            src={layo}
            alt="profile2"
            className="w-full h-full object-cover object-[50%_50%]"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-5xl md:text-8xl font-bold text-white">
              Get In Touch
            </h1>
          </div>
        </div>
        <div className="flex items-stretch gap-10 flex-col md:flex-row px-8 w-full max-w-600 mx-auto">
          <div className="w-full md:w-1/2 md:mt-20 mt-0 rounded-xl">
            <img
              src={img}
              alt="image"
              className="w-full h-full px-8 py-10 object-cover"
            />
          </div>
          <div className="max-w-6xl md:mt-25 mt-0">
            <p className="text-2xl max-w-2xl px-10 py-8 mb-4">
              I'd love to hear from you. Whether you're interested in
              collaborating on a project, discussing design opportunities, or
              just exchanging ideas, feel free to reach out.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6 px-10">
              <div className="flex items-center gap-4">
                <label className="text-xl  mb-3">
                  First Name <sup>*</sup>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full p-2 rounded-xl border border-gray-400 outline-none"
                  />
                </label>
                <label className="text-xl mb-3">
                  Last Name <sup>*</sup>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full p-2 rounded-xl border border-gray-400 outline-none"
                  />
                </label>
              </div>
              <label className="text-xl mb-3">
                Email <sup>*</sup>
              </label>
              <input
                type="email"
                placeholder="@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-xl border border-gray-400 outline-none"
              />
              <label className="text-xl mb-3">
                Enter Your message <sup>*</sup>
              </label>
              <textarea
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-10 rounded-xl border border-gray-400 outline-none"
              />
              <button className="relative overflow-hidden border border-black w-full mt-5 px-6 py-3 rounded-full group">
                <span className="absolute inset-0 bg-black translate-x-0 group-hover:translate-x-full transition-transform duration-500 ease-in-out"></span>
                <span className="relative z-10 text-white group-hover:text-black md:text-xl text-sm transition">
                  Send Message
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
