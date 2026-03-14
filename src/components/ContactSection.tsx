import { FiMail, FiLinkedin, FiGithub, FiPhone } from 'react-icons/fi';

const contactLinks = [
  {
    href: 'mailto:shivanshtiwari2014@gmail.com',
    icon: <FiMail className='w-5 h-5' />,
    label: 'shivanshtiwari2014@gmail.com',
    cta: 'Send Email',
    primary: true,
  },
  {
    href: 'https://linkedin.com/in/shivanshtiwari01',
    icon: <FiLinkedin className='w-5 h-5' />,
    label: 'linkedin.com/in/shivanshtiwari01',
    cta: 'Connect on LinkedIn',
    primary: false,
  },
  {
    href: 'https://github.com/ShivanshTiwari01',
    icon: <FiGithub className='w-5 h-5' />,
    label: 'github.com/ShivanshTiwari01',
    cta: 'View GitHub',
    primary: false,
  },
  {
    href: 'tel:+919971864916',
    icon: <FiPhone className='w-5 h-5' />,
    label: '+91 9971864916',
    cta: 'Call Me',
    primary: false,
  },
];

const ContactSection = () => (
  <section id='contact' className='py-20 bg-[var(--background)]'>
    <div className='max-w-3xl mx-auto px-4 text-center'>
      <h2 className='text-4xl font-bold mb-4 text-[var(--foreground)]'>
        Let&apos;s Build Something Great
      </h2>
      <p className='text-lg text-[var(--gray-700)] mb-12 leading-relaxed'>
        Whether you need a scalable backend, a complete product, or a technical partner — I&apos;m here.
        Reach out and let&apos;s discuss how I can help you ship faster and better.
      </p>

      <div className='bg-[var(--gray-50)] rounded-2xl p-8 md:p-12 shadow-xl border border-[var(--gray-200)] space-y-4'>
        {contactLinks.map((link) => (
          <a
            key={link.cta}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={`flex items-center justify-between gap-4 w-full px-6 py-4 rounded-xl border transition-all duration-300 group
              ${link.primary
                ? 'bg-[var(--primary)] border-[var(--primary)] text-white hover:opacity-90 shadow-md'
                : 'bg-[var(--background)] border-[var(--gray-200)] text-[var(--foreground)] hover:border-[var(--primary)] hover:shadow-md'
              }`}
          >
            <span className='flex items-center gap-3'>
              <span className={link.primary ? 'text-white' : 'text-[var(--primary)]'}>{link.icon}</span>
              <span className='text-sm font-medium'>{link.label}</span>
            </span>
            <span className={`text-sm font-semibold whitespace-nowrap group-hover:translate-x-1 transition-transform duration-200 ${link.primary ? 'text-white' : 'text-[var(--primary)]'}`}>
              {link.cta} →
            </span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;
