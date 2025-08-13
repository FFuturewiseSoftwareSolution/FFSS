'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  { src: '/01.jpg', alt: 'Office' },
  { src: '/03-1.avif', alt: 'Team' },
  { src: '/02.jpg', alt: 'Project' },
  { src: '/03.jpeg', alt: 'Innovation' },
  {src: '/04-1.jpg', alt: 'Collaboration' },
  { src: '/03-2.jpg', alt: 'Technology' },
];

const About = () => {
  const router = useRouter();
  const [current, setCurrent] = useState(0);

  // Carousel logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="bg-white text-black py-20 px-4 md:px-20 font-[Poppins]"
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Carousel Section */}
        <motion.div
          className="w-full lg:w-1/2 h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] relative overflow-hidden rounded-lg shadow-xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={images[current].src}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={images[current].src}
                alt={images[current].alt}
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
        {/* Text Section */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-red-600 mb-4">
            About FFuturewise Software Solutions
          </h2>

          <p className="text-lg text-gray-800 mb-6">
            With over <strong>5+ years</strong> of industry excellence, <strong>FFuturewise Software Solutions</strong> is a trusted name in building modern, scalable, and high-performance software systems. From startups to enterprises, we deliver robust applications using <strong>Next.js</strong>, <strong>Firebase</strong>, <strong>Cloud</strong>, and <strong>AI</strong>.
          </p>

          <p className="text-md text-gray-700 mb-6">
            We specialize in <strong>custom platforms</strong>, business automation, ERP/CRM, SaaS products, and cloud-native systems — all crafted with future-ready architecture and user-focused design.
          </p>

          <div className=" p-6 rounded-lg shadow-md mb-6"
          style={{
            background: 'linear-gradient(135deg,  #c07676ff, #fc2b2bff, #3c2626ff)',
          }}>
            <h4 className="text-black font-semibold mb-2">Licenses & Certifications:</h4>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
              <li>MSME Registered</li>
              <li>GST Compliant</li>
              <li>ISO Certified</li>
              <li>QMS Implemented</li>
              <li>Labour Act Compliant</li>
            </ul>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/contact')}
            className="bg-red-600 hover:bg-red-700 transition-all text-white py-3 px-6 rounded-md mt-4 shadow-lg cursor-pointer"
          >
            Contact Us
          </motion.button>
        </motion.div>

      
      </div>
    </section>
  );
};

export default About;
