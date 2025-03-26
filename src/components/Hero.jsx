"use client";
import { motion } from "framer-motion";
import NavBar from "./NavBar";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const [currentSection, setCurrentSection] = useState("home");
  const handleNavClick = (sectionId) => {
    setCurrentSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      {/* <Head>
          <title>Nicolas | Full-Stack Developer</title>
          <meta name="description" content="Portfolio of Nicolas, a Full-Stack Developer specializing in modern web applications." />
          <link rel="icon" href="/favicon.ico" />
        </Head> */}
      <section className="h-screen flex items-center justify-center text-white p-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            Hi, I&apos;m <span className="text-teal-400">Jennifer</span>.
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6">
            I build modern, responsive, and interactive web applications.
          </p>
          <a
            href="#projects"
            className="inline-block bg-teal-400 text-gray-900 px-6 py-3 text-lg font-medium rounded-md shadow-md hover:bg-teal-500 transition"
          >
            View My Work
          </a>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mt-6">
            <a
              href="https://github.com/JenniferT9462"
              target="_blank"
              className="text-white hover:text-gray-200"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/jennifer-leigh-tarleton-11290350/"
              target="_blank"
              className="text-white hover:text-gray-200"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        </motion.div>
        
      </section>
    </>
  );
};
export default Hero;
