"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { motion } from "framer-motion";

const SimpleNavbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Add scroll listener
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
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 w-full px-6 transition-all duration-300 ${
        scrolled 
          ? "py-2 bg-white/80 dark:bg-gray-900/80 shadow-md backdrop-blur-md" 
          : "py-3 bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
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

        <div className="flex items-center space-x-3">
          <Link href="/"
            className="hidden sm:block mr-2 px-3 py-1.5 text-sm rounded-full 
              bg-gradient-to-r from-green-500/10 to-cyan-500/10 
              hover:from-green-500/20 hover:to-cyan-500/20
              text-gray-700 dark:text-gray-200
              border border-gray-200 dark:border-gray-700
              hover:border-green-300 dark:hover:border-green-700
              transition-all duration-300
              transform hover:scale-105"
          >
            Return to Home
          </Link>
          
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
};

export default SimpleNavbar; 