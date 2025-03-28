import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Github, Linkedin, Mail, Menu, Moon, Sun } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-gray-900 dark:text-white"
            >
              Rudra Prasad
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLinks />
              <div className="flex items-center space-x-4">
                <SocialLinks />
                <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 px-4 pt-2 pb-4"
          >
            <div className="flex flex-col space-y-4">
              <NavLinks mobile onClick={() => setMenuOpen(false)} />
              <div className="flex justify-center space-x-4 pt-4">
                <SocialLinks />
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Rudra Prasad Baral. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

const NavLinks = ({ mobile, onClick }: { mobile?: boolean; onClick?: () => void }) => {
  const links = [
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          smooth={true}
          duration={500}
          className={`cursor-pointer ${
            mobile
              ? 'block text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white py-2'
              : 'text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white'
          }`}
          onClick={onClick}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

const SocialLinks = () => (
  <>
    <a
      href="https://github.com/RudraP2004"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
    >
      <Github size={20} />
    </a>
    <a
      href="https://www.linkedin.com/in/rudra-prasad-baral-94a9b2290/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
    >
      <Linkedin size={20} />
    </a>
    <a
      href="mailto:prasadrudra279@gmail.com"
      className="text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
    >
      <Mail size={20} />
    </a>
  </>
);

const ThemeToggle = ({
  darkMode,
  toggleDarkMode,
}: {
  darkMode: boolean;
  toggleDarkMode: () => void;
}) => (
  <button
    onClick={toggleDarkMode}
    className="text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
  >
    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
  </button>
);

export default App;