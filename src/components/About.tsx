import React from 'react';
import { motion } from 'framer-motion';

const qualifications = [
  {
    title: 'Graduation',
    institute: 'Centurion University of Technology and Management, Bhubaneswar',
    score: 'CGPA: 9.25',
    color: 'bg-blue-100 dark:bg-blue-900',
  },
  {
    title: '12th Grade',
    institute: 'Kendrapara Higher Secondary School, Kendrapara, CHSE Odisha',
    score: 'Percentage: 77%',
    color: 'bg-green-100 dark:bg-green-900',
  },
  {
    title: '10th Grade',
    institute: 'Suderson Nodal High School, Kendrapra,    BSE Odisha',
    score: 'Percentage: 77%',
    color: 'bg-purple-100 dark:bg-purple-900',
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
        </motion.div>

        {/* About Text and Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-700 dark:text-gray-300"
          >
            <p>
              Hello... I'm <strong>Rudra</strong>, a Passionate Web Developer & Tech Enthusiast with expertise in modern web tech, cloud computing ☁️, and AI 🤖.
              I thrive on transforming ideas into scalable, impactful solutions that push the boundaries of innovation. 🚀
            </p>
            <p>
              My journey in tech has led me to work on various exciting projects, from developing next-gen hosting platforms to creating AI-powered applications. I'm particularly interested in building scalable solutions that solve real-world problems.
            </p>
            <p>
              When I'm not coding, I'm either learning new technologies, contributing to open-source projects, or writing technical articles to share my knowledge with the community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-w-4 aspect-h-3">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Developer"
                className="rounded-lg shadow-xl object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Education Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">Educational Qualifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {qualifications.map((q, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={`rounded-xl p-6 shadow-lg cursor-pointer transform transition-all duration-300 ${q.color} text-gray-900 dark:text-gray-100`}
              >
                <h4 className="text-xl font-bold mb-2">{q.title}</h4>
                <p className="text-sm mb-1">{q.institute}</p>
                <p className="font-semibold">{q.score}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
