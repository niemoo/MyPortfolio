'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const currentPath = usePathname();

  return (
    <header className="max-w-screen-lg mx-auto mt-5">
      <nav className="w-fit bg-zinc-900 pt-2 pb-3 px-4 rounded-full mx-auto">
        <Link href="/" className={`hover:text-emerald-500 mr-7 text-sm ${currentPath === '/' ? 'text-emerald-500' : ''}`}>
          Home
        </Link>
        <Link href="/projects" className={`hover:text-emerald-500 mr-7 text-sm ${currentPath === '/projects' ? 'text-emerald-500' : ''}`}>
          Projects
        </Link>
        <Link href="/about" className={`hover:text-emerald-500 text-sm ${currentPath === '/about' ? 'text-emerald-500' : ''}`}>
          About
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
