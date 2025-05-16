import Image from 'next/image';

const HeroSection = () => (
  <section className='pt-32 pb-24 px-4 bg-gradient-to-br from-[var(--primary)] via-[#3b82f6] to-[#1e40af] text-white'>
    <div className='max-w-4xl mx-auto text-center'>
      <div className='mb-10 relative inline-block'>
        <Image
          src='/file.svg'
          alt='Shivansh Tiwari'
          width={150}
          height={150}
          className='rounded-full border-4 border-white shadow-2xl mx-auto'
          priority
        />
        <div className='absolute bottom-0 right-0 bg-green-400 rounded-full p-1.5 border-2 border-white'>
          <span className='block w-3 h-3 bg-green-500 rounded-full'></span>
        </div>
      </div>
      <h1 className='text-5xl md:text-6xl font-extrabold mb-4 leading-tight'>
        Hi 👋, I&apos;m Shivansh Tiwari
      </h1>
      <p className='text-2xl md:text-3xl font-medium text-indigo-100 mb-8'>
        🛠️💡 Full Stack Architect & Passionate Developer
      </p>
      <p className='text-lg md:text-xl text-indigo-50 max-w-3xl mx-auto leading-relaxed'>
        Building bridges between ideas and execution. I specialize in
        transforming visionary ideas into functional, user-friendly
        applications. Let&apos;s construct the future, one line of code at a
        time! 🏗️💻
      </p>
    </div>
  </section>
);

export default HeroSection;
