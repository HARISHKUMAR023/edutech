import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../../public/logo-main.svg';

export function Navbaredu() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Image src={logo} alt="Logo" width={50} height={50} />
          <span className="ml-3 text-xl font-bold">Kavasam</span>
        </div>
        <div className="hidden md:flex space-x-10">
          <Link href="/" className='py-2 px-2 rounded-md text-lime-400 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 ease-in-out'>Home</Link>
          <Link href="/about" className='py-2 px-2 rounded-md hover:bg-white/10 backdrop-blur-sm transition-all duration-300 ease-in-out'>About</Link>
          <Link href="/what-we-do" className='py-2 px-2 rounded-md hover:bg-white/10 backdrop-blur-sm transition-all duration-300 ease-in-out'>What We Do</Link>
          <Link href="/services" className='py-2 px-2 rounded-md hover:bg-white/10 backdrop-blur-sm transition-all duration-300 ease-in-out'>Services</Link>

          <Link href="/auth" className='bg-lime-500 py-2 px-8 rounded-full hover:bg-lime-500/80 backdrop-blur-sm transition-all duration-300 ease-in-out'>Login</Link>
        </div>
      </div>
    </nav>
  );
}