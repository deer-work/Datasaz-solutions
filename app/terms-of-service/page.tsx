import React from "react";
import SimpleNavbar from "@/components/SimpleNavbar";
import SimpleFooter from "@/components/SimpleFooter";

export default function TermsOfServicePage() {
  const websiteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://www.datasaz.com'; // Default URL
  const lastUpdatedDate = "October 12, 2024"; // Update this date whenever the terms change

  return (
    <div className="neural-bg min-h-screen w-full text-gray-800 dark:text-white">
      <div className="glassy-background">
        <SimpleNavbar />
        <main className="max-w-4xl mx-auto px-4 py-12 md:py-20">
          <h1 className="text-3xl md:text-5xl font-bold text-center bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent mb-12">
            Terms of Service
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
            Last Updated: {lastUpdatedDate}
          </p>

          <div className="space-y-8 text-gray-700 dark:text-gray-300 text-lg">
            <section className="glass-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-green-500 dark:text-green-400 mb-4">1. Agreement to Terms</h2>
              <p>
                These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&quot;you&quot; or &quot;User&quot;) and DataSAZ Solutions (&quot;DataSAZ&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), concerning your access to and use of the DataSAZ Solutions website located at {websiteUrl}, as well as any related services, content, features, or applications offered by DataSAZ (collectively, the &quot;Services&quot;).
              </p>
              <p className="mt-4">
                By accessing or using the Services, you acknowledge that you have read, understood, and agree to be bound by these Terms. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
              </p>
              <p className="mt-4">
                We may update these Terms from time to time. The updated version will be indicated by an updated &quot;Last Updated&quot; date, and the updated version will be effective as soon as it is accessible. You are responsible for reviewing these Terms periodically to stay informed of updates. Your continued use of the Services after the date such revised Terms are posted will be considered acceptance of the changes.
              </p>
            </section>

            <section className="glass-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-cyan-500 dark:text-cyan-400 mb-4">2. Our Services</h2>
              <p>
                DataSAZ Solutions provides next-generation software development, AI-driven solutions, cloud-native applications, and intelligent automation services. Our core offerings include, but are not limited to:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                 <li>AI Agents & Multi-Agent Systems</li>
                 <li>Generative AI Applications (including RAG-based systems)</li>
                 <li>Machine Learning & Deep Learning Model Development</li>
                 <li>Microservices Architecture & API Integrations</li>
                 <li>Serverless Computing, DevOps & CI/CD Pipelines</li>
                 <li>LLM Fine-tuning</li>
                 <li>Data Engineering & Analytics</li>
                 <li>Cloud-Native Development (AWS, Azure, Firebase)</li>
              </ul>
              <p className="mt-4">
                The website provides information about our services, insights, case studies, and resources. Some resources may require you to provide contact information (like an email address) for access.
              </p>
            </section>

            <section className="glass-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-green-500 dark:text-green-400 mb-4">3. Intellectual Property Rights</h2>
              <p>
                Unless otherwise indicated, the Services and all content and materials located on the Services, including, without limitation, the DataSAZ name and logo, designs, text, graphics, pictures, information, data, software, sound files, other files, and the selection and arrangement thereof (collectively, the &quot;Content&quot;) are the proprietary property of DataSAZ Solutions or our licensors and are protected by Pakistani and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
              <p className="mt-4">
                You are granted a limited, non-exclusive, non-transferable, non-sublicensable license to access and use the Services and Content for your personal, non-commercial use, or for internal business purposes related to evaluating or engaging our services. This license is subject to these Terms and does not permit: (a) any resale or commercial use of the Services or Content; (b) the distribution, public performance, or public display of any Content; (c) modifying or otherwise making any derivative uses of the Services or Content, or any portion thereof; (d) use of any data mining, robots, or similar data gathering or extraction methods; (e) downloading (other than page caching) of any portion of the Services or Content, except as expressly permitted by us (e.g., downloading resources explicitly offered for download); or (f) any use of the Services or Content other than for their intended purposes. Any use of the Services or Content other than as specifically authorized herein, without our prior written permission, is strictly prohibited and will terminate the license granted herein.
              </p>
            </section>

            <section className="glass-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-cyan-500 dark:text-cyan-400 mb-4">4. User Conduct and Responsibilities</h2>
              <p>
                By using the Services, you agree to:
              </p>
               <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Use the Services in compliance with all applicable laws and regulations.</li>
                <li>Provide accurate and truthful information when requested (e.g., when contacting us or downloading resources).</li>
                <li>Not use the Services for any illegal or unauthorized purpose.</li>
                <li>Not engage in any activity that could interfere with, disrupt, negatively affect, or inhibit other users from fully enjoying the Services, or that could damage, disable, overburden, or impair the functioning of the Services in any manner.</li>
                <li>Not attempt to circumvent any content-filtering techniques we employ or attempt to access any service or area of the Services that you are not authorized to access.</li>
                <li>Not use any robot, spider, crawler, scraper, script, browser extension, offline reader, or other automated means or interface not authorized by us to access the Services, extract data, or otherwise interfere with or modify the rendering of Service pages or functionality.</li>
                <li>Not introduce any viruses, Trojan horses, worms, logic bombs, or other malicious or technologically harmful material.</li>
               </ul>
            </section>

            <section className="glass-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-green-500 dark:text-green-400 mb-4">5. Resources and Downloads</h2>
              <p>
                We may offer resources such as guides, whitepapers, or tools for download through the Services, potentially requiring you to provide an email address. By providing your email, you consent to receive the requested resource and potentially other communications from us as outlined in our Privacy Policy. You agree not to misuse these resources or distribute them without proper attribution or permission where required.
              </p>
            </section>

            <section className="glass-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-cyan-500 dark:text-cyan-400 mb-4">6. Disclaimers</h2>
              <p>
               THE SERVICES AND CONTENT ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. DATASAZ DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT AS TO THE SERVICES AND CONTENT. DATASAZ DOES NOT REPRESENT OR WARRANT THAT CONTENT ON THE SERVICES IS ACCURATE, COMPLETE, RELIABLE, CURRENT, OR ERROR-FREE. WHILE DATASAZ ATTEMPTS TO MAKE YOUR ACCESS AND USE OF THE SERVICES SAFE, DATASAZ CANNOT AND DOES NOT REPRESENT OR WARRANT THAT THE SERVICES OR OUR SERVERS ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS; THEREFORE, YOU SHOULD USE INDUSTRY-RECOGNIZED SOFTWARE TO DETECT AND DISINFECT VIRUSES FROM ANY DOWNLOAD.
              </p>
            </section>

            <section className="glass-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-green-500 dark:text-green-400 mb-4">7. Limitation of Liability</h2>
              <p>
                 IN NO EVENT SHALL DATASAZ SOLUTIONS, OR OUR DIRECTORS, EMPLOYEES, OR AGENTS, BE LIABLE FOR ANY DIRECT, SPECIAL, INDIRECT, OR CONSEQUENTIAL DAMAGES, OR ANY OTHER DAMAGES OF ANY KIND, INCLUDING BUT NOT LIMITED TO LOSS OF USE, LOSS OF PROFITS, OR LOSS OF DATA, WHETHER IN AN ACTION IN CONTRACT, TORT (INCLUDING BUT NOT LIMITED TO NEGLIGENCE), OR OTHERWISE, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OF OR INABILITY TO USE THE SERVICES OR THE CONTENT, INCLUDING WITHOUT LIMITATION ANY DAMAGES CAUSED BY OR RESULTING FROM RELIANCE BY USER ON ANY INFORMATION OBTAINED FROM DATASAZ, OR THAT RESULT FROM MISTAKES, OMISSIONS, INTERRUPTIONS, DELETION OF FILES OR EMAIL, ERRORS, DEFECTS, VIRUSES, DELAYS IN OPERATION OR TRANSMISSION, OR ANY FAILURE OF PERFORMANCE, WHETHER OR NOT RESULTING FROM ACTS OF GOD, COMMUNICATIONS FAILURE, THEFT, DESTRUCTION, OR UNAUTHORIZED ACCESS TO DATASAZ&apos;S RECORDS, PROGRAMS, OR SERVICES.
              </p>
            </section>

            <section className="glass-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-cyan-500 dark:text-cyan-400 mb-4">8. Governing Law and Dispute Resolution</h2>
              <p>
                These Terms and your use of the Services shall be governed by and construed in accordance with the laws of Pakistan, applicable to agreements made and to be entirely performed within Pakistan, without resort to its conflict of law provisions. Any dispute relating in any way to your visit to the Services or to products or services sold or distributed by DataSAZ shall be adjudicated in any court in Islamabad, Pakistan, and you consent to exclusive jurisdiction and venue in such courts.
              </p>
            </section>

             <section className="glass-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-green-500 dark:text-green-400 mb-4">9. Termination</h2>
              <p>
                Notwithstanding any of these Terms, DataSAZ reserves the right, without notice and in its sole discretion, to terminate your license to use the Services, and to block or prevent future your access to and use of the Services for any reason, including but not limited to your breach of these Terms.
              </p>
            </section>

            <section className="glass-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-cyan-500 dark:text-cyan-400 mb-4">10. Severability</h2>
              <p>
                If any provision of these Terms shall be deemed unlawful, void or for any reason unenforceable, then that provision shall be deemed severable from these Terms and shall not affect the validity and enforceability of any remaining provisions.
              </p>
            </section>

            <section className="glass-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-green-500 dark:text-green-400 mb-4">11. Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us:
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