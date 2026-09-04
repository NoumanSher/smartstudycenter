// app/contact/page.tsx
'use client';
import { isValidPhoneNumber } from 'libphonenumber-js';
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
} else if (!isValidPhoneNumber(formData.phone)) {
  newErrors.phone = 'Please enter a valid phone number e.g +966541935900';
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
    <main className="min-h-screen pt-24 sm:pt-28 pb-16 overflow-x-hidden">
      <section className="relative overflow-hidden w-full">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10 sm:mb-16"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
              Get In <span className="text-[#C71585]">Touch</span>
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Have questions about our academic programs? Send us a message or reach out on WhatsApp and our team will assist you promptly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start w-full">
            {/* Left Column: Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-6 sm:space-y-8 w-full min-w-0"
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-5 sm:p-7 md:p-8 border border-white/40 shadow-lg">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>

                <div className="space-y-5 sm:space-y-6">
                  {[
                    { icon: MapPin, title: 'Our Location', content: 'Lahore, Pakistan (Global Distance Learning)' },
                    { 
                      icon: Phone, 
                      title: 'WhatsApp & Phone', 
                      content: (
                        <a 
                          href="https://wa.me/923000412637?text=Hello%2C%20I%27m%20interested%20in%20your%20services" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-[#C71585] font-semibold hover:underline"
                        >
                          +92 300 0412637
                        </a>
                      ) 
                    },
                    { 
                      icon: Mail, 
                      title: 'Email Address', 
                      content: (
                        <a 
                          href="mailto:support.smartstudycenter@gmail.com" 
                          className="text-gray-700 hover:text-[#C71585] break-all"
                        >
                          support.smartstudycenter@gmail.com
                        </a>
                      ) 
                    },
                    { icon: Clock, title: 'Working Hours', content: 'Mon - Fri: 9:00 AM - 6:00 PM (PKT)' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3.5 sm:space-x-4 min-w-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#C71585] to-[#FF1493] rounded-xl flex items-center justify-center shrink-0 shadow-md">
                        <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{item.title}</h3>
                        <div className="text-gray-600 text-xs sm:text-sm mt-0.5">{item.content}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-5 sm:p-7 md:p-8 border border-white/40 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Follow Us</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-5">Stay connected with us on social media for curriculum updates and announcements.</p>
                <div className="flex gap-2.5 flex-wrap">
                  {[
                    { platform: 'Facebook', href: "https://web.facebook.com/profile.php?id=61579559790036" },
                    { platform: 'Instagram', href: "https://www.instagram.com/smartstudycenteronline" }
                  ].map(({ platform, href }) => (
                    <a
                      key={platform}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 text-xs sm:text-sm bg-gradient-to-r from-[#C71585] to-[#FF1493] text-white font-semibold rounded-full hover:shadow-md hover:scale-105 transition-all duration-300"
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/90 backdrop-blur-xl rounded-2xl p-5 sm:p-7 md:p-8 border border-white/40 shadow-xl w-full min-w-0"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

              <div className="space-y-4 sm:space-y-5 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  <div className="w-full min-w-0">
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="First Name" 
                      className={`w-full !placeholder-gray-400 bg-white text-sm ${errors.firstName ? 'border-red-500' : ''}`}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                    )}
                  </div>
                  <div className="w-full min-w-0">
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="Last Name" 
                      className={`w-full !placeholder-gray-400 bg-white text-sm ${errors.lastName ? 'border-red-500' : ''}`}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="w-full min-w-0">
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input 
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    type="email" 
                    placeholder="Enter email address" 
                    className={`w-full !placeholder-gray-400 bg-white text-sm ${errors.email ? 'border-red-500' : ''}`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="w-full min-w-0">
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                    Phone / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <Input 
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    type="tel" 
                    placeholder="Enter phone number with country code" 
                    className={`w-full !placeholder-gray-400 bg-white text-sm ${errors.phone ? 'border-red-500' : ''}`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                <div className="w-full min-w-0">
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                    Grade / Program <span className="text-red-500">*</span>
                  </label>
                  <Select value={gradeLevel} onValueChange={handleGradeChange}>
                    <SelectTrigger className={`w-full bg-white text-sm ${errors.gradeLevel ? 'border-red-500' : ''}`}>
                      <SelectValue placeholder="Select your grade / program" />
                    </SelectTrigger>
                    <SelectContent className='bg-white'>
                      <SelectItem value="juniors">Junior Classes (6th - 8th)</SelectItem>
                      <SelectItem value="matric">Matriculation (9th - 10th)</SelectItem>
                      <SelectItem value="intermediate">Intermediate (F.Sc / ICS / I.Com)</SelectItem>
                      <SelectItem value="o-level">Cambridge O-Level / IGCSE</SelectItem>
                      <SelectItem value="a-level">Cambridge / Edexcel A-Level</SelectItem>
                      <SelectItem value="entry-test">Entry Test Prep (MDCAT / ECAT / NET)</SelectItem>
                      <SelectItem value="other">Other Inquiry</SelectItem>
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
                      className="mt-2.5 w-full min-w-0"
                    >
                      <Input
                        value={otherGrade}
                        onChange={(e) => {
                          setOtherGrade(e.target.value);
                          setErrors(prev => ({ ...prev, gradeLevel: undefined }));
                        }}
                        placeholder="Please specify your grade or subject"
                        className="w-full  bg-white text-sm"
                      />
                    </motion.div>
                  )}
                </div>

                <div className="w-full min-w-0">
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea 
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us about your learning goals or questions..." 
                    rows={4} 
                    className={`w-full !placeholder-gray-400 bg-white text-sm ${errors.message ? 'border-red-500' : ''}`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 bg-green-100 border border-green-400 text-green-700 rounded-xl text-xs sm:text-sm font-medium"
                  >
                    ✓ Message sent successfully! Our academic team will get back to you shortly.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 bg-red-100 border border-red-400 text-red-700 rounded-xl text-xs sm:text-sm font-medium"
                  >
                    ✗ Failed to send message. Please reach us directly via WhatsApp.
                  </motion.div>
                )}

                <Button 
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#C71585] to-[#FF1493] text-white font-semibold py-4 sm:py-5 rounded-xl hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base mt-2"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <Send className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
