"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap, Globe, Sparkles, ArrowRight } from "lucide-react";

export default function HomeHeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#fdf0f7] via-[#fff5fa] to-[#fce8f4]">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-[#C71585]/10 blur-[90px]" />
        <div className="absolute -bottom-24 -right-24 h-[400px] w-[400px] rounded-full bg-[#FF1493]/10 blur-[80px]" />
        <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C71585]/5 blur-[60px]" />
      </div>

      {/* Subtle dot grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 -z-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #C71585 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[540px] w-full max-w-5xl flex-col items-center justify-center px-5 py-20 text-center sm:px-8 sm:py-28 md:py-32">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C71585]/25 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-sm"
        >
          <Sparkles className="h-4 w-4 text-[#C71585]" />
          <span className="text-xs font-semibold tracking-wide text-[#C71585] sm:text-sm">
            Pakistan&rsquo;s Premier Online Academy
          </span>
          <Globe className="h-4 w-4 text-[#C71585]" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="max-w-4xl text-4xl font-extrabold leading-[1.12] tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Study from{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-[#C71585]">anywhere</span>
            <span className="absolute inset-x-0 -bottom-1 z-0 h-3 rounded-full bg-[#C71585]/15" />
          </span>
          <br />
          across the{" "}
          <span className="bg-gradient-to-r from-[#C71585] to-[#FF1493] bg-clip-text text-transparent">
            globe.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-gray-600 sm:text-lg md:text-xl lg:text-2xl"
        >
          Live interactive classes for students in{" "}
          <span className="font-semibold text-gray-800">Pakistan</span>,{" "}
          <span className="font-semibold text-gray-800">Saudi Arabia</span>, and
          around the world.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-3.5 sm:flex-row"
        >
          <Link
            href="/courses"
            className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#C71585] to-[#FF1493] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#C71585]/25 transition-all duration-200 hover:scale-[1.03] hover:shadow-xl hover:shadow-[#C71585]/30 active:scale-[0.98] sm:px-10 sm:py-4.5 sm:text-lg"
          >
            <GraduationCap className="h-5 w-5" />
            Find Your Program
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/short-courses"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#C71585]/30 bg-white/70 px-7 py-3.5 text-sm font-semibold text-[#C71585] backdrop-blur-sm transition-all duration-200 hover:border-[#C71585] hover:bg-white hover:shadow-md sm:px-8 sm:text-base"
          >
            <Sparkles className="h-4 w-4" />
            Explore Short Courses
          </Link>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-gray-500 sm:gap-8 sm:text-sm"
        >
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Live Interactive Sessions
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#C71585]" />
            Class 4th to A-Levels & Entry Tests
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            FBISE · CAIE · MDCAT · ECAT
          </div>
        </motion.div>
      </div>
    </section>
  );
}
