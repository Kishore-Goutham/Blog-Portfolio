import React from "react";
import { motion } from "framer-motion";
import resume from "../Assests/resume.pdf"

function Resume() {
  return (
    <section className="py-24 bg-white text-center">

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >

        <h2 className="text-4xl font-bold mb-6">
          My Resume
        </h2>

        <a
          href={resume}
          download='resume'
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl shadow"
        >
          Download Resume
        </a>

      </motion.div>

    </section>
  );
}

export default Resume;
