const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-[#121212]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#212121] dark:text-[#E0E0E0] mb-4">
            About Us
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#C62828] to-[#7B1FA2] mx-auto"></div>
        </div>

        {/* Brand Description */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-700 dark:text-gray-300 font-inter leading-relaxed">
            <strong className="text-[#C62828] dark:text-[#F06292]">AIMIKO</strong> is an AI-first innovation studio crafting intelligent solutions for next-gen startups. 
            From custom chatbots and LLM-powered assistants to automation systems and AI diagnostics, 
            we help businesses scale with smart, reliable technology. 
            Based in India and serving globally, our mission is to make artificial intelligence simple, scalable, and impactful.
          </p>
        </div>

        {/* Value Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            {
              title: "LLM Expertise",
              desc: "Specialized in GPT, LLaMA, Gemini & custom-trained models.",
              color: "from-[#8E24AA] to-[#E040FB]",
            },
            {
              title: "Fast Delivery",
              desc: "Agile workflows to deliver MVPs and solutions in record time.",
              color: "from-[#3949AB] to-[#7C4DFF]",
            },
            {
              title: "Tailored AI",
              desc: "Every solution is custom-built to match your use-case & audience.",
              color: "from-[#00ACC1] to-[#26C6DA]",
            },
            {
              title: "Global Access",
              desc: "Serving clients across India, the US, and worldwide.",
              color: "from-[#43A047] to-[#66BB6A]",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-md dark:shadow-none bg-white dark:bg-[#1A1A1A] text-center transition-all duration-300 hover:scale-105 hover:shadow-xl`}
            >
              <h3
                className={`text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r ${item.color}`}
              >
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-inter">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
