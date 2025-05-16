import { FiUser } from 'react-icons/fi';

const AboutSection = () => (
  <section id='about' className='py-20 bg-[var(--background)]'>
    <div className='max-w-5xl mx-auto px-4'>
      <h2 className='text-4xl font-bold mb-10 text-center text-[var(--foreground)]'>
        <FiUser
          className='inline-block mr-3 mb-1 text-[var(--primary)]'
          size={36}
        />
        About Me
      </h2>
      <div className='bg-[var(--gray-50)] p-8 rounded-xl shadow-lg border border-[var(--gray-200)]'>
        <p className='text-lg text-[var(--gray-700)] leading-relaxed mb-6'>
          Turning caffeine into code and dreams into reality. I specialize in
          transforming visionary ideas into functional, user-friendly
          applications while collaborating with cross-functional teams to
          deliver high-quality products. Whether optimizing performance,
          debugging intricate issues, or architecting new features, I approach
          every challenge with a detail-oriented mindset and creative flair.
        </p>
        <p className='text-lg text-[var(--gray-700)] leading-relaxed'>
          ⚡ <span className='font-semibold'>Fun fact:</span> When I&apos;m not
          working, you can find me enjoying quality time with animals and
          exploring nature.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;
