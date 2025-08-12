'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Paperclip } from 'lucide-react';

const Career = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const router = useRouter();

  const handleResumeSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section className="bg-white text-black min-h-screen py-20 px-6 md:px-24 font-[Poppins]">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-red-600 mb-4"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Careers at FFuturewise
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          We're building the future of digital transformation — and we'd love to have passionate people like you join the mission.
        </motion.p>

        {/* Coming Soon */}
        <motion.div
          className="bg-white border-2 border-red-500 rounded-xl p-10 shadow-lg mb-12"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-red-600 mb-2">🚀 Openings Coming Soon</h2>
          <p className="text-gray-600">
            We’re preparing exciting roles across engineering, design, marketing, and operations. Check back soon or connect with us below!
          </p>
        </motion.div>

        {/* Culture & Perks */}
        <div className="grid md:grid-cols-2 gap-10 text-left mb-16">
          <motion.div
            className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl text-red-500 font-semibold mb-2">Why Work With Us?</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              <li>Cutting-edge tech (Next.js, AI, Cloud)</li>
              <li>Startup culture with global vision</li>
              <li>Inclusive, diverse & remote-first</li>
              <li>Mentorship and fast growth</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl text-red-500 font-semibold mb-2">Perks & Benefits</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              <li>Flexible working hours</li>
              <li>Performance bonuses</li>
              <li>Upskilling opportunities</li>
              <li>Health & wellness support</li>
            </ul>
          </motion.div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-red-600 mb-6">What Our Team Says</h3>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              {
                name: 'Sangaralingam D.',
                quote: 'Working at FFuturewise has been a career-defining experience. The culture here truly nurtures innovation.',
              },
              {
                name: 'Ram Mohan R.',
                quote: 'Every day here feels exciting — from launching AI features to learning something new every sprint.',
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200"
              >
                <p className="text-gray-700 italic mb-2">"{testimonial.quote}"</p>
                <p className="text-red-500 font-medium">- {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Resume Form */}
        <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 mb-16 max-w-xl mx-auto text-left">
          <h3 className="text-xl text-red-600 font-semibold mb-4">Drop Your Resume / Subscribe</h3>

          {formSubmitted ? (
            <div className="bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-md text-sm">
              ✅ Thank you! Your resume has been submitted. We’ll be in touch soon.
            </div>
          ) : (
            <form onSubmit={handleResumeSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 mb-4 border rounded-md text-sm"
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 mb-4 border rounded-md text-sm"
                required
              />
              <label className="flex items-center gap-2 mb-2 text-sm text-gray-700">
                <Paperclip size={16} />
                Attach your Resume
              </label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="w-full mb-4 text-sm file:border-0 file:mr-4 file:py-2 file:px-4 file:bg-red-600 file:text-white file:rounded-md file:cursor-pointer"
                required
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md w-full transition-all"
              >
                Submit
              </button>
            </form>
          )}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 text-red-600 text-2xl mb-8">
          <a
            href="https://www.linkedin.com/company/futurewise"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-800 transition"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://twitter.com/futurewise"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-800 transition"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="mailto:careers@futurewise.com"
            className="hover:text-red-800 transition"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <button
            onClick={() => router.push('/contact')}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md transition-all shadow-md"
          >
            Contact Our HR
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Career;
