"use client";

import { motion } from "framer-motion";
import { Clock, Users, Star, ArrowRight, Layers } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { coursesData } from "@/lib/courses-data";

export default function CoursesPage() {
  return (
    <main className="min-h-screen lg:pt-20 pt-5 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <section className="py-20 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Our <span className="text-[#C71585]">Courses</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive catalog of academic programs designed to help you
              achieve your goals with personalized mentorship and structured tracks.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coursesData.map((course, index) => (
              <motion.div
                key={course.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative flex flex-col"
              >
                <Link
                  href={`/courses/${course.slug}`}
                  className="flex flex-col h-full bg-white rounded-2xl border border-gray-200/80 shadow-md hover:shadow-2xl hover:border-[#C71585]/30 transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <Image
                      fill
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[#C71585] shadow-sm">
                      {course.level}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-[#C71585]/10 text-[#C71585] rounded-full text-xs font-semibold">
                          {course.category}
                        </span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                          <span className="text-sm font-semibold text-gray-800">
                            {course.rating}
                          </span>
                        </div>
                      </div>

                      <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#C71585] transition-colors">
                        {course.title}
                      </h2>

                      <p className="text-gray-600 text-sm line-clamp-2">
                        {course.cardDescription}
                      </p>

                      {/* Stream Pills Preview */}
                      <div className="flex items-center gap-1.5 flex-wrap pt-1">
                        <span className="text-xs font-semibold text-gray-400 flex items-center mr-1">
                          <Layers className="w-3 h-3 mr-1" /> Streams:
                        </span>
                        {course.tabs.slice(0, 3).map((tab) => (
                          <span
                            key={tab.id}
                            className="text-[11px] px-2 py-0.5 bg-gray-100 text-gray-600 rounded-md"
                          >
                            {tab.label}
                          </span>
                        ))}
                        {course.tabs.length > 3 && (
                          <span className="text-[11px] text-[#C71585] font-medium">
                            +{course.tabs.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-xs sm:text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4 text-gray-400" />
                          <span>{course.students}</span>
                        </div>
                      </div>

                      <span className="inline-flex items-center text-sm font-semibold text-[#C71585] group-hover:translate-x-1 transition-transform">
                        Explore <ArrowRight className="w-4 h-4 ml-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
