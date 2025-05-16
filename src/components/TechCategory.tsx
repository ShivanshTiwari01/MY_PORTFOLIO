type TechCategoryProps = {
  title: string;
  technologies: string[];
};

const TechCategory = ({ title, technologies }: TechCategoryProps) => (
  <div className='mb-6'>
    <h3 className='text-xl font-semibold mb-3 text-[var(--primary)]'>
      {title}
    </h3>
    <div className='flex flex-wrap gap-2'>
      {technologies.map((tech) => (
        <span
          key={tech}
          className='bg-[var(--gray-100)] text-[var(--foreground)] px-3 py-1 rounded-md text-sm font-medium border border-[var(--gray-200)]'
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

export default TechCategory;
