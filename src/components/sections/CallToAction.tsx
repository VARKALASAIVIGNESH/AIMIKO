
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
    <section className="py-16 bg-[#7B1FA2] dark:bg-[#7B1FA2]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-poppins text-white mb-6">
            Ready to transform your business with AI?
          </h2>
          
          <Button 
            onClick={scrollToContact}
            className={cn(
              "bg-[#FFEB3B] hover:bg-white text-[#212121] text-lg px-8 py-6 rounded-md",
              "font-medium font-inter transition-all duration-300"
            )}
          >
            Let's Talk
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
