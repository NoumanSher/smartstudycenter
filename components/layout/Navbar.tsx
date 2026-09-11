"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Values", href: "/values" },
  { name: "Courses", href: "/courses" },
  { name: "Short Courses", href: "/short-courses" },
  { name: "Mentors", href: "/mentors" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 border border-b   transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="lg:max-w-7xl w-full  lg:mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 gap-2 xl:gap-4">
          <Link
            href="/"
            className="flex items-center h-full group py-2 shrink-0"
          >
            <div className="relative flex items-center">
              <Image
                src="/smart-study-center-logo.png"
                alt="Smart Study Center"
                width={240}
                height={60}
                quality={100}
                className="h-9 sm:h-11 md:h-12 lg:h-11 xl:h-14 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-3.5 xl:space-x-5 2xl:space-x-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-[#C71585] font-medium transition-colors relative group whitespace-nowrap text-[13px] xl:text-sm 2xl:text-base py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C71585] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-4 py-2 xl:px-5 xl:py-2.5 bg-gradient-to-r from-[#C71585] to-[#FF1493] rounded-full text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap text-xs xl:text-sm shrink-0 shadow-md shadow-[#C71585]/20"
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
            animate={{ opacity: 1, height: "auto" }}
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
