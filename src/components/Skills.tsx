import React from "react";
import { motion } from "framer-motion";

// Skills Data
const skillsData = {
  Frontend: [
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Tailwind CSS", level: 85 },
    { name: "HTML/CSS", level: 95 },
  ],
  Backend: [
    { name: "Node.js", level: 88 },
    { name: "Express.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "Shell Scripting", level: 75 },
  ],
  "Cloud & DevOps": [
    { name: "AWS", level: 85 },
    { name: "Docker", level: 80 },
    { name: "CI/CD", level: 82 },
    { name: "Linux", level: 85 },
  ],
  "Tools & Others": [
    { name: "Git", level: 90 },
    { name: "VS Code", level: 92 },
    { name: "Postman", level: 85 },
    { name: "Figma", level: 80 },
  ],
  "Professional Skills": [
    { name: "Communication", level: 90 },
    { name: "Problem Solving", level: 88 },
    { name: "Teamwork", level: 85 },
    { name: "Adaptability", level: 87 },
  ],
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold">
            Skills <span className="text-blue-500">& Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 mx-auto mt-4"></div>
        </motion.div>

        {/* All Skill Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {Object.entries(skillsData).map(([category, skills], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3 className="text-2xl font-semibold mb-6">{category}</h3>
              {skills.map((skill, i) => (
                <div key={i} className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span>{skill.name}</span>
                    <span className="text-blue-500 font-semibold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
                    <motion.div
                      className="h-2 rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-teal-400"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: i * 0.05 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
