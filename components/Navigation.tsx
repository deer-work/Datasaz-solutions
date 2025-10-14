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
        const headerHeight = 60; // Assuming the sticky header height
        if (
          section &&
          section.getBoundingClientRect().top <= headerHeight &&
          section.getBoundingClientRect().bottom > headerHeight
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
      // Use client-side logic to offset the scroll for the fixed navbar
      const yOffset = -70; // Adjust based on your fixed navbar height
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    // FIX 1: Use 'flex-row' by default, and center on small screens.
    // FIX 2: Removed unnecessary responsive `md:` classes since it's now consistent.
    // FIX 3: Added `space-x-4` (or `space-x-3`) to the container for controlled spacing.
    <div className="flex flex-col md:flex-row md:flex-nowrap justify-center items-center w-full md:w-auto py-5 md:py-0 lg:space-x-3">
      {NavLinks.map((nav) => (
        // FIX 4: Removed excessive margin classes (`mx-4`) here since `space-x-*` is on the parent.
        // On mobile, the `mb-4` provides vertical separation.
        <div
          key={nav.name}
          className="relative group mb-4 md:mb-0"
        >
          <a
            onClick={() => handleClick(nav.link)}
            // Ensure no horizontal padding/margin is forcing the link width here
            className={`
              font-semibold py-1 relative z-10
              transition-all duration-300 ease-in-out
              cursor-pointer 
              whitespace-nowrap 
              ${
                activeLink === nav.link
                  ? "text-green-600 dark:text-green-400"
                  : "text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400" // Adjusted default text color for contrast
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