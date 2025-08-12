"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { db } from "../../lib/firebase";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { sendEnquiryEmail } from '../../lib/email';


const Contact = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ success: null, message: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ success: null, message: "" });

    try {
      await addDoc(collection(db, "enquiries"), {
        ...form,
        created: Timestamp.now(),
      });
      await sendEnquiryEmail({
  ...form,
  time: new Date().toLocaleString(),
});


      // ✅ WhatsApp message
      const whatsappMsg = `Hello, I got an enquiry from ${form.firstName} ${form.lastName}. Email: ${form.email}, Phone: ${form.phone}. Message: ${form.message}`;
      window.open(`https://wa.me/917092936390?text=${encodeURIComponent(whatsappMsg)}`, "_blank");

      setStatus({
        success: true,
        message: "Enquiry sent successfully! Redirecting to home...",
      });

      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });

      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      console.error("Firebase Error:", error);
      setStatus({
        success: false,
        message: "Failed to send enquiry. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-xl p-8 w-full max-w-4xl font-[Poppins]"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-6">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: Info */}
          <div className="space-y-4 text-center md:text-left text-black">
            <p className="text-lg font-medium">
              We'd love to hear from you. Send us a message and we'll get back shortly.
            </p>
            <div className="flex items-center gap-3 text-red-600 justify-center md:justify-start">
              <FaPhoneAlt />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3 text-red-600 justify-center md:justify-start">
              <FaEnvelope />
              <span>contact@ffuturewise.in</span>
            </div>
            <div className="flex items-center gap-3 text-red-600 justify-center md:justify-start">
              <FaMapMarkerAlt />
              <span>Chennai, India</span>
            </div>
            <div className="mt-2 rounded-md overflow-hidden border-red-600 shadow-md w-full h-40">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.5975174943024!2d80.22178097487456!3d12.98638648734117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525db7d4ff42db%3A0xf0b53c8d4b80a3cf!2sChennai!5e0!3m2!1sen!2sin!4v1622807893812!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                className="border-0 w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Right: Form */}
          <form onSubmit={handleSubmit} className="space-y-4 text-black">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md border border-gray-300 focus:border-red-600"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md border border-gray-300 focus:border-red-600"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md border border-gray-300 focus:border-red-600"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md border border-gray-300 focus:border-red-600"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md border border-gray-300 focus:border-red-600"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-md font-semibold text-white ${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"
              } transition duration-300`}
            >
              {loading ? "Sending..." : "Send Enquiry"}
            </button>

            {status.message && (
              <p
                className={`text-center text-sm ${
                  status.success ? "text-green-600" : "text-red-600"
                }`}
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
