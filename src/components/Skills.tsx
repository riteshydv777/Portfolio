import React, { useEffect, useRef } from 'react';
import { Code, Database, Search, Settings } from 'lucide-react';

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-bar');
            skillBars.forEach((bar, index) => {
              setTimeout(() => {
                bar.classList.add('animate-skill-bar-fill');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'HTML', level: 65, color: 'bg-orange-500' },
        { name: 'CSS', level: 60, color: 'bg-blue-500' },
        { name: 'JavaScript', level: 62, color: 'bg-yellow-500' },
      ]
    },
    {
      title: 'Backend',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Java', level: 90, color: 'bg-red-600' },
        { name: 'Python', level: 70, color: 'bg-blue-600' },
        { name: 'MongoDB', level: 65, color: 'bg-green-600' },
       ]
    },
    {
      title: 'SEO & Marketing',
      icon: Search,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Keyword Research', level: 85, color: 'bg-purple-600' },
        { name: 'On-Page SEO', level: 80, color: 'bg-purple-500' },
        { name: 'Off-Page SEO', level: 75, color: 'bg-purple-700' },
        { name: 'Link Building', level: 78, color: 'bg-indigo-600' },
      ]
    },
    {
      title: 'Tools & Others',
      icon: Settings,
      color: 'from-amber-500 to-orange-500',
      skills: [
        { name: 'Git', level: 95, color: 'bg-red-500' },
        { name: 'Docker', level: 80, color: 'bg-blue-600' },
        { name: 'AWS', level: 75, color: 'bg-orange-500' },
        ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300 overflow-hidden perspective-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={skillsRef}>
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300 animate-hero-text-glow">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Floating 3D particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-60 animate-hero-particle-float"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60 animate-hero-particle-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-60 animate-hero-particle-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full opacity-60 animate-hero-particle-float" style={{ animationDelay: '6s' }}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div 
                key={categoryIndex}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-2xl dark:hover:shadow-gray-900/50 transition-all duration-500 animate-skill-card-float preserve-3d border border-gray-100 dark:border-gray-600"
                style={{ 
                  animationDelay: `${categoryIndex * 0.5}s`,
                  transform: 'translateZ(0)'
                }}
              >
                {/* Category Header */}
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-full shadow-lg mb-4 animate-skill-icon-spin`}>
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300 animate-skill-title-wave">
                    {category.title}
                  </h3>
                </div>
                
                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* 3D Skill Bar Container */}
                      <div className="relative w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 overflow-hidden shadow-inner">
                        {/* Animated skill bar */}
                        <div 
                          className={`skill-bar h-3 rounded-full ${skill.color} relative overflow-hidden animate-skill-bar-glow shadow-lg`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`
                          }}
                        >
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                          
                          {/* 3D highlight */}
                          <div className="absolute top-0 left-0 right-0 h-1 bg-white/40 rounded-full"></div>
                        </div>
                        
                        {/* Skill bar glow effect */}
                        <div 
                          className={`absolute top-0 left-0 h-3 rounded-full ${skill.color} opacity-50 blur-sm animate-skill-bar-fill`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`
                          }}
                        ></div>
                      </div>

                      {/* Skill level indicator */}
                      <div className="flex justify-end mt-1">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                i < Math.floor(skill.level / 20)
                                  ? `${skill.color.replace('bg-', 'bg-')} animate-pulse`
                                  : 'bg-gray-300 dark:bg-gray-600'
                              }`}
                              style={{ animationDelay: `${i * 0.1}s` }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 3D Card Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl pointer-events-none"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom decorative elements */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 px-6 py-3 bg-gradient-to-r from-indigo-500/10 to-emerald-500/10 rounded-full border border-indigo-200 dark:border-indigo-700 animate-hero-3d-float">
            <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Always learning and growing</span>
            <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;