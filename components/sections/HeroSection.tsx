'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, TrendingUp, Users } from 'lucide-react';
import Link from 'next/link';

const heroSlides = [
  {
    title: 'Promoting Critical Thinking, Collaboration, Creativity',
    subtitle: 'Transform Your Learning Journey',
    description: 'Experience personalized education that adapts to your unique learning style and goals.',
    cta: 'Explore Courses',
    image: '/image.png',
    icon: Sparkles,
  },
  {
    title: 'Learn From Expert Mentors',
    subtitle: 'World-Class Education',
    description: 'Connect with experienced educators who are passionate about your success.',
    cta: 'Meet Our Mentors',
    image: '/image.png',
    icon: Users,
  },
  {
    title: 'Achieve Your Academic Goals',
    subtitle: 'Results That Matter',
    description: 'Join thousands of successful students who have achieved their dreams with us.',
    cta: 'View Success Stories',
    image: '/image.png',
    icon: TrendingUp,
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f8f9fa] via-[#fff5f8] to-[#f0f4ff] pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#C71585]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-300/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: 'spring' }}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-white/60 backdrop-blur-md rounded-full border border-[#C71585]/20"
              >
                {(() => {
                  const Icon = heroSlides[currentSlide].icon;
                  return <Icon className="w-5 h-5 text-[#C71585]" />;
                })()}
                <span className="text-sm font-semibold text-gray-700">
                  {heroSlides[currentSlide].subtitle}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                {heroSlides[currentSlide].title.split(',').map((line, index) => (
                  <span key={index} className="block">
                    {line}
                    {index === 0 && ','}
                  </span>
                ))}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                {heroSlides[currentSlide].description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/courses"
                  className="px-8 py-4 bg-gradient-to-r from-[#C71585] to-[#FF1493] text-white font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  {heroSlides[currentSlide].cta}
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-4 bg-white/60 backdrop-blur-md text-gray-700 font-semibold rounded-full border-2 border-[#C71585]/30 hover:bg-white hover:border-[#C71585] transition-all duration-300"
                >
                  Learn More
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex items-center space-x-6 pt-4"
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C71585] to-[#FF69B4] border-2 border-white"
                    ></div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">5000+ Students</p>
                  <p className="text-xs text-gray-600">Learning with us</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C71585]/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
                <div className="relative bg-white/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <img
                    src={heroSlides[currentSlide].image}
                    alt="Hero"
                    className="w-full h-auto rounded-2xl shadow-xl"
                  />
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-[#C71585]/20"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#C71585] to-[#FF1493] rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Success Rate</p>
                    <p className="text-xl font-bold text-gray-900">98%</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all border border-[#C71585]/20"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <div className="flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'w-8 bg-[#C71585]' : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all border border-[#C71585]/20"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
}
