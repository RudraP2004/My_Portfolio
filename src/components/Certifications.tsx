import React from "react";
import { motion } from "framer-motion";

const certifications = [
  {
    year: "2025",
    title: "Basic to Advanced Data Structures and Algorithms",
    issuer: "GeeksforGeeks",
    description:
      'Successfully completed the "Basic to Advanced Data Structures and Algorithms" course by GeeksforGeeks in collaboration with Centurion University.',
    tags: ["DSA", "Java"],
    link: "https://www.geeksforgeeks.org/certificate/9be6682b9f8813f3172a8eacf5db37d9?utm_source=socials&utm_medium=cc_link",
  },
  {
    year: "2024",
    title:
      "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
    issuer: "ORACLE",
    description:
      "Validated expertise in Generative AI solutions on OCI, including LLM integration and scalable workflows.",
    tags: ["Cloud", "Generative AI"],
    link: "http://catalog-education.oracle.com/ords/certview/sharebadge?id=D4F35DDD6A1DC3EE1147EDFD73C0E4742588849BC565787C8AD45C525F758908",
  },
  {
    year: "2024",
    title: "TCS ION Career Edge - Young Professional",
    issuer: "TCS",
    description:
      "Enhanced skills in communication, presentation, and workplace readiness.",
    tags: ["Soft Skills"],
    link: "https://learning.tcsionhub.in/courses/career-edge/",
  },
  {
    year: "2024",
    title: "AWS Academy Cloud Foundations",
    issuer: "AWS",
    description:
      "Learned AWS core services, cloud concepts, security, and architecture fundamentals.",
    tags: ["AWS", "Cloud"],
    link: "https://www.credly.com/badges/79b99eb2-55f4-42e6-8e19-be505949fb2d/linked_in?t=sbtwmq",
  },
  {
    year: "2024",
    title: "AWS Solution Architecture Job Simulation",
    issuer: "Forage (AWS)",
    description:
      "Worked on real-world AWS solution architecture tasks like system scalability and cloud solution design.",
    tags: ["AWS", "Solution Architecture"],
    link: "https://www.theforage.com/simulations/aws-apac/solutions-architecture-ts4o",
  },
];

const Certification: React.FC = () => {
  return (
    <section
      id="certifications"
      className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold">Certifications</h2>
        <div className="mt-2 w-28 h-1 mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 rounded"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Timeline vertical line */}
        <div className="absolute left-6 top-0 h-full border-l-4 border-blue-500 rounded"></div>

        {/* Timeline items */}
        <div className="space-y-16 pl-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-9 w-6 h-6 rounded-full bg-blue-600 border-4 border-gray-50 dark:border-gray-900"></div>

              {/* Certification Card */}
              <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8 md:p-10 w-full transition-colors duration-300 hover:shadow-blue-300/30 dark:hover:shadow-blue-900/40">
                <p className="text-green-600 dark:text-green-400 font-semibold text-lg">
                  {cert.year}
                </p>
                <h3 className="text-xl md:text-2xl font-bold mt-2">
                  {cert.title}
                </h3>
                <p className="text-md text-gray-600 dark:text-gray-400">
                  {cert.issuer}
                </p>
                {cert.description && (
                  <p className="mt-3 text-gray-700 dark:text-gray-300 text-md leading-relaxed">
                    {cert.description}
                  </p>
                )}

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-3">
                  {cert.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Certification Link */}
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 text-blue-500 hover:text-blue-600 font-semibold"
                  >
                    See Certification →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;
