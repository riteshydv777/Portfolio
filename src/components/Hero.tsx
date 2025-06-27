import React, { useState } from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail, X, User } from 'lucide-react';

const Hero = () => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300 perspective-1000">
      {/* Enhanced 3D Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      {/* 3D Animated background elements */}
      <div className="absolute inset-0 overflow-hidden preserve-3d">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-emerald-400/20 dark:from-indigo-600/30 dark:to-emerald-600/30 rounded-full blur-3xl animate-hero-3d-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-amber-400/20 to-indigo-400/20 dark:from-amber-600/30 dark:to-indigo-600/30 rounded-full blur-3xl animate-hero-3d-float" style={{ animationDelay: '2s' }}></div>
        
        {/* 3D Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full opacity-60 animate-hero-particle-float shadow-lg"></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-60 animate-hero-particle-float shadow-lg" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full opacity-60 animate-hero-particle-float shadow-lg" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-5 h-5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60 animate-hero-particle-float shadow-lg" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-3/4 left-1/2 w-2 h-2 bg-gradient-to-r from-rose-400 to-red-400 rounded-full opacity-60 animate-hero-particle-float shadow-lg" style={{ animationDelay: '4s' }}></div>
        
        {/* 3D Geometric shapes */}
        <div className="absolute top-1/6 right-1/6 w-12 h-12 border-2 border-indigo-400/30 rotate-45 animate-hero-3d-orbit"></div>
        <div className="absolute bottom-1/6 left-1/6 w-8 h-8 border-2 border-emerald-400/30 animate-hero-3d-orbit" style={{ animationDelay: '5s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Enhanced Text content */}
          <div className="text-center lg:text-left animate-slide-in-left preserve-3d">
            <div className="mb-6">
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-100 to-emerald-100 dark:from-indigo-900/30 dark:to-emerald-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium mb-4 animate-hero-3d-float shadow-lg border border-indigo-200 dark:border-indigo-700">
                👋 Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300 animate-fade-in-up animate-hero-text-glow preserve-3d" style={{ animationDelay: '0.2s' }}>
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-emerald-600 to-amber-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                RITESH KUMAR
              </span>
            </h1>
            
            <div className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed transition-colors duration-300 animate-fade-in-up preserve-3d" style={{ animationDelay: '0.4s' }}>
              <span className="font-semibold text-indigo-600 dark:text-indigo-400 animate-type">Java Full-Stack Developer</span>
              <br />
              <span className="text-lg animate-hero-text-glow">Building innovative web solutions</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-4 mb-8 animate-fade-in-up preserve-3d" style={{ animationDelay: '0.6s' }}>
              <button 
                onClick={scrollToContact}
                className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate-hero-button-pulse preserve-3d"
              >
                <div className="flex items-center space-x-2">
                  <Mail size={20} />
                  <span>Hire Me</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-emerald-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </button>
              
              <button className="group px-8 py-4 bg-white dark:bg-gray-800 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 font-semibold rounded-lg hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-2xl animate-hero-button-pulse preserve-3d" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center space-x-2">
                  <Download size={20} />
                  <span>Download Resume</span>
                </div>
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-6 animate-fade-in-up preserve-3d" style={{ animationDelay: '0.8s' }}>
              <a
                href="https://github.com/riteshydv777"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group animate-hero-3d-float border border-gray-200 dark:border-gray-700"
              >
                <Github size={24} className="text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300" />
              </a>
              <a 
                href="https://www.linkedin.com/in/ritesh-kumar-0222a42a7/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group animate-hero-3d-float border border-gray-200 dark:border-gray-700"
                style={{ animationDelay: '0.5s' }}
              >
                <Linkedin size={24} className="text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300" />
              </a>
              <a 
                href="mailto:mrritesh2508@gmail.com" 
                className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group animate-hero-3d-float border border-gray-200 dark:border-gray-700"
                style={{ animationDelay: '1s' }}
              >
                <Mail size={24} className="text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Right side - Enhanced 3D Profile image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative preserve-3d">
              {/* Enhanced 3D decorative elements */}
              <div className="absolute -inset-8 bg-gradient-to-r from-indigo-500/20 via-emerald-500/20 to-amber-500/20 rounded-full blur-3xl animate-hero-3d-float opacity-60"></div>
              <div className="absolute -inset-6 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-2xl animate-hero-3d-float opacity-40" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/40 to-cyan-500/40 rounded-full blur-xl animate-hero-3d-float opacity-30" style={{ animationDelay: '2s' }}></div>
              
              {/* 3D Orbiting elements */}
              <div className="absolute -inset-12 animate-hero-3d-orbit">
                <div className="absolute top-0 left-1/2 w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-lg"></div>
              </div>
              <div className="absolute -inset-16 animate-hero-3d-orbit" style={{ animationDelay: '5s', animationDirection: 'reverse' }}>
                <div className="absolute bottom-0 right-1/2 w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full shadow-lg"></div>
              </div>
              
              {/* Enhanced floating particles around image */}
              <div className="absolute -top-6 -left-6 w-4 h-4 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-60 animate-hero-particle-float shadow-lg"></div>
              <div className="absolute -top-8 right-8 w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-60 animate-hero-particle-float shadow-lg" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-6 -left-8 w-5 h-5 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full opacity-60 animate-hero-particle-float shadow-lg" style={{ animationDelay: '2s' }}></div>
              <div className="absolute -bottom-4 -right-6 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60 animate-hero-particle-float shadow-lg" style={{ animationDelay: '3s' }}></div>
              <div className="absolute top-1/2 -right-10 w-4 h-4 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full opacity-60 animate-hero-particle-float shadow-lg" style={{ animationDelay: '0.5s' }}></div>
              
              {/* Enhanced main image container with 3D effects */}
              <div 
                className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl cursor-pointer transform hover:scale-110 transition-all duration-500 animate-hero-3d-float preserve-3d bg-gradient-to-br from-indigo-100 to-emerald-100 dark:from-gray-700 dark:to-gray-600"
                onClick={() => setIsImageModalOpen(true)}
              >
                {/* Placeholder for profile image with enhanced 3D effects */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-500 to-emerald-500 animate-gradient-shift relative overflow-hidden">
                  
                   <img 
                      src="/profile.jpg" 
                      alt="Ritesh Kumar - Java Full-Stack Developer"
                      className="w-full h-full object-cover animate-pulse-gentle relative z-10"
                      onError={(e) => {
                        // Fallback to User icon if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />

                  
                  {/* 3D lighting effects */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-black/10"></div>
                </div>
                
                {/* Enhanced hover overlay with 3D effect */}
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center backdrop-blur-sm">
                  <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 text-white font-medium bg-black/50 px-4 py-2 rounded-lg">
                    Click to view
                  </div>
                </div>

                {/* 3D shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
              </div>

              {/* Enhanced floating badges with 3D effects */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-xl animate-hero-3d-float border border-indigo-200 dark:border-indigo-700 backdrop-blur-sm">
                <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Available</span>
              </div>
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-emerald-500 px-4 py-2 rounded-full shadow-xl animate-hero-3d-float text-white" style={{ animationDelay: '1s' }}>
                <span className="text-sm font-medium">Spring Boot</span>
              </div>
              <div className="absolute top-1/2 -left-16 transform -translate-y-1/2 bg-white dark:bg-gray-800 px-3 py-2 rounded-full shadow-xl animate-hero-3d-float border border-amber-200 dark:border-amber-700 backdrop-blur-sm" style={{ animationDelay: '2s' }}>
                <span className="text-xs font-medium text-amber-600 dark:text-amber-400">Java Expert</span>
              </div>
              <div className="absolute top-1/2 -right-16 transform -translate-y-1/2 bg-white dark:bg-gray-800 px-3 py-2 rounded-full shadow-xl animate-hero-3d-float border border-purple-200 dark:border-purple-700 backdrop-blur-sm" style={{ animationDelay: '0.5s' }}>
                <span className="text-xs font-medium text-purple-600 dark:text-purple-400">Full-Stack</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator with 3D effect */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce p-2 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-lg backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
      >
        <ChevronDown size={32} className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300" />
      </button>

      {/* Enhanced Image Modal with 3D effects */}
      {isImageModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in" onClick={() => setIsImageModalOpen(false)}>
          <div className="relative max-w-2xl max-h-[90vh] animate-scale-in preserve-3d" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-10 animate-hero-3d-float"
            >
              <X size={20} className="text-gray-700 dark:text-gray-300" />
            </button>
            <div className="w-96 h-96 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-indigo-500 to-emerald-500 animate-gradient-shift relative">
              <div className="w-full h-full flex items-center justify-center">
                <User size={150} className="text-white opacity-80 animate-pulse-gentle" />
              </div>
              {/* 3D modal effects */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent"></div>
            </div>
            <div className="text-center mt-6 animate-fade-in-up">
              <h3 className="text-2xl font-semibold text-white mb-2 animate-hero-text-glow">Ritesh Kumar</h3>
              <p className="text-gray-300 text-lg">Java Full-Stack Developer</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;