"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const insights = [
  {
    id: 1,
    title: "The Future of AI Agents in Enterprise Solutions",
    excerpt: "Discover how autonomous AI agents are transforming business operations and decision-making processes across industries.",
    category: "AI Trends",
    date: "May 15, 2023",
    readTime: "8 min read",
    image: "/blog-ai-agents.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Building Effective RAG Systems: Best Practices",
    excerpt: "Learn how to design and implement Retrieval-Augmented Generation systems that deliver accurate, contextually relevant responses.",
    category: "Technical Guides",
    date: "June 2, 2023",
    readTime: "12 min read",
    image: "/blog-rag.jpg",
    featured: true
  },
  {
    id: 3,
    title: "Data Privacy in the Age of Generative AI",
    excerpt: "Explore the challenges and solutions for maintaining data privacy while leveraging the power of generative AI technologies.",
    category: "Compliance & Security",
    date: "July 10, 2023",
    readTime: "10 min read",
    image: "/blog-privacy.jpg",
    featured: false
  },
  {
    id: 4,
    title: "Multi-Agent Systems: Architecture and Implementation",
    excerpt: "A technical deep dive into designing robust multi-agent systems that collaborate effectively to solve complex problems.",
    category: "Technical Guides",
    date: "August 5, 2023",
    readTime: "15 min read",
    image: "/blog-multi-agent.jpg",
    featured: false
  },
  {
    id: 5,
    title: "AI Ethics: Responsible Development Frameworks",
    excerpt: "Understanding the ethical considerations in AI development and implementing frameworks for responsible innovation.",
    category: "Ethics & Governance",
    date: "September 12, 2023",
    readTime: "9 min read",
    image: "/blog-ethics.jpg",
    featured: false
  },
  {
    id: 6,
    title: "Optimizing LLMs for Enterprise Applications",
    excerpt: "Strategies for fine-tuning and optimizing large language models to meet specific business requirements and constraints.",
    category: "Technical Guides",
    date: "October 20, 2023",
    readTime: "14 min read",
    image: "/blog-llm-optimization.jpg",
    featured: false
  }
];

const resources = [
  {
    title: "AI Implementation Roadmap",
    description: "A step-by-step guide for organizations looking to implement AI solutions effectively",
    type: "PDF Guide",
    icon: "📊"
  },
  {
    title: "LLM Integration Patterns",
    description: "Technical patterns for integrating LLMs into existing software architectures",
    type: "Technical Whitepaper",
    icon: "🔄"
  },
  {
    title: "AI Agents: From Development to Deployment",
    description: "A comprehensive guide on building, testing and deploying AI agent systems",
    type: "Technical Guide",
    icon: "🤖"
  }
];

interface EmailSubmission {
  email: string;
  resource: string;
}

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  resourceTitle: string;
  submittedEmails: EmailSubmission[];
  onEmailSubmit: (email: string, resource: string) => void;
}

