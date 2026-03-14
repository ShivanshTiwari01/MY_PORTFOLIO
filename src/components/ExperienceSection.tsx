import { FiClock, FiBriefcase } from 'react-icons/fi';

const experiences = [
  {
    company: 'Unjob.ai',
    role: 'Senior Software Developer',
    period: 'Jan 2026 – Present',
    color: 'from-cyan-500 to-blue-500',
    dot: 'bg-cyan-500',
    highlights: [
      'Building scalable distributed systems for core product development, ensuring high performance and reliability.',
      'Partnering with product and leadership to convert business requirements into technical strategy and solutions.',
      'Driving system architecture, design reviews, and engineering best practices to improve code quality.',
      'Mentoring developers and enforcing clean architecture standards to enhance scalability and productivity.',
    ],
  },
  {
    company: 'PollPe',
    role: 'Backend Developer',
    period: 'Dec 2024 – Dec 2025',
    color: 'from-purple-500 to-indigo-500',
    dot: 'bg-purple-500',
    highlights: [
      'Built scale backend with Node.js, Express, PostgreSQL; integrated Redis caching and Kafka processing, supporting 10,000+ concurrent users and reducing API latency by 60%.',
      'Developed community module with real-time WebSockets and Python AI microservices (95% moderation accuracy), increasing engagement by 35%.',
      'Created SSR/SSG-based admin dashboard (Next.js, React, Tailwind), delivering 50+ secure APIs with 99.9% uptime.',
      'Implemented targeted push notification system using OneSignal for real-time user interactions.',
    ],
  },
  {
    company: 'OpsTree Solutions',
    role: 'Developer Trainee',
    period: 'July 2024 – Sep 2024',
    color: 'from-emerald-500 to-teal-500',
    dot: 'bg-emerald-500',
    highlights: [
      'Automated deployments using Ansible and Python, reducing delivery time by 25%.',
      'Resolved 15+ critical issues in Python modules, improving system stability and cutting deployment time by 30%.',
    ],
  },
  {
    company: 'Coding Ninjas',
    role: 'Teaching Assistant',
    period: 'May 2024 – July 2024',
    color: 'from-orange-500 to-rose-500',
    dot: 'bg-orange-500',
    highlights: [
      'Mentored 100+ students in debugging, code optimization, and end-to-end full-stack development, covering best practices and SDLC methodologies.',
      'Received 3 testimonials in a single month for clear and effective technical instruction.',
    ],
  },
];

const ExperienceSection = () => (
  <section id='experience' className='py-20 bg-[var(--background)]'>
    <div className='max-w-5xl mx-auto px-4'>
      <h2 className='text-4xl font-bold mb-12 text-center text-[var(--foreground)]'>
        <FiBriefcase
          className='inline-block mr-3 mb-1 text-[var(--primary)]'
          size={36}
        />
        Work Experience
      </h2>

      <div className='relative'>
        {/* Vertical line */}
        <div className='absolute left-5 md:left-8 top-0 bottom-0 w-0.5 bg-[var(--gray-200)]' />

        <div className='space-y-10'>
          {experiences.map((exp, idx) => (
            <div key={idx} className='relative flex gap-6 md:gap-10'>
              {/* Timeline dot */}
              <div className='flex-shrink-0 relative z-10'>
                <div className={`w-10 h-10 md:w-16 md:h-16 rounded-full ${exp.dot} flex items-center justify-center shadow-lg bg-gradient-to-br ${exp.color}`}>
                  <FiBriefcase className='text-white' size={20} />
                </div>
              </div>

              {/* Card */}
              <div className='flex-1 bg-[var(--gray-50)] border border-[var(--gray-200)] rounded-xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300'>
                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4'>
                  <div>
                    <h3 className='text-xl font-bold text-[var(--foreground)]'>{exp.role}</h3>
                    <span className={`text-sm font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                      @ {exp.company}
                    </span>
                  </div>
                  <span className='inline-flex items-center gap-1.5 text-sm text-[var(--gray-700)] bg-[var(--gray-100)] px-3 py-1.5 rounded-full border border-[var(--gray-200)]'>
                    <FiClock size={13} />
                    {exp.period}
                  </span>
                </div>
                <ul className='space-y-2'>
                  {exp.highlights.map((point, i) => (
                    <li key={i} className='flex gap-2 text-sm text-[var(--gray-700)] leading-relaxed'>
                      <span className='text-[var(--primary)] mt-1 flex-shrink-0'>▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
