
import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ darkMode, toggleDarkMode }: HeaderProps) => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      // Add background to header after scrolling
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Close mobile menu if open
      setMobileMenuOpen(false);
      
      // Scroll to section
      window.scrollTo({
        top: section.offsetTop - 80, // Offset for fixed header
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "mission", label: "Mission" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      isScrolled 
        ? "py-3 bg-white/90 dark:bg-[#0A0A0A]/90 backdrop-blur-sm shadow-sm" 
        : "py-5 bg-transparent"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold font-poppins text-[#212121] dark:text-[#E0E0E0]">
            <span className="text-[#C62828]">AI</span> Studio
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {navItems.map(item => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "font-inter text-[#212121] dark:text-[#E0E0E0] hover:text-[#C62828] dark:hover:text-[#C62828] transition-colors",
                    activeSection === item.id && "text-[#7B1FA2] dark:text-[#7B1FA2] font-medium"
                  )}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-[#f1f1f1] dark:bg-[#1a1a1a] text-[#212121] dark:text-[#E0E0E0] hover:bg-[#e0e0e0] dark:hover:bg-[#2a2a2a] transition-colors"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleDarkMode}
            className="p-2 mr-2 rounded-full bg-[#f1f1f1] dark:bg-[#1a1a1a] text-[#212121] dark:text-[#E0E0E0]"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
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
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-[#0A0A0A] border-t border-gray-200 dark:border-gray-800 py-4">
          <ul className="flex flex-col space-y-4 px-4">
            {navItems.map(item => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "w-full text-left py-2 px-4 font-inter text-[#212121] dark:text-[#E0E0E0] hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors",
                    activeSection === item.id && "text-[#7B1FA2] dark:text-[#7B1FA2] font-medium"
                  )}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
