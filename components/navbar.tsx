'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white dark:bg-zinc-900 shadow-md w-full sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo or Blog Name */}
        <Link href="/" className="text-2xl font-semibold text-zinc-800 dark:text-white">
          ✍️ MyBlog
        </Link>

        {/* Hamburger icon for mobile */}
        <button className="md:hidden text-zinc-700 dark:text-zinc-200" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation links (Desktop) */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-zinc-700 dark:text-zinc-300 hover:text-blue-500">Home</Link>
          <Link href="/about" className="text-zinc-700 dark:text-zinc-300 hover:text-blue-500">About</Link>
          <Link href="/contact" className="text-zinc-700 dark:text-zinc-300 hover:text-blue-500">Contact</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <Link href="/" className="block py-2 text-zinc-700 dark:text-zinc-300">Home</Link>
          <Link href="/about" className="block py-2 text-zinc-700 dark:text-zinc-300">About</Link>
          <Link href="/contact" className="block py-2 text-zinc-700 dark:text-zinc-300">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
