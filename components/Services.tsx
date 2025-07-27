"use client";

import React, { useState } from "react";

interface Service {
  name: string;
  description: string;
  icon: React.ReactNode;
}

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service;
}

const services = [
  {
    name: "AI Agents & Multi-Agent Systems",
    description:
      "Design and deployment of autonomous AI agents that automate complex tasks and workflows. Our agents can handle everything from customer support to data analysis, content creation, and process automation. We leverage technologies like LangChain, CrewAI, AutoGen, and LangGraph to build sophisticated agent architectures that work together to solve complex problems.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8Z" />
        <path d="M20 2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8Z" />
        <path d="M20 16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h8Z" />
        <path d="M4 16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h0Z" />
        <path d="M6 8v8" />
        <path d="M18 8v8" />
      </svg>
    ),
  },
  {
    name: "Generative AI Applications",
    description:
      "Custom solutions leveraging large language models (LLMs) and other generative models for content creation, data analysis, and more. We develop applications that can generate text, images, and other media with a deep understanding of your business context. Our RAG-based systems enhance language models with domain-specific knowledge for accurate, context-aware responses.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2" />
        <path d="M20 14h2" />
        <path d="M15 13v2" />
        <path d="M9 13v2" />
      </svg>
    ),
  },
  {
    name: "Machine Learning & Deep Learning",
    description:
      "Development of predictive models, recommendation engines, and pattern recognition systems. Our ML solutions help businesses forecast trends, understand customer preferences, and make data-driven decisions. From computer vision applications to natural language processing, we build intelligent systems that learn and adapt over time.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4" />
        <path d="M12 2a4 4 0 0 0-4 4" />
        <circle cx="12" cy="12" r="3" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
        <path d="m4.9 4.9 2.1 2.1" />
        <path d="m17 17 2.1 2.1" />
        <path d="m17 7 2.1-2.1" />
        <path d="m4.9 19.1 2.1-2.1" />
      </svg>
    ),
  },
  {
    name: "Microservices Architecture",
    description:
      "Creating scalable, resilient systems through modular design and seamless API connectivity. Our microservices approach enables businesses to develop, deploy, and scale components independently, leading to faster innovation cycles and greater system resilience. We implement best practices for service discovery, communication, and monitoring.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
        <path d="M18 14h-8" />
        <path d="M15 18h-5" />
        <path d="M10 6h8v4h-8V6Z" />
      </svg>
    ),
  },
  {
    name: "Serverless Computing & DevOps",
    description:
      "Optimizing cloud infrastructure and automating development lifecycles for speed and efficiency. Our serverless solutions reduce operational complexity and costs while improving scalability. We implement robust CI/CD pipelines that enable continuous integration, testing, and deployment, ensuring your applications are always up-to-date and reliable.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 5v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z" />
        <path d="M3 10h18" />
        <path d="M10 3v18" />
      </svg>
    ),
  },
  {
    name: "LLM Fine-tuning & RAG Systems",
    description:
      "Enhancing language models with domain-specific knowledge and developing retrieval-augmented generation systems. We tailor LLMs to your specific industry and use cases, improving performance on domain-specific tasks. Our RAG implementations combine the power of neural language models with traditional information retrieval to provide accurate, factual, and context-aware responses.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M8 13h8" />
        <path d="M8 17h8" />
        <path d="M8 9h1" />
      </svg>
    ),
  },
  {
    name: "Data Engineering & Analytics",
    description:
      "Building robust data pipelines, storage solutions, and analytics platforms that drive business insights. We implement comprehensive data strategies that cover collection, processing, storage, and analysis. From real-time data processing with Kafka to sophisticated analytics with machine learning, we help you unlock the value in your data.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="m9 9 5 5v5H9V9Z" />
        <path d="m14 14 5-5v5h-5Z" />
      </svg>
    ),
  },
  {
    name: "Cloud-Native Development",
    description:
      "Creating applications that fully leverage cloud platforms for maximum scalability, reliability, and efficiency. Our cloud-native approach incorporates containers, microservices, and declarative APIs to build applications that are resilient, manageable, and observable. We have expertise in AWS, Azure, and Firebase for deployment and scalability.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 9.9C15.22 8.73 14 6.78 14 4.5a4.5 4.5 0 0 1 9 0c0 2.28-1.22 4.23-3 5.4" />
        <path d="M7 9.9C8.78 8.73 10 6.78 10 4.5a4.5 4.5 0 0 0-9 0c0 2.28 1.22 4.23 3 5.4" />
        <path d="M12 22a8 8 0 0 0 8-8c0-2.76-1.4-5.23-3-8" />
        <path d="M12 22a8 8 0 0 1-8-8c0-2.76 1.4-5.23 3-8" />
      </svg>
    ),
  },
];

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, service }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-[60] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="relative w-full max-w-2xl glass-card p-8 m-4 rounded-xl shadow-2xl max-h-[80vh] overflow-y-auto z-[70]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex items-center mb-6">
          <div className="mr-4 text-green-500 dark:text-green-400">
            {service.icon}
          </div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
            {service.name}
          </h3>
        </div>

        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {service.description}
          </p>
          
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Key Features
            </h4>
            <ul className="space-y-2">
              {[
                "Advanced AI Integration",
                "Scalable Architecture",
                "Real-time Processing",
                "Custom Solutions",
                "24/7 Support"
              ].map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={onClose}
              className="bg-green-500 dark:bg-green-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-green-600 dark:hover:bg-green-700 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(services[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div id="services" className="bg-gradient-to-t from-green-100 via-white to-green-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen w-full text-gray-800 dark:text-white p-4 md:p-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center flex-col items-center">
          <h2 className="text-green-500 dark:text-green-400 text-xl mb-2 font-bold tracking-[0.1em] animate-float">
            OUR SERVICES
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center dark:text-white">
            AI-Driven Solutions That Transform Businesses
          </h1>
          <p className="max-w-3xl text-center text-gray-600 dark:text-gray-300 mb-12">
            We specialize in next-generation software development and AI integration, 
            creating intelligent systems that optimize operations, enhance decision-making, 
            and unlock new growth opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {services.map((service) => (
            <button
              key={service.name}
              className={`glass-card p-4 flex flex-col items-center text-center ${
                selectedService.name === service.name
                  ? "border-green-500 text-green-500 dark:text-green-400 glow-effect"
                  : "border-gray-300 text-gray-600 dark:text-gray-300 hover:border-green-500"
              } transition-all duration-300 hover:text-green-500 dark:hover:text-green-400`}
              onClick={() => setSelectedService(service)}
            >
              <div className={`mb-4 ${selectedService.name === service.name ? "text-green-500 dark:text-green-400" : "text-gray-500 dark:text-gray-400"}`}>
                {service.icon}
              </div>
              <p className="font-bold text-sm md:text-base">{service.name}</p>
            </button>
          ))}
        </div>
        
        <div className="glass-card p-8 rounded-lg mb-8">
          <div className="flex items-center mb-6">
            <div className={`mr-6 text-green-500 dark:text-green-400`}>
              {selectedService.icon}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
              {selectedService.name}
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
            {selectedService.description}
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="mt-6 bg-green-500 dark:bg-green-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-green-600 dark:hover:bg-green-700 transition duration-300"
          >
            Learn More
          </button>
        </div>
      </div>

      <ServiceModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={selectedService}
      />
    </div>
  );
};

export default Services;
