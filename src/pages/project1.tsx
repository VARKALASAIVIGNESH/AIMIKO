import React from "react";
import { useNavigate } from "react-router-dom";

import img9 from "../images/img9.jpg";
import video1 from "../images/video4.mp4";

const Project6 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] text-gray-900 dark:text-gray-100 transition-colors duration-300 px-6 py-12 max-w-4xl mx-auto">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="mb-8 inline-flex items-center px-4 py-2 text-sm font-semibold text-[#C62828] border border-[#C62828] rounded hover:bg-[#C62828] hover:text-white transition"
      >
        ← Back to Projects
      </button>

      <h1 className="text-4xl font-bold font-poppins mb-6">
        ⚙️ Data Pipelines & Automations Powered by LLaMA
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Overview:</h2>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          Discover how we harness the power of LLaMA to automate repetitive tasks and uncover insights from raw data. Our solutions simplify workflows and supercharge productivity by intelligently analyzing and automating data pipelines and social media engagement.
        </p>
      </section>

      {/* Excel Data Analyzer */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold font-poppins mb-6">
          📊 Excel Data Analyzer using LLaMA
        </h2>

        <div className="mb-6">
          <img
            src={img9}
            alt="Excel Data Analyzer"
            className="w-full rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
          />
        </div>

        <p className="leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
          Upload any Excel sheet — whether it's sales data, surveys, financial reports, or custom logs — and ask it anything. Our system uses LLaMA with pandas to analyze the sheet and return human-readable insights instantly.
        </p>

        <h3 className="text-2xl font-semibold mb-3">🚀 Key Features</h3>
        <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 mb-6">
          <li>Supports all Excel formats (.xlsx, .xls, .csv)</li>
          <li>Handles small to very large datasets with ease</li>
          <li>Natural language queries — ask anything in plain English</li>
          <li>Quick, intelligent, context-aware responses powered by LLaMA</li>
          <li>No coding or formula knowledge required</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-3">💡 Why This Matters</h3>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
          Manual data analysis is tedious and error-prone. This tool empowers users to quickly get meaningful insights without technical skills, saving time and making data-driven decisions accessible to everyone.
        </p>
      </section>

      {/* Reddit Automation */}
      <section>
        <h2 className="text-3xl font-bold font-poppins mb-6">
          🤖 Reddit Automation with LLaMA
        </h2>

        <div className="mb-6">
          <video
            src={video1}
            controls
            className="w-full rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
          />
        </div>

        <p className="leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
          This tool automates content creation and engagement on Reddit using LLaMA. It generates intelligent posts and replies across any subreddit, ideal for marketing campaigns, discussion bots, or educational outreach.
        </p>

        <h3 className="text-2xl font-semibold mb-3">🚀 Key Features</h3>
        <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 mb-6">
          <li>Auto-generates context-aware posts and comments</li>
          <li>Works on any subreddit with customizable behavior</li>
          <li>Built-in toxicity filters for safe interactions</li>
          <li>Supports diverse use cases: growth, engagement, content seeding</li>
          <li>Powered by LLaMA and Reddit API for seamless integration</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-3">💡 Why This Matters</h3>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
          Maintaining active, engaging social media presence is time-consuming. This automation reduces manual effort while ensuring high-quality, relevant interaction—perfect for startups and brands aiming to grow communities efficiently.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">🛠️ Available for Customization</h2>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          Both modules are adaptable to your unique workflows and requirements. Whether you want to customize analysis features or automate other social media platforms, I’m open to collaboration and product enhancement.
        </p>
      </section>
    </div>
  );
};

export default Project6;
