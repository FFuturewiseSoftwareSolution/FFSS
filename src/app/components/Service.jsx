'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import EnquiryModal from './EnquiryModal';

const services = [
  {
    id: 1,
    title: 'Web App Development',
    description:
      'We build scalable, modern web apps using React, Next.js, and modern backend technologies tailored to your business goals.',
    stack: ['Next.js', 'Node.js', 'MongoDB', 'Firebase'],
    video: 'https://lottie.host/1d08613c-7002-4548-98ad-b55262d245da/DzfG8ZSHp9.lottie',
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description:
      'Craft high-performance mobile apps for Android and iOS using Flutter and React Native.',
    stack: ['Flutter', 'React Native', 'Firebase'],
    video: 'https://lottie.host/37526ad3-f0d1-46ed-a4b6-f3fa931f0ef6/5cHhamfIsx.lottie',
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description:
      'Design-first approach to building intuitive, beautiful interfaces that users love.',
    stack: ['Figma', 'Adobe XD', 'TailwindCSS'],
    video: 'https://lottie.host/79b3ce52-225a-4c34-aef5-3cbdc935cd99/dV9TGzwTUu.lottie',
  },
  {
    id: 4,
    title: 'Cloud Solutions',
    description:
      'Migrate, manage, and scale your infrastructure with AWS, GCP, or Azure for maximum performance.',
    stack: ['AWS', 'GCP', 'Docker', 'Kubernetes'],
    video: 'https://lottie.host/028b7e4c-e043-49dc-afa1-a48827a684b0/gfff4oCB0U.lottie',
  },
  {
    id: 5,
    title: 'ERP/CRM Solutions',
    description:
      'Custom enterprise systems to manage operations, resources, and customer engagement.',
    stack: ['Custom ERP', 'Salesforce', 'Zoho'],
    video: 'https://lottie.host/bccb32b7-25ae-474d-af62-7277c1cf8a93/c6qvyaDNQv.lottie',
  },
  {
    id: 6,
    title: 'E-commerce Development',
    description:
      'Build powerful e-commerce solutions with secure payment integrations and admin dashboards.',
    stack: ['Shopify', 'Next.js', 'Stripe'],
    image: '/service6.jpg',
    video: 'https://lottie.host/a43e172e-ee94-4e9b-adcc-deb9f6e0dae0/4SQ5tmxL8H.lottie',
  },
  {
    id: 7,
    title: 'Automation & AI Tools',
    description:
      'Automate repetitive tasks and decision-making using AI, chatbots, and smart scripts.',
    stack: ['Python', 'OpenAI', 'Zapier'],
    image: '/service7.jpg',
    video: 'https://lottie.host/0caef5ed-ad9d-485e-a798-c9e02658aaeb/OUIGPz5B1H.lottie',
  },
  {
    id: 8,
    title: 'SaaS Product Development',
    description:
      'End-to-end SaaS product engineering with user onboarding, billing, analytics, and admin.',
    stack: ['Next.js', 'PostgreSQL', 'Stripe', 'Docker'],
    image: '/service8.jpg',
    video: 'https://lottie.host/d5edae7b-d7bb-41d2-9415-aaf207dad938/zBvHczSEUE.lottie',
  },
  {
    id: 9,
    title: 'Technical Consulting',
    description:
      'We guide startups and enterprises in architecting the right solutions for long-term success.',
    stack: ['Architecture', 'DevOps', 'Security'],
    image: '/service9.jpg',
    video: 'https://lottie.host/e1b815fa-12f4-4a57-87a6-7a7f0dca8414/STsrIUDCKm.lottie',
  },
];

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedService(null);
    setIsModalOpen(false);
  };

  return (
    <section className="py-20 px-4 md:px-20 bg-white text-black font-[Poppins] space-y-16">
      <h2 className="text-4xl text-center font-bold text-red-600 mb-12">
        Our Services
      </h2>

      {services.map((service, index) => (
        <motion.div
          key={service.id}
          className={`rounded-xl overflow-hidden shadow-lg flex flex-col lg:flex-row ${
            index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
          }`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{
            background: 'linear-gradient(135deg, #3c2626ff, #de0303ff, #ad8080ff)',
          }}
        >
          <motion.div className="lg:w-1/2 w-full h-[300px] lg:h-[400px] relative flex items-center justify-center">
            {service.video ? (
              <DotLottieReact
                src={service.video}
                autoplay
                loop
                style={{ width: '100%', height: '100%' }}
              />
            ) : (
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
              />
            )}
          </motion.div>

          <div className="lg:w-1/2 w-full p-8 flex flex-col justify-center">
            <h3 className="text-3xl font-semibold text-white mb-3">
              {service.title}
            </h3>
            <p className="text-gray-200 text-md mb-4">{service.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {service.stack.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-red-700 text-white text-sm px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openModal(service)}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md mt-2 w-fit cursor-pointer"
            >
              Enquire Now
            </motion.button>
          </div>
        </motion.div>
      ))}

      <AnimatePresence>
        {isModalOpen && (
          <EnquiryModal service={selectedService} onClose={closeModal} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
