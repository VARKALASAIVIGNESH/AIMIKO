import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const Mission = () => {
  return (
    <section
      id="mission"
      aria-labelledby="mission-heading"
      className="relative py-24 bg-white dark:bg-[#0A0A0A] overflow-hidden"
    >
      {/* Glowing animated background using Tailwind utilities */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-[#7B1FA2] rounded-full blur-3xl top-10 -left-20 animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute w-96 h-96 bg-[#FFEB3B] rounded-full blur-3xl bottom-10 -right-20 animate-[pulse_8s_ease-in-out_infinite]" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            id="mission-heading"
            className="text-3xl md:text-4xl font-bold font-poppins text-[#212121] dark:text-[#E0E0E0] mb-4"
          >
            Our Mission
          </h2>
          <p className="text-md md:text-lg text-gray-600 dark:text-gray-300 font-inter max-w-2xl mx-auto">
            Empowering startups and businesses with intelligent automation, actionable data, and ethical AI.
          </p>
          <div className="w-24 h-1 bg-[#FFEB3B] mx-auto mt-4 rounded-full animate-pulse" />
        </div>

        {/* Blockquote */}
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-10 left-0 text-[#7B1FA2] opacity-20">
            <Quote size={80} />
          </div>
          <div className="absolute -bottom-10 right-0 text-[#7B1FA2] opacity-20 rotate-180">
            <Quote size={80} />
          </div>

          <blockquote
            className={cn(
              "text-center px-8 py-10 md:px-16 md:py-20",
              "border-l-4 border-[#7B1FA2] border-opacity-60",
              "bg-gray-50 dark:bg-[#121212] rounded-2xl shadow-lg shadow-purple-200/20 dark:shadow-black/30",
              "transition-all duration-300"
            )}
          >
            <p className="text-2xl md:text-3xl font-poppins italic text-[#212121] dark:text-[#E0E0E0] leading-relaxed">
              AI isn't just technology—it's transformation. We craft human-centric, automation-powered solutions that solve real-world problems and scale with your ambition.
            </p>
          </blockquote>

          {/* Stylish border corners */}
          <div className="absolute -top-2 -right-2 w-20 h-20 border-t-4 border-r-4 border-[#C62828] rounded-tr-xl hidden md:block"></div>
          <div className="absolute -bottom-2 -left-2 w-20 h-20 border-b-4 border-l-4 border-[#C62828] rounded-bl-xl hidden md:block"></div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
