'use client';

import { motion } from 'framer-motion';
import { Star, Award, BookOpen, Users, Linkedin, Twitter, Mail } from 'lucide-react';

const mentors = [
  {
    name: 'Dr. Sarah Williams',
    title: 'Mathematics Expert',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
    specialization: 'Advanced Calculus & Statistics',
    experience: '15+ years',
    students: '2500+',
    rating: 4.9,
    bio: 'PhD in Mathematics with a passion for making complex concepts simple and accessible.',
  },
  {
    name: 'Prof. Michael Chen',
    title: 'Science Specialist',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    specialization: 'Physics & Chemistry',
    experience: '12+ years',
    students: '2000+',
    rating: 4.8,
    bio: 'Former university professor dedicated to inspiring the next generation of scientists.',
  },
  {
    name: 'Emily Rodriguez',
    title: 'English Literature',
    image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
    specialization: 'Creative Writing & Grammar',
    experience: '10+ years',
    students: '1800+',
    rating: 5.0,
    bio: 'Published author and educator helping students develop strong communication skills.',
  },
  {
    name: 'David Thompson',
    title: 'Computer Science',
    image: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=400',
    specialization: 'Programming & Web Development',
    experience: '8+ years',
    students: '1500+',
    rating: 4.9,
    bio: 'Software engineer turned educator, making coding accessible and fun for everyone.',
  },
  {
    name: 'Priya Sharma',
    title: 'Test Preparation',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    specialization: 'SAT, ACT & Entrance Exams',
    experience: '9+ years',
    students: '2200+',
    rating: 4.9,
    bio: 'Specializing in test strategies and helping students achieve their target scores.',
  },
  {
    name: 'James Wilson',
    title: 'Biology Expert',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
    specialization: 'Molecular Biology & Genetics',
    experience: '11+ years',
    students: '1900+',
    rating: 4.8,
    bio: 'Research scientist with extensive experience in making biology engaging and relevant.',
  },
];

export default function MentorsPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-[#f8f9fa] via-[#fff5f8] to-[#f0f4ff] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#C71585]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-[#C71585]">Expert Mentors</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from passionate educators who are committed to your success and growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl group-hover:shadow-2xl transition-all duration-300"></div>
                <div className="relative p-8 space-y-4">
                  <div className="relative w-32 h-32 mx-auto">
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-full h-full rounded-full object-cover border-4 border-[#C71585] group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-[#C71585] to-[#FF1493] rounded-full flex items-center justify-center border-4 border-white">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900">{mentor.name}</h3>
                    <p className="text-[#C71585] font-semibold">{mentor.title}</p>
                    <p className="text-sm text-gray-600 mt-2">{mentor.specialization}</p>
                  </div>

                  <p className="text-gray-700 text-sm text-center">{mentor.bio}</p>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 text-[#FFD700]">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="font-bold text-gray-900">{mentor.rating}</span>
                      </div>
                      <p className="text-xs text-gray-600">Rating</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1">
                        <Users className="w-4 h-4 text-[#C71585]" />
                        <span className="font-bold text-gray-900">{mentor.students}</span>
                      </div>
                      <p className="text-xs text-gray-600">Students</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center space-x-1 text-sm text-gray-600">
                    <BookOpen className="w-4 h-4" />
                    <span>{mentor.experience} Experience</span>
                  </div>

                  <div className="flex justify-center space-x-3 pt-4">
                    {[Linkedin, Twitter, Mail].map((Icon, i) => (
                      <button
                        key={i}
                        className="w-10 h-10 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center hover:bg-[#C71585] hover:text-white transition-all duration-300 border border-gray-200"
                      >
                        <Icon className="w-4 h-4" />
                      </button>
                    ))}
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
