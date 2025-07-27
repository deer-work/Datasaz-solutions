import React, { useEffect, useState } from "react";

export const NavLinks = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "AI Solutions",
    link: "#ai-solutions",
  },
  {
    name: "Case Studies",
    link: "#case-studies",
  },
  {
    name: "Technology",
    link: "#technology",
  },
  {
    name: "About Us",
    link: "#about",
  },
  {
    name: "Insights",
    link: "#insights",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const Navigation: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      let currentLink = "";
      NavLinks.forEach((nav) => {
        const section = document.querySelector(nav.link);
        if (
          section &&
          section.getBoundingClientRect().top <= 60 &&
          section.getBoundingClientRect().bottom > 300
        ) {
          currentLink = nav.link;
        }
      });
      setActiveLink(currentLink);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (link: string) => {
    setActiveLink(link);
    const section = document.querySelector(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-center items-center w-full md:w-auto py-5 md:py-0">
      {NavLinks.map((nav) => (
        <div
          key={nav.name}
          className="mx-4 relative group mb-4 md:mb-0"
        >
          <a
            onClick={() => handleClick(nav.link)}
            className={`
              font-semibold py-1 relative z-10
              transition-all duration-300 ease-in-out
              cursor-pointer 
              ${
                activeLink === nav.link
                  ? "text-green-600 dark:text-green-400"
                  : "text-green-500 dark:text-green-500 hover:text-green-600 dark:hover:text-green-400"
              }
            `}
          >
            {nav.name}
          </a>
          
          {/* Active indicator */}
          {activeLink === nav.link && (
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-green-500 to-cyan-500"></div>
          )}
          
          {/* Hover indicator - only shows when not active */}
          {activeLink !== nav.link && (
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Navigation;
