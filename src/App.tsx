import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Github, Linkedin, Mail, Menu, Moon, Sun, Facebook, Twitter, Instagram } from 'lucide-react';

import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = React.useState(true);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle('dark', !darkMode); // global dark mode
  };

  const NavLinks: React.FC<{ mobile?: boolean; onClick?: () => void }> = ({ mobile, onClick }) => (
    <>
      {['about', 'projects', 'skills', 'contact'].map((section) => (
        <Link
          key={section}
          to={section}
          smooth={true}
          duration={500}
          className={`cursor-pointer capitalize ${mobile ? 'block py-2 text-lg' : ''}`}
          onClick={onClick}
        >
          {section}
        </Link>
      ))}
    </>
  );

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navbar */}
      <header className="fixed w-full bg-opacity-80 backdrop-blur-md shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          <div className="text-xl font-bold">Rudra_Prasad</div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            <NavLinks />
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <button onClick={toggleDarkMode}>
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              <Menu size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-gray-800 text-white px-4 py-4 space-y-2"
          >
            <NavLinks mobile onClick={() => setMenuOpen(false)} />
          </motion.div>
        )}
      </header>

      {/* Sections */}
      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />

        {/* Footer */}
        <footer className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} py-10`}>
          <div className="max-w-7xl mx-auto px-4">
            {/* Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              
              {/* About */}
              <div>
                <h3 className="font-semibold text-lg">Rudra Prasad Baral</h3>
                <p className="text-sm mt-2">
                  Passionate developer always open to discussing new projects and creative ideas.
                </p>
                <div className="flex justify-center md:justify-start space-x-4 mt-4">
                  <a href="#" className="hover:text-gray-300"><Facebook size={20} /></a>
                  <a href="#" className="hover:text-gray-300"><Twitter size={20} /></a>
                  <a href="#" className="hover:text-gray-300"><Instagram size={20} /></a>
                  <a href="#" className="hover:text-gray-300"><Linkedin size={20} /></a>
                </div>
              </div>

              {/* Company Links */}
              <div>
                <h3 className="font-semibold text-lg mb-3">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-gray-300">My Account</a></li>
                  <li><a href="#" className="hover:text-gray-300">Services</a></li>
                  <li><a href="#" className="hover:text-gray-300">Team</a></li>
                  <li><a href="#" className="hover:text-gray-300">Blog</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="font-semibold text-lg mb-3">Contact</h3>
                <p className="text-sm">Kendrapara, Bhubaneswar, Odisha</p>
                <p className="text-sm">+91 6370923986</p>
                <p className="text-sm">prasadrudra279@gmail.com</p>
                <p className="text-sm">https://rudra-prasad-self.vercel.app/</p>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 border-t border-white/30 pt-4 text-center text-sm">
              &copy; {new Date().getFullYear()} Rudra Prasad Baral. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
