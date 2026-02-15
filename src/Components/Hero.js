import React from "react";
import { motion } from "framer-motion";
import profile from "../Assests/blog.png";
import resume from "../Assests/resume.pdf"

function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-purple-600 font-semibold mb-2">
            FULL STACK DEVELOPER
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Kishore Goutham
            </span>
          </h1>

          <p className="text-gray-600 text-lg mb-8">
            I design and build modern full stack applications,
            write technical blogs, and craft clean scalable backend systems.
          </p>

          <div className="flex gap-4 flex-wrap">

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#projects"
              className="px-7 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl shadow-lg"
            >
              View Projects
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href={resume}
              download="resume"
              className="px-7 py-3 bg-white border border-purple-600 text-purple-600 rounded-xl shadow"
            >
              Download Resume
            </motion.a>

          </div>

        </motion.div>


        <motion.div
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .8 }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 blur-3xl opacity-30 rounded-full"></div>

            <img
              src={profile}
              className="relative w-80 h-80 object-cover rounded-full shadow-2xl border-4 border-white"
              alt=""
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;

