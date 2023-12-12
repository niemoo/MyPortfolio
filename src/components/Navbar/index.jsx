'use client';
import Image from 'next/image';
import Link from 'next/link';
import Izzan from '@/components/assets/images/izzan.png';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const currentPath = usePathname();

  return (
    <header className="max-w-screen-lg mx-auto mt-5 flex items-center">
      <Link href="/">{currentPath !== '/' && <Image src={Izzan} width={40} height={40} className="absolute top-5" alt="" />}</Link>
      <nav className="w-fit bg-zinc-900 pt-2 pb-3 px-4 rounded-full mx-auto">
        <Link href="/about" className={`hover:text-emerald-500 mr-7 text-sm ${currentPath === '/about' ? 'text-emerald-500' : ''}`}>
          About
        </Link>
        <Link href="/projects" className={`hover:text-emerald-500 mr-7 text-sm ${currentPath === '/projects' ? 'text-emerald-500' : ''}`}>
          Projects
        </Link>
        <Link href="/skills" className={`hover:text-emerald-500 text-sm ${currentPath === '/skills' ? 'text-emerald-500' : ''}`}>
          Skills
        </Link>
      </nav>
      <div></div>
    </header>
  );
};

export default Navbar;
