import { cn } from "@/lib/utils";
import mainImage from "@/images/main.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
      style={{
        backgroundImage: `url(${mainImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay (adjust opacity as needed) */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>

      {/* Top fade overlay */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/90 dark:from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <div className="animate-in" style={{ animationDelay: "200ms" }}>
            <h1
              className="text-6xl md:text-7xl lg:text-8xl font-extrabold font-poppins leading-tight relative"
              style={{
                background: "linear-gradient(180deg, #70A9A1, #8AC6A9, #E9C46A)", // lighter teal to soft gold
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
                position: "relative",
              }}
            >
              AIMIKO
            </h1>

            <p
              className="font-semibold italic mb-8 tracking-wide"
              style={{
                color: "#E9C46A", // soft gold
                textShadow: "0 0 8px #E9C46A",
                fontSize: "1.25rem",
                lineHeight: "1.4",
              }}
            >
              Innovate, Automate, Elevate with AI
            </p>
          </div>

          <div className="animate-in" style={{ animationDelay: "300ms" }}>
            <h2 className="text-3xl font-semibold font-poppins text-white mb-2 leading-snug">
              Smart AI Solutions for Tomorrow's Startups
            </h2>
            <p className="text-lg text-gray-300 font-inter max-w-xl">
              Custom chatbots, intelligent automation, AI assessments, and more — built fast, built smart, built for your growth.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom fade overlay */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white dark:from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default Hero;
