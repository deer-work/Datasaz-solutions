"use client";

import { useTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`p-2 rounded-full relative overflow-hidden
        bg-gradient-to-r from-gray-100 to-gray-200 
        dark:from-gray-800 dark:to-gray-900
        hover:shadow-md dark:hover:shadow-glow
        transition-all duration-300 transform hover:scale-105
        border border-gray-300 dark:border-gray-700
        ${className}`}
      whileHover={{ rotate: 15 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle dark mode"
    >
      <div className="relative z-10">
        {isDark ? (
          <motion.svg 
            className="w-5 h-5 text-yellow-400" 
            fill="currentColor" 
            viewBox="0 0 20 20" 
            xmlns="http://www.w3.org/2000/svg"
            initial={{ opacity: 0, rotate: -30 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <path 
              d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"
            ></path>
            <path 
              d="M10 4a1 1 0 011 1v1a1 1 0 11-2 0V5a1 1 0 011-1zm0 12a1 1 0 01-1-1v-1a1 1 0 112 0v1a1 1 0 01-1 1zm6-6a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM4 10a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm11.182-4.536a1 1 0 01.087 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.327 0zM4.818 14.536a1 1 0 01-.087-1.414l.707-.707a1 1 0 111.414 1.414l-.707.707a1 1 0 01-1.327 0zM15.182 14.536a1 1 0 01-1.414 0l-.707-.707a1 1 0 111.414-1.414l.707.707a1 1 0 010 1.414zM4.818 5.464a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414z"
            ></path>
          </motion.svg>
        ) : (
          <motion.svg 
            className="w-5 h-5 text-blue-800 dark:text-gray-200" 
            fill="currentColor" 
            viewBox="0 0 20 20" 
            xmlns="http://www.w3.org/2000/svg"
            initial={{ opacity: 0, rotate: 30 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <path 
              d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            ></path>
          </motion.svg>
        )}
      </div>
      
      {/* Animated glow effect */}
      <motion.div 
        className={`absolute inset-0 rounded-full ${
          isDark 
            ? 'bg-yellow-400/10 dark:bg-yellow-400/20' 
            : 'bg-blue-400/10 dark:bg-blue-400/20'
        }`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1.1, opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
} 