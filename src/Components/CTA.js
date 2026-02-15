import React from "react";
import { motion } from "framer-motion";

function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center">

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >

        <h2 className="text-4xl font-bold mb-4">
          Let's build something amazing together
        </h2>

        <p className="mb-6">
          Open to freelance and full time opportunities
        </p>

        <button className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold">
          Contact Me
        </button>

      </motion.div>

    </section>
  );
}

export default CTA;
