import { FiBriefcase, FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: 'Collaborative Whiteboard',
    description:
      'Real-time collaborative whiteboard supporting 50+ concurrent users with sub-100ms synchronization latency using WebSockets and event-driven state updates. Built as a monorepo with TurboRepo — reduced build times by 30%.',
    tags: ['TurboRepo', 'TypeScript', 'Node.js', 'Express.js', 'WebSockets', 'Next.js', 'Tailwind CSS'],
    gradient: 'from-cyan-500 to-blue-600',
    github: 'https://github.com/ShivanshTiwari01',
    live: null,
  },
  {
    title: 'Task Management Dashboard',
    description:
      'Full-stack task management with 20+ REST APIs, secure authentication, and role-based task workflows. Optimized PostgreSQL queries and state persistence, improving task retrieval by 35% and reducing redundant API calls by 25%.',
    tags: ['React', 'TypeScript', 'Redux Toolkit', 'Node.js', 'Express', 'Prisma', 'PostgreSQL'],
    gradient: 'from-violet-500 to-purple-600',
    github: 'https://github.com/ShivanshTiwari01',
    live: null,
  },
  {
    title: 'Polling System with Leaderboard',
    description:
      'Event-driven polling backend capable of processing 5,000+ votes/min using Kafka and PostgreSQL. Live leaderboard updates with Dockerized deployment — update latency under 150ms.',
    tags: ['Node.js', 'Kafka', 'WebSockets', 'PostgreSQL', 'Docker'],
    gradient: 'from-emerald-500 to-teal-600',
    github: 'https://github.com/ShivanshTiwari01',
    live: null,
  },
];

const ProjectsSection = () => (
  <section id='projects' className='py-20 bg-[var(--background)]'>
    <div className='max-w-5xl mx-auto px-4'>
      <h2 className='text-4xl font-bold mb-4 text-center text-[var(--foreground)]'>
        <FiBriefcase
          className='inline-block mr-3 mb-1 text-[var(--primary)]'
          size={36}
        />
        Featured Projects
      </h2>
      <p className='text-center text-[var(--gray-700)] mb-12'>Real projects. Real impact.</p>

      <div className='grid md:grid-cols-3 gap-8'>
        {projects.map((project) => (
          <div
            key={project.title}
            className='group bg-[var(--gray-50)] rounded-2xl overflow-hidden shadow-lg border border-[var(--gray-200)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col'
          >
            {/* Banner */}
            <div className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
              <FiBriefcase size={54} className='text-white opacity-70 group-hover:scale-110 transition-transform duration-300' />
            </div>

            <div className='p-6 flex flex-col flex-1'>
              <h3 className='text-xl font-bold mb-3 text-[var(--foreground)]'>{project.title}</h3>
              <p className='text-[var(--gray-700)] text-sm leading-relaxed mb-4 flex-1'>{project.description}</p>

              {/* Tags */}
              <div className='flex flex-wrap gap-1.5 mb-5'>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className='text-xs px-2 py-1 rounded-md bg-[var(--gray-100)] text-[var(--foreground)] border border-[var(--gray-200)] font-medium'
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className='flex items-center gap-4 mt-auto'>
                <a
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-1.5 text-sm text-[var(--primary)] hover:text-[var(--primary-dark)] font-semibold group/link'
                >
                  <FiGithub size={16} />
                  GitHub
                  <FiExternalLink className='w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform duration-200' />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className='text-center mt-12 text-lg text-[var(--gray-700)]'>
        More projects on my{' '}
        <a
          href='https://github.com/ShivanshTiwari01'
          target='_blank'
          rel='noopener noreferrer'
          className='text-[var(--primary)] hover:underline font-semibold'
        >
          GitHub
        </a>
        !
      </p>
    </div>
  </section>
);

export default ProjectsSection;
