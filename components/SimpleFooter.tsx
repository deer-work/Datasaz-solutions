"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function SimpleFooter() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-900 text-black dark:text-white py-8 border-t border-gray-200 dark:border-gray-800 w-full">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="group">
              <div className="flex items-center mb-3 transition-transform duration-300 hover:translate-x-1">
                <div className="relative w-9 h-9 rounded-full overflow-hidden shadow-sm">
                  <Image
                    src="/logo.png"
                    alt="DataSAZ Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-3">
                  <h2 className="font-semibold text-lg bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent">
                    DataSAZ <span>Solutions</span>
                  </h2>
                </div>
              </div>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {year} DATASAZ SOLUTIONS. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              Legal Information
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
              <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
              <FooterLink href="/accessibility">Accessibility</FooterLink>
              <FooterLink href="/company-policy">Company Policy</FooterLink>
              <FooterLink href="/">Back to Home</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <Link 
      href={href} 
      className="text-sm text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300 relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
    </Link>
  );
} 