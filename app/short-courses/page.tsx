// app/short-courses/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Languages,
  TrendingUp,
  Bot,
  CheckCircle2,
  Clock,
  Award,
  Users,
  ChevronRight,
  MessageCircle,
  ArrowRight,
  Target,
  BookOpen,
  Laptop,
} from "lucide-react";

interface ShortCourseData {
  id: string;
  name: string;
  shortTag: string;
  tagline: string;
  icon: typeof Languages;
  description: string[];
  focusPoints: { title: string; desc: string }[];
  idealFor: string[];
  duration: string;
  mode: string;
  certificate: string;
}

const shortCourses: ShortCourseData[] = [
  {
    id: "english",
    name: "English Language Course",
    shortTag: "Communication & Fluency",
    tagline: "Build confidence in speaking, writing, reading, and everyday communication.",
    icon: Languages,
    description: [
      "Build confidence in speaking, writing, reading, and everyday communication.",
      "This course focuses on practical grammar, vocabulary, pronunciation, and conversation skills.",
      "Students learn through simple activities, real-life examples, and guided practice.",
      "It is ideal for learners who want to improve their English for education, work, or daily life.",
    ],
    focusPoints: [
      {
        title: "Everyday Conversation & Fluency",
        desc: "Overcome hesitation with regular interactive speaking drills and real-world conversation scenarios.",
      },
      {
        title: "Practical Grammar & Vocabulary",
        desc: "Master key sentence structures, idioms, and functional vocabulary without rote memorization.",
      },
      {
        title: "Pronunciation & Phonetics",
        desc: "Learn clear pronunciation, stress, and intonation for natural English communication.",
      },
      {
        title: "Academic & Professional Writing",
        desc: "Write effective emails, essays, summaries, and formal correspondence with clarity.",
      },
    ],
    idealFor: [
      "School & college students preparing for presentations or exams",
      "Job seekers and professionals seeking workplace fluency",
      "Anyone wishing to communicate clearly and confidently in daily life",
    ],
    duration: "8-12 Weeks (Interactive Live Sessions)",
    mode: "Live Online Classes + Recorded Revision",
    certificate: "Verified Certificate of Completion",
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing Course",
    shortTag: "Growth & Online Branding",
    tagline: "Learn how businesses grow online through modern digital marketing strategies.",
    icon: TrendingUp,
    description: [
      "Learn how businesses grow online through modern digital marketing strategies.",
      "This course covers social media marketing, content creation, branding, and online advertising.",
      "Students will understand how to reach the right audience and create effective digital campaigns.",
      "It is designed for anyone who wants to build practical marketing skills for today’s digital world.",
    ],
    focusPoints: [
      {
        title: "Social Media Strategy",
        desc: "Build engaging business profiles across Facebook, Instagram, LinkedIn, and TikTok.",
      },
      {
        title: "Content Creation & Storytelling",
        desc: "Design impactful visual content, captions, and creative posts that hook viewers.",
      },
      {
        title: "Targeted Online Advertising",
        desc: "Run Meta Ads and paid campaigns with precise audience targeting and budget control.",
      },
      {
        title: "Branding & Campaign Analytics",
        desc: "Measure clicks, conversions, and ROI using modern digital marketing analytics.",
      },
    ],
    idealFor: [
      "Aspiring digital marketers and freelancers looking for high-demand skills",
      "Entrepreneurs and small business owners growing their brand online",
      "Students aiming to start remote freelancing in digital media",
    ],
    duration: "8-12 Weeks (Project-Based Learning)",
    mode: "Live Online Classes + Practical Campaign Work",
    certificate: "Verified Certificate of Completion",
  },
  {
    id: "ai",
    name: "Artificial Intelligence Course",
    shortTag: "Future-Ready AI Skills",
    tagline: "Discover the basics of Artificial Intelligence and its growing role in everyday life.",
    icon: Bot,
    description: [
      "Discover the basics of Artificial Intelligence and its growing role in everyday life.",
      "This course introduces AI tools, smart technologies, and practical ways to use AI effectively.",
      "Students will learn how AI can support learning, creativity, productivity, and future careers.",
      "It is a beginner-friendly course for learners who want to understand the technology shaping tomorrow.",
    ],
    focusPoints: [
      {
        title: "Introduction to AI & Smart Tools",
        desc: "Understand how Large Language Models, generative AI, and modern smart algorithms function.",
      },
      {
        title: "Prompt Engineering & Productivity",
        desc: "Craft effective prompts to boost study speed, draft content, summarize research, and solve problems.",
      },
      {
        title: "Creative AI for Media & Automation",
        desc: "Harness AI for image creation, voiceover synthesis, presentation building, and repetitive tasks.",
      },
      {
        title: "Ethics & Future Career Readiness",
        desc: "Learn responsible AI usage, data privacy essentials, and high-growth careers in the AI era.",
      },
    ],
    idealFor: [
      "Students who want an unfair academic advantage using AI tools smartly",
      "Professionals and creators wanting to 10x their productivity and workflow",
      "Curious beginners seeking a crystal-clear introduction to AI without coding",
    ],
    duration: "5-6 Months (Hands-On Tool Demonstrations)",
    mode: "Live Online Classes + Practical AI Labs",
    certificate: "Verified Certificate of Completion",
  },
];

