"use client";

import { motion } from "framer-motion";
import { Star, Award, BookOpen, Users } from "lucide-react";
import Image from "next/image";

const mentors = [
  {
    name: "Murad Amin",
    title: "Mathematics Teacher | MPhil in Mathematics",
    image: "/m1.png",
    specialization: "Advanced Calculus & Mathematics",
    experience: "20+ years",
    students: "2500+",
    rating: 4.9,
    bio: "With over 20 years of teaching experience, Murad Amin is dedicated to making difficult Mathematics concepts simple and easy to understand.He helps students build strong problem-solving skills, confidence, and a lasting interest in Mathematics.",
  },
    {
    name: "Late Rogar Anwer",
    title: "English Literature",
    image: "/m2.png",
    specialization: "Creative Writing & Grammar",
    experience: "18+ years",
    students: "1800+",
    rating: 5.0,
    bio: "In Loving Memory | First Teacher Since 2008 Late Roger Anwer was the first teacher of our institute when it was founded in 2008 and remained a valued part of its journey until his passing. He believed in modernising the education system and inspired students through his dedication to meaningful learning. His legacy and vision will always remain a cherished part of Smart Study Center.",
  },
    {
    name: "Mehreen Khan",
    title: "Management Professional | MPhil in Management",
    image: "/mehreenkhan.jpeg",
    specialization: "MBA Finance & MS Management",
    experience: "18+ years",
    students: "1500+",
    rating: 4.9,
    bio: "Since joining our institution in 2012, Mehreen Khan has played an important role in its growth and smooth management.An MPhil-qualified Management educator, she is known for her excellent teaching, strong organisational skills, and dedicated guidance for students.",
  },
  {
    name: "Rehman Ameen",
    title: "Physics Teacher | Mechanical Engineer",
    image: "/m4.png",
    specialization: "Physics & Mechanical Engineer",
    experience: "15+ years",
    students: "2000+",
    rating: 4.8,
    bio: "A Mechanical Engineer and dedicated Physics teacher who connects scientific concepts with real-world applications. He helps students understand Physics clearly and develop confidence in solving numerical and conceptual problems.",
  },

  {
    name: "Dr Jamshed Nasir",
    title: "Mathematics & Statistics Teacher",
    image: "/sir.jpeg",
    specialization: "Statistics Expert",
    experience: "30+ years",
    students: "1500+",
    rating: 4.9,
    bio: "Dr. Jamshed Nasir is a skilled educator with strong expertise in Mathematics and Statistics. He makes analytical concepts easier to understand and helps students build confidence in problem-solving and quantitative skills.",
  },

  {
    name: "Miss Fatima",
    title: "Chemistry Teacher | Master’s in Chemistry",
    image: "/fatima.jpeg",
    specialization: "MBA Finance & MS Management",
    experience: "8+ years",
    students: "1500+",
    rating: 4.9,
    bio: "Miss Fatima is a dedicated Chemistry educator with a strong academic foundation and a passion for teaching. She makes complex chemical concepts easier to understand through clear explanations, practical examples, and regular practice. Her supportive guidance helps students develop confidence and achieve stronger results in Chemistry.",
  },
  {
    name: "Miss Uzma Sharif",
    title: "Economics Teacher | Master’s in Economics",
    image: "/missuzma.jpeg",
    specialization: "Master’s in Economics",
    experience: "8+ years",
    students: "1500+",
    rating: 4.9,
    bio: "she brings strong academic understanding and a genuine passion for helping students grow. At Smart Study Center, she provides mentoring, academic guidance, motivation, and support to help students develop effective learning habits and move confidently toward their educational and career goals.",
  },
  {
    name: "Dr. Furqan Sikandar",
    title: " Assistant Professor In China",
    image: "/chineseteacher.jpeg",
    specialization: "Professional chinese language instructor",
    experience: "10+ years",
    students: "1500+",
    rating: 4.9,
    bio: "currently serving as an Assistant Professor at the School of Engineering Management, Zhejiang Guangsha Vocational and Technical University of Construction, China.",
  },
  {
    name: "Asma irfan",
    title: "English Language Teacher",
    image: "/asma.jpeg",
    specialization: "Master’s in English",
    experience: "10+ years",
    students: "1500+",
    rating: 4.9,
    bio: "She is a dedicated English Language Teacher at Smart Study Center, helping students strengthen their speaking, reading, writing, grammar, vocabulary, and communication skills through interactive and student-centered lessons. Her goal is to build students’ confidence, improve their fluency, and support them in achieving strong academic results.",
  },
];

export default function MentorsPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-20 bg-relative overflow-hidden">
        {/* <div className="absolute top-0 left-0 w-96 h-96 bg-[#C71585]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div> */}

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
              Learn from passionate educators who are committed to your success
              and growth.
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
                    <Image
                      fill
                      src={mentor.image}
                      alt={mentor.name}
                      className="w-full h-full rounded-full object-cover border-4 border-[#C71585] group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-black rounded-full flex items-center justify-center border-4 border-white">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {mentor.name}
                    </h3>
                    <p className="text-[#C71585] font-semibold">
                      {mentor.title}
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      {mentor.specialization}
                    </p>
                  </div>

                  <p className="text-gray-700 text-sm text-center">
                    {mentor.bio}
                  </p>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 text-[#FFD700]">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="font-bold text-gray-900">
                          {mentor.rating}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">Rating</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1">
                        <Users className="w-4 h-4 text-[#C71585]" />
                        <span className="font-bold text-gray-900">
                          {mentor.students}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">Students</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center space-x-1 text-sm text-gray-600">
                    <BookOpen className="w-4 h-4" />
                    <span>{mentor.experience} Experience</span>
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
