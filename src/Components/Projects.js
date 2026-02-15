import React from "react";
import { motion } from "framer-motion";
import blog from "../Assests/blog.png";
import weather from "../Assests/weather.png"
import ecom from "../Assests/ecom.jpg"

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
      live:""
    },
    {
      title: "Ecommerce App",
      desc: "Shopping app with cart functionality and payment integration.",
      tech: ["React", "Node"],
      image: ecom,
      live: "https://kishore-goutham.github.io/Nostra/"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          My Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((p, i) => (

            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >

              <img src={p.image} alt="" className="h-48 w-full object-cover" />

              <div className="p-6">

                <h3 className="text-xl font-bold mb-2">
                  {p.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {p.desc}
                </p>

                <div className="flex gap-2 mb-4 flex-wrap">
                  {p.tech.map((t, i) => (
                    <span key={i} className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href={p.live} className="text-purple-600 font-semibold">
                    Live
                  </a>
                  <a href=" https://github.com/Kishore-Goutham" className="text-pink-600 font-semibold">
                    Github
                  </a>
                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;
