import { Mail, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 relative"
      style={{
        background:
          "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80') center/cover no-repeat"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 to-white/90 dark:from-[#0A0A0A]/95 dark:to-[#0A0A0A]/90 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins text-[#212121] dark:text-[#E0E0E0] mb-4">
            Let’s Build the Future Together
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-inter max-w-2xl mx-auto">
            Have an idea, project, or need an AI partner? We're just a ping away. Let's create something legendary.
          </p>
          <div className="w-24 h-1 bg-[#C62828] mx-auto mt-6"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {/* Email */}
          <a
            href="mailto:contactaimiko@gmail.com"
            className={cn(
              "flex items-center justify-between p-6 rounded-xl shadow-lg transition-transform hover:scale-[1.02]",
              "bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-700"
            )}
          >
            <div className="flex items-center">
              <div className="bg-[#C62828]/10 p-3 rounded-full text-[#C62828]">
                <Mail size={28} />
              </div>
              <div className="ml-4">
                <p className="text-lg font-semibold text-[#212121] dark:text-[#E0E0E0]">
                  contactaimiko@gmail.com
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Business queries, partnerships, collaborations
                </p>
              </div>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center justify-between p-6 rounded-xl shadow-lg transition-transform hover:scale-[1.02]",
              "bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-700"
            )}
          >
            <div className="flex items-center">
              <div className="bg-[#0077B5]/10 p-3 rounded-full text-[#0077B5]">
                <Linkedin size={28} />
              </div>
              <div className="ml-4">
                <p className="text-lg font-semibold text-[#212121] dark:text-[#E0E0E0]">
                  Connect on LinkedIn
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Follow our journey. Let’s grow together.
                </p>
              </div>
            </div>
          </a>

          {/* Location */}
          <div className="p-6 bg-[#FFEB3B]/10 rounded-xl border-l-4 border-[#FFEB3B]">
            <p className="text-lg font-semibold text-[#212121] dark:text-[#E0E0E0] mb-1">
              📍 Based in Hyderabad, India
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Operating globally. Available for remote collaborations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
