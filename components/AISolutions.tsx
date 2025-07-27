"use client";

import React, { useState } from "react";
import Image from "next/image";

const aiSolutions = [
  {
    title: "AI Agents & Automation",
    description: "Our autonomous AI agents can handle complex tasks and workflows without human intervention. From customer support to data analysis, these intelligent systems operate independently or in teams to solve sophisticated problems.",
    image: "/ai-agents.png",
    features: [
      "Autonomous decision-making capabilities",
      "Multi-agent collaboration frameworks",
      "Task automation and orchestration",
      "Human-AI collaboration interfaces",
      "Custom agent development using LangChain, AutoGen, and CrewAI"
    ],
    detailedDescription: `Our AI Agents & Automation solutions represent the cutting edge of artificial intelligence technology. We create sophisticated autonomous systems that can:

    • Execute complex business processes with minimal human oversight
    • Learn and adapt from interactions and feedback
    • Coordinate with other AI agents to solve multi-step problems
    • Integrate with existing systems and workflows
    • Scale operations efficiently while maintaining quality

    Technologies we leverage include LangChain for building complex AI applications, AutoGen for creating autonomous agents, and CrewAI for orchestrating multi-agent systems. Our solutions are customized to your specific business needs and can be deployed across various industries.`
  },
  {
    title: "Generative AI Applications",
    description: "Harness the power of large language models (LLMs) and other generative AI technologies to create content, analyze data, and build intelligent applications that understand context and generate human-like responses.",
    image: "/gen-ai.png",
    features: [
      "Custom LLM integrations and fine-tuning",
      "Contextual content generation",
      "Retrieval-Augmented Generation (RAG) systems",
      "AI-powered content analysis and creation",
      "Multimodal AI applications (text, image, audio)"
    ],
    detailedDescription: `Our Generative AI Applications leverage state-of-the-art language models and creative AI technologies to deliver:

    • Customized language models tailored to your industry and use case
    • Advanced RAG systems that combine your business knowledge with AI capabilities
    • Content generation systems that maintain your brand voice and quality standards
    • Multimodal AI solutions that work with text, images, and audio
    • Scalable infrastructure for deploying and managing AI applications

    We work with leading models and frameworks while ensuring cost-effectiveness and maintaining high standards of quality and accuracy.`
  },
  {
    title: "Machine Learning Solutions",
    description: "From predictive analytics to computer vision and natural language processing, our machine learning solutions help businesses forecast trends, understand data patterns, and make informed decisions based on sophisticated algorithms.",
    image: "/ml-solutions.png",
    features: [
      "Predictive modeling and forecasting",
      "Pattern recognition and anomaly detection",
      "Deep learning model development",
      "Computer vision applications",
      "NLP and text analytics systems"
    ],
    detailedDescription: `Our Machine Learning Solutions provide sophisticated data analysis and prediction capabilities:

    • Advanced predictive models using state-of-the-art algorithms
    • Custom deep learning solutions for complex pattern recognition
    • Robust computer vision systems for image and video analysis
    • Natural language processing for text understanding and generation
    • Scalable ML infrastructure and MLOps practices

    We employ industry-standard frameworks like TensorFlow, PyTorch, and scikit-learn, ensuring reliable and maintainable solutions that grow with your business.`
  },
  {
    title: "AI Strategy & Integration",
    description: "We don't just implement AI - we help you create a comprehensive AI strategy that aligns with your business goals. Our experts guide you through the process of integrating AI into your existing systems and workflows.",
    image: "/ai-strategy.png",
    features: [
      "AI readiness assessment",
      "Technology selection and architecture design",
      "Implementation roadmap development",
      "Legacy system integration",
      "AI governance and ethical frameworks"
    ],
    detailedDescription: `Our AI Strategy & Integration services provide a comprehensive approach to AI adoption:

    • Detailed assessment of your organization's AI readiness
    • Custom roadmap for AI implementation aligned with business goals
    • Strategic technology selection and architecture planning
    • Seamless integration with existing systems and processes
    • Development of AI governance frameworks and ethical guidelines

    We ensure your AI journey is structured, sustainable, and delivers measurable business value while maintaining ethical standards and regulatory compliance.`
  }
];

export default function AISolutions() {
  const [activeSolution, setActiveSolution] = useState(aiSolutions[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="neural-bg bg-gradient-to-b from-green-100 via-white to-green-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen w-full text-gray-800 dark:text-white p-4 md:p-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent mb-6">
            AI-Powered Solutions
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            We specialize in cutting-edge AI technologies that transform how businesses operate,
            make decisions, and create value. Our solutions are designed to be intelligent,
            adaptable, and future-ready.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {aiSolutions.map((solution) => (
            <button
              key={solution.title}
              className={`glass-card p-4 text-center ${
                activeSolution.title === solution.title
                  ? "border-green-500 text-green-500 dark:text-green-400 glow-effect"
                  : "border-gray-300 text-gray-600 dark:text-gray-300 hover:border-green-500"
              } transition-all duration-300 hover:text-green-500 dark:hover:text-green-400`}
              onClick={() => setActiveSolution(solution)}
            >
              <p className="font-bold">{solution.title}</p>
            </button>
          ))}
        </div>

        <div className="glass-card p-8 rounded-lg mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                {activeSolution.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {activeSolution.description}
              </p>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                Key Features
              </h3>
              <ul className="space-y-2">
                {activeSolution.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="mt-8 bg-green-500 dark:bg-green-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-green-600 dark:hover:bg-green-700 transition duration-300"
              >
                Learn More
              </button>
            </div>
            <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src={activeSolution.image}
                alt={activeSolution.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="absolute inset-0 z-[60] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-lg max-w-3xl w-full max-h-[80vh] overflow-y-auto z-[70] transform transition-all">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {activeSolution.title}
                  </h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="relative h-48 w-full mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={activeSolution.image}
                    alt={activeSolution.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="prose dark:prose-invert max-w-none">
                  <div className="whitespace-pre-line text-gray-600 dark:text-gray-300">
                    {activeSolution.detailedDescription}
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {activeSolution.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="bg-green-500 dark:bg-green-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-green-600 dark:hover:bg-green-700 transition duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 