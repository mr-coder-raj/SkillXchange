"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
// import { useUser } from "@clerk/nextjs";
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  // const user = useUser();
  // console.log(user.user?.id);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Explore", href: "/explore" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 
        ${isScrolled ? "backdrop-blur-md bg-gray-900/70 shadow-md" : "bg-gray-900"}
        font-sans`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-1">
          <Link href="/">
            {/* <Image src="/logo.png" width={45} height={45} alt="Logo" className="rounded-full" /> */}
            <lord-icon
              src="https://cdn.lordicon.com/szvbserk.json"
              trigger="hover"
              colors="primary:#8930e8,secondary:#ffffff,tertiary:#ffffff"
              style={{ width: '50px', height: '50px' }}
            ></lord-icon>
          </Link>
          <Link href="/" className="hidden sm:block pt-2">
            <h1 className="text-white font-extrabold text-3xl fill-white"><Image src="/MainLogo2.png" width={300} height={40} alt="Logo" className="rounded-full" /></h1>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative group ${pathname === link.href ? "text-white" : "text-gray-300"
                } transition`}
            >
              {link.name}
              <span
                className={`absolute left-0 -bottom-0.5 h-[2px] bg-white transition-all duration-300
                ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}`}
              />
            </Link>
          ))}
          <UserButton afterSignOutUrl="/" />
          <Link href="/">
            <SignedOut>
              <SignInButton mode="modal" forceRedirectUrl="/">
                <button className="flex items-center gap-2 bg-indigo-600 text-white py-2.5 px-5 rounded-full font-semibold hover:bg-indigo-700 hover:scale-105 transition-all duration-300 transform shadow-md">
                  <lord-icon
                    src="https://cdn.lordicon.com/hroklero.json"
                    trigger="hover"
                    style={{ width: "25px", height: "25px" }}
                  ></lord-icon>
                  SignUp / SignIn
                </button>
              </SignInButton>
            </SignedOut>
          </Link>

        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-white text-2xl">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-4 pb-4 bg-gray-800 text-sm font-medium text-gray-300 overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-2 transition ${pathname === link.href ? "text-white" : "hover:text-white"
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="py-2">
              <UserButton afterSignOutUrl="/" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
