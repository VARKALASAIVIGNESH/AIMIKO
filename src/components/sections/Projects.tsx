import { useState } from "react";
import {
  FileText,
  MessageCircle,
  Cpu,
  Image,
  Layers,
  Map,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface Project {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      icon: <FileText size={36} />,
      title: "AI POWERRED ASSESSMENT TEST",
      description:
        "Automatically generate multiple-choice questions from uploaded PDF documents for educational assessment.",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: <MessageCircle size={36} />,
      title: "Web Chatbots",
      description:
        "Custom AI-driven chatbots for customer service, lead generation, and automated information delivery.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: <Cpu size={36} />,
      title: "Data Pipelines & Automations",
      description:
        "Automated systems for gathering, processing, and analyzing competitor data for strategic insights.",
      image:
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: <Image size={36} />,
      title: "Image Classification and Open CV Modules",
      description:
        "AI models for healthcare diagnostics, security monitoring, and automated inventory management.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: <Layers size={36} />,
      title: "NLP Text Analysis & PDF QA (Gemini)",
      description:
        "Custom NLP tools for summarization, sentiment analysis, keyword extraction, and Gemini-powered PDF Q&A.",
      image:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: <Map size={36} />,
      title: "Travel Itinerary Planners using LLMs",
      description:
        "AI-powered travel planning tools that create personalized itineraries based on user preferences.",
      image:
        "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-[#121212]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#212121] dark:text-[#E0E0E0] mb-4">
            Our Projects
          </h2>
          <div className="w-20 h-1 bg-[#C62828] mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our innovative AI solutions that are helping businesses
            transform their operations and customer experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const isAssessmentProject =
              project.title === "AI POWERRED ASSESSMENT TEST";
            const isItineraryProject =
              project.title === "Travel Itinerary Planners using LLMs";
            const isImageClassificationProject =
              project.title === "Image Classification and Open CV Modules";
            const isNLPProject =
              project.title === "NLP Text Analysis & PDF QA (Gemini)";
            const isWebChatbotsProject = project.title === "Web Chatbots";
            const isAutomationProject =
              project.title === "Data Pipelines & Automations";

            const cardContent = (
              <div
                className={cn("relative group")}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={cn(
                    "rounded-lg overflow-hidden shadow-md transition-all duration-300",
                    "bg-white dark:bg-[#1A1A1A]",
                    hoveredIndex === index && "shadow-xl transform -translate-y-2"
                  )}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className={cn(
                        "absolute inset-0 bg-gradient-to-t from-black/80 to-transparent",
                        "flex items-end p-6 transition-opacity duration-300",
                        hoveredIndex !== index && "opacity-0"
                      )}
                    >
                      <h3 className="text-white font-semibold font-poppins text-xl z-10">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <div
                      className={cn(
                        "inline-flex items-center justify-center w-14 h-14 rounded-full mb-4",
                        "bg-[#7B1FA2]/10 text-[#7B1FA2] dark:bg-[#7B1FA2]/20"
                      )}
                    >
                      {project.icon}
                    </div>

                    <h3 className="text-xl font-semibold font-poppins text-[#212121] dark:text-[#E0E0E0] mb-3">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 font-inter">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div
                  className={cn(
                    "absolute -bottom-2 -right-2 w-16 h-16 border-b-4 border-r-4 border-[#C62828]",
                    "rounded-br-lg opacity-0 transition-opacity duration-300",
                    hoveredIndex === index && "opacity-100"
                  )}
                ></div>
              </div>
            );

            if (isAssessmentProject) {
              return (
                <Link
                  to="/project1"
                  key={index}
                  className="block"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {cardContent}
                </Link>
              );
            }

            if (isWebChatbotsProject) {
              return (
                <Link
                  to="/project5"
                  key={index}
                  className="block"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {cardContent}
                </Link>
              );
            }

            if (isAutomationProject) {
              return (
                <Link
                  to="/project6"
                  key={index}
                  className="block"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {cardContent}
                </Link>
              );
            }

            if (isImageClassificationProject) {
              return (
                <Link
                  to="/project3"
                  key={index}
                  className="block"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {cardContent}
                </Link>
              );
            }

            if (isNLPProject) {
              return (
                <Link
                  to="/project4"
                  key={index}
                  className="block"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {cardContent}
                </Link>
              );
            }

            if (isItineraryProject) {
              return (
                <Link
                  to="/project2"
                  key={index}
                  className="block"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {cardContent}
                </Link>
              );
            }

            return <div key={index}>{cardContent}</div>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
