"use client";

import React, { useState } from "react";
import Image from "next/image";

const technologies = [
  {
    category: "AI/ML",
    tools: [
      { name: "Python (FastAPI, Flask)", icon: "/python.png" },
      { name: "TensorFlow", icon: "/tensorflow.png" },
      { name: "PyTorch", icon: "/pytorch.png" },
      { name: "LangChain", icon: "/langchain.png" },
      { name: "Vector Databases", icon: "/vectordb.png" },
      { name: "OpenAI", icon: "/openai.png" },
      { name: "Anthropic", icon: "/anthropic.png" },
      { name: "Hugging Face", icon: "/huggingface.png" },
    ]
  },
  {
    category: "Frontend Development",
    tools: [
      { name: "Next.js", icon: "/nextjs.png" },
      { name: "React", icon: "/react.png" },
      { name: "Tailwind CSS", icon: "/tailwind.png" },
      { name: "TypeScript", icon: "/typescript.png" },
      { name: "Framer Motion", icon: "/framer.png" },
      { name: "Material UI", icon: "/mui.png" },
    ]
  },
  {
    category: "Backend Development",
    tools: [
      { name: "Node.js", icon: "/nodejs.png" },
      { name: "Python", icon: "/python.png" },
      { name: "SQLModel", icon: "/sqlmodel.png" },
      { name: "PostgreSQL", icon: "/postgres.png" },
      { name: "Kafka", icon: "/kafka.png" },
      { name: "Kong", icon: "/kong.png" },
    ]
  },
  {
    category: "Cloud & DevOps",
    tools: [
      { name: "AWS", icon: "/aws.png" },
      { name: "Azure", icon: "/azure.png" },
      { name: "Firebase", icon: "/firebase.png" },
      { name: "Docker", icon: "/docker.png" },
      { name: "Kubernetes", icon: "/kubernetes.png" },
      { name: "Serverless", icon: "/serverless.png" },
      { name: "Terraform", icon: "/terraform.png" },
    ]
  },
  {
    category: "Data Management",
    tools: [
      { name: "PostgreSQL", icon: "/postgres.png" },
      { name: "MongoDB", icon: "/mongodb.png" },
      { name: "Redis", icon: "/redis.png" },
      { name: "Pinecone", icon: "/pinecone.png" },
      { name: "Kafka", icon: "/kafka.png" },
      { name: "Elasticsearch", icon: "/elasticsearch.png" },
    ]
  },
];

export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState(technologies[0].category);

  return (
    <div id="technology" className="neural-bg bg-gradient-to-tl from-green-100 via-white to-green-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-white min-h-screen flex flex-col items-center justify-center p-4 md:p-8 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent mb-2 pb-6">
            Our Technology Stack
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build innovative solutions.
            Our expertise spans across AI/ML, cloud computing, and modern web development.
          </p>
        </div>
        
        <div className="glass-card p-8 rounded-lg mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {technologies.map((tech) => (
              <button
                key={tech.category}
                onClick={() => setActiveCategory(tech.category)}
                className={`py-2 px-4 rounded-full font-medium transition-all ${
                  activeCategory === tech.category
                    ? "bg-green-500 dark:bg-green-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                {tech.category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {technologies
              .find(tech => tech.category === activeCategory)?.tools
              .map((tool, index) => (
                <div 
                  key={tool.name} 
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 relative mb-3 p-3 rounded-full bg-white dark:bg-gray-800 shadow-md group-hover:shadow-lg transition-all group-hover:scale-110">
                    <Image
                      src={tool.icon}
                      alt={tool.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <span className="text-sm md:text-base font-medium text-gray-800 dark:text-gray-200 group-hover:text-green-500 dark:group-hover:text-green-400 transition-colors">
                    {tool.name}
                  </span>
                </div>
              ))}
          </div>
        </div>
        
        <div className="glass-card p-8 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Industries We Serve
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all hover:scale-105">
              <div className="text-green-500 dark:text-green-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Finance & FinTech</h3>
              <p className="text-gray-600 dark:text-gray-300">AI-driven financial automation, compliance, risk analysis, and reporting.</p>
            </div>
            
            <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all hover:scale-105">
              <div className="text-green-500 dark:text-green-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">E-commerce & Retail</h3>
              <p className="text-gray-600 dark:text-gray-300">Personalized experiences, demand forecasting, inventory optimization, AI-powered customer service.</p>
            </div>
            
            <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all hover:scale-105">
              <div className="text-green-500 dark:text-green-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Enterprise Solutions</h3>
              <p className="text-gray-600 dark:text-gray-300">Intelligent automation, custom AI integrations, building enterprise-level software systems for digital transformation.</p>
            </div>
            
            <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all hover:scale-105">
              <div className="text-green-500 dark:text-green-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Technology & SaaS</h3>
              <p className="text-gray-600 dark:text-gray-300">Developing AI features, scalable cloud infrastructure, and innovative software products.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
