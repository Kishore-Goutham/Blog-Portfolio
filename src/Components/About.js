import React from "react";
import { motion } from "framer-motion";
import { Code2, Sparkles, Rocket, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { dataContext } from "../Context/Datacontext";

export default function AboutCreative() {
  
   let {isloggedin} = useContext(dataContext) 
  let navigate = useNavigate();


   function handleBlog(){
    if(isloggedin){
      navigate("/blogs")
    }else{
      alert("Please login to view Blogs :)")
    }
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floating = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 3, -3, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const skills = [
    "ReactJS",
    "NodeJS",
    "MongoDB",
    "ExpressJS",
    "TailwindCSS",
    "JavaScript",
    "REST APIs",
    "Firebase",
    "Git",
    "Framer Motion",
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white text-gray-800 overflow-hidden px-6 md:px-16 py-20" id="about">

      {/* background soft blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-20 w-72 h-72 bg-purple-300/40 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-pink-300/40 rounded-full blur-3xl"
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10"
      >
        {/* LEFT SECTION */}
        <motion.div variants={item} className="relative">
          <motion.div
            variants={floating}
            animate="animate"
            className="absolute -top-6 -left-6 w-24 h-24 bg-purple-200 rounded-2xl blur-xl"
          />

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative bg-white/70 backdrop-blur-xl border border-purple-100 rounded-3xl p-8 shadow-xl"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 text-white"
            >
              <User />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"
            >
              About Me
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-700 leading-relaxed text-lg"
            >
              I am a passionate full stack developer who enjoys building modern,
              scalable, and user-friendly web applications. My expertise includes
              ReactJS, NodeJS, and MongoDB, and I love creating clean UI with
              efficient backend systems.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-gray-600 mt-4"
            >
              I focus on performance, security, and maintainability. I also enjoy
              learning new technologies and sharing knowledge through technical
              blogs. My goal is to build impactful digital products that solve
              real-world problems.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* RIGHT CARDS */}
        <motion.div variants={item} className="space-y-6">
          {[
            {
              icon: <Code2 />,
              title: "Clean & Scalable Code",
              desc: "Building maintainable architectures and reusable components.",
            },
            {
              icon: <Rocket />,
              title: "High Performance Apps",
              desc: "Optimized backend and smooth frontend experiences.",
            },
            {
              icon: <Sparkles />,
              title: "Creative UI Animations",
              desc: "Using Framer Motion to build engaging interfaces.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 80, rotateY: 40 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="group bg-white border border-purple-100 rounded-2xl p-6 shadow-lg cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4 text-purple-600"
              >
                {card.icon}
              </motion.div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition">
                {card.title}
              </h3>

              <p className="text-gray-600 text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* SKILLS SECTION */}
      <div className="max-w-6xl mx-auto mt-24 relative z-10">
        <h3 className="text-3xl font-bold mb-8 text-center">
          Skills & Technologies
        </h3>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="px-5 py-2 bg-white shadow-md border border-purple-100 rounded-full text-sm font-medium"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>

      {/* BLOG SECTION */}
      <div className="max-w-4xl mx-auto mt-24 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl p-10 text-white shadow-xl"
        >
          <h3 className="text-3xl font-bold mb-4">
            I Love Writing Tech Blogs ✍️
          </h3>

          <p className="opacity-90 max-w-2xl mx-auto">
            I write blogs about React performance, backend architecture,
            authentication systems, and real-world scalable applications.
            I enjoy simplifying complex topics for developers.
          </p>

          <button
            onClick={handleBlog}
            className="mt-6 bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Read My Blogs →
          </button>
        </motion.div>
      </div>
    </section>
  );
}



