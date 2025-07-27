"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Send,
  Minimize2,
  X,
  MessageSquare,
  ThumbsUp,
  Phone,
  User,
  Bot,
  ThumbsDown,
  FileText,
  Clock,
} from "lucide-react";

export default function ProfessionalChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("chat");
  const [messages, setMessages] = useState([
    {
      text: "Welcome to our professional support. How may I assist you today?",
      sender: "bot",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (isDisliked) {
      setIsDisliked(false); // Remove dislike if like is clicked
    }
  };

  const handleDislike = () => {
    setIsDisliked(!isDisliked);
    if (isLiked) {
      setIsLiked(false); // Remove like if dislike is clicked
    }
  };

  const handleQuickAction = (action: string) => {
    setMessages([
      ...messages,
      { text: `You selected: ${action}`, sender: "bot" },
    ]);
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (inputText.trim()) {
      setMessages((prev) => [...prev, { text: inputText, sender: "user" }]);
      setInputText("");
      setIsLoading(true);
      try {
        const chatApiUrl =
          process.env.NEXT_PUBLIC_CHAT_API_URL ||
          "http://localhost:8000/api/chat";
        const response = await fetch(chatApiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query: inputText }),
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        if (!response.body) {
          throw new Error("Response body is null");
        }
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let fullText = "";
        setMessages((prev) => [...prev, { text: "", sender: "bot" }]);
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value);
          fullText += chunk;
          setMessages((prev) => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1].text = fullText;
            return newMessages;
          });
        }
      } catch (error) {
        console.error("Error:", error);
        setMessages((prev) => [
          ...prev,
          {
            text: "Sorry, I encountered an error. Please try again later.",
            sender: "bot",
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    }
  };
  const renderChatSection = () => (
    <>
      <div className="h-72 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex
               ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`flex items-start space-x-2 max-w-3/4 p-3 rounded-lg ${
                message.sender === "user"
                  ? "dark:bg-green-800 dark:text-white bg-green-100 text-green-800"
                  : "dark:bg-gray-700 dark:text-gray-200 bg-gray-100 text-gray-800"
              }`}
            >
              {message.sender === "bot" && <Bot size={20} className="mt-1" />}
              {message.sender === "user" && <User size={20} className="mt-1" />}
              <p>{message.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-800 p-3 rounded-lg">
              <Bot size={20} className="animate-pulse" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 border-t">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow p-2 border rounded-lg dark:text-white text-black focus:outline-none focus:ring-2 focus:ring-green-500"
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />

          <button
            onClick={handleSend}
            className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-colors"
            disabled={isLoading}
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </>
  );

  const renderFAQSection = () => (
    <div className="h-96 overflow-y-auto p-4 space-y-4">
      <h3 className="font-semibold text-lg mb-2 text-green-400">
        Frequently Asked Questions
      </h3>
      <div className="space-y-4">
        <div className="bg-gray-100 p-4 rounded-lg dark:bg-gray-700 ">
          <h4 className="font-semibold mb-2  text-green-400">
            What makes your custom software solutions unique?
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-100">
            DataSAZ Solutions excels in building customized software that is
            both scalable and highly secure. We employ modern cloud-based
            architectures, containerization with Docker and Kubernetes, and
            leverage event-driven microservices for real-time data processing
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg dark:bg-gray-700">
          <h4 className="font-semibold mb-2  text-green-400">
            What backend technologies do you work with?
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-100">
            We have extensive experience with backend technologies such as
            Python (FastAPI, Flask), SQL databases (PostgreSQL, MySQL), and
            event streaming platforms like Kafka. This allows us to build
            robust, scalable systems that meet enterprise demands.
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg dark:bg-gray-700">
          <h4 className="font-semibold mb-2  text-green-400">
            How does your AI integration benefit clients?
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-100">
            Our AI-driven solutions provide clients with predictive analytics,
            automation, and data-driven decision-making capabilities. Whether
            its enhancing customer experiences or optimizing operations, our AI
            services are tailored to add measurable value
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg dark:bg-gray-700">
          <h4 className="font-semibold mb-2  text-green-400">
            What financial automation solutions do you provide?
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-100">
            We specialize in automating financial tasks like payroll management,
            bookkeeping, and tax reporting, ensuring that businesses can focus
            on growth rather than manual processes. Our systems integrate
            seamlessly with existing business operations for maximum efficiency.
          </p>
        </div>
      </div>
    </div>
  );

  const renderKnowledgeBaseSection = () => (
    <div className="h-96 overflow-y-auto p-4 space-y-4">
      <h3 className="font-semibold text-lg mb-2 text-green-400">
        Knowledge Base
      </h3>
      <div className="space-y-4">
        <div className="bg-gray-100 p-4 rounded-lg flex items-center space-x-4 dark:bg-gray-700">
          <FileText size={24} className="text-green-500" />
          <div>
            <h4 className="font-semibold  text-green-400">
              Getting Started Guide
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-100">
              Learn the basics of our platform
            </p>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg flex items-center space-x-4 dark:bg-gray-700">
          <FileText size={24} className="text-green-500" />
          <div>
            <h4 className="font-semibold  text-green-400">API Documentation</h4>
            <p className="text-sm text-gray-600 dark:text-gray-100">
              Explore our API capabilities
              <br />
              Detailed guide for developers
            </p>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg flex items-center space-x-4 dark:bg-gray-700">
          <FileText size={24} className="text-green-500" />
          <div>
            <h4 className="font-semibold  text-green-400">
              Troubleshooting Common Issues
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-100">
              Solutions to frequent problems
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContactSection = () => (
    <div className="h-96 overflow-y-auto p-4 space-y-4">
      <h3 className="font-semibold text-lg mb-2 text-green-400">
        Contact Information
      </h3>
      <div className="space-y-4">
        <div className="bg-gray-100 p-4 rounded-lg flex items-center space-x-4 dark:bg-gray-700">
          <Phone size={24} className="text-green-500" />
          <div>
            <h4 className="font-semibold  text-green-400">Whatsapp Support</h4>
            <p className="text-sm text-gray-600 dark:text-gray-100">
              +92 319 3718710{" "}
            </p>
            <p className="text-xs text-gray-500  dark:text-gray-100">
              Monday - Friday, 9am - 5pm EST
            </p>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg flex items-center space-x-4 dark:bg-gray-700">
          <MessageSquare size={24} className="text-green-500" />
          <div>
            <h4 className="font-semibold  text-green-400">Email Support</h4>
            <p className="text-sm text-gray-600  dark:text-gray-100">
              {" "}
              datasaz.contact@gmail.com
            </p>
            <p className="text-xs text-gray-500  dark:text-gray-100">
              24/7 support, response within 24 hours
            </p>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg flex items-center space-x-4 dark:bg-gray-700">
          <Clock size={24} className="text-green-500" />
          <div>
            <h4 className="font-semibold  text-green-400">Business Hours</h4>
            <p className="text-sm text-gray-600 dark:text-gray-100">
              Monday - Friday: 9am - 6pm EST
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-100">
              Saturday: 10am - 4pm EST
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-100">
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        >
          <MessageSquare size={24} />
        </button>
      ) : (
        <div className="bg-white dark:bg-gray-900 text-black dark:text-white rounded-lg shadow-xl w-[28rem] h-[36rem] overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 via-green-400 to-cyan-600 text-white p-4 flex justify-between items-center ">
            <h2 className="text-lg font-semibold">Professional Support</h2>
            <div className="flex space-x-2">
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-green-600 p-1 rounded"
              >
                <Minimize2 size={20} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-green-600 p-1 rounded"
              >
                <X size={20} />
              </button>
            </div>
          </div>
          <div className="flex border-b dark:border-gray-700">
            <button
              onClick={() => setActiveSection("chat")}
              className={`flex-1 py-2 px-4 text-center ${
                activeSection === "chat"
                  ? "bg-gray-100 dark:bg-gray-700 font-semibold"
                  : ""
              }`}
            >
              Chat
            </button>
            <button
              onClick={() => setActiveSection("faq")}
              className={`flex-1 py-2 px-4 text-center ${
                activeSection === "faq"
                  ? "bg-gray-100 dark:bg-gray-700 font-semibold"
                  : ""
              }`}
            >
              FAQ
            </button>
            <button
              onClick={() => setActiveSection("kb")}
              className={`flex-1 py-2 px-4 text-center ${
                activeSection === "kb"
                  ? "bg-gray-100 dark:bg-gray-700 font-semibold"
                  : ""
              }`}
            >
              Knowledge Base
            </button>
            <button
              onClick={() => setActiveSection("contact")}
              className={`flex-1 py-2 px-4 text-center ${
                activeSection === "contact"
                  ? "bg-gray-100 dark:bg-gray-700 font-semibold"
                  : ""
              }`}
            >
              Contact
            </button>
          </div>
          {activeSection === "chat" && renderChatSection()}
          {activeSection === "faq" && renderFAQSection()}
          {activeSection === "kb" && renderKnowledgeBaseSection()}
          {activeSection === "contact" && renderContactSection()}
          <div className="bg-gray-50 dark:bg-gray-800 p-3 flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 border-t dark:border-gray-700">
            <span>How do you like the experience:</span>
            <button onClick={handleLike} className="focus:outline-none">
              <ThumbsUp
                size={24}
                className={`transition-colors ${
                  isLiked ? "text-pink-500" : "text-gray-400"
                }`}
              />
            </button>
            <button onClick={handleDislike} className="focus:outline-none">
              <ThumbsDown
                size={24}
                className={`transition-colors ${
                  isDisliked ? "text-blue-500" : "text-gray-400"
                }`}
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
