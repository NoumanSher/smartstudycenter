'use client';

import { motion } from 'framer-motion';
import { BookOpen, Users, Video, Award, Clock, Target,LucideSchool2 } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Comprehensive Courses',
    description: 'Access a wide range of subjects with detailed curriculum and study materials.',
    color: 'from-[#C71585] to-[#FF1493]',
  },
  {
    icon: Users,
    title: 'Expert Mentors',
    description: 'Learn from experienced educators dedicated to your academic success.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Video,
    title: 'Live Classes',
    description: 'Interactive live sessions with real-time doubt clearing and engagement.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: LucideSchool2,
    title: 'Curriculum',
    description: 'A structured learning journey to achieve specific educational goals and skills.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Clock,
    title: 'Flexible Learning',
    description: 'Study at your own pace with 24/7 access to recorded lectures and materials.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Target,
    title: 'Goal Tracking',
    description: 'Monitor your progress and achieve your academic goals with detailed analytics.',
    color: 'from-yellow-500 to-orange-500',
  },
];

export default function FeaturesSection() {
  return (
    <section className="lg:py-20 py-10  relative overflow-hidden ">
      {/* <div className="absolute top-0 right-0 w-96 h-96 bg-[#C71585]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-[#C71585]">Smart Study</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the perfect blend of technology and education with our comprehensive learning platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl"></div>
              <div className="relative p-8 space-y-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
