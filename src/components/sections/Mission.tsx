
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const Mission = () => {
  return (
    <section id="mission" className="py-20 bg-white dark:bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#212121] dark:text-[#E0E0E0] mb-4">
            Our Mission
          </h2>
          <div className="w-20 h-1 bg-[#FFEB3B] mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Quote decorations */}
          <div className="absolute -top-10 left-0 text-[#7B1FA2] opacity-20">
            <Quote size={80} />
          </div>
          <div className="absolute -bottom-10 right-0 text-[#7B1FA2] opacity-20 transform rotate-180">
            <Quote size={80} />
          </div>
          
          <blockquote className={cn(
            "text-center px-6 py-8 md:px-12 md:py-16",
            "border-l-4 border-[#7B1FA2]",
            "bg-gray-50 dark:bg-[#121212] rounded-lg shadow-sm"
          )}>
            <p className="text-xl md:text-2xl lg:text-3xl font-poppins italic text-[#212121] dark:text-[#E0E0E0] leading-relaxed">
              We believe AI isn't just a buzzword—it's a force multiplier. We automate the boring, amplify creativity, and turn data into actionable insights.
            </p>
          </blockquote>
          
          {/* Decorative elements */}
          <div className="absolute -top-2 -right-2 w-20 h-20 border-t-4 border-r-4 border-[#C62828] rounded-tr-lg hidden md:block"></div>
          <div className="absolute -bottom-2 -left-2 w-20 h-20 border-b-4 border-l-4 border-[#C62828] rounded-bl-lg hidden md:block"></div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
