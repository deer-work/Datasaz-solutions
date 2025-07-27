import { useTheme as useNextTheme } from "next-themes";
import { useEffect, useState } from "react";

export function useTheme() {
  const { theme, setTheme, systemTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);
  
  // Theme values with improved UI effects
  const themeValues = {
    light: "light",
    dark: "dark",
    system: "system"
  };
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Don't render anything until mounted to prevent hydration issues
  if (!mounted) {
    return { 
      theme: undefined, 
      setTheme: () => {}, 
      isDark: false, 
      toggleTheme: () => {},
      themeValues
    };
  }
  
  // Check if current theme is dark
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";
  
  // Toggle between dark and light mode
  const toggleTheme = () => {
    setTheme(isDark ? themeValues.light : themeValues.dark);
  };
  
  return { theme: currentTheme, setTheme, isDark, toggleTheme, themeValues };
} 