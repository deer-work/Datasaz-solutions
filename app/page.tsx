import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Services from "@/components/Services";
import Technology from "@/components/Technology";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Testimonial from "@/components/Testimonial";
import ProfessionalChatbot from "@/components/Chaticon";
import AISolutions from "@/components/AISolutions";
import CaseStudies from "@/components/CaseStudies";
import Insights from "@/components/Insights";

export default function Index() {
  return (
    <div className="neural-bg min-h-screen w-full overflow-x-hidden dark:bg-gray-900">
      <Navbar />
      <div className="glassy-background">
        <div id="home">
          <Home />
        </div>
        
        <div id="services">
          <Services />
        </div>

        <div id="ai-solutions">
          <AISolutions />
        </div>
        
        <div id="case-studies">
          <CaseStudies />
        </div>
        
        <div id="technology">
          <Technology />
        </div>
        
        <div id="about">
          <About />
        </div>
        
        <div id="insights">
          <Insights />
        </div>
        
        <div id="testimonials">
          <Testimonial />
        </div>
        
        <div id="contact">
          <Contact />
        </div>
        
        <Footer />
      </div>
      <ProfessionalChatbot />
    </div>
  );
}
