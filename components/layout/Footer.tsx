"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Facebook, Instagram, Mail, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto bg-white/10 backdrop-blur-lg border-t border-white/20 pt-20 pb-7">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center md:justify-start items-center gap-3 mb-4">
            <Image
              src="/smart-study-center-logo.png"
              alt="Smart Study Center Logo"
              className="object-contain h-10 sm:h-12 md:h-[70px] w-auto"
             width={260}
                height={65}
              quality={100}
              priority
            />
          </div>
          <p className="text-gray-900 text-sm">
            Learn smarter, faster, and with passion. “Love to Know” drives
            everything we do.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-lg font-semibold text-[#e91e63] mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-900">
            <li>
              <Link href="/" className="hover:text-[#e91e63] transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/courses" className="hover:text-[#e91e63] transition">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/short-courses" className="hover:text-[#e91e63] transition">
                Short Courses
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#e91e63] transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/values" className="hover:text-[#e91e63] transition">
                Our Values
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#e91e63] transition">
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-lg font-semibold text-[#e91e63] mb-4">
            Follow Us
          </h3>
          <div className="flex justify-center md:justify-start gap-4 text-gray-300">
            {[
              {
                Icon: Facebook,
                href: "https://web.facebook.com/profile.php?id=61579559790036",
              },
              {
                Icon: Instagram,
                href: "https://www.instagram.com/support.smartstudycenter/",
              },
              {
                Icon: Linkedin,
                href: "https://www.linkedin.com/company/smart-study-center",
              },
              { Icon: Mail, href: "mailto:support.smartstudycenter@gmail.com" },
            ].map(({ Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#e91e63" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 text-gray-600 text-sm border-t border-white/10 pt-4">
        © {new Date().getFullYear()} Smart Study Center — All Rights Reserved.
      </div>
    </footer>
  );
}
