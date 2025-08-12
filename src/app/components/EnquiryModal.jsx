'use client';

import React, { useState } from 'react';
import { color, motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { db } from '../../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import { EnquiryUS } from '../../lib/email';



const EnquiryModal = ({ service, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');

  if (!service) return null;

  const validatePhone = (number) => {
    const regex = /^\d{6,}$/;
    return regex.test(number.replace(/\D/g, ''));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePhone(phone)) {
      setPhoneError('Please enter a valid phone number (at least 6 digits)');
      return;
    }

    try {
      await addDoc(collection(db, 'enquiries'), {
        name,
        email,
        message,
        phone,
        service: service.title,
        timestamp: serverTimestamp(),
      });
      await EnquiryUS({
        name,
        email,
        message,
        phone,
        service: service.title,
        time: new Date().toLocaleString(),
      })

   
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting enquiry:', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="backdrop-blur-md bg-white/20 border border-white/30 shadow-2xl rounded-xl p-6 w-full max-w-xl relative text-white"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-xl font-bold text-white hover:text-red-400 transition cursor-pointer"
        >
          ✕
        </button>

        {!submitted ? (
          <>
            <h2 className="text-2xl font-semibold mb-4">
              Enquire About: {service.title}
            </h2>
            <p className="text-white/90 mb-4">{service.description}</p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-white/10 border border-white/30 text-white placeholder-white/70 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white/10 border border-white/30 text-white placeholder-white/70 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
              />

              <div>
                <PhoneInput
                  country={'in'}
                  value={phone}
                  onChange={(val) => {
                    setPhone(val);
                    setPhoneError('');
                  }}
                  inputProps={{
                    name: 'phone',
                    required: true,
                    autoFocus: false,
                    
                  }}
                  className='text-black'
                  containerClass="w-full"
                  inputClass="!w-full !bg-black/10 !border-white/30  placeholder-black/70 rounded px-4 py-2"
                />
                {phoneError && (
                  <p className="text-red-300 text-sm mt-1">{phoneError}</p>
                )}
              </div>

              <textarea
                placeholder="Your Message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full bg-white/10 border border-white/30 text-black placeholder-white/70 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
              ></textarea>

              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded w-full transition cursor-pointer"
              >
                Submit Enquiry
              </button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <DotLottieReact
              src="https://lottie.host/f8ac0fbb-d0eb-44f2-a743-f46df250a124/UVxVwcBc59.lottie"
              autoplay
              loop={false}
              style={{ width: '200px', height: '200px' }}
            />
            <h2 className="text-2xl font-semibold text-white">Thank you!</h2>
            <p className="text-white/80">
              We have received your enquiry. We’ll contact you shortly.
            </p>
            <button
              onClick={onClose}
              className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default EnquiryModal;
