
import { useState } from "react";
import { MessageSquare, Brain, Bot, Database, LineChart, Code } from "lucide-react";
import { cn } from "@/lib/utils";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Services = () => {
  const services: Service[] = [
    {
      icon: <MessageSquare className="h-10 w-10" />,
      title: "AI Chatbots & Assistants",
      description: "Intelligent conversational interfaces that enhance customer experience and automate support."
    },
    {
      icon: <Brain className="h-10 w-10" />,
      title: "AI-Powered Assessment Systems",
      description: "Automated evaluation tools for education, recruitment, and skill verification."
    },
    {
      icon: <Bot className="h-10 w-10" />,
      title: "Web Scraping & Automation",
      description: "Data collection and process automation tools to save time and gather valuable insights."
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: "Custom AI Tools",
      description: "Specialized solutions like data analyzers, image classification, and NLP pipelines."
    },
    {
      icon: <LineChart className="h-10 w-10" />,
      title: "AI Dashboards & Insights",
      description: "Interactive visualizations and analytics to transform complex data into actionable intelligence."
    },
    {
      icon: <Database className="h-10 w-10" />,
      title: "Data Processing Pipelines",
      description: "Efficient systems for cleaning, transforming, and analyzing large volumes of data."
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 bg-white dark:bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#212121] dark:text-[#E0E0E0] mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-[#7B1FA2] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={cn(
                "group bg-gray-50 dark:bg-[#121212] rounded-lg p-6 transition-all duration-300",
                "hover:shadow-lg border-l-4 border-transparent",
                "hover:border-l-4 hover:border-[#C62828]"
              )}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              data-aos="fade-up"
              data-aos-delay={100 * index}
            >
              <div className={cn(
                "text-[#C62828] mb-4 transition-transform duration-300",
                hoveredIndex === index && "transform scale-110"
              )}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold font-poppins text-[#212121] dark:text-[#E0E0E0] mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 font-inter mb-5 line-clamp-2">
                {service.description}
              </p>
              
              <a 
                href="#contact" 
                className="inline-block text-[#7B1FA2] dark:text-[#9C27B0] font-medium hover:text-[#C62828] dark:hover:text-[#C62828] transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    window.scrollTo({
                      top: contactSection.offsetTop - 80,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                Contact for Quote →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
