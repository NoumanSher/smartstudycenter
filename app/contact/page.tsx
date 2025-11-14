'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
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
              Get In <span className="text-[#C71585]">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions? We would love to hear from you. Send us a message and we will respond as soon as possible.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="bg-white/40 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>

                <div className="space-y-6">
                  {[
                    { icon: MapPin, title: 'Our Location', content: '123 Education Street, Learning City, 12345' },
                    { icon: Phone, title: 'Phone Number', content: '+1 (555) 123-4567' },
                    { icon: Mail, title: 'Email Address', content: 'info@smartstudy.com' },
                    { icon: Clock, title: 'Working Hours', content: 'Mon - Fri: 9:00 AM - 6:00 PM' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#C71585] to-[#FF1493] rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-gray-600">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/40 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Follow Us</h3>
                <p className="text-gray-600 mb-6">Stay connected with us on social media for updates and announcements.</p>
                <div className="flex space-x-4">
                  {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((platform) => (
                    <button
                      key={platform}
                      className="px-6 py-2 bg-gradient-to-r from-[#C71585] to-[#FF1493] text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                      {platform}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/40 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-xl"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                    <Input placeholder="John" className="bg-white/60" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                    <Input placeholder="Doe" className="bg-white/60" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <Input type="email" placeholder="john@example.com" className="bg-white/60" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                  <Input type="tel" placeholder="+1 (555) 123-4567" className="bg-white/60" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                  <Input placeholder="How can we help you?" className="bg-white/60" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <Textarea placeholder="Tell us more about your inquiry..." rows={5} className="bg-white/60" />
                </div>

                <Button className="w-full bg-gradient-to-r from-[#C71585] to-[#FF1493] text-white font-semibold py-6 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
