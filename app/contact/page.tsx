// app/contact/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'; 
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  gradeLevel?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [gradeLevel, setGradeLevel] = useState('');
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [otherGrade, setOtherGrade] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<FormErrors>({});

  const handleGradeChange = (value: string) => {
    setGradeLevel(value);
    setShowOtherInput(value === 'other');
    if (value !== 'other') {
      setOtherGrade('');
    }
    setErrors(prev => ({ ...prev, gradeLevel: undefined }));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Grade Level validation
    if (!gradeLevel) {
      newErrors.gradeLevel = 'Please select a grade level';
    } else if (gradeLevel === 'other' && !otherGrade.trim()) {
      newErrors.gradeLevel = 'Please specify your grade level';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const data = {
      ...formData,
      gradeLevel: gradeLevel === 'other' ? otherGrade : gradeLevel,
    };

    try {
      const response = await fetch('/api/send-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        });
        setGradeLevel('');
        setShowOtherInput(false);
        setOtherGrade('');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen pt-20">
      <section className="py-20 relative overflow-hidden">
        {/* <div className="absolute top-0 left-0 w-96 h-96 bg-[#C71585]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div> */}

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
              <div className="bg-white/40 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>

                <div className="space-y-6">
                  {[
                    { icon: MapPin, title: 'Our Location', content: 'Lahore , Pakistan' },
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

              <div className="bg-white/40 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Follow Us</h3>
                <p className="text-gray-600 mb-6">Stay connected with us on social media for updates and announcements.</p>
                <div className="flex gap-2 flex-wrap">
                  {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((platform) => (
                    <button
                      key={platform}
                      className=" px-6 py-2 bg-gradient-to-r from-[#C71585] to-[#FF1493] text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
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
              className="bg-white/40 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-xl"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="John" 
                      className={`bg-white/60 ${errors.firstName ? 'border-red-500' : ''}`}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="Doe" 
                      className={`bg-white/60 ${errors.lastName ? 'border-red-500' : ''}`}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input 
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    type="email" 
                    placeholder="john@example.com" 
                    className={`bg-white/60 ${errors.email ? 'border-red-500' : ''}`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <Input 
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    type="tel" 
                    placeholder="+1 (555) 123-4567" 
                    className={`bg-white/60 ${errors.phone ? 'border-red-500' : ''}`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Grade Level <span className="text-red-500">*</span>
                  </label>
                  <Select value={gradeLevel} onValueChange={handleGradeChange}>
                    <SelectTrigger className={`bg-white/60 ${errors.gradeLevel ? 'border-red-500' : ''}`}>
                      <SelectValue placeholder="Select your grade level" />
                    </SelectTrigger>
                    <SelectContent className='bg-white'>
                      <SelectItem value="elementary">Elementary (1-5)</SelectItem>
                      <SelectItem value="middle">Middle School (6-8)</SelectItem>
                      <SelectItem value="high">High School (9-12)</SelectItem>
                      <SelectItem value="college">College/University</SelectItem>
                      <SelectItem value="graduate">Graduate School</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.gradeLevel && (
                    <p className="text-red-500 text-xs mt-1">{errors.gradeLevel}</p>
                  )}
                  
                  {showOtherInput && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3"
                    >
                      <Input
                        value={otherGrade}
                        onChange={(e) => {
                          setOtherGrade(e.target.value);
                          setErrors(prev => ({ ...prev, gradeLevel: undefined }));
                        }}
                        placeholder="Please specify your grade level"
                        className="bg-white/60"
                      />
                    </motion.div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea 
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us more about your inquiry..." 
                    rows={5} 
                    className={`bg-white/60 ${errors.message ? 'border-red-500' : ''}`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
                  >
                    ✓ Message sent successfully! We&apos;ll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg"
                  >
                    ✗ Failed to send message. Please try again.
                  </motion.div>
                )}

                <Button 
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#C71585] to-[#FF1493] text-white font-semibold py-6 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

