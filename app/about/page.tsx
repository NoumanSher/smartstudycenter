"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, Users, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-20  relative overflow-hidden">
        {/* <div className="absolute top-0 left-0 w-96 h-96 bg-[#C71585]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div> */}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              About <span className="text-[#C71585]">Smart Study Center</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering students with quality education and personalized
              learning experiences since 2015.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-900">
                Our <span className="text-[#C71585]">Story</span>{" "}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Smart Study Center was founded with a simple yet powerful
                mission: to make quality education accessible to every student,
                regardless of their location or background. We believe that
                every student deserves personalized attention and expert
                guidance to unlock their full potential.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Over the years, we have grown from a small tutoring center to a
                comprehensive online learning platform, serving thousands of
                students across the globe. Our success is built on the
                foundation of passionate educators, innovative teaching methods,
                and a deep commitment to student success.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we continue to evolve and adapt, incorporating the latest
                educational technology and pedagogy to ensure our students
                receive the best possible learning experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="absolute inset-0  rounded-3xl blur-2xl"></div>
              <div className="relative bg-white/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <Image
                  width={300}
                  height={300}
                  priority
                  quality={100}
                  src="/logo.png"
                  alt="About Us"
                  className="w-full h-auto rounded-2xl shadow-xl object-contain"
                />
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Target,
                title: "Our Mission",
                description:
                  "To provide accessible, high-quality education that empowers students to achieve their academic goals and unlock their full potential.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                description:
                  "To be the leading educational platform that transforms lives through personalized learning and expert mentorship.",
              },
              {
                icon: Heart,
                title: "Our Values",
                description:
                  "Excellence, Integrity, Innovation, and Student-Centricity guide everything we do.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl"></div>
                <div className="relative p-8 space-y-4 text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#C71585] to-[#FF1493] rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Why Students Choose Us
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: "Expert Faculty",
                  value: "100+",
                  description: "Qualified Educators",
                },
                {
                  icon: Users,
                  title: "Global Reach",
                  value: "5000+",
                  description: "Active Students",
                },
                {
                  icon: TrendingUp,
                  title: "Success Rate",
                  value: "98%",
                  description: "Goal Achievement",
                },
              ].map((stat, index) => (
                <div key={index} className="text-center space-y-3">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#C71585] to-[#FF1493] rounded-full flex items-center justify-center">
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-[#C71585]">
                    {stat.title}
                  </div>
                  <div className="text-gray-600">{stat.description}</div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </section>
    </main>
  );
}
