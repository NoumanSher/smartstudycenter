"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    name: "Muhammad Ghous",
    role: "College Student",
    image: "/s1.jpg",
    content:
      "Smart Study Center transformed my learning experience. The personalized approach and expert mentors helped me improve my grades significantly!",
    rating: 5,
  },
  {
    name: "Ammar bin Ashraf",
    role: "College Student",
    image: "/s2.jpg",
    content:
      "As a hardware and software professional trained at Smart Study Center, I gained strong technical foundations, practical problem-solving skills, and industry-relevant knowledge for my career.",
    rating: 5,
  },
  {
    name: "Maham Rauf",
    role: "College Student",
    image: "/s3.jpg",
    content:
      "Administrative processes are smooth and student-focused, ensuring timely support and clear communication. Smart Study Center emphasis on values, discipline, and innovation fosters a culture of continuous improvement.",
    rating: 5,
  },
  {
    name: "Saqlain Hayat",
    role: "College Student",
    image: "/s4.jpg",
    content:
      "As a chemical engineer, I appreciate Smart Study Center’s focus on analytical thinking, problem-solving skills, and strong academic guidance for students.",
    rating: 5,
  },
  {
    name: "Nouman Khan",
    role: "College Student",
    image: "/s5.png",
    content:
      "As a software engineer trained at Smart Study Center, I developed strong programming fundamentals, logical thinking, and practical skills that greatly improved my professional growth.",
    rating: 5,
  },
  {
    name: "Anas",
    role: "High School Student (Saudi Arabia)",
    image: "/s6.png",
    content:
      "The comprehensive curriculum and expert guidance helped me master complex subjects with ease.",
    rating: 5,
  },
  {
    name: "Bilal",
    role: "High School Student (Saudi Arabia)",
    image: "/s7.png",
    content:
      "The structured curriculum and expert mentorship made mastering complex subjects much easier for me.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#F8F9FC] py-20 md:py-24">
      {/* <div className="absolute top-0 left-0 w-96 h-96 bg-[#C71585]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-[#C71585]">Students Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from students who have achieved their dreams with Smart
            Study Center.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl transition-all duration-300 ${
                  hoveredIndex === index ? "scale-105" : ""
                }`}
              ></div>
              <div className="relative p-8 space-y-4">
                <Quote className="w-10 h-10 text-[#C71585] opacity-50" />

                <p className="text-gray-700 leading-relaxed">
                  {testimonial.content}
                </p>

                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#FFD700] text-[#FFD700]"
                    />
                  ))}
                </div>

                <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                  <Image
                    src={testimonial.image}
                    width={48}
                    height={48}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#C71585]"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
