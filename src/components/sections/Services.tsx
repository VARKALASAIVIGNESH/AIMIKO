import { useState, useEffect } from "react";
import { MessageSquare, Brain, Bot, Database, LineChart, Code } from "lucide-react";
import { cn } from "@/lib/utils";
import AOS from "aos";
import "aos/dist/aos.css";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  hook: string;
}

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({ once: true, duration: 600 });
  }, []);

  const services: Service[] = [
    {
      icon: <MessageSquare className="h-10 w-10" aria-hidden="true" />,
      title: "AI Chatbots & Assistants",
      description: "Intelligent conversational interfaces that enhance customer experience and automate support.",
      hook: "Imagine 24/7 customer support that never sleeps — cutting costs and boosting satisfaction effortlessly."
    },
    {
      icon: <Brain className="h-10 w-10" aria-hidden="true" />,
      title: "AI-Powered Assessment Systems",
      description: "Automated evaluation tools for education, recruitment, and skill verification.",
      hook: "Speed up hiring and testing with AI that scores with precision — no bias, just smart decisions."
    },
    {
      icon: <Bot className="h-10 w-10" aria-hidden="true" />,
      title: "Web Scraping & Automation",
      description: "Data collection and process automation tools to save time and gather valuable insights.",
      hook: "Turn endless web data into actionable gold — automate the boring stuff, focus on growth."
    },
    {
      icon: <Code className="h-10 w-10" aria-hidden="true" />,
      title: "Custom AI Tools",
      description: "Specialized solutions like data analyzers, image classification, and NLP pipelines.",
      hook: "Your business, powered by custom AI — built to solve exactly what matters to you."
    },
    {
      icon: <LineChart className="h-10 w-10" aria-hidden="true" />,
      title: "AI Dashboards & Insights",
      description: "Interactive visualizations and analytics to transform complex data into actionable intelligence.",
      hook: "Stop guessing, start knowing — data dashboards that drive confident decisions."
    },
    {
      icon: <Database className="h-10 w-10" aria-hidden="true" />,
      title: "Data Processing Pipelines",
      description: "Efficient systems for cleaning, transforming, and analyzing large volumes of data.",
      hook: "No more messy data — get clean, fast, trustworthy insights when and where you need them."
    }
  ];

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
            <article
              key={index}
              tabIndex={0}
              className={cn(
                "relative group bg-gray-50 dark:bg-[#121212] rounded-xl p-6 transition-all duration-300 overflow-hidden",
                "hover:shadow-xl border-l-4 border-transparent",
                "hover:border-l-4 hover:border-[#C62828]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C62828]"
              )}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onFocus={() => setHoveredIndex(index)}
              onBlur={() => setHoveredIndex(null)}
              data-aos="fade-up"
              data-aos-delay={100 * index}
            >
              {/* Dim background overlay when hovered */}
              {hoveredIndex === index && (
                <div className="absolute inset-0 backdrop-blur-sm bg-black/10 z-10 transition duration-300 pointer-events-none" />
              )}

              <div className="relative z-20">
                <div
                  className={cn(
                    "text-[#C62828] mb-4 transition-transform duration-300",
                    hoveredIndex === index && "scale-110"
                  )}
                  aria-hidden="true"
                >
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold font-poppins text-[#212121] dark:text-[#E0E0E0] mb-3">
                  {service.title}
                </h3>

                {/* Animated description/hook transition */}
                <p className="font-inter min-h-[4rem] relative transition-all duration-500 ease-in-out">
                  <span
                    className={cn(
                      "absolute top-0 left-0 right-0 transition-opacity duration-300 text-gray-600 dark:text-gray-300",
                      hoveredIndex === index ? "opacity-0" : "opacity-100"
                    )}
                  >
                    {service.description}
                  </span>

                  <span
                    className={cn(
                      "absolute top-0 left-0 right-0 transition-opacity duration-300 font-semibold bg-clip-text text-transparent",
                      hoveredIndex === index ? "opacity-100" : "opacity-0",
                      "bg-gradient-to-r",
                      "from-[#C62828] to-[#7B1FA2]",               // Light mode gradient (red-purple)
                      "dark:from-[#70A9A1] dark:via-[#8AC6A9] dark:to-[#E9C46A]"  // Dark mode gradient (teal → soft gold)
                    )}
                    style={{
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      transition: "all 0.3s ease-in-out",
                    }}
                  >
                    {service.hook}
                  </span>
                </p>

                <a
                  href="#contact"
                  className="inline-block mt-6 text-[#7B1FA2] dark:text-[#9C27B0] font-medium hover:text-[#C62828] dark:hover:text-[#C62828] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7B1FA2]"
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
