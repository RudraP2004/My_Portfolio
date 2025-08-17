import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react"; // modern icons

const qualifications = [
  {
    title: "Graduation",
    institute:
      "Centurion University of Technology and Management, Bhubaneswar",
    score: "CGPA: 9.25",
    year: "2022 - 2026",
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "12th Grade",
    institute:
      "Kendrapara Higher Secondary School, Kendrapara, CHSE Odisha",
    score: "Percentage: 77%",
    year: "2020 - 2022",
    color: "from-green-400 to-green-600",
  },
  {
    title: "10th Grade",
    institute: "Suderson Nodal High School, Kendrapra, BSE Odisha",
    score: "Percentage: 77%",
    year: "2019 - 2020",
    color: "from-purple-400 to-purple-600",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* About Text + Profile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg leading-relaxed"
          >
            <p>
              Hi, I'm <span className="font-bold text-blue-500">Rudra</span>, a
              Passionate <span className="font-semibold">Web Developer</span> &
              Tech Enthusiast 🚀. I specialize in{" "}
              <span className="font-semibold">modern web technologies</span>,
              cloud computing ☁️, and AI 🤖.
            </p>
            <p>
              I love transforming ideas into{" "}
              <span className="font-semibold text-purple-500">
                scalable, impactful solutions
              </span>{" "}
              that push the boundaries of innovation.
            </p>
            <p>
              Outside of coding, you’ll find me learning new technologies,
              contributing to{" "}
              <span className="font-semibold text-blue-400">open-source</span>{" "}
              projects, and writing{" "}
              <span className="font-semibold text-pink-500">
                technical articles
              </span>{" "}
              to share knowledge.
            </p>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <motion.img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Developer"
              className="w-72 h-72 object-cover rounded-2xl shadow-2xl border-4 border-white dark:border-gray-800"
              whileHover={{ scale: 1.05 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Education Timeline
          </h3>

          <div className="relative border-l-4 border-blue-500 dark:border-blue-400 ml-4">
            {qualifications.map((q, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="mb-10 ml-6"
              >
                <span className="absolute -left-4 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg">
                  <GraduationCap size={18} />
                </span>

                <div
                  className={`p-6 bg-gradient-to-r ${q.color} rounded-xl shadow-lg`}
                >
                  <h4 className="text-xl font-bold">{q.title}</h4>
                  <p className="text-sm opacity-90">{q.institute}</p>
                  <p className="font-semibold mt-2">{q.score}</p>
                  <p className="text-xs opacity-80 mt-1">{q.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