export default function ShortCoursesPage() {
  const [activeTabId, setActiveTabId] = useState<string>(shortCourses[0].id);

  const activeCourse =
    shortCourses.find((c) => c.id === activeTabId) || shortCourses[0];

  const whatsappMessage = encodeURIComponent(
    `Hello Smart Study Center, I am interested in enrolling in the "${activeCourse.name}". Please provide details on schedule, fee, and admissions.`
  );

  return (
    <main className="min-h-screen pt-28 pb-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-900 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 relative z-10">
          <ol className="flex items-center space-x-2 text-sm text-gray-500 flex-wrap">
            <li>
              <Link
                href="/"
                className="hover:text-[#C71585] transition-colors py-1 inline-block"
              >
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="w-4 h-4 text-gray-400 inline" />
            </li>
            <li className="font-semibold text-gray-800" aria-current="page">
              Short Courses
            </li>
          </ol>
        </nav>

        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-[#C71585]/10 text-[#C71585] mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Skill Development & Future Readiness</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Professional <span className="text-[#C71585]">Short Courses</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed px-2">
            Build practical, high-impact skills designed for immediate academic,
            career, and personal growth with live mentorship and flexible schedules.
          </p>
        </div>

        {/* Course Selection Tabs */}
        <div className="mb-10">
          <div className="flex flex-wrap sm:flex-nowrap gap-3 p-1.5 bg-gray-100/90 rounded-2xl border border-gray-200/80 shadow-inner">
            {shortCourses.map((course) => {
              const Icon = course.icon;
              const isActive = course.id === activeTabId;
              return (
                <button
                  key={course.id}
                  onClick={() => setActiveTabId(course.id)}
                  className={`flex-1 flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 text-center ${
                    isActive
                      ? "bg-[#C71585] text-white shadow-md shadow-[#C71585]/25 scale-[1.01]"
                      : "text-gray-700 hover:text-[#C71585] hover:bg-white/80"
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-white" : "text-[#C71585]"}`} />
                  <span className="truncate">{course.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Tab Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCourse.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="space-y-8"
          >
            {/* Main Overview Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#C71585]/10 to-[#FF1493]/5 rounded-full blur-3xl -z-0 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-100">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#C71585]/10 text-[#C71585] mb-2">
                      {activeCourse.shortTag}
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">
                      {activeCourse.name}
                    </h2>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={`https://wa.me/923000412637?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20ba59] shadow-lg shadow-[#25D366]/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Inquire on WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Course Narrative Details */}
                <div className="space-y-4 mb-8">
                  {activeCourse.description.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="text-base sm:text-lg text-gray-700 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Quick Info Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="w-10 h-10 rounded-lg bg-[#C71585]/10 text-[#C71585] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Duration</p>
                      <p className="text-sm font-semibold text-gray-900">{activeCourse.duration}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="w-10 h-10 rounded-lg bg-[#C71585]/10 text-[#C71585] flex items-center justify-center shrink-0">
                      <Laptop className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Learning Mode</p>
                      <p className="text-sm font-semibold text-gray-900">{activeCourse.mode}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="w-10 h-10 rounded-lg bg-[#C71585]/10 text-[#C71585] flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Certification</p>
                      <p className="text-sm font-semibold text-gray-900">{activeCourse.certificate}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Modules & Focus Areas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#C71585]/10 flex items-center justify-center text-[#C71585]">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Key Learning Focus</h3>
                    <p className="text-xs text-gray-500">Core competencies covered in this course</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {activeCourse.focusPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-gray-50/70 border border-gray-100">
                      <CheckCircle2 className="w-5 h-5 text-[#C71585] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm text-gray-900">{point.title}</h4>
                        <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">{point.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Audience & Benefits */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#C71585]/10 flex items-center justify-center text-[#C71585]">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Who Should Enroll?</h3>
                      <p className="text-xs text-gray-500">Ideal candidates for this program</p>
                    </div>
                  </div>

                  <ul className="space-y-3.5 mb-8">
                    {activeCourse.idealFor.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                        <span className="w-2 h-2 rounded-full bg-[#C71585] mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Admission Support Box */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-[#C71585]/10 via-[#FF1493]/5 to-transparent border border-[#C71585]/20">
                  <h4 className="font-bold text-sm text-gray-900 mb-1">
                    Have questions about this course?
                  </h4>
                  <p className="text-xs text-gray-600 mb-4">
                    Our academic advisors are available on WhatsApp to guide you on syllabus details and batch timings.
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    <a
                      href={`https://wa.me/923000412637?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#25D366] text-white font-semibold text-xs hover:bg-[#20ba59] transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp</span>
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-800 font-semibold text-xs hover:text-[#C71585] hover:border-[#C71585] transition-all"
                    >
                      <span>Contact Us</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Smart Study Center Pillars */}
            <div className="bg-gradient-to-br from-[#C71585]/5 to-white rounded-3xl p-6 sm:p-10 border border-[#C71585]/15 shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-2">
                Why Learn With Smart Study Center?
              </h3>
              <p className="text-sm text-gray-600 text-center max-w-2xl mx-auto mb-8">
                Every short course is structured around real-world application, live mentor feedback, and individual attention.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm text-center">
                  <div className="w-12 h-12 rounded-xl bg-[#C71585]/10 text-[#C71585] flex items-center justify-center mx-auto mb-3">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-base text-gray-900 mb-1">Live & Interactive</h4>
                  <p className="text-xs text-gray-600">Engage in live sessions, ask questions in real-time, and get immediate instructor guidance.</p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm text-center">
                  <div className="w-12 h-12 rounded-xl bg-[#C71585]/10 text-[#C71585] flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-base text-gray-900 mb-1">Small Batch Mentorship</h4>
                  <p className="text-xs text-gray-600">Focused cohort sizes ensure every learner receives individual attention and constructive feedback.</p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm text-center">
                  <div className="w-12 h-12 rounded-xl bg-[#C71585]/10 text-[#C71585] flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-base text-gray-900 mb-1">Verified Credential</h4>
                  <p className="text-xs text-gray-600">Earn a certificate of completion from Smart Study Center to showcase on your CV and profiles.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
