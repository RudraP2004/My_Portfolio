import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-600 dark:text-gray-300"
          >
            <p>
            Hello... I'm Rudra a Passionate Web Developer & Tech Enthusiast with expertise in modern web tech, cloud computing ☁️, and AI 🤖, crafting scalable, innovative solutions.. I thrive on transforming ideas into scalable, impactful solutions that push the boundaries of innovation. 🚀 
            </p>
            <p>
              My journey in tech has led me to work on various exciting projects, from developing
              next-gen hosting platforms to creating AI-powered applications. I'm particularly
              interested in building scalable solutions that solve real-world problems.
            </p>
            <p>
              When I'm not coding, I'm either learning new technologies, contributing to open-source
              projects, or writing technical articles to share my knowledge with the community.
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
                alt="Developer working"
                className="rounded-lg shadow-xl object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;