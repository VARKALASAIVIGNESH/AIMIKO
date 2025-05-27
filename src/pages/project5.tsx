import React from "react";
import img6 from "../images/img6.jpg";
import img7 from "../images/img7.jpg";
import img8 from "../images/img8.jpg";
import video4 from "../images/video4.mp4";

const Project5 = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto text-gray-800 dark:text-gray-100">
      {/* Back button */}
      <button
        onClick={() => window.history.back()}
        className="mb-8 inline-flex items-center px-4 py-2 text-sm font-medium text-[#C62828] border border-[#C62828] rounded hover:bg-[#C62828] hover:text-white transition"
      >
        ← Back to projects
      </button>

      <h1 className="text-3xl font-bold mb-6">Web Chatbots</h1>

      {/* 1. Hinglish Chatbot */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">1. Hinglish Python Tutor Bot</h2>
        <img
          src={img7}
          alt="Hinglish Chatbot"
          className="rounded-lg mb-4 w-full max-h-96 object-cover"
        />
        <p className="mb-2">
          A conversational chatbot that teaches Python programming in Hinglish, designed especially for Indian learners who are more comfortable with a blend of Hindi and English.
        </p>

        {/* New details */}
        <h3 className="font-semibold mt-4 mb-2">Key Features:</h3>
        <ul className="list-disc list-inside mb-2">
          <li>Bilingual language understanding (Hindi + English)</li>
          <li>Step-by-step Python tutorials and explanations</li>
          <li>Context-aware Q&A with conversational flow</li>
          <li>Customizable for other languages or subjects</li>
        </ul>

        <h3 className="font-semibold mt-4 mb-2">Tech Stack:</h3>
        <ul className="list-disc list-inside mb-2">
          <li>LLaMA API for natural language understanding</li>
          <li>React frontend for interactive UI</li>
          <li>Node.js backend to handle API calls</li>
        </ul>

        <h3 className="font-semibold mt-4 mb-2">Ideal Use Cases:</h3>
        <p>
          Suitable for schools, colleges, and self-learners who want a local touch to coding education. Helps parents and beginners understand programming concepts in a relatable way.
        </p>
      </section>

      {/* 2. Suspicious Definitions RAG Bot */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">2. Suspicious Definitions Checker (RAG + LLaMA)</h2>
        <video
          src={video4}
          controls
          className="rounded-lg mb-4 w-full max-h-96"
        />
        <p className="mb-2">
          A RAG (Retrieval-Augmented Generation) chatbot that provides suspicious or unusual definitions for a given term.
        </p>

        {/* New details */}
        <h3 className="font-semibold mt-4 mb-2">Key Features:</h3>
        <ul className="list-disc list-inside mb-2">
          <li>Uses JSON knowledge base for retrieval</li>
          <li>Combines retrieval with LLaMA-generated explanations</li>
          <li>Detects and flags suspicious or uncommon definitions</li>
          <li>Supports JSON-based fine-tuning</li>
        </ul>

        <h3 className="font-semibold mt-4 mb-2">Tech Stack:</h3>
        <ul className="list-disc list-inside mb-2">
          <li>LLaMA model for language generation</li>
          <li>RAG (Retrieval-Augmented Generation) architecture</li>
          <li>Custom JSON datasets for knowledge base</li>
        </ul>

        <h3 className="font-semibold mt-4 mb-2">Ideal Use Cases:</h3>
        <p>
          Educational tools, trivia games, and creative writing apps can leverage this bot to add depth and novelty to content generation or fact-checking.
        </p>
      </section>

      {/* 3. ZOGGY – AI Delivery Chatbot */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">3. ZOGGY – AI Delivery Chatbot</h2>
        <img
          src={img6}
          alt="ZOGGY Chatbot"
          className="rounded-lg mb-4 w-full max-h-96 object-cover"
        />
        <p className="mb-2">
          ZOGGY is a conversational assistant built using the Gemini API. It helps customers place orders for food, groceries, or any eCommerce products.
        </p>

        {/* New details */}
        <h3 className="font-semibold mt-4 mb-2">Key Features:</h3>
        <ul className="list-disc list-inside mb-2">
          <li>Smart order-taking with natural language understanding</li>
          <li>Feedback handling and basic customer support</li>
          <li>Easy integration with order management systems</li>
          <li>Future support planned for live tracking and notifications</li>
        </ul>

        <h3 className="font-semibold mt-4 mb-2">Tech Stack:</h3>
        <ul className="list-disc list-inside mb-2">
          <li>Gemini API for conversational AI</li>
          <li>React frontend with interactive UI</li>
          <li>Backend integration for order processing</li>
        </ul>

        <h3 className="font-semibold mt-4 mb-2">Ideal Use Cases:</h3>
        <p>
          Perfect for startups and businesses aiming for an AI-first ordering system—especially restaurants, cloud kitchens, and local delivery apps.
        </p>
      </section>

      {/* 4. Travel Itinerary Chatbot */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">4. Travel Info Bot</h2>
        <img
          src={img8}
          alt="Travel Chatbot"
          className="rounded-lg mb-4 w-full max-h-96 object-cover"
        />
        <p className="mb-2">
          A location-aware chatbot built with LLaMA that answers questions about your travel destination.
        </p>

        {/* New details */}
        <h3 className="font-semibold mt-4 mb-2">Key Features:</h3>
        <ul className="list-disc list-inside mb-2">
          <li>Answers about weather, food, sightseeing, customs, hotels</li>
          <li>Personalized travel plan generation</li>
          <li>Integrates with itinerary planning modules</li>
          <li>Multilingual support in development</li>
        </ul>

        <h3 className="font-semibold mt-4 mb-2">Tech Stack:</h3>
        <ul className="list-disc list-inside mb-2">
          <li>LLaMA for natural language understanding</li>
          <li>Geolocation APIs for personalized info</li>
          <li>React frontend for interactive chat UI</li>
        </ul>

        <h3 className="font-semibold mt-4 mb-2">Ideal Use Cases:</h3>
        <p>
          Travel websites, agencies, and tourism boards looking to enhance user engagement with smart, instant info on demand.
        </p>
      </section>

      {/* Final CTA */}
      <div className="text-center text-xl mt-16 font-semibold">
        🚀 Contact us for complete details, live demos, or to customize any of these chatbot solutions for your needs!
      </div>
    </div>
  );
};

export default Project5;
