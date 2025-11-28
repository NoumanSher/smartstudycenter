"use client";

import { motion } from "framer-motion";
import { BookOpen, Clock, Users, Star, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const courses = [
  {
    title: "A Level",
    description:
      "Comprehensive preparation for Advanced Level examinations with in-depth subject knowledge.",
    image:
      "https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=400",
    level: "Advanced",
    duration: "24 weeks",
    students: "1800+",
    rating: 4.9,
    price: "$399",
    category: "Advanced Level",
  },
  {
    title: "O Level",
    description:
      "Complete Ordinary Level course covering core subjects and exam preparation strategies.",
    image:
      "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=400",
    level: "Intermediate",
    duration: "20 weeks",
    students: "2200+",
    rating: 4.8,
    price: "$349",
    category: "Ordinary Level",
  },

  {
    title: "Intermediate",
    description:
      "Intermediate level education covering pre-engineering, pre-medical, and commerce streams.",
    image:
      "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
    level: "Intermediate",
    duration: "32 weeks",
    students: "2800+",
    rating: 4.8,
    price: "$449",
    category: "Intermediate Education",
  },
  {
    title: "Matric",
    description:
      "Matriculation level courses covering all major subjects with board exam focus.",
    image:
      "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400",
    level: "Intermediate",
    duration: "18 weeks",
    students: "3500+",
    rating: 4.7,
    price: "$299",
    category: "Matriculation",
  },
  {
    title: "Juniors",
    description:
      "Foundational courses for junior students building strong academic basics.",
    image:
      "https://images.pexels.com/photos/5428010/pexels-photo-5428010.jpeg?auto=compress&cs=tinysrgb&w=400",
    level: "Beginner",
    duration: "15 weeks",
    students: "4200+",
    rating: 4.9,
    price: "$199",
    category: "Junior Level",
  },
  {
    title: "Entry Test",
    description:
      "Specialized preparation for university and college entrance examinations.",
    image:
      "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400",
    level: "Advanced",
    duration: "8 weeks",
    students: "5000+",
    rating: 4.9,
    price: "$279",
    category: "Test Preparation",
  },
];

export default function CoursesPage() {
  return (
    <main className="min-h-screen lg:pt-20 pt-5">
      <section className="py-20  relative overflow-hidden">
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
              Explore our comprehensive catalog of courses designed to help you
              achieve your academic goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0  backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl group-hover:shadow-2xl transition-all duration-300"></div>
                <div className="relative overflow-hidden rounded-2xl">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      fill
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-[#C71585]">
                      {course.level}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-[#C71585]/10 text-[#C71585] rounded-full text-xs font-semibold">
                        {course.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                        <span className="text-sm font-semibold">
                          {course.rating}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {course.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{course.students}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
