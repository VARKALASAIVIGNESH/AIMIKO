
import { Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-[#121212] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-300 font-inter mb-4 md:mb-0">
            © 2025 AI Studio • Hyderabad, India
          </p>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              className={cn(
                "p-2 rounded-full transition-colors",
                "text-[#0077B5] hover:bg-[#0077B5]/10"
              )}
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
