"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  GraduationCap,
  UserCheck,
  Compass,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  ArrowRight,
  MessageCircle,
  HeartHandshake,
  CheckCircle2,
  Award,
} from "lucide-react";

const values = [
  {
    number: "01",
    title: "Affordable Quality Education",
    tagline: "Equal Access For All",
    description:
      "We believe that every student deserves access to excellent education at an affordable cost, regardless of where they live.",
    icon: GraduationCap,
    accent: "from-pink-500/10 to-rose-500/10",
    iconColor: "text-[#C71585]",
    badgeBg: "bg-[#C71585]/10 text-[#C71585]",
  },
  {
    number: "02",
    title: "Student-Centred Learning",
    tagline: "Personalized Focus",
    description:
      "Every student has different strengths, needs, and goals. We provide individual attention and guidance to help each learner succeed.",
    icon: UserCheck,
    accent: "from-purple-500/10 to-pink-500/10",
    iconColor: "text-purple-600",
    badgeBg: "bg-purple-100 text-purple-700",
  },
  {
    number: "03",
    title: "Career Guidance & Counselling",
    tagline: "Future-Ready Paths",
    description:
      "We support students and parents with proper career counselling, helping them choose the right subjects, academic fields, and future career paths.",
    icon: Compass,
    accent: "from-blue-500/10 to-indigo-500/10",
    iconColor: "text-blue-600",
    badgeBg: "bg-blue-100 text-blue-700",
  },
  {
    number: "04",
    title: "Integrity & Respect",
    tagline: "Trust & Discipline",
    description:
      "We build trust through honesty, discipline, respect, and responsible teaching across all interactions with students and parents.",
    icon: ShieldCheck,
    accent: "from-emerald-500/10 to-teal-500/10",
    iconColor: "text-emerald-600",
    badgeBg: "bg-emerald-100 text-emerald-700",
  },
  {
    number: "05",
    title: "Continuous Improvement",
    tagline: "Modern Methodology",
    description:
      "We continuously improve our teaching methods, learning resources, and online platform to meet modern educational needs.",
    icon: TrendingUp,
    accent: "from-amber-500/10 to-orange-500/10",
    iconColor: "text-amber-600",
    badgeBg: "bg-amber-100 text-amber-700",
  },
  {
    number: "06",
    title: "Confidence & Growth",
    tagline: "Unlocking Full Potential",
    description:
      "We encourage students to ask questions, overcome challenges, build confidence, and achieve their full academic and personal potential.",
    icon: Sparkles,
    accent: "from-pink-500/10 to-fuchsia-500/10",
    iconColor: "text-[#C71585]",
    badgeBg: "bg-pink-100 text-[#C71585]",
  },
];

const impactPillars = [
  {
    title: "1-on-1 Personalized Attention",
    desc: "Individualized doubt resolution and progress tracking for every learner.",
  },
  {
    title: "Global Reach & Accessibility",
    desc: "Seamless virtual classes accessible to students across Pakistan and abroad.",
  },
  {
    title: "Proven Academic Excellence",
    desc: "A rich legacy of high board scores, O/A-Levels distinctions, and entry test success.",
  },
];

export default function ValuesPage() {
  const whatsappUrl =
    "https://wa.me/923000412637?text=Hello%20Smart%20Study%20Center%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20programs%20and%20values.";

  return (
    <main className="min-h-screen pt-28 pb-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-[#C71585]/10 text-[#C71585] mb-5"
          >
            <HeartHandshake className="w-4 h-4" />
            <span>Guiding Principles</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6"
          >
            Our <span className="text-[#C71585]">Values</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 leading-relaxed"
          >
            At Smart Study Center, our core values guide every lecture, mentor
            interaction, and academic roadmap we design for our students.
          </motion.p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative flex flex-col justify-between bg-white rounded-3xl p-8 border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[#C71585]/30 transition-all duration-300"
              >
                <div>
                  {/* Top Bar: Icon + Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.accent} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`w-7 h-7 ${item.iconColor}`} />
                    </div>
                    <span className="text-3xl font-extrabold text-gray-200 group-hover:text-[#C71585]/20 transition-colors">
                      {item.number}
                    </span>
                  </div>

                  {/* Tag */}
                  <span
                    className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${item.badgeBg}`}
                  >
                    {item.tagline}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#C71585] transition-colors mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center text-xs font-semibold text-gray-400 group-hover:text-[#C71585] transition-colors">
                  <CheckCircle2 className="w-4 h-4 mr-1.5 text-emerald-500" />
                  <span>Core SSC Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Why Values Matter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-md mb-20"
        >
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C71585] mb-2 block">
                The SSC Difference
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                How Our Values Translate Into Student Success
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                We do not just teach textbooks—we cultivate discipline, critical
                thinking, and lifelong ambition in each young learner.
              </p>
            </div>

            <div className="lg:col-span-2 grid sm:grid-cols-3 gap-4">
              {impactPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-2xl p-5 border border-gray-100 flex flex-col justify-between"
                >
                  <Award className="w-6 h-6 text-[#C71585] mb-3" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1.5">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <span className="text-[#C71585] font-semibold text-xs sm:text-sm tracking-wide uppercase">
                Join Smart Study Center
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold mt-1 text-white">
                Experience Education Rooted in Strong Values
              </h3>
              <p className="text-gray-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
                Connect with our expert mentors and academic advisors today to
                find the right track for your child&apos;s educational journey.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3.5 w-full md:w-auto shrink-0">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold bg-[#C71585] hover:bg-[#a0116b] text-white transition-all shadow-lg text-center"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-all text-center"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
