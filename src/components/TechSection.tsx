import { FiCpu } from 'react-icons/fi';
import TechCategory from './TechCategory';

const techStack = {
  languages: ['C++', 'JavaScript', 'TypeScript', 'Python'],
  frontend: ['HTML', 'CSS', 'React', 'Next.js', 'Redux'],
  backend: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'],
  devops: ['Git', 'Docker', 'Linux', 'AWS'],
};

const TechSection = () => (
  <section id='tech' className='py-20 bg-[var(--gray-50)]'>
    <div className='max-w-5xl mx-auto px-4'>
      <h2 className='text-4xl font-bold mb-12 text-center text-[var(--foreground)]'>
        <FiCpu
          className='inline-block mr-3 mb-1 text-[var(--primary)]'
          size={36}
        />
        Technologies & Tools
      </h2>
      <div className='grid md:grid-cols-2 gap-x-8 gap-y-6'>
        <TechCategory title='Languages' technologies={techStack.languages} />
        <TechCategory title='Front-End' technologies={techStack.frontend} />
        <TechCategory title='Back-End' technologies={techStack.backend} />
        <TechCategory title='DevOps' technologies={techStack.devops} />
      </div>
    </div>
  </section>
);

export default TechSection;
