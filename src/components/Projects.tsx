import React, { useState } from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import ProjectDetail from './ProjectDetail';

const Projects = () => {
  const [isProjectDetailOpen, setIsProjectDetailOpen] = useState(false);

  const projects = [
    {
      title: 'Online Assessment Platform',
      description: 'The Online Assessment System is a web-based platform designed to streamline the process of conducting examinations and evaluations. It supports two primary user roles: Candidates and Companies. Companies can register, log in, and create multiple-choice question (MCQ)-based tests for assessments. Candidates can register, log in, and participate in exams assigned to them.',
      image: 'https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg',
      tags: ['Springboot', 'HTML', 'CSS', 'JavaScript', 'SQL'],
      liveUrl: '#',
      githubUrl: 'https://github.com/riteshydv777',
      date: '2024',
      hasDetailPage: true
    },
    {
      title: 'Drawnsiness Detector',
      description: ' The Drowsiness Detection System is an AI-powered application that monitors a person eye movement in real-time using a webcam. Its main goal is to detect signs of drowsiness (especially closed eyes) and trigger an alert/alarm to prevent accidents',
      image: 'https://images.pexels.com/photos/1392621/pexels-photo-1392621.jpeg',
      tags: ['Python', 'OpenCV', 'CNN', 'SQLite', 'Tkinter'],
      liveUrl: '#',
      githubUrl: 'https://github.com/riteshydv777',
      date: '2024'
    },
    {
      title: 'Journal Blogs',
      description: 'Journal Blogs is a full-stack web application that allows users to write, publish, and manage personal blog entries. The platform offers a clean and intuitive interface for journaling thoughts, sharing experiences, and engaging with personal content in a structured format.',
      image: 'https://images.pexels.com/photos/1766604/pexels-photo-1766604.jpeg',
      tags: ['Spring Boot', 'Mongodb Atlas', 'HTML', 'CSS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/riteshydv777',
      date: '2023'
    },
    {
      title: 'University Management SAP',
      description: 'This project is a simulation of a University Student Academic Portal (SAP) designed to streamline student academic operations. It aims to provide features such as student registration, login, academic records management, performance tracking, and administrative access.',
      image: 'https://images.pexels.com/photos/356065/pexels-photo-356065.jpeg',
      tags: ['Next.js', 'TypeScript', 'D3.js', 'Prisma', 'Vercel'],
      liveUrl: '#',
      githubUrl: 'https://github.com/riteshydv777',
      date: '2023'
    },
    
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills. Features smooth animations, dark mode toggle, and optimized performance.',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg',
      tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite', 'Netlify'],
      liveUrl: '#',
      githubUrl: 'https://github.com/riteshydv777',
      date: '2023'
    }
  ];

  const handleProjectClick = (project: any) => {
    if (project.hasDetailPage) {
      setIsProjectDetailOpen(true);
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            A collection of projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg dark:hover:shadow-gray-900/50 transition-all duration-300 overflow-hidden group border border-gray-100 dark:border-gray-700 ${
                project.hasDetailPage ? 'cursor-pointer' : ''
              }`}
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300 flex items-center space-x-1 transition-colors duration-300">
                  <Calendar size={12} />
                  <span>{project.date}</span>
                </div>
                {project.hasDetailPage && (
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium text-gray-900 dark:text-gray-100">
                      Click for details
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3 transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    <a 
                      href={project.liveUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center space-x-1 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 text-sm font-medium transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-sm font-medium transition-colors duration-200"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/riteshydv777?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 font-medium rounded-lg hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition-all duration-300"
          >
            <Github size={20} className="mr-2" />
            View More on GitHub
          </a>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetail 
        isOpen={isProjectDetailOpen} 
        onClose={() => setIsProjectDetailOpen(false)} 
      />
    </section>
  );
};

export default Projects;