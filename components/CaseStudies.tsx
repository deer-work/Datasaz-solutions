"use client";

import React, { useState } from "react";

const caseStudies = [
  {
    title: "AI-Powered Document Analysis for Legal Firm",
    client: "Global Legal Partners",
    industry: "Legal Services",
    challenge: "The client needed to process thousands of legal documents efficiently, extracting key information and identifying patterns across cases.",
    solution: "We developed a custom Retrieval-Augmented Generation (RAG) system using LangChain and Vector databases that could analyze legal documents, extract relevant information, and provide insights based on similar cases.",
    technologies: ["LangChain", "OpenAI", "Vector Databases", "Next.js", "Python"],
    results: ["Reduced document processing time by 85%", "Increased case preparation efficiency by 60%", "Improved precedent identification accuracy by 43%"]
  },
  {
    title: "Multi-Agent Customer Support System",
    client: "TechConnect Retail",
    industry: "E-commerce",
    challenge: "Managing thousands of customer inquiries daily across multiple product lines with consistent accuracy and personalization.",
    solution: "We implemented a multi-agent AI system where specialized agents handled different aspects of customer support - product information, order status, technical support, and returns/exchanges - working together to resolve complex inquiries.",
    technologies: ["AutoGen", "CrewAI", "OpenAI", "React", "Node.js"],
    results: ["Handled 78% of customer inquiries without human intervention", "Reduced response time from 4 hours to 3 minutes", "Increased customer satisfaction score by 32%"]
  },
  {
    title: "Predictive Maintenance Platform for Manufacturing",
    client: "Industrial Innovations Inc.",
    industry: "Manufacturing",
    challenge: "Unpredictable equipment failures causing costly downtime and production disruptions across multiple manufacturing plants.",
    solution: "We created a machine learning system that monitors equipment sensors in real-time, predicts potential failures before they occur, and schedules preventative maintenance during optimal production windows.",
    technologies: ["PyTorch", "Kafka", "Time-series Analysis", "Azure IoT", "PostgreSQL"],
    results: ["Reduced unplanned downtime by 73%", "Decreased maintenance costs by 28%", "Extended equipment lifespan by an average of 34%"]
  },
  {
    title: "Financial Forecasting & Risk Analysis System",
    client: "Meridian Investment Group",
    industry: "Finance",
    challenge: "The client needed more accurate market forecasting and risk assessment tools to optimize investment decisions across diverse portfolios.",
    solution: "We developed an AI-driven financial analytics platform that combines machine learning models with traditional forecasting methods to predict market trends and assess investment risks with greater accuracy.",
    technologies: ["TensorFlow", "Time Series Forecasting", "Python", "Financial APIs", "AWS"],
    results: ["Improved forecast accuracy by 41% compared to previous methods", "Helped identify high-potential investments that increased returns by 18%", "Reduced exposure to high-risk assets by 23%"]
  }
];

export default function CaseStudies() {
  const [activeStudy, setActiveStudy] = useState(caseStudies[0]);

  return (
    <div className="neural-bg bg-gradient-to-b from-green-100 via-white to-green-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen w-full text-gray-800 dark:text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent mb-6">
            Our Work
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            Explore how we&apos;ve helped businesses across various industries transform their operations
            and achieve measurable results through innovative AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {caseStudies.map((study) => (
            <button
              key={study.title}
              className={`glass-card p-6 text-left ${
                activeStudy.title === study.title
                  ? "border-green-500 text-green-500 dark:text-green-400 glow-effect"
                  : "border-gray-300 text-gray-600 dark:text-gray-300 hover:border-green-500"
              } transition-all duration-300 hover:text-green-500 dark:hover:text-green-400`}
              onClick={() => setActiveStudy(study)}
            >
              <h3 className="font-bold mb-2 truncate">{study.title}</h3>
              <p className="text-sm opacity-80">{study.industry}</p>
            </button>
          ))}
        </div>

        <div className="glass-card p-8 rounded-lg mb-16">
          <div className="grid grid-cols-1 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                  {activeStudy.title}
                </h2>
              </div>
              
              <div className="mb-6">
                <span className="inline-block bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 text-sm px-3 py-1 rounded-full mr-2">
                  {activeStudy.client}
                </span>
                <span className="inline-block bg-cyan-100 dark:bg-cyan-900 text-cyan-600 dark:text-cyan-300 text-sm px-3 py-1 rounded-full">
                  {activeStudy.industry}
                </span>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    Challenge
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {activeStudy.challenge}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    Solution
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {activeStudy.solution}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {activeStudy.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    Results
                  </h3>
                  <ul className="space-y-2">
                    {activeStudy.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <a href="#contact" className="bg-green-500 dark:bg-green-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-green-600 dark:hover:bg-green-700 transition duration-300">
            Discuss Your Project
          </a>
        </div>
      </div>
    </div>
  );
} 