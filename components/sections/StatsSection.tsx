'use client';

import { motion } from 'framer-motion';
import { Users, BookOpen, Award, TrendingUp } from 'lucide-react';
import CountUp from '@/components/ui/CountUp';

const stats = [
  { icon: Users, value: 5000, suffix: '+', label: 'Active Students', color: 'from-[#C71585] to-[#FF1493]' },
  { icon: BookOpen, value: 150, suffix: '+', label: 'Courses Available', color: 'from-blue-500 to-cyan-500' },
  { icon: Award, value: 98, suffix: '%', label: 'Success Rate', color: 'from-green-500 to-emerald-500' },
  { icon: TrendingUp, value: 4.9, suffix: '/5', label: 'Average Rating', color: 'from-orange-500 to-yellow-500' },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-repeat"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-[#FF69B4]">Impact</span> in Numbers
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join thousands of successful students who have transformed their learning journey with us.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10"></div>
              <div className="relative p-8 text-center space-y-4">
                <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold">
                    <CountUp end={stat.value} />
                    <span className="text-[#FF69B4]">{stat.suffix}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
