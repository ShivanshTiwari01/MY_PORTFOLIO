import { FiCoffee } from 'react-icons/fi';

const Footer = () => (
  <footer className='py-10 border-t border-[var(--gray-200)] bg-[var(--background)]'>
    <div className='max-w-5xl mx-auto px-4 text-center text-[var(--gray-700)]'>
      <p className='text-sm'>
        © {new Date().getFullYear()} Shivansh Tiwari. All rights reserved.
      </p>
      <p className='text-xs mt-2'>
        Crafted with <FiCoffee className='inline-block text-[var(--primary)]' />{' '}
        and love.
      </p>
    </div>
  </footer>
);

export default Footer;
