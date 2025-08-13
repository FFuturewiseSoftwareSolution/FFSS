'use client'

import React, { useState } from 'react';
import {
  Facebook,
  Instagram,
  Linkedin,
  Github,
  ArrowUp
} from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6'; // ✅ X (Twitter) icon from react-icons

const socialLinks = [
  { href: 'https://facebook.com', icon: Facebook },
  { href: 'https://instagram.com', icon: Instagram }, // ✅ Added Instagram
  { href: 'https://x.com', icon: FaXTwitter },        // ✅ Added X (Twitter)
  { href: 'https://linkedin.com', icon: Linkedin },
  { href: 'https://github.com', icon: Github }
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#0a0a0a',
        color: '#ccc',
        padding: '1.2rem 1rem',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        {/* Left: Social Icons */}
        <div style={iconContainerStyle}>
          {socialLinks.map((item, index) => (
            <HoverIconLink key={index} href={item.href} Icon={item.icon} />
          ))}
        </div>

        {/* Center: Copyright */}
        <p style={{ fontSize: '0.9rem', color: '#777', textAlign: 'center', flex: 1 }}>
          &copy; {new Date().getFullYear()} <span style={{ color: '#fff' }}>FFuture</span>
          <span style={{ color: '#c41a1b' }}>wise</span> Software Solutions. All rights reserved.
        </p>

        {/* Right: Back to Top */}
        <button
          onClick={scrollToTop}
          style={{
            background: 'none',
            border: 'none',
            color: '#ccc',
            cursor: 'pointer',
            transition: 'color 0.3s, transform 0.3s',
          }}
          onMouseOver={e => {
            e.currentTarget.style.color = '#c41a1b';
            e.currentTarget.style.transform = 'translateY(-4px)';
          }}
          onMouseOut={e => {
            e.currentTarget.style.color = '#ccc';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          aria-label="Back to Top"
        >
          <ArrowUp size={24} />
        </button>
      </div>
    </footer>
  );
};

// Reusable icon with hover animation
const HoverIconLink = ({ href, Icon }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: hovered ? '#c41a1b' : '#ccc',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.3s ease',
        textDecoration: 'none',
        display: 'inline-block',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon size={24} />
    </a>
  );
};

const iconContainerStyle = {
  display: 'flex',
  gap: '1.2rem',
};

export default Footer;
