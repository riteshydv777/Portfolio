import React from 'react';
import { X, Github, ExternalLink, Calendar, Users, Shield, Database, Code, CheckCircle } from 'lucide-react';

interface ProjectDetailProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const features = [
    {
      icon: Users,
      title: 'Dual User Roles',
      description: 'Separate interfaces for Companies and Candidates with role-based access control'
    },
    {
      icon: Shield,
      title: 'Secure Authentication',
      description: 'JWT-based authentication system with session management and security features'
    },
    {
      icon: Database,
      title: 'Question Management',
      description: 'Companies can create, edit, and organize MCQ questions with multiple difficulty levels'
    },
    {
      icon: CheckCircle,
      title: 'Real-time Assessment',
      description: 'Live exam interface with timer, auto-submission, and instant result calculation'
    }
  ];

  const techStack = [
    { name: 'Spring Boot', description: 'Backend framework for REST API development' },
    { name: 'Spring Security', description: 'Authentication and authorization' },
    { name: 'MySQL', description: 'Relational database for data persistence' },
    { name: 'HTML/CSS', description: 'Frontend structure and styling' },
    { name: 'JavaScript', description: 'Client-side interactivity and AJAX calls' },
    { name: 'Thymeleaf', description: 'Server-side template engine' },
    { name: 'Maven', description: 'Project management and build automation' }
  ];

  const keyImplementations = [
    'RESTful API design with proper HTTP status codes',
    'Database schema design with normalized tables',
    'Session management and user authentication',
    'Form validation on both client and server side',
    'Responsive design for cross-device compatibility',
    'Timer functionality with auto-submission',
    'Result calculation and performance analytics'
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transition-colors duration-300">
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 flex items-center justify-between transition-colors duration-300">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">Online Assessment Platform</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-1 transition-colors duration-300">Full-Stack Web Application</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
          >
            <X size={24} className="text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Project Image */}
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Online Assessment Platform"
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center space-x-1 transition-colors duration-300">
              <Calendar size={14} />
              <span>2024</span>
            </div>
          </div>

          {/* Project Overview */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Project Overview</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                The Online Assessment System is a comprehensive web-based platform designed to revolutionize the way organizations conduct examinations and evaluations. Built with modern web technologies, this system provides a seamless experience for both companies conducting assessments and candidates taking exams.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4 transition-colors duration-300">
                The platform features a robust architecture that supports scalable assessment management, real-time exam monitoring, and detailed performance analytics. Companies can create customized MCQ-based tests, manage candidate pools, and analyze results through an intuitive dashboard interface.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors duration-300">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg transition-colors duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center transition-colors duration-300">
                        <Icon size={24} className="text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">{feature.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Technology Stack */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors duration-300">Technology Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {techStack.map((tech, index) => (
                <div key={index} className="border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:shadow-md dark:hover:shadow-gray-900/50 transition-all duration-200 bg-white dark:bg-gray-700">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">{tech.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Implementation Highlights */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors duration-300">Implementation Highlights</h2>
            <div className="bg-gradient-to-br from-indigo-50 to-emerald-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-lg transition-colors duration-300">
              <ul className="space-y-3">
                {keyImplementations.map((implementation, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">{implementation}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* System Architecture */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">System Architecture</h2>
            <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-6 transition-colors duration-300">
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300">
                  <strong>Backend Architecture:</strong> Built on Spring Boot framework following MVC pattern with clear separation of concerns. The application uses Spring Security for authentication and authorization, ensuring secure access to different user roles.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300">
                  <strong>Database Design:</strong> MySQL database with normalized schema design including tables for users, companies, exams, questions, and results. Proper indexing and foreign key relationships ensure data integrity and optimal query performance.
                </p>
                <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                  <strong>Frontend Integration:</strong> Server-side rendering with Thymeleaf templates, enhanced with JavaScript for dynamic interactions. Responsive design ensures compatibility across desktop and mobile devices.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200 dark:border-gray-600 transition-colors duration-300">
            <a
              href="https://github.com/riteshydv777"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-gray-900 dark:bg-gray-600 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-500 transition-colors duration-200"
            >
              <Github size={20} />
              <span>View Source Code</span>
            </a>
            <a
              href="https://github.com/riteshydv777/Online_Assessment_Platform"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 px-6 py-3 border border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition-colors duration-200"
            >
              <ExternalLink size={20} />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;