import { FiCpu } from 'react-icons/fi';
import TechCategory from './TechCategory';

const techStack = {
  languages: ['TypeScript', 'JavaScript', 'Go', 'Python'],
  frontend: ['React', 'Next.js', 'Redux', 'Tailwind CSS', 'HTML', 'CSS'],
  backend: ['Node.js', 'Express', 'Gin', 'FastAPI'],
  databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  devops: ['AWS', 'Docker', 'Kubernetes', 'Git', 'Linux'],
};

const TechSection = () => (
  <section id='tech' className='py-20 bg-[var(--gray-50)]'>
    <div className='max-w-5xl mx-auto px-4'>
      <h2 className='text-4xl font-bold mb-4 text-center text-[var(--foreground)]'>
        <FiCpu
          className='inline-block mr-3 mb-1 text-[var(--primary)]'
          size={36}
        />
        Technologies &amp; Tools
      </h2>
      <p className='text-center text-[var(--gray-700)] mb-12'>
        My go-to stack for building production-grade systems.
      </p>
      <div className='grid md:grid-cols-2 gap-x-8 gap-y-6'>
        <TechCategory title='Languages' technologies={techStack.languages} />
        <TechCategory title='Backend' technologies={techStack.backend} />
        <TechCategory title='Frontend' technologies={techStack.frontend} />
        <TechCategory title='Databases' technologies={techStack.databases} />
        <TechCategory title='DevOps' technologies={techStack.devops} />
      </div>
    </div>
  </section>
);

export default TechSection;
