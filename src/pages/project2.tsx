import React from "react";
import { useNavigate } from "react-router-dom";
import video1 from "../images/video1.mp4"; // adjust relative path

<video
  controls
  loop
  autoPlay
  muted
  playsInline
  className="w-full rounded-lg shadow-md"
  src={video1} // ✅ use imported variable
  preload="metadata"
>

  Sorry, your browser does not support the video tag.
</video>

const Project2 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] text-gray-900 dark:text-gray-100 transition-colors duration-300 px-6 py-12 max-w-4xl mx-auto">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="mb-8 inline-flex items-center px-4 py-2 text-sm font-medium text-[#C62828] border border-[#C62828] rounded hover:bg-[#C62828] hover:text-white transition"
      >
        ← Back to Projects
      </button>

      <h1 className="text-4xl font-bold font-poppins mb-6">
        🌍 AI-Powered Travel Itinerary Planner with Chatbot Integration
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Overview:</h2>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          This AI-driven Travel Itinerary Planner creates personalized trip plans
          based on user preferences and real-time data. Integrated with a smart chatbot,
          it provides interactive travel suggestions, itinerary adjustments, and instant answers,
          streamlining the entire travel planning experience.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">🚀 Key Features</h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300">
          <li>
            <strong>Personalized Travel Plans:</strong> AI generates tailored itineraries
            optimized for destinations, interests, and trip length.
          </li>
          <li>
            <strong>Chatbot Assistance:</strong> Integrated chatbot powered by LLAMA API
            for on-demand travel tips, itinerary updates, and real-time recommendations.
          </li>
          <li>
            <strong>Multi-Destination Support:</strong> Plan complex trips across
            multiple cities or countries with smooth transitions.
          </li>
          <li>
            <strong>Easy Modifications:</strong> Users can chat with the bot to
            adjust plans dynamically based on changing preferences or circumstances.
          </li>
          <li>
            <strong>Flask Backend:</strong> Robust Python backend handling requests,
            managing AI calls, and delivering seamless API performance.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">🎥 Demo Video</h2>
        <video
  controls
  loop
  autoPlay
  muted
  playsInline
  className="w-full rounded-lg shadow-md"
  src={video1} // ✅ use imported variable
  preload="metadata"
>

          Sorry, your browser does not support the video tag.
        </video>
        <p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-2">
          Figure 1: Interactive travel planner and chatbot demo
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">🛠️ Technologies Used</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li><strong>Frontend:</strong> React, HTML5, CSS3</li>
          <li><strong>Backend:</strong> Flask, Python</li>
          <li><strong>AI & NLP:</strong> LLAMA API for chatbot & itinerary generation</li>
          <li><strong>Video Demo:</strong> Hosted locally for offline demonstration</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">💡 Why This Matters</h2>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          Traditional travel planning can be time-consuming and overwhelming, especially
          with multiple destinations and changing preferences. This AI-powered platform
          offers travelers a smart, conversational assistant to create, modify, and optimize
          travel plans efficiently, saving time and improving the overall travel experience.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">🤝 Customization & Collaboration</h2>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          I welcome collaboration and customization requests to adapt this platform
          for different travel agencies, tour operators, or individual needs. Reach out
          if you want to integrate additional features or build custom workflows.
        </p>
      </section>
    </div>
  );
};

export default Project2;
