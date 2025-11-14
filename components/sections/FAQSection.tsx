'use client';

import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How do I enroll in a course?',
    answer: 'Simply browse our course catalog, select the course you are interested in, and click the "Enroll Now" button. You will be guided through a simple registration process.',
  },
  {
    question: 'Are the classes live or recorded?',
    answer: 'We offer both live interactive classes and recorded sessions. Live classes allow you to interact with instructors in real-time, while recorded sessions give you the flexibility to learn at your own pace.',
  },
  {
    question: 'What is the refund policy?',
    answer: 'We offer a 7-day money-back guarantee. If you are not satisfied with the course within the first 7 days, you can request a full refund, no questions asked.',
  },
  {
    question: 'Do I receive a certificate upon completion?',
    answer: 'Yes! Upon successful completion of a course and passing all assessments, you will receive a certificate of completion that you can share on your resume or LinkedIn profile.',
  },
  {
    question: 'Can I interact with mentors?',
    answer: 'Absolutely! Our platform includes live Q&A sessions, discussion forums, and one-on-one mentorship opportunities where you can directly interact with expert mentors.',
  },
  {
    question: 'What subjects and courses are available?',
    answer: 'We offer a wide range of courses including Mathematics, Science, English, Programming, Test Preparation, and many more. Our catalog is constantly expanding to meet student needs.',
  },
  {
    question: 'Is there a mobile app available?',
    answer: 'Yes, our mobile app is available for both iOS and Android devices, allowing you to learn on the go with full access to all course materials and live classes.',
  },
  {
    question: 'How can I track my progress?',
    answer: 'Our platform features a comprehensive dashboard where you can track your course progress, view grades, monitor assignment deadlines, and see detailed analytics of your performance.',
  },
];

export default function FAQSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C71585]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-[#C71585]">Questions</span>
          </h2>
          <p className="text-lg text-gray-600">
            Have questions? We have got answers to help you get started.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl p-4 md:p-8"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/80 rounded-xl border border-gray-200 px-6 data-[state=open]:shadow-md transition-all"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-[#C71585] transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
