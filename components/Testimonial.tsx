"use client";
import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Syed Waqas Shah",
    position: "CTO, Thunderbird Technologies",
    image: "/waqas.jpeg",
    quote: "DataSAZ Solutions delivered exceptional results for our AI integration project. Their team's expertise in machine learning and custom agent development transformed our customer service operations with impressive efficiency gains.",
    rating: 5
  },
  {
    id: 3,
    name: "Kaleem Abbasi",
    position: "Data Science Graduate, Comsats University Islamabad",
    image: "/kaleem.jpeg",
    quote: "As part of a research collaboration, DataSAZ Solutions provided invaluable guidance on implementing advanced machine learning models. Their team's knowledge and support were instrumental in helping us achieve our research objectives.",
    rating: 5
  },
  {
    id: 4,
    name: "Darren Young",
    position: "Director of Innovation, Renograte.com",
    image: "/darren.jpg",
    quote: "Partnering with DataSAZ for our generative AI implementation was a game-changer. Their deep understanding of our business needs and technical expertise resulted in a solution that significantly enhanced our content creation capabilities.",
    rating: 5
  },
  {
    id: 3,
    name: "Haris Javed",
    position: "Product Manager, CodeCraft Pakistan",
    image: "/haris.jpeg",
    quote: "DataSAZ delivered a custom AI solution that perfectly aligned with our complex requirements. Their approach to understanding our needs and building an intuitive yet powerful system has given us a significant competitive advantage in the market.",
    rating: 5
  }
];

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a wide range of services including web development, AI and machine learning solutions, DevOps, and data science and analytics.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on complexity and scope. We work closely with our clients to establish realistic timelines and milestones.",
  },
  {
    question: "What kind of clients do you typically work with?",
    answer:
      "I collaborate with a wide range of clients, from startups to large enterprises, providing custom web solutions, Cloud computing , and AI integrations tailored to their business needs.",
  },
  {
    question: "What tools and technologies do you specialize in?",
    answer:
      "I specialize in a range of technologies including Next.js, React, Tailwind CSS, Node.js, FastAPI, PostgresSql ,Kafka , Kong and more. I am also experienced with cloud platforms like AWS,Azure and Firebase for deployment and scalability.",
  },
];

const Testimonial: React.FC<{ testimonial: typeof testimonials[0]; index: number }> = ({ testimonial, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      className="bg-gray-200 p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { scale: 0.5, opacity: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex items-center mb-4">
        <div>
          <h3 className="font-semibold text-lg text-cyan-800">{testimonial.name}</h3>
          <p className="text-green-400">{testimonial.position}</p>
        </div>
      </div>
      <p className="text-gray-700">{testimonial.quote}</p>
    </motion.div>
  );
};

const FAQItem: React.FC<{ faq: typeof faqs[0]; index: number; isActive: boolean; onClick: () => void }> = ({ faq, index, isActive, onClick }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      className="mb-4"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { scale: 0.5, opacity: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <button
        className="flex justify-between items-center w-full text-left p-4 bg-gray-200 rounded-lg focus:outline-none"
        onClick={onClick}
      >
        <span className="font-semibold text-green-800">{faq.question}</span>
        <span className="ml-6 flex-shrink-0">
          {isActive ? (
            <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          ) : (
            <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
        </span>
      </button>
      {isActive && (
        <div className="mt-2 p-4 bg-gray-200 rounded-lg">
          <p className="text-cyan-900">{faq.answer}</p>
        </div>
      )}
    </motion.div>
  );
};

const TestimonialsAndFAQs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const next = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  const prev = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="neural-bg bg-gradient-to-b from-white via-green-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen w-full text-gray-800 dark:text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent mb-6">
            Client Testimonials
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about 
            working with DataSAZ Solutions.
          </p>
        </div>
        
        <div className="glass-card p-8 rounded-xl overflow-hidden relative mb-16">
          <div className="relative min-h-[400px]">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`transition-opacity duration-500 absolute inset-0 flex flex-col md:flex-row items-center gap-8 ${
                  index === activeIndex ? "opacity-100 z-10" : "opacity-0 -z-10"
                }`}
              >
                <div className="flex-shrink-0 w-32 h-32 md:w-48 md:h-48 relative">
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"/>
                    </svg>
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <blockquote className="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-200 italic mb-6">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-green-500 dark:text-green-400">
                        {testimonial.position}
                      </p>
                    </div>
                    
                    <div className="flex items-center mt-3 md:mt-0">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={`w-5 h-5 ${
                            i < testimonial.rating 
                              ? "text-yellow-400" 
                              : "text-gray-300 dark:text-gray-600"
                          }`}
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-between items-center mt-8">
            <button 
              onClick={prev}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-green-500 hover:text-white dark:hover:bg-green-500 transition-colors focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === activeIndex 
                      ? "bg-green-500" 
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-green-300 dark:hover:bg-green-700"
                  } transition-colors focus:outline-none`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={next}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-green-500 hover:text-white dark:hover:bg-green-500 transition-colors focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* FAQs Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Have questions about our services? Check out our frequently asked questions below.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                What types of AI solutions do you offer?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We specialize in AI agents, generative AI applications, machine learning solutions, and custom AI strategy & integration services. Our solutions range from customer service automation to predictive analytics and creative content generation tools.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                How long does it typically take to implement an AI solution?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Implementation timelines vary based on project complexity, ranging from 4-8 weeks for straightforward solutions to 3-6 months for enterprise-level implementations. We provide detailed timelines during our initial consultation.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                Do you offer support after implementation?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, we provide comprehensive post-implementation support including system monitoring, performance optimization, training, and regular updates. We offer flexible support packages to meet your specific needs.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                How do you handle data privacy and security?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We prioritize data security with robust encryption, secure infrastructure, and compliance with industry standards. We implement privacy-by-design principles and can work within your existing security frameworks.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Don&apos;t see your question here?
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-green-500 dark:bg-green-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-green-600 dark:hover:bg-green-700 transition duration-300"
            >
              Contact Us for More Information
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsAndFAQs;