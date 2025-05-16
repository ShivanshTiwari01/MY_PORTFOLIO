import { FiMail, FiLinkedin } from 'react-icons/fi';

const ContactSection = () => (
  <section id='contact' className='py-20 bg-[var(--gray-50)]'>
    <div className='max-w-3xl mx-auto px-4 text-center'>
      <h2 className='text-4xl font-bold mb-8 text-[var(--foreground)]'>
        <FiMail
          className='inline-block mr-3 mb-1 text-[var(--primary)]'
          size={36}
        />
        Let&apos;s Connect
      </h2>
      <div className='bg-[var(--background)] rounded-xl p-8 md:p-12 shadow-xl border border-[var(--gray-200)]'>
        <p className='text-lg text-[var(--gray-700)] mb-8 leading-relaxed'>
          Have a project in mind, a question, or just want to say hi? I&apos;d
          love to hear from you. Let&apos;s discuss how we can work together to
          bring your ideas to life.
        </p>
        <div className='flex flex-col sm:flex-row justify-center items-center gap-4'>
          <a
            href='mailto:shivanshtiwari2014@gmail.com'
            className='inline-flex items-center justify-center px-8 py-3 rounded-lg bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)] transition-colors duration-300 text-lg font-medium shadow-md hover:shadow-lg w-full sm:w-auto'
          >
            <FiMail className='w-5 h-5 mr-3' />
            Email Me
          </a>
          <a
            href='https://linkedin.com/in/shivanshtiwari01'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-colors duration-300 text-lg font-medium shadow-md hover:shadow-lg w-full sm:w-auto'
          >
            <FiLinkedin className='w-5 h-5 mr-3' />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
