"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md" 
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
        <Link href="/" className="group transition-all duration-300">
        <div className="flex items-center">
          <div className="relative overflow-hidden rounded-full w-10 h-10 group-hover:shadow-md transition-all duration-300">
            <Image
              src="/logo.png"
              alt="DataSAZ Logo"
              fill
              className="object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="ml-3 sm:ml-4">
            <h1 className="text-xl font-semibold bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent group-hover:from-green-400 group-hover:to-cyan-400 transition-all duration-300">
              DataSAZ Solutions
            </h1>
            <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-green-500 to-cyan-500 transition-all duration-300"></div>
          </div>
        </div>
      </Link>
        </div>
        <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
          <Navigation />
        </div>

        <div className="ml-auto hidden lg:flex space-x-4">
          <ThemeToggle />
        </div>
        
        <button
          className="lg:hidden flex items-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-gray-700 dark:text-gray-200"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path
                d="M6 18L18 6M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="lg:hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-5"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Navigation />
          <div className="mt-4 flex justify-end">
            <ThemeToggle />
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