const DownloadModal: React.FC<DownloadModalProps> = ({ 
  isOpen, 
  onClose, 
  resourceTitle,
  submittedEmails,
  onEmailSubmit
}) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(true);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if this email has already downloaded this resource
    const hasSubmitted = submittedEmails.some(
      submission => submission.email === email && submission.resource === resourceTitle
    );

    if (hasSubmitted) {
      setError(`We've already sent ${resourceTitle} to ${email}. Please check your inbox.`);
      return;
    }

    // Clear any previous errors
    setError("");
    
    // Handle the submission
    onEmailSubmit(email, resourceTitle);
    setShowConfirmation(false);
    setSubmitted(true);
  };

  const resetModal = () => {
    setEmail("");
    setSubmitted(false);
    setShowConfirmation(true);
    setError("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={resetModal}
      ></div>
      <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-md w-full p-8">
        <button
          onClick={resetModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {showConfirmation ? (
          <>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Download Confirmation
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Would you like {resourceTitle} to be emailed to you?
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setShowConfirmation(false)}
                className="flex-1 bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
              >
                Yes, Continue
              </button>
              <button
                onClick={resetModal}
                className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
              >
                Cancel
              </button>
            </div>
          </>
        ) : !submitted ? (
          <>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Download {resourceTitle}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Please enter your email address and we&apos;ll send the resource directly to your inbox.
            </p>
            {error && (
              <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/50 text-red-600 dark:text-red-400 rounded-lg">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
                  placeholder="your@email.com"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
              >
                Send Me the Resource
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <div className="mb-4 text-green-500">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Thank You!
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We&apos;ll send {resourceTitle} to your email shortly.
            </p>
            <button
              onClick={resetModal}
              className="bg-green-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default function Insights() {
  const [activeTab, setActiveTab] = useState("articles");
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [selectedResource, setSelectedResource] = useState("");
  const [submittedEmails, setSubmittedEmails] = useState<EmailSubmission[]>([]);
  const featuredArticles = insights.filter(article => article.featured);
  const recentArticles = insights.filter(article => !article.featured).slice(0, 4);
  
  const handleDownload = (resourceTitle: string) => {
    setSelectedResource(resourceTitle);
    setShowDownloadModal(true);
  };

  const handleEmailSubmit = (email: string, resource: string) => {
    setSubmittedEmails([...submittedEmails, { email, resource }]);
  };

  return (
    <div className="neural-bg bg-gradient-to-b from-white via-green-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen w-full text-gray-800 dark:text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent mb-6 pb-2">
            Insights & Resources
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto">
            Stay updated with the latest trends, best practices, and expert insights
            in AI technology and digital transformation.
          </p>
          
          <div className="flex justify-center mt-8">
            <div className="glass-card inline-flex rounded-full p-1">
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium ${
                  activeTab === "articles" 
                    ? "bg-green-500 text-white" 
                    : "text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400"
                } transition-all`}
                onClick={() => setActiveTab("articles")}
              >
                Articles
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium ${
                  activeTab === "resources" 
                    ? "bg-green-500 text-white" 
                    : "text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400"
                } transition-all`}
                onClick={() => setActiveTab("resources")}
              >
                Resources
              </button>
            </div>
          </div>
        </div>
        
        {activeTab === "articles" && (
          <>
            {/* Featured Articles */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Featured Articles
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredArticles.map((article) => (
                  <Link key={article.id} href={`/articles/${article.id}`}>
                    <div className="glass-card group overflow-hidden rounded-xl transition-transform duration-300 hover:scale-[1.02]">
                      <div className="relative h-60 w-full">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-4">
                          <span className="inline-block bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                            {article.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-green-500 dark:group-hover:text-green-400 transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {article.date} · {article.readTime}
                          </span>
                          <span className="text-green-500 dark:text-green-400 font-medium text-sm">
                            Read More →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Recent Articles */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Recent Articles
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {recentArticles.map((article) => (
                  <Link key={article.id} href={`/articles/${article.id}`}>
                    <div className="glass-card group rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                      <div className="relative h-40 w-full">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-3 left-3">
                          <span className="inline-block bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                            {article.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <h3 className="text-base font-bold text-gray-800 dark:text-white mb-2 line-clamp-2 group-hover:text-green-500 dark:group-hover:text-green-400 transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {article.date}
                          </span>
                          <span className="text-green-500 dark:text-green-400 font-medium text-xs">
                            Read More →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="text-center mt-10">
                <Link 
                  href="/articles" 
                  className="inline-block border border-green-500 text-green-500 dark:text-green-400 dark:border-green-400 font-semibold py-2 px-6 rounded-full hover:bg-green-500 hover:text-white dark:hover:text-white transition duration-300"
                >
                  View All Articles
                </Link>
              </div>
            </div>
          </>
        )}
        
        {activeTab === "resources" && (
          <div className="glass-card p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Free Resources
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {resources.map((resource, index) => (
                <div 
                  key={index} 
                  className="glass-card bg-white/50 dark:bg-gray-800/50 p-6 rounded-lg hover:border-green-500 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{resource.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs px-3 py-1 rounded-full">
                      {resource.type}
                    </span>
                    <button 
                      onClick={() => handleDownload(resource.title)}
                      className="text-green-500 dark:text-green-400 font-medium hover:underline"
                    >
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-green-50 dark:bg-gray-700/50 p-6 rounded-lg">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    Subscribe to Our Newsletter
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Get the latest insights, tips, and resources delivered to your inbox monthly.
                  </p>
                </div>
                <div className="w-full md:w-auto">
                  <div className="flex">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full md:w-64 px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <button className="bg-green-500 text-white px-4 py-2 rounded-r-lg hover:bg-green-600 transition duration-300">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <DownloadModal
              isOpen={showDownloadModal}
              onClose={() => setShowDownloadModal(false)}
              resourceTitle={selectedResource}
              submittedEmails={submittedEmails}
              onEmailSubmit={handleEmailSubmit}
            />
          </div>
        )}
      </div>
    </div>
  );
} 