import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import mainLogo from "@/images/AIMIKO.jpg";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ darkMode, toggleDarkMode }: HeaderProps) => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Track scroll and section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const top = (section as HTMLElement).offsetTop - 100;
        const height = (section as HTMLElement).offsetHeight;
        const id = section.getAttribute("id") || "";
        if (window.scrollY >= top && window.scrollY < top + height) {
          setActiveSection(id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Persist dark mode on refresh
  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    if (storedMode === "true") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      setMobileMenuOpen(false);
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "mission", label: "Mission" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-white/90 dark:bg-[#0A0A0A]/90 backdrop-blur-sm shadow-sm"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <img
  src={mainLogo}
  alt="AIMIKO Logo"
  className="h-12 w-auto rounded-md shadow-lg"
  style={{ filter: darkMode ? "brightness(0.8)" : "brightness(1)" }}
/>


        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "font-inter text-[#212121] dark:text-[#E0E0E0] hover:text-[#C62828] dark:hover:text-[#C62828] transition-colors",
                    activeSection === item.id &&
                      "text-[#7B1FA2] dark:text-[#7B1FA2] font-medium"
                  )}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => {
              toggleDarkMode();
              localStorage.setItem("darkMode", (!darkMode).toString());
            }}
            className="p-2 rounded-full bg-[#f1f1f1] dark:bg-[#1a1a1a] text-[#212121] dark:text-[#E0E0E0] hover:bg-[#e0e0e0] dark:hover:bg-[#2a2a2a] transition-colors"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Buttons */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => {
              toggleDarkMode();
              localStorage.setItem("darkMode", (!darkMode).toString());
            }}
            className="p-2 mr-2 rounded-full bg-[#f1f1f1] dark:bg-[#1a1a1a] text-[#212121] dark:text-[#E0E0E0]"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-[#f1f1f1] dark:bg-[#1a1a1a] text-[#212121] dark:text-[#E0E0E0]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Slide-in Mobile Nav */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-[80%] max-w-xs z-40 transform transition-transform duration-300 md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full",
          darkMode
            ? "bg-[#0A0A0A]/95 text-[#E0E0E0] backdrop-blur-md shadow-lg"
            : "bg-white/90 text-[#212121] backdrop-blur-md shadow-lg"
        )}
      >
        <div className="flex flex-col h-full justify-center px-6 space-y-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "text-left text-lg font-inter px-2 py-2 rounded hover:text-[#C62828] transition-colors",
                activeSection === item.id && "text-[#7B1FA2] font-semibold"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
