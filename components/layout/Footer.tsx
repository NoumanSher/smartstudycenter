'use client';

import Link from 'next/link';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-8 h-8 text-[#C71585]" />
              <div>
                <h3 className="text-lg font-bold">SMART STUDY CENTER</h3>
                <p className="text-xs text-[#FF69B4]">LOVE TO KNOW</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Empowering students with quality education and personalized learning experiences.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#C71585] transition-all duration-300 hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#FF69B4]">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Courses', 'Mentors', 'Blog', 'Careers'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-gray-300 hover:text-[#FF69B4] transition-colors text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#FF69B4]">Our Courses</h4>
            <ul className="space-y-2">
              {['Mathematics', 'Science', 'English', 'Programming', 'Test Prep'].map((course) => (
                <li key={course}>
                  <Link href="#" className="text-gray-300 hover:text-[#FF69B4] transition-colors text-sm">
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#FF69B4]">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#C71585] mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">123 Education Street, Learning City, 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-[#C71585] flex-shrink-0" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-[#C71585] flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@smartstudy.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Smart Study Center. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-[#FF69B4] text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#FF69B4] text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#FF69B4] text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
