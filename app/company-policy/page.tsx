import React from "react";
import SimpleNavbar from "@/components/SimpleNavbar";
import SimpleFooter from "@/components/SimpleFooter";

export default function CompanyPolicyPage() {
  const lastUpdatedDate = "October 12, 2024"; // Update this date whenever policies change

  return (
    <div className="neural-bg min-h-screen w-full text-gray-800 dark:text-white">
      <div className="glassy-background">
        <SimpleNavbar />
        <main className="max-w-4xl mx-auto px-4 py-12 md:py-20">
          <h1 className="text-3xl md:text-5xl font-bold text-center bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent mb-12">
            Company Policies
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
            Last Updated: {lastUpdatedDate}
          </p>

          <div className="space-y-8 text-gray-700 dark:text-gray-300 text-lg">
            <section className="glass-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-green-500 dark:text-green-400 mb-4">1. Introduction & Commitment</h2>
              <p>
                DataSAZ Solutions (&quot;DataSAZ&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is dedicated to upholding the highest standards of ethical conduct, transparency, and operational excellence in all aspects of our business. As architects of AI-driven transformation, we are committed to responsible innovation, legal compliance, and fostering trust with our clients, partners, and employees. This document outlines key company policies that guide our operations and interactions.
              </p>
              <p className="mt-4">
                Our mission to transform businesses using cutting-edge technology is underpinned by a strong commitment to integrity and accountability.
              </p>
            </section>

            <section className="glass-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-cyan-500 dark:text-cyan-400 mb-4">2. Code of Conduct & Ethical Standards</h2>
              <p>
                All employees and representatives of DataSAZ Solutions are expected to adhere to a strict code of professional conduct. This includes:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Acting with honesty, integrity, and fairness in all business dealings.</li>
                <li>Respecting confidentiality and protecting sensitive information belonging to clients and the company.</li>
                <li>Avoiding conflicts of interest.</li>
                <li>Promoting a collaborative and respectful work environment.</li>
                <li>Adhering to all applicable laws and regulations in the jurisdictions where we operate.</li>
                <li>Committing to responsible AI development and deployment practices, considering potential societal impacts.</li>
              </ul>
            </section>

            <section className="glass-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-green-500 dark:text-green-400 mb-4">3. Data Security & Privacy</h2>
              <p>
                Protecting the data entrusted to us by our clients and gathered through our operations is paramount. We implement robust administrative, technical, and physical security measures to safeguard information against unauthorized access, disclosure, alteration, or destruction.
              </p>
              <p className="mt-4">
                Our specific practices regarding the collection, use, and protection of personal information gathered through our website and services are detailed in our <a href="/privacy-policy" className="text-green-500 hover:underline">Privacy Policy</a>.
              </p>
            </section>

            <section className="glass-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-cyan-500 dark:text-cyan-400 mb-4">4. Service Quality & Client Engagement</h2>
              <p>
                We are committed to delivering high-quality, innovative solutions that provide tangible value to our clients. Our engagement process emphasizes:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Clear communication and expectation setting throughout the project lifecycle.</li>
                <li>Collaborative partnerships to ensure solutions align with client business objectives.</li>
                <li>Utilizing best practices in software development, AI implementation, and project management.</li>
                <li>Providing appropriate levels of support and maintenance as agreed upon in service contracts.</li>
                <li>Continuously improving our methodologies and technical expertise.</li>
              </ul>
            </section>

            <section className="glass-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-green-500 dark:text-green-400 mb-4">5. Intellectual Property</h2>
              <p>
                We respect the intellectual property rights of others and protect our own. The ownership and usage rights of intellectual property developed during client engagements are typically defined in specific project agreements.
              </p>
              <p className="mt-4">
                Our website content, trademarks, and proprietary methodologies are protected by law. Usage guidelines and restrictions regarding our website and its content are outlined in our <a href="/terms-of-service" className="text-green-500 hover:underline">Terms of Service</a>.
              </p>
            </section>

            <section className="glass-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-cyan-500 dark:text-cyan-400 mb-4">6. Policy Updates</h2>
              <p>
                DataSAZ Solutions reserves the right to modify or update these company policies at any time to reflect changes in our business, technology, or legal requirements. Significant changes will be communicated through appropriate channels. The &quot;Last Updated&quot; date on relevant policy pages indicates the latest revision.
              </p>
            </section>

            <section className="glass-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-green-500 dark:text-green-400 mb-4">7. Contact Information</h2>
              <p>
                For questions regarding our company policies, please contact us:
              </p>
              <div className="mt-4 space-y-1">
                <p><strong>DataSAZ Solutions</strong></p>
                <p>Islamabad, Pakistan</p>
                <p>Email: <a href="mailto:info@datasaz.com" className="text-green-500 hover:underline">info@datasaz.com</a> or <a href="mailto:datasaz.contact@gmail.com" className="text-green-500 hover:underline">datasaz.contact@gmail.com</a></p>
                <p>Phone: +92 (0)319 3718710</p>
              </div>
            </section>
          </div>
        </main>
        <SimpleFooter />
      </div>
    </div>
  );
}