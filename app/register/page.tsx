'use client';

import { motion } from 'framer-motion';
import { User, Mail, Phone, Lock, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function RegisterPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-[#f8f9fa] via-[#fff5f8] to-[#f0f4ff] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#C71585]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-[#C71585] to-[#FF1493] rounded-full flex items-center justify-center">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Start Your <span className="text-[#C71585]">Learning Journey</span>
            </h1>
            <p className="text-xl text-gray-600">
              Join thousands of students transforming their futures with Smart Study Center
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/60 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8 md:p-12"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input placeholder="John" className="pl-12 bg-white/60" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input placeholder="Doe" className="pl-12 bg-white/60" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input type="email" placeholder="john@example.com" className="pl-12 bg-white/60" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input type="tel" placeholder="+1 (555) 123-4567" className="pl-12 bg-white/60" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Grade Level
                </label>
                <Select>
                  <SelectTrigger className="bg-white/60">
                    <SelectValue placeholder="Select your grade level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="elementary">Elementary (1-5)</SelectItem>
                    <SelectItem value="middle">Middle School (6-8)</SelectItem>
                    <SelectItem value="high">High School (9-12)</SelectItem>
                    <SelectItem value="college">College/University</SelectItem>
                    <SelectItem value="graduate">Graduate School</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Area of Interest
                </label>
                <Select>
                  <SelectTrigger className="bg-white/60">
                    <SelectValue placeholder="Select your primary interest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="math">Mathematics</SelectItem>
                    <SelectItem value="science">Science</SelectItem>
                    <SelectItem value="english">English & Literature</SelectItem>
                    <SelectItem value="programming">Programming</SelectItem>
                    <SelectItem value="test-prep">Test Preparation</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Create Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input type="password" placeholder="••••••••" className="pl-12 bg-white/60" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input type="password" placeholder="••••••••" className="pl-12 bg-white/60" />
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1" id="terms" />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the Terms of Service and Privacy Policy
                </label>
              </div>

              <Button className="w-full bg-gradient-to-r from-[#C71585] to-[#FF1493] text-white font-semibold py-6 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
                Create Account
              </Button>

              <p className="text-center text-gray-600 text-sm">
                Already have an account?{' '}
                <a href="#" className="text-[#C71585] font-semibold hover:underline">
                  Sign In
                </a>
              </p>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-[#C71585]">5000+</div>
                  <div className="text-xs text-gray-600">Students</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#C71585]">100+</div>
                  <div className="text-xs text-gray-600">Expert Mentors</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#C71585]">98%</div>
                  <div className="text-xs text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
