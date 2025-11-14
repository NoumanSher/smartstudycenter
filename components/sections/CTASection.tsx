'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#C71585] to-[#FF1493] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="inline-block"
          >
            <Sparkles className="w-16 h-16 text-white mx-auto" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Ready to Start Your <br className="hidden sm:block" />
            Learning Journey?
          </h2>

          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join thousands of successful students and transform your future with expert guidance and personalized learning.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/register"
              className="group px-8 py-4 bg-white text-[#C71585] font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/courses"
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              Browse Courses
            </Link>
          </motion.div>

          <div className="pt-8">
            <p className="text-white/80 text-sm">
              No credit card required • Free trial available • Cancel anytime
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
