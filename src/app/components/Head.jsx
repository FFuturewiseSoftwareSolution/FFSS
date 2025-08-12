"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaChartLine,
  FaStore,
  FaSearch,
} from "react-icons/fa";
import VantaGlobe from "./VantaGlobe";
import DecryptedText from "./DecryptedText";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Head = () => {
  const handleScroll = () => {
    const el = document.getElementById("services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const items = [
  {
    image: 'https://picsum.photos/300/300?grayscale',
    link: 'https://google.com/',
    title: 'Item 1',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/400/400?grayscale',
    link: 'https://google.com/',
    title: 'Item 2',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/500/500?grayscale',
    link: 'https://google.com/',
    title: 'Item 3',
    description: 'This is pretty cool, right?'
  },
  {
    image: 'https://picsum.photos/600/600?grayscale',
    link: 'https://google.com/',
    title: 'Item 4',
    description: 'This is pretty cool, right?'
  }
];

  const services = [
    {
      title: "Software Development",
      description: "Custom software tailored to your business goals.",
      icon: <FaLaptopCode size={36} className="text-red-600 mx-auto" />,
    },
    {
      title: "Web Development",
      description: "Responsive, fast, and scalable web applications.",
      icon: <FaMobileAlt size={36} className="text-red-600 mx-auto" />,
    },
    {
      title: "Web Designing",
      description: "Pixel-perfect designs with intuitive UX/UI.",
      icon: <FaPaintBrush size={36} className="text-red-600 mx-auto" />,
    },
    {
      title: "Social Media Marketing",
      description: "Reach your audience on all major platforms.",
      icon: <FaChartLine size={36} className="text-red-600 mx-auto" />,
    },
    {
      title: "E-Commerce",
      description: "Sell products online with powerful eCommerce solutions.",
      icon: <FaStore size={36} className="text-red-600 mx-auto" />,
    },
    {
      title: "SEO",
      description: "Get found on Google with smart SEO strategies.",
      icon: <FaSearch size={36} className="text-red-600 mx-auto" />,
    },
  ];

  return (
    <div>
      {/* Hero */}
      <div className="relative h-screen overflow-hidden font-[Poppins]">
        <VantaGlobe />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center z-10 px-4">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            <span className="text-white">FFuture</span>
            <span className="text-red-600">wise</span> Software Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 1 }}
            className="text-lg md:text-xl text-gray-200 max-w-xl mt-6"
          >
            We build modern, scalable digital products for bold businesses and
            brilliant ideas.
          </motion.p>
        </div>
      </div>

      {/* About */}
      <section
        id="about"
        className="bg-[#f7f7f7] px-4 py-20 font-[Poppins] flex flex-col lg:flex-row items-center justify-center gap-10"
      >
        
        <div className="w-[400px]">
           {/* <DotLottieReact
      src="/Assets/Main Scene.lottie"
      loop
      autoplay
    /> */}
    <video loop autoPlay muted className="w-full h-auto rounded-lg shadow-lg" data-aos="fade-right">
      <source src="/VIDEO2.mp4"/>
    </video>

        </div>


        <div className="max-w-xl text-center lg:text-left" data-aos="fade-left">
          <h2 className="text-4xl font-bold text-[#111] mb-4">About Us</h2>
          <p className="text-lg text-[#444] mb-6">
            At <strong>FFuturewise Software Solutions</strong>, we specialize in building scalable, modern digital platforms with cutting-edge technology and bold design. We believe in future-ready architecture and high-performance solutions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = "/about")}
              className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-all"
            >
              About More
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScroll}
              className="border border-red-600 text-red-600 px-6 py-2 rounded-md hover:bg-red-600 hover:text-white transition-all"
            >
              Our Services
            </motion.button>
          </div>
          <div className="relative w-full overflow-hidden h-24">
            <motion.div
              className="flex gap-10 absolute"
              animate={{ x: ["100%", "-100%"] }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            >
              <img src="/ISO_logo.png" alt="ISO_logo" className="h-20 w-auto object-contain" />
              <img src="/GST logo 2.png" alt="GST_logo" className="h-20 w-auto object-contain" />
              <img src="/msme.png" alt="msme_logo" className="h-20 w-auto object-contain" />
              <img src="/qms.jpg" alt="QMS_logo" className="h-20 w-auto object-contain" />
              <img src="/labour.png" alt="labour_logo" className="h-20 w-auto object-contain" />
            </motion.div>
          </div>
        </div>

        
      </section>

      {/* Services */}
      <section
        id="services"
        className="py-20 px-4 bg-white font-[Poppins] text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          Our Services
        </motion.h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          From smart websites to strategic marketing and mobile apps — we help
          your business go digital the right way.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              onClick={() => (window.location.href = "/services")}
              className="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200 cursor-pointer hover:shadow-xl transition-all"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-red-600 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>
        <button
          onClick={() => (window.location.href = "/services")}
          className="mt-10 px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition duration-300"
        >
          More Details
        </button>
      </section>

      {/* Career */}
      <section
        id="career"
        className="py-20 px-4 bg-[#f7f7f7] font-[Poppins] text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900 mb-6"
        >
          Join Our Team
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-10"
        >
          We’re always looking for passionate, skilled individuals to join us.
          Whether you're a developer, designer, or digital strategist — let's
          build something great together.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => (window.location.href = "/career")}
          className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
        >
          Explore Careers
        </motion.button>
      </section>

      {/* Contact (simple) */}
      <section
        id="contact"
        className="py-20 px-4 bg-white font-[Poppins] text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900 mb-6"
        >
          Let's Connect
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-10"
        >
          Have a project in mind? We'd love to hear from you. Get in touch with
          us for a free consultation.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => (window.location.href = "/contact")}
          className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
        >
          Contact Us
        </motion.button>
      </section>
    </div>
  );
};

export default Head;
