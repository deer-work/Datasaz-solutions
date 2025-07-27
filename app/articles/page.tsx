"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "The Future of AI Agents in Enterprise Solutions",
    excerpt: "Discover how autonomous AI agents are transforming business operations and decision-making processes across industries.",
    category: "AI Trends",
    date: "May 15, 2023",
    readTime: "8 min read",
    image: "/blog-ai-agents.jpg",
  },
  {
    id: 2,
    title: "Building Effective RAG Systems: Best Practices",
    excerpt: "Learn how to design and implement Retrieval-Augmented Generation systems that deliver accurate, contextually relevant responses.",
    category: "Technical Guides",
    date: "June 2, 2023",
    readTime: "12 min read",
    image: "/blog-rag.jpg",
  },
  {
    id: 3,
    title: "Data Privacy in the Age of Generative AI",
    excerpt: "Explore the challenges and solutions for maintaining data privacy while leveraging the power of generative AI technologies.",
    category: "Compliance & Security",
    date: "July 10, 2023",
    readTime: "10 min read",
    image: "/blog-privacy.jpg",
  },
  {
    id: 4,
    title: "Multi-Agent Systems: Architecture and Implementation",
    excerpt: "A technical deep dive into designing robust multi-agent systems that collaborate effectively to solve complex problems.",
    category: "Technical Guides",
    date: "August 5, 2023",
    readTime: "15 min read",
    image: "/blog-multi-agent.jpg",
  },
  {
    id: 5,
    title: "AI Ethics: Responsible Development Frameworks",
    excerpt: "Understanding the ethical considerations in AI development and implementing frameworks for responsible innovation.",
    category: "Ethics & Governance",
    date: "September 12, 2023",
    readTime: "9 min read",
    image: "/blog-ethics.jpg",
  },
  {
    id: 6,
    title: "Optimizing LLMs for Enterprise Applications",
    excerpt: "Strategies for fine-tuning and optimizing large language models to meet specific business requirements and constraints.",
    category: "Technical Guides",
    date: "October 20, 2023",
    readTime: "14 min read",
    image: "/blog-llm-optimization.jpg",
  }
];

const categories = Array.from(new Set(articles.map(article => article.category)));

export default function ArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <Link 
          href="/"
          className="inline-flex items-center text-green-500 hover:text-green-600 dark:text-green-400 dark:hover:text-green-500 "
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Latest Articles
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our collection of articles on AI technology, best practices, and industry insights.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                selectedCategory === "All"
                  ? "bg-green-500 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                  selectedCategory === category
                    ? "bg-green-500 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <Link key={article.id} href={`/articles/${article.id}`}>
              <div className="glass-card group rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                <div className="relative h-48 w-full">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-green-500 dark:group-hover:text-green-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
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
    </div>
  );
} 