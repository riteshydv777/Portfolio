import React from 'react';
import { User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            Passionate about creating innovative solutions and bringing ideas to life through code
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="prose prose-lg text-gray-700 dark:text-gray-300 transition-colors duration-300">
              <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Hi, I'm Ritesh Kumar — a passionate Java Full-Stack Developer with expertise in                       
                building robust web applications using Spring Boot, RESTful APIs, and modern frontend                 
                technologies like HTML, CSS, JavaScript, and Thymeleaf. I enjoy developing scalable,                  
                secure, and user-friendly systems from end to end.
              </p>
              
              <p className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                In addition to development, I've also worked with the SEO team — performing keyword                   
                research, building backlinks, and optimizing website visibility through both on-page                  
                and off-page strategies.
              </p>

              <p className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                I'm currently seeking full-time opportunities where I can grow as a full-stack                        
                developer, contribute to impactful products, and work with inspiring teams.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              {['Problem Solving', 'Team Collaboration', 'Continuous Learning', 'Attention to Detail'].map((trait, index) => (
                <span 
                  key={trait}
                  className="px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium transition-colors duration-300 hover:scale-105 transform animate-bounce-in"
                  style={{ animationDelay: `${1 + index * 0.1}s` }}
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              {/* Animated background elements */}
              <div className="absolute -inset-8 bg-gradient-to-r from-indigo-500/20 via-emerald-500/20 to-amber-500/20 rounded-full blur-2xl animate-pulse opacity-60"></div>
              <div className="absolute -inset-6 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-xl animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/40 to-cyan-500/40 rounded-full blur-lg animate-pulse opacity-30" style={{ animationDelay: '2s' }}></div>
              
              {/* Floating particles around image */}
              <div className="absolute -top-4 -left-4 w-3 h-3 bg-indigo-400/60 rounded-full animate-float"></div>
              <div className="absolute -top-8 right-8 w-2 h-2 bg-emerald-400/60 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-6 -left-6 w-4 h-4 bg-amber-400/60 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
              <div className="absolute -bottom-4 -right-4 w-2 h-2 bg-purple-400/60 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
              <div className="absolute top-1/2 -right-8 w-3 h-3 bg-pink-400/60 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
              
              {/* Main image container */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl transform hover:scale-105 transition-all duration-500 animate-float animate-3d-rotate">
                {/* Your Custom Profile Image */}
                <img 
                  src="/my-profile-photo.jpg" 
                  alt="Ritesh Kumar - Java Full-Stack Developer"
                  className="w-full h-full object-cover animate-pulse-gentle"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                
                {/* Fallback placeholder (hidden by default) */}
                <div className="hidden w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-500 to-emerald-500 animate-gradient-shift">
                  <User size={120} className="text-white opacity-80 animate-pulse-gentle" />
                </div>
                
                {/* Animated overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent animate-shimmer"></div>
                <div className="absolute inset-0 border-4 border-transparent bg-gradient-to-r from-indigo-500 via-emerald-500 to-amber-500 rounded-full animate-border-spin" style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'xor' }}></div>
              </div>

              {/* Floating skill badges */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg animate-bounce-subtle border border-indigo-200 dark:border-indigo-700">
                <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">Java Expert</span>
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-cyan-500 px-4 py-2 rounded-full shadow-lg animate-bounce-subtle text-white" style={{ animationDelay: '1s' }}>
                <span className="text-sm font-medium">Full-Stack Dev</span>
              </div>
              <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-white dark:bg-gray-800 px-3 py-2 rounded-full shadow-lg animate-bounce-subtle border border-amber-200 dark:border-amber-700" style={{ animationDelay: '2s' }}>
                <span className="text-xs font-medium text-amber-600 dark:text-amber-400">Spring Boot</span>
              </div>
              <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-white dark:bg-gray-800 px-3 py-2 rounded-full shadow-lg animate-bounce-subtle border border-purple-200 dark:border-purple-700" style={{ animationDelay: '0.5s' }}>
                <span className="text-xs font-medium text-purple-600 dark:text-purple-400">SEO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;