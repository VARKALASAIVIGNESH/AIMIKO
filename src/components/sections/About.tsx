
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const About = () => {
  const team = [
    {
      name: "Partner 1",
      role: "AI Engineer & Co-Founder",
      avatar: "/placeholder.svg",
      initials: "P1"
    },
    {
      name: "Partner 2",
      role: "ML Specialist & Co-Founder",
      avatar: "/placeholder.svg",
      initials: "P2"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-[#121212]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#212121] dark:text-[#E0E0E0] mb-4">
            About Us
          </h2>
          <div className="w-20 h-1 bg-[#7B1FA2] mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xl text-gray-600 dark:text-gray-300 font-inter">
            We're a two-person AI studio based in Hyderabad, India, serving startups worldwide. Our expertise in artificial intelligence and machine learning helps businesses automate processes, gain insights, and create exceptional customer experiences.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-12 mt-16">
          {team.map((member, index) => (
            <div 
              key={index} 
              className={cn(
                "flex flex-col items-center transition-all duration-300",
                "hover:transform hover:scale-105"
              )}
            >
              <div className="mb-6 relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#C62828] to-[#7B1FA2] animate-pulse blur-sm opacity-70"></div>
                <Avatar className="h-40 w-40 border-4 border-white dark:border-[#1A1A1A] relative">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback className="bg-[#7B1FA2] text-white text-2xl">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
              </div>
              
              <h3 className="text-xl font-semibold font-poppins text-[#212121] dark:text-[#E0E0E0]">
                {member.name}
              </h3>
              <p className="text-[#7B1FA2] dark:text-[#9C27B0] font-inter">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
