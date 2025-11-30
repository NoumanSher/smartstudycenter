'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
const navLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Courses', href: '/courses' },
  { name: 'Mentors', href: '/mentors' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50  transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="lg:max-w-7xl w-full  lg:mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Smart Study Center Logo"
                width={40}
                height={40}
                className="object-cover h-14 w-14 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="lg:text-xl text-base font-bold text-gray-900">SMART STUDY CENTER</span>
              <span className="text-xs text-[#C71585] font-semibold">LOVE TO KNOW</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-[#C71585] font-medium transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C71585] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-[#C71585] to-[#FF1493] text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 hover:text-[#C71585] transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-lg shadow-lg"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-700 hover:text-[#C71585] font-medium py-2 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full px-6 py-3 bg-gradient-to-r from-[#C71585] to-[#FF1493] text-white text-center rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
