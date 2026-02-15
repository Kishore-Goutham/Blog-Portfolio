import React from "react";
import { motion } from "framer-motion";
import blog from "../Assests/blog.png";
import weather from "../Assests/weather.png";
import ecom from "../Assests/ecom.jpg";

function Projects() {

  const projects = [
    {
      title: "Weather Forecast App",
      desc: "A weather forecast app with search functionality.",
      image: weather,
      tech: ["React", "OpenWeather API", "Tailwind CSS"],
      live: "https://weather-app-nu-rosy-32.vercel.app/"
    },
    {
      title: "Portfolio Website",
      desc: "Modern animated responsive developer portfolio.",
      tech: ["React", "Tailwind"],
      image: blog,
      live: ""
    },
    {
      title: "Ecommerce App",
      desc: "Shopping app with cart functionality and payment integration.",
      tech: ["React", "Node"],
      image: ecom,
      live: "https://kishore-goutham.github.io/Nostra/"
    }
  ];

  // container animation
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25
      }
    }
  };

  // card animation
  const card = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-24 bg-gray-50 px-6">

      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          My Projects
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >

          {projects.map((p, i) => (

            <motion.div
              key={i}
              variants={card}
              whileHover={{
                y: -12,
                scale: 1.04,
                transition: { duration: 0.25 }
              }}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group"
            >

              {/* image zoom effect */}
              <div className="overflow-hidden">
                <motion.img
                  src={p.image}
                  alt=""
                  className="h-48 w-full object-cover"
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              <div className="p-6">

                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition">
                  {p.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {p.desc}
                </p>

                <div className="flex gap-2 mb-4 flex-wrap">
                  {p.tech.map((t, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={p.live}
                    className="text-purple-600 font-semibold"
                  >
                    Live
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/Kishore-Goutham"
                    className="text-pink-600 font-semibold"
                  >
                    Github
                  </motion.a>
                </div>

              </div>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
}

export default Projects;

