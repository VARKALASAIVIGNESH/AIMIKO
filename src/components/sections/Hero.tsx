
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=2000&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="animate-in" style={{ animationDelay: "200ms" }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-white mb-6 leading-tight">
              Smart AI Solutions for Tomorrow's Startups
            </h1>
          </div>
          
          <div className="animate-in" style={{ animationDelay: "400ms" }}>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 font-inter">
              Custom chatbots, intelligent automation, AI assessments, and more—built fast, built smart, built for your growth.
            </p>
          </div>
          
          <div className="animate-in" style={{ animationDelay: "600ms" }}>
            <Button 
              onClick={scrollToContact}
              className={cn(
                "bg-[#FFEB3B] hover:bg-[#FDD835] text-[#212121] text-lg px-8 py-6 rounded-md",
                "font-medium font-inter transition-all duration-300 flex items-center group"
              )}
            >
              Get Free Consultation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white dark:from-[#0A0A0A] to-transparent"></div>
    </section>
  );
};

export default Hero;
