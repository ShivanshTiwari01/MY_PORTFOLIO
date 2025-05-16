import { FiBriefcase, FiStar, FiLayers, FiExternalLink } from 'react-icons/fi';

const ProjectsSection = () => (
  <section id='projects' className='py-20 bg-[var(--background)]'>
    <div className='max-w-5xl mx-auto px-4'>
      <h2 className='text-4xl font-bold mb-12 text-center text-[var(--foreground)]'>
        <FiBriefcase
          className='inline-block mr-3 mb-1 text-[var(--primary)]'
          size={36}
        />
        Featured Projects
      </h2>
      <div className='grid md:grid-cols-2 gap-8'>
        {/* Project Card 1 */}
        <div className='project-card bg-[var(--gray-50)] rounded-xl overflow-hidden shadow-lg border border-[var(--gray-200)] hover:shadow-xl transition-shadow duration-300'>
          <div className='h-56 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center'>
            <FiStar size={60} className='text-white opacity-80' />
          </div>
          <div className='p-6'>
            <h3 className='text-2xl font-bold mb-3 text-[var(--foreground)]'>
              AI Chatbot Platform
            </h3>
            <p className='text-[var(--gray-700)] mb-5 leading-relaxed'>
              A fullstack platform integrating OpenAI for smart customer
              support. Built with Next.js, Node.js, and Tailwind CSS.
            </p>
            <a
              href='#'
              className='inline-flex items-center text-[var(--primary)] hover:text-[var(--primary-dark)] font-semibold group'
            >
              View Project
              <FiExternalLink className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300' />
            </a>
          </div>
        </div>
        {/* Project Card 2 */}
        <div className='project-card bg-[var(--gray-50)] rounded-xl overflow-hidden shadow-lg border border-[var(--gray-200)] hover:shadow-xl transition-shadow duration-300'>
          <div className='h-56 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center'>
            <FiLayers size={60} className='text-white opacity-80' />
          </div>
          <div className='p-6'>
            <h3 className='text-2xl font-bold mb-3 text-[var(--foreground)]'>
              Realtime Collaboration App
            </h3>
            <p className='text-[var(--gray-700)] mb-5 leading-relaxed'>
              Collaborative document editing with live sync, built using React,
              Node.js, and WebSockets.
            </p>
            <a
              href='#'
              className='inline-flex items-center text-[var(--primary)] hover:text-[var(--primary-dark)] font-semibold group'
            >
              View Project
              <FiExternalLink className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300' />
            </a>
          </div>
        </div>
      </div>
      <p className='text-center mt-12 text-lg text-[var(--gray-700)]'>
        More projects coming soon... Or check out my{' '}
        <a
          href='https://github.com/your-github'
          target='_blank'
          rel='noopener noreferrer'
          className='text-[var(--primary)] hover:underline font-medium'
        >
          GitHub
        </a>
        !
      </p>
    </div>
  </section>
);

export default ProjectsSection;
