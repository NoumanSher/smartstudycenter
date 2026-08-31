"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  CheckCircle2,
  BookOpen,
  Clock,
  Users,
  Star,
  GraduationCap,
  ChevronRight,
  ArrowRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { CourseDetail, ProgramTab } from "@/lib/courses-data";

interface CourseDetailViewProps {
  course: CourseDetail;
  allCourses: CourseDetail[];
}

export default function CourseDetailView({
  course,
  allCourses,
}: CourseDetailViewProps) {
  const [activeTabId, setActiveTabId] = useState<string>(
    course.tabs[0]?.id || ""
  );

  const activeTab: ProgramTab | undefined =
    course.tabs.find((t) => t.id === activeTabId) || course.tabs[0];

  const whatsappMessage = encodeURIComponent(
    `Hello Smart Study Center, I am interested in enrolling in the ${course.title} - ${activeTab?.label} program. Please provide more details.`
  );

  const otherCourses = allCourses.filter((c) => c.slug !== course.slug);

  return (
    <main className="min-h-screen pt-28 pb-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
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
            <li>
              <Link
                href="/courses"
                className="hover:text-[#C71585] transition-colors py-1 inline-block font-medium"
              >
                Courses
              </Link>
            </li>
            <li>
              <ChevronRight className="w-4 h-4 text-gray-400 inline" />
            </li>
            <li className="font-semibold text-gray-800" aria-current="page">
              {course.title}
            </li>
          </ol>
        </nav>

        {/* Course Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#C71585]/10 text-[#C71585] mb-4">
            <GraduationCap className="w-4 h-4" />
            <span>{course.category}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            {course.heroHeading}
          </h1>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-4xl">
            {course.heroDescription}
          </p>

          {/* Quick Metrics Bar */}
          <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-gray-200/80 text-sm text-gray-600">
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
              <span className="font-semibold text-gray-900">{course.rating}</span>
              <span className="text-gray-500">Student Rating</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-[#C71585]" />
              <span className="font-semibold text-gray-900">{course.students}</span>
              <span className="text-gray-500">Enrolled Students</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-blue-600" />
              <span className="font-semibold text-gray-900">{course.duration}</span>
              <span className="text-gray-500">Program Duration</span>
            </div>
          </div>
        </div>

        {/* Tab Pills Navigation */}
        <div className="mb-8">
          <div className="flex items-center gap-2.5 overflow-x-auto pb-3 pt-1 scrollbar-none no-scrollbar">
            {course.tabs.map((tab) => {
              const isActive = tab.id === activeTab?.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  type="button"
                  className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C71585] ${
                    isActive
                      ? "bg-[#C71585] text-white shadow-md shadow-[#C71585]/30 font-semibold"
                      : "bg-[#F3F4F6] text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
          <div className="h-px bg-gray-200 w-full mt-2" />
        </div>

        {/* Active Tab Content Area */}
        {activeTab && (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="space-y-10"
            >
              {/* About Program Section */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-2.5 mb-3">
                  <BookOpen className="w-5 h-5 text-[#C71585]" />
                  <h2 className="text-2xl font-bold text-gray-900">
                    {activeTab.aboutTitle || "About Program"}
                  </h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                  {activeTab.aboutDescription}
                </p>

                {/* Duration & Eligibility Tags */}
                {(activeTab.duration || activeTab.eligibility) && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-100">
                    {activeTab.duration && (
                      <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">
                          Program Duration
                        </span>
                        <span className="text-sm sm:text-base font-semibold text-gray-900">
                          {activeTab.duration}
                        </span>
                      </div>
                    )}
                    {activeTab.eligibility && (
                      <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1">
                          Eligibility Criteria
                        </span>
                        <span className="text-sm sm:text-base font-semibold text-gray-900">
                          {activeTab.eligibility}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Documents Required For Admission */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-2.5 mb-4">
                  <FileText className="w-5 h-5 text-[#C71585]" />
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Documents Required For Admission
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-4">
                  {activeTab.documentsRequired.map((doc, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50/80 border border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-800 font-medium">
                        {doc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Subjects / Curriculum (If available) */}
              {activeTab.keySubjects && activeTab.keySubjects.length > 0 && (
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-2.5 mb-4">
                    <GraduationCap className="w-5 h-5 text-[#C71585]" />
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      Key Subjects & Syllabus Focus
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2.5 mt-3">
                    {activeTab.keySubjects.map((subject, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-semibold bg-pink-50 text-[#C71585] border border-pink-100"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Program Highlights (If available) */}
              {activeTab.highlights && activeTab.highlights.length > 0 && (
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-2.5 mb-4">
                    <Sparkles className="w-5 h-5 text-[#C71585]" />
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      Why Choose This Track at Smart Study Center
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    {activeTab.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-pink-50/40 to-purple-50/20 border border-pink-100/70"
                      >
                        <div className="w-2 h-2 rounded-full bg-[#C71585] mt-2 shrink-0" />
                        <span className="text-sm sm:text-base text-gray-800">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Call To Action Card */}
              <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white rounded-2xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div>
                    <span className="text-[#C71585] font-semibold text-sm tracking-wide uppercase">
                      Ready to start your journey?
                    </span>
                    <h4 className="text-2xl sm:text-3xl font-bold mt-1 text-white">
                      Enroll in {course.shortTitle} - {activeTab.label}
                    </h4>
                    <p className="text-gray-300 text-sm sm:text-base mt-2 max-w-xl">
                      Get expert mentorship, live interactive sessions, and comprehensive study materials from top-ranked educators.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                    <Link
                      href={`/contact?course=${course.slug}&program=${encodeURIComponent(
                        activeTab.label
                      )}`}
                      className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold bg-[#C71585] hover:bg-[#a0116b] text-white transition-colors shadow-lg text-center"
                    >
                      <span>Apply For Admission</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>

                    <a
                      href={`https://wa.me/923000412637?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors text-center"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      <span>WhatsApp Inquiry</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}

        {/* Explore Other Programs */}
        {otherCourses.length > 0 && (
          <div className="mt-20 pt-12 border-t border-gray-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Explore Other Academic Programs
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Discover more classes and specialized tracks at Smart Study Center.
                </p>
              </div>
              <Link
                href="/courses"
                className="hidden sm:inline-flex items-center text-sm font-semibold text-[#C71585] hover:underline"
              >
                View All Courses <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {otherCourses.slice(0, 3).map((other) => (
                <Link
                  key={other.slug}
                  href={`/courses/${other.slug}`}
                  className="group bg-white rounded-2xl p-5 border border-gray-200/80 hover:border-[#C71585]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block px-3 py-1 bg-[#C71585]/10 text-[#C71585] rounded-full text-xs font-semibold mb-3">
                      {other.category}
                    </span>
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-[#C71585] transition-colors">
                      {other.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                      {other.cardDescription}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-100 text-xs font-medium text-gray-500">
                    <span>{other.tabs.length} Streams / Tracks</span>
                    <span className="text-[#C71585] flex items-center font-semibold group-hover:translate-x-0.5 transition-transform">
                      Details <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
