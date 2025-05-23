
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section 
      id="contact" 
      className="py-20 relative"
      style={{
        background: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80') center/cover no-repeat"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/90 dark:bg-[#0A0A0A]/90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#212121] dark:text-[#E0E0E0] mb-4">
            Contact Us
          </h2>
          <div className="w-20 h-1 bg-[#C62828] mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-[#121212] p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold font-poppins text-[#212121] dark:text-[#E0E0E0] mb-6">
              Send us a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-gray-300 dark:border-gray-700 focus:border-[#7B1FA2] dark:focus:border-[#9C27B0]"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-gray-300 dark:border-gray-700 focus:border-[#7B1FA2] dark:focus:border-[#9C27B0]"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="border-gray-300 dark:border-gray-700 focus:border-[#7B1FA2] dark:focus:border-[#9C27B0] resize-none"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full bg-[#7B1FA2] hover:bg-[#6A1B9A] text-white",
                  "font-medium py-2 transition-colors"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col justify-center">
            <div className="bg-[#7B1FA2]/10 dark:bg-[#7B1FA2]/20 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold font-poppins text-[#212121] dark:text-[#E0E0E0] mb-6">
                Get in Touch
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 font-inter mb-8">
                Looking for AI solutions for your business? We'd love to hear from you. Reach out directly by email or connect with us on LinkedIn.
              </p>
              
              <div className="space-y-6">
                <a 
                  href="mailto:contact@yourdomain.com" 
                  className={cn(
                    "flex items-center p-4 rounded-lg transition-all",
                    "bg-white dark:bg-[#1A1A1A] hover:shadow-md"
                  )}
                >
                  <div className="bg-[#C62828]/10 p-3 rounded-full text-[#C62828]">
                    <Mail size={24} />
                  </div>
                  <span className="ml-4 text-[#212121] dark:text-[#E0E0E0] font-medium">
                    Email Us
                  </span>
                </a>
                
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={cn(
                    "flex items-center p-4 rounded-lg transition-all",
                    "bg-white dark:bg-[#1A1A1A] hover:shadow-md"
                  )}
                >
                  <div className="bg-[#0077B5]/10 p-3 rounded-full text-[#0077B5]">
                    <Linkedin size={24} />
                  </div>
                  <span className="ml-4 text-[#212121] dark:text-[#E0E0E0] font-medium">
                    Connect on LinkedIn
                  </span>
                </a>
              </div>
              
              <div className="mt-8 p-4 bg-[#FFEB3B]/10 rounded-lg border-l-4 border-[#FFEB3B]">
                <p className="text-gray-600 dark:text-gray-300 font-inter">
                  <strong>Location:</strong> Hyderabad, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
