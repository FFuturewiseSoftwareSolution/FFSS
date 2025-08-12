'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Career', href: '/career' },
  // { name: 'Projects', href: '/project' },
  { name: 'Contact', href: '/contact' },
]

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
}

export default function Nav() {
  const pathname = usePathname()
  const [hasMounted, setHasMounted] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [animateMenu, setAnimateMenu] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  useEffect(() => {
    if (mobileMenu) {
      setAnimateMenu(true)
    } else {
      const timer = setTimeout(() => setAnimateMenu(false), 300)
      return () => clearTimeout(timer)
    }
  }, [mobileMenu])

  if (!hasMounted) return null

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-white/30 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">

        {/* Logo + Company Name */}
        <Link href="/" className="flex items-center gap-2">
          <motion.img
            src="/nav-icon-br.png"
            alt="FutureWise Logo"
            className="h-10 w-10 drop-shadow-lg"
            animate={{ rotateY: 360 }}
            transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
          />
          <div className="w-[2px] h-8 bg-gray-300 mx-2" />
          <motion.h1
            className="text-xl font-bold font-logo flex gap-1"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-black">FFUTURE</span>
            <span className="text-[#c41a1b]">WISE</span>
          </motion.h1>
        </Link>

        {/* Desktop Navigation */}
        <motion.div
          className="hidden md:flex items-center space-x-6"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {navItems.map((itemData) => (
            <motion.div key={itemData.name} variants={item}>
              <Link
                href={itemData.href}
                scroll={false}
                className={`text-sm font-semibold tracking-wide relative transition duration-300 ease-in-out ${
                  pathname === itemData.href
                    ? 'text-[#c41a1b]'
                    : 'text-black hover:text-[#c41a1b]'
                }`}
              >
                {itemData.name}
                {pathname === itemData.href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 -bottom-1 h-[2px] bg-[#c41a1b]"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-black"
          whileTap={{ scale: 0.9 }}
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenu ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {animateMenu && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-6 border-t border-white/30 bg-white/90 backdrop-blur-md py-4 max-h-[500px] overflow-y-auto"
          >
            <motion.ul
              className="space-y-4"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {navItems.map((item) => (
                <motion.li key={item.name} variants={item}>
                  <Link
                    href={item.href}
                    scroll={false}
                    onClick={(e) => {
                      if (pathname === item.href) {
                        e.preventDefault()
                        return
                      }
                      setMobileMenu(false)
                    }}
                    className={`block text-base font-semibold transition-opacity duration-300 relative ${
                      pathname === item.href
                        ? 'text-[#c41a1b]'
                        : 'text-black hover:text-[#c41a1b]'
                    }`}
                  >
                    {item.name}
                    {pathname === item.href && (
                      <motion.div
                        layoutId="underline-mobile"
                        className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#c41a1b]"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
