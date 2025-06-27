import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/riteshydv777', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ritesh-kumar-0222a42a7/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:mrritesh2508@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Logo/Name */}
          <div className="text-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
              RITESH KUMAR
            </h3>
            <p className="text-gray-400 dark:text-gray-500 mt-2 transition-colors duration-300">
              Full Stack Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-full flex items-center justify-center hover:bg-indigo-600 dark:hover:bg-indigo-700 transition-colors duration-300 group"
                  aria-label={social.label}
                >
                  <Icon size={18} className="text-gray-400 dark:text-gray-500 group-hover:text-white transition-colors duration-300" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 dark:text-gray-500 text-sm transition-colors duration-300">
            <p className="flex items-center justify-center space-x-1">
              <span>© {currentYear} Ritesh Kumar. Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>and lots of coffee</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;