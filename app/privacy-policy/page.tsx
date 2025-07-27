import React from "react";
import SimpleNavbar from "@/components/SimpleNavbar";
import SimpleFooter from "@/components/SimpleFooter";

export default function PrivacyPolicy() {
  const websiteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://www.datasaz.com'; // Default URL
  const lastUpdatedDate = "October 12, 2024"; // Update this date whenever the policy changes

  return (
    <div className="neural-bg min-h-screen w-full text-gray-800 dark:text-white">
      <div className="glassy-background">
        <SimpleNavbar />
        <main className="max-w-4xl mx-auto px-4 py-12 md:py-20">
          <h1 className="text-3xl md:text-5xl font-bold text-center bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent mb-12">
            Privacy Policy
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
            Last Updated: {lastUpdatedDate}
          </p>

          <div className="space-y-8 text-gray-700 dark:text-gray-300 text-lg">
            <section className="glass-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-green-500 dark:text-green-400 mb-4">1. Introduction</h2>
              <p>
                Welcome to DataSAZ Solutions (&quot;DataSAZ&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). We specialize in next-generation software development, AI-driven solutions, cloud-native applications, and intelligent automation. We are committed to protecting your privacy and handling your personal information responsibly. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website ({websiteUrl}), use our services, or interact with us in any other way (collectively, the &quot;Services&quot;). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access or use our Services.
              </p>
            </section>

            <section className="glass-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-cyan-500 dark:text-cyan-400 mb-4">2. Information We Collect</h2>
              <p>
                We may collect information about you in various ways when you use our Services:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>
                  <strong>Personal Information You Provide:</strong> We collect information you voluntarily provide to us, such as when you contact us for inquiries, request a quote, subscribe to our newsletter, download resources (like whitepapers or guides, which may require email submission), or otherwise communicate with us. This may include your name, email address, phone number, company name, job title, and any other information you choose to provide.
                </li>
                <li>
                  <strong>Information Collected Automatically:</strong> When you access our website, our servers automatically collect certain information. This &quot;Usage Data&quot; may include your IP address, browser type, operating system, device information, pages visited, time spent on pages, referring website addresses, and other diagnostic data related to your interaction with our Services. We may use cookies and similar tracking technologies (like web beacons and pixels) to collect this information.
                </li>
                <li>
                  <strong>Information from Third Parties:</strong> We may receive information about you from other sources, such as public databases, joint marketing partners, social media platforms, or other third parties, where permitted by law.
                </li>
              </ul>
            </section>

            <section className="glass-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-green-500 dark:text-green-400 mb-4">3. Use of Your Information</h2>
              <p>
                We use the information we collect for various business purposes, including to:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Provide, operate, and maintain our Services.</li>
                <li>Respond to your comments, questions, and requests, and provide customer service and support.</li>
                <li>Process transactions and send you related information, including confirmations and invoices (if applicable).</li>
                <li>Send you technical notices, updates, security alerts, and support and administrative messages.</li>
                <li>Communicate with you about products, services, offers, promotions, and events offered by DataSAZ and others, and provide news and information we think will be of interest to you (you can opt-out of marketing communications at any time).</li>
                <li>Monitor and analyze trends, usage, and activities in connection with our Services to improve and personalize them.</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities and protect the rights and property of DataSAZ and others.</li>
                <li>Personalize your online experience and the advertisements you see when you use the Services or third-party platforms based on your preferences, interests, and browsing behavior.</li>
                 <li>Facilitate contests, sweepstakes, and promotions and process and deliver entries and rewards.</li>
                 <li>Comply with legal obligations and resolve disputes.</li>
                 <li>Carry out any other purpose described to you at the time the information was collected.</li>
              </ul>
            </section>

             <section className="glass-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-cyan-500 dark:text-cyan-400 mb-4">4. Disclosure of Your Information</h2>
               <p>We may share information we have collected about you in certain situations:</p>
               <ul className="list-disc list-inside mt-4 space-y-2">
                 <li><strong>With Your Consent:</strong> We may share your personal information with your consent or at your direction.</li>
                 <li><strong>Service Providers:</strong> We may share your information with third-party vendors, consultants, and other service providers who need access to such information to carry out work on our behalf (e.g., website hosting, data analysis, email delivery, marketing assistance, customer service). These service providers are obligated to protect your information and use it only for the purposes for which it was disclosed.</li>
                 <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company.</li>
                 <li><strong>Legal Obligations and Rights Protection:</strong> We may disclose your information if we believe disclosure is necessary or appropriate to: (a) comply with applicable laws, regulations, legal processes, or governmental requests; (b) enforce our Terms of Service or other agreements, policies, and standards, including investigation of potential violations thereof; (c) protect the security or integrity of our Services; or (d) protect the rights, property, or safety of DataSAZ, our users, or the public as required or permitted by law.</li>
                 <li><strong>Aggregated or De-Identified Data:</strong> We may share aggregated or de-identified information, which cannot reasonably be used to identify you.</li>
                </ul>
            </section>

             <section className="glass-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-green-500 dark:text-green-400 mb-4">5. Data Security</h2>
              <p>
                We implement reasonable administrative, technical, and physical security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure. Therefore, we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. While we strive to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
              </p>
            </section>

            <section className="glass-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-cyan-500 dark:text-cyan-400 mb-4">6. Data Retention</h2>
              <p>
                We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies. Usage Data is generally retained for a shorter period, except when this data is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer periods.
              </p>
            </section>

            <section className="glass-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-green-500 dark:text-green-400 mb-4">7. Your Data Protection Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information under applicable data protection laws. These may include the right to:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Request access to and obtain a copy of your personal information.</li>
                <li>Request correction of inaccurate or incomplete personal information.</li>
                <li>Request erasure of your personal information under certain conditions.</li>
                <li>Request restriction of the processing of your personal information.</li>
                 <li>Object to the processing of your personal information.</li>
                 <li>Request data portability (if applicable).</li>
                 <li>Withdraw your consent at any time where we rely on consent to process your personal information.</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us using the contact details provided below. We will respond to your request in accordance with applicable law.
              </p>
            </section>

            <section className="glass-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-cyan-500 dark:text-cyan-400 mb-4">8. Policy for Children</h2>
              <p>
                Our Services are not directed to children under the age of 13 (or other age as required by local law), and we do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information without parental consent, please contact us. If we become aware that we have collected personal information from a child without verification of parental consent, we take steps to remove that information from our servers.
              </p>
            </section>

            <section className="glass-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-green-500 dark:text-green-400 mb-4">9. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time in response to changing legal, technical, or business developments. When we update our Privacy Policy, we will take appropriate measures to inform you, consistent with the significance of the changes we make. We will obtain your consent to any material Privacy Policy changes if and where this is required by applicable data protection laws. You can see when this Privacy Policy was last updated by checking the &quot;Last updated&quot; date displayed at the top of this Privacy Policy.
              </p>
            </section>

            <section className="glass-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-cyan-500 dark:text-cyan-400 mb-4">10. Contact Us</h2>
              <p>
                If you have questions, comments, or concerns about this Privacy Policy or our privacy practices, please contact us:
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