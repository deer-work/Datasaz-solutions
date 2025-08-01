import React, { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

interface FooterLinkProps {
  href: string;
  children: ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <Link
    href={href}
    className="hover:text-cyan-400 transition-colors duration-300"
  >
    {children}
  </Link>
);

export default function Footer() {
  const services = [
    "AI Agents & Multi-Agent Systems",
    "Generative AI Applications",
    "Machine Learning & Deep Learning",
    "Microservices Architecture",
    "Serverless Computing & DevOps",
    "LLM Fine-tuning & RAG Systems",
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 text-black dark:text-white py-12 border-t-2 border-black dark:border-gray-700 w-full">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="DataSAZ Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="ml-4">
                <h1 className="text-xl md:text-2xl font-semibold text-green-500 dark:text-green-400">
                  DataSAZ
                  <br />
                  <span className="text-cyan-500 dark:text-cyan-400 ml-8 md:ml-12">
                    Solutions
                  </span>
                </h1>
              </div>
            </div>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-6">
              The Architects of AI-Driven Transformation. We specialize in
              next-generation software development, empowering businesses with
              AI-driven solutions, cloud-native applications, and intelligent
              automation.
            </p>
            <div className="flex space-x-4 mb-8">
              <a
                href="https://www.facebook.com/DataSAZSolutions"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                target="_blank"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/datasaz.solutions"
                target="_blank"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://x.com/DataSAZ"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                target="_blank"
                aria-label="Twitter"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/datasaz-solutions/"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
                target="_blank"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.042-1.857-3.042-1.858 0-2.143 1.45-2.143 2.95v5.661H9.34V9h3.413v1.561h.049c.474-.899 1.631-1.847 3.36-1.847 3.594 0 4.257 2.365 4.257 5.446v6.291zM5.337 7.433c-1.144 0-2.068-.926-2.068-2.07 0-1.144.924-2.07 2.068-2.07 1.145 0 2.069.926 2.069 2.07 0 1.144-.924 2.07-2.069 2.07zm1.775 13.019H3.56V9h3.552v11.452zM22.225 0H1.771C.791 0 0 .774 0 1.727v20.546C0 23.226.791 24 1.771 24h20.451C23.21 24 24 23.226 24 22.273V1.727C24 .774 23.21 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-4 text-gray-800 dark:text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>
                <FooterLink href="#home">Home</FooterLink>
              </li>
              <li>
                <FooterLink href="#about">About</FooterLink>
              </li>
              <li>
                <FooterLink href="#services">Services</FooterLink>
              </li>
              <li>
                <FooterLink href="#ai-solutions">AI Solutions</FooterLink>
              </li>
              <li>
                <FooterLink href="#case-studies">Case Studies</FooterLink>
              </li>
              <li>
                <FooterLink href="#technology">Technologies</FooterLink>
              </li>
              <li>
                <FooterLink href="#contact">Contact</FooterLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-4 text-gray-800 dark:text-white">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              {services.map((service, index) => (
                <li className="hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors duration-300 cursor-pointer" key={index}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-4 text-gray-800 dark:text-white">
              Contact Us
            </h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Islamabad, Pakistan</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Rawalpindi, Pakistan</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+92 (0)319 3718710</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>datasaz.contact@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                © 2024 DATASAZ SOLUTIONS. All rights reserved.
              </p>
            </div>
            <div className="text-center md:text-right">
              <div className="flex justify-center md:justify-end space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <Link
                  href="/privacy-policy"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/accessibility"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Accessibility
                </Link>
                <Link
                  href="/company-policy"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Company Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
