import React from "react";
import { useNavigate } from "react-router-dom";
import video3 from "../images/video3.mp4";

const Project4 = () => {
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

      <h1 className="text-4xl font-bold font-poppins mb-6">📄 PDF QA & Summarization (Gemini)</h1>

      {/* Overview Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          This project utilizes Google's Gemini LLM to summarize long PDF documents and answer user questions based on the content. Users can upload a PDF file, and the system provides a concise summary followed by an interactive Q&A feature.
        </p>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
          The model understands and processes the full document context, offering accurate answers using natural language understanding (NLU). Ideal for legal docs, research papers, product manuals, and more.
        </p>
      </section>

      {/* Demo Video Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🎬 Demo Walkthrough</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The video below demonstrates how a user uploads a PDF, receives a summary, and asks follow-up questions directly answered by Gemini.
        </p>
        <video
          controls
          loop
          className="w-full rounded-lg shadow-md"
          src={video3}
          preload="metadata"
        >
          Sorry, your browser does not support the video tag.
        </video>
        <p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-2">
          Figure 1: Gemini-powered PDF summarization and Q&A demo
        </p>
      </section>

      {/* Key Features */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">✨ Key Features & Use Cases</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
          <li><strong>PDF Upload Interface:</strong> Seamless upload experience for any type of document.</li>
          <li><strong>LLM-Powered Summarization:</strong> Automatically extracts the key points from lengthy documents.</li>
          <li><strong>Contextual Q&A:</strong> Ask any question related to the PDF and get human-like responses.</li>
          <li><strong>Wide Application:</strong> Useful for students, researchers, legal analysts, support teams, and corporate users.</li>
          <li><strong>Powered by Gemini Pro:</strong> Fast, accurate, and contextual text generation using cutting-edge Google AI.</li>
        </ul>
      </section>
    </div>
  );
};

export default Project4;
