"use client";

import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/utils";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="neural-bg bg-gradient-to-br from-white via-green-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen w-full flex items-start justify-center text-center px-4 pt-12 pb-12 md:pt-10">
      <div className="max-w-4xl mt-16 md:mt-28 lg:mt-32">
        <h2 className="text-green-500 dark:text-green-400 text-2xl md:text-3xl mb-4 font-bold animate-float ">
          THE ARCHITECTS OF AI-DRIVEN TRANSFORMATION
        </h2>
        <h1 className="text-gray-800 dark:text-white text-3xl md:text-4xl lg:text-6xl font-bold mb-2 pb-6 bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 text-transparent ">
          Building Intelligent Systems for Tomorrow&apos;s Digital Ecosystem
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg md:text-xl">
          At DataSAZ Solutions, we specialize in next-generation software development, 
          empowering businesses with AI-driven solutions, cloud-native applications, 
          and intelligent automation.
        </p>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <Button 
            variant="gradient"
            size="xl"
            roundedness="full"
            animation="scale"
            className="font-bold text-lg"
            onClick={() => scrollToElement('services')}
          >
            Explore Our AI Solutions
          </Button>
          <Button
            variant="outline"
            size="xl"
            roundedness="full"
            animation="scale" 
            className="border-2 border-datasaz-green dark:border-datasaz-green/80 font-bold text-datasaz-green dark:text-datasaz-green/80"
            onClick={() => scrollToElement('contact')}
          >
            Request a Consultation
          </Button>
        </div>
        
        <div className="mt-16 flex justify-center space-x-8 opacity-70">
          <div className="animate-float" style={{ animationDelay: "0.2s" }}>
            <Image src="/ai-logo.svg" alt="AI Partner" width={48} height={48} className="h-12 grayscale hover:grayscale-0 transition-all duration-300" />
          </div>
          <div className="animate-float" style={{ animationDelay: "0.4s" }}>
            <Image src="/cloud-logo.svg" alt="Cloud Partner" width={48} height={48} className="h-12 grayscale hover:grayscale-0 transition-all duration-300" />
          </div>
          <div className="animate-float" style={{ animationDelay: "0.6s" }}>
            <Image src="/tech-logo.svg" alt="Tech Partner" width={48} height={48} className="h-12 grayscale hover:grayscale-0 transition-all duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
