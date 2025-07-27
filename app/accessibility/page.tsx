import React from "react";
import SimpleNavbar from "@/components/SimpleNavbar";
import SimpleFooter from "@/components/SimpleFooter";

export default function AccessibilityPage() {
  const websiteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://www.datasaz.com'; // Default URL
  const lastUpdatedDate = "October 12, 2024"; // Update this date whenever the statement changes

  return (
    <div className="neural-bg min-h-screen w-full text-gray-800 dark:text-white">
      <div className="glassy-background">
        <SimpleNavbar />
        <main className="max-w-4xl mx-auto px-4 py-12 md:py-20">
          <h1 className="text-3xl md:text-5xl font-bold text-center bg-gradient-to-r from-green-500 to-cyan-500 bg-clip-text text-transparent mb-12">
            Accessibility Statement
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
            Last Updated: {lastUpdatedDate}
          </p>

          <div className="space-y-8 text-gray-700 dark:text-gray-300 text-lg">
            <section className="glass-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-green-500 dark:text-green-400 mb-4">1. Our Commitment</h2>
              <p>
                DataSAZ Solutions (&quot;DataSAZ&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to ensuring digital accessibility for people with disabilities. We strive to make our website ({websiteUrl}) accessible to the widest possible audience, regardless of technology or ability. We are continually improving the user experience for everyone and applying relevant accessibility standards to ensure our website is perceivable, operable, understandable, and robust.
              </p>
            </section>

            <section className="glass-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-cyan-500 dark:text-cyan-400 mb-4">2. Conformance Status</h2>
              <p>
                We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. These guidelines explain how to make web content more accessible for people with disabilities. Conformance with these guidelines helps make the web more user-friendly for all people.
              </p>
              <p className="mt-4">
                While we strive to adhere to the accepted guidelines and standards for accessibility, it is not always possible to do so in all areas of the website, particularly with content sourced from third parties or complex interactive elements inherent in showcasing AI technologies. We are continually seeking out solutions that will bring all areas of the site up to the same level of overall web accessibility.
              </p>
            </section>

            <section className="glass-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-green-500 dark:text-green-400 mb-4">3. Accessibility Features</h2>
              <p>
                We have implemented the following features to enhance accessibility on our website:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                 <li><strong>Semantic HTML:</strong> We use meaningful HTML structure to aid navigation with assistive technologies.</li>
                 <li><strong>Keyboard Navigation:</strong> Our website is navigable using a keyboard.</li>
                 <li><strong>Alt Text for Images:</strong> Images used for informative purposes have alternative text descriptions.</li>
                 <li><strong>Contrast:</strong> We aim for sufficient color contrast between text and background elements.</li>
                 <li><strong>Resizable Text:</strong> Text size can be adjusted using standard browser controls.</li>
                 <li><strong>Dark Mode:</strong> We offer a dark mode option which can improve readability for some users.</li>
              </ul>
            </section>

            <section className="glass-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-cyan-500 dark:text-cyan-400 mb-4">4. Feedback</h2>
              <p>
                We welcome your feedback on the accessibility of the DataSAZ Solutions website. If you encounter accessibility barriers or have suggestions on how we can improve accessibility, please let us know:
              </p>
              <div className="mt-4 space-y-1">
                 <p><strong>Email:</strong> <a href="mailto:info@datasaz.com" className="text-green-500 hover:underline">info@datasaz.com</a> or <a href="mailto:datasaz.contact@gmail.com" className="text-green-500 hover:underline">datasaz.contact@gmail.com</a></p>
                 <p><strong>Phone:</strong> +92 (0)319 3718710</p>
                 <p><strong>Postal Address:</strong> DataSAZ Solutions, Islamabad, Pakistan</p>
              </div>
              <p className="mt-4">
                We aim to respond to accessibility feedback within 5 business days and propose a solution to remediate the issue where feasible.
              </p>
            </section>

            <section className="glass-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-green-500 dark:text-green-400 mb-4">5. Technical Specifications</h2>
              <p>
                Accessibility of the DataSAZ Solutions website relies on the following technologies to work with the specific combination of web browser and any assistive technologies or plugins installed on your computer:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>HTML</li>
                <li>WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications)</li>
                <li>CSS (Cascading Style Sheets)</li>
                <li>JavaScript</li>
              </ul>
              <p className="mt-4">
                These technologies are relied upon for conformance with the accessibility standards used.
              </p>
            </section>

             <section className="glass-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-cyan-500 dark:text-cyan-400 mb-4">6. Limitations and Alternatives</h2>
              <p>
                Despite our best efforts, some limitations may exist. These may include:
              </p>
               <ul className="list-disc list-inside mt-4 space-y-2">
                 <li><strong>Third-Party Integrations:</strong> Some content or functionality provided by third-party plugins or services might not be fully accessible. We encourage these providers to adhere to accessibility standards but cannot guarantee their conformance.</li>
                 <li><strong>Complex Visualizations:</strong> Certain charts, graphs, or interactive demonstrations related to our AI and data services might be challenging to represent perfectly for all assistive technologies. We strive to provide summaries or alternative descriptions where possible.</li>
                 <li><strong>Legacy Content:</strong> Older content or blog posts may not adhere to the latest standards. We are working to update such content over time.</li>
               </ul>
               <p className="mt-4">
                 If you encounter an issue, please contact us, and we will do our best to provide the information in an alternative format or make the necessary improvements.
               </p>
            </section>

            <section className="glass-card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-green-500 dark:text-green-400 mb-4">7. Assessment Approach</h2>
              <p>
                DataSAZ Solutions employs the following approaches to assess and improve website accessibility:
              </p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li><strong>Self-Evaluation:</strong> Regular internal reviews using accessibility checklists and guidelines.</li>
                <li><strong>Automated Tools:</strong> Utilizing automated testing tools to identify common accessibility issues.</li>
                 <li><strong>Manual Testing:</strong> Periodic manual testing using various assistive technologies (such as screen readers) and keyboard-only navigation.</li>
                 <li><strong>User Feedback:</strong> Incorporating feedback received from users regarding accessibility barriers.</li>
              </ul>
            </section>

          </div>
        </main>
        <SimpleFooter />
      </div>
    </div>
  );
} 