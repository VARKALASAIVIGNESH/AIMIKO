import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Example image URL from Unsplash (AI neural network)
const AI_IMAGE_URL = "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80";

const CallToAction = () => {
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
      id="cta"
      aria-labelledby="cta-heading"
      className="py-20 relative overflow-hidden text-white"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-light dark:bg-gradient-dark animate-gradient" />

      <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center max-w-7xl gap-10">
        {/* Text content */}
        <div className="text-center md:text-left md:flex-1 max-w-xl">
          <h2
            id="cta-heading"
            className="text-3xl md:text-4xl font-bold font-poppins leading-tight mb-4"
          >
            Transform Your Business with Custom AI Solutions
          </h2>
          <p className="text-white/90 text-lg font-inter mb-8">
            From machine learning automation to intelligent chatbots, we craft tailored AI systems that boost productivity and deliver real impact. Let's build something extraordinary.
          </p>

          <Button
            onClick={scrollToContact}
            className={cn(
              "relative inline-flex items-center justify-center px-10 py-5 text-lg font-semibold font-inter",
              "bg-yellow-400 hover:bg-yellow-300 text-[#212121] rounded-full transition-all duration-300",
              "shadow-lg shadow-yellow-300/50 hover:shadow-yellow-200/80",
              "before:absolute before:inset-0 before:rounded-full before:animate-glow before:bg-yellow-300/20"
            )}
          >
            Let's Talk
          </Button>
        </div>

        {/* Image */}
        <div className="md:flex-1 max-w-md mx-auto md:mx-0">
          <img
            src={AI_IMAGE_URL}
            alt="Abstract representation of AI and neural networks"
            className="w-full rounded-lg shadow-lg border-4 border-yellow-300/50 dark:border-yellow-400/70"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
