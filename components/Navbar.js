"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 
        ${isScrolled ? "backdrop-blur-md bg-gray-900/70 shadow-md" : "bg-gray-900"}
        font-sans`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image src="/Logo.png" width={40} height={40} alt="Logo" className="rounded-full" />
          </Link>
          <Link href="/" className="hidden sm:block">
            <Image src="/MainLogo2.png" width={200} height={40} alt="SkillXchange" />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center text-sm font-medium text-gray-300">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/explore" className="hover:text-white transition">Explore</Link>
          <Link href="/chat" className="hover:text-white transition">UserChat</Link>
          <UserButton afterSignOutUrl="/" />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-white text-2xl">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-gray-800 text-sm font-medium text-gray-300">
          <Link href="/" className="block py-2 hover:text-white">Home</Link>
          <Link href="/explore" className="block py-2 hover:text-white">Explore</Link>
          <Link href="/chat" className="block py-2 hover:text-white">UserChat</Link>
          <div className="py-2">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      )}
    </nav>
  );
}
