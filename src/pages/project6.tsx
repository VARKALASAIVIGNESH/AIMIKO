import React from "react";
import { Link } from "react-router-dom";
import img9 from "../images/img9.jpg";
import video1 from "../images/video4.mp4";

const Project6 = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-[#121212] text-[#212121] dark:text-[#E0E0E0]">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-10">
          <Link
            to="/"
            className="inline-block text-[#C62828] font-semibold text-sm border border-[#C62828] px-4 py-2 rounded hover:bg-[#C62828] hover:text-white transition"
          >
            ← Back to Projects
          </Link>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            Data Pipelines & Automations
          </h2>
          <div className="w-20 h-1 bg-[#C62828] mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-inter">
            Discover how we harness the power of LLaMA to automate repetitive tasks and uncover insights from raw data. These solutions are designed to simplify workflows and supercharge productivity.
          </p>
        </div>

        {/* Excel Data Analyzer */}
        <div className="grid md:grid-cols-2 gap-10 items-start mb-20">
          <div>
            <img
              src={img9}
              alt="Excel Data Analyzer"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold font-poppins mb-3">
              📊 Excel Data Analyzer using LLaMA
            </h3>
            <p className="text-gray-700 dark:text-gray-300 font-inter mb-4">
              Upload any Excel sheet — whether it's sales data, surveys, financial reports, or custom logs — and ask it anything. Our system uses LLaMA and pandas to analyze the sheet and return useful, human-readable answers.
            </p>
            <h4 className="text-lg font-semibold mb-2">Key Features:</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 font-inter mb-4 space-y-1">
              <li>Supports all Excel formats (.xlsx, .xls, .csv)</li>
              <li>Handles both small and large datasets</li>
              <li>Ask any natural-language question</li>
              <li>Fast, intelligent answers powered by LLaMA</li>
              <li>No formulas or coding required</li>
            </ul>
            <h4 className="text-lg font-semibold mb-2">Why It Matters:</h4>
            <p className="text-gray-700 dark:text-gray-300 font-inter">
              Most businesses rely on Excel, yet struggle to analyze data effectively. This tool turns spreadsheets into dynamic, interactive assistants that save time and eliminate manual analysis.
            </p>
          </div>
        </div>

        {/* Reddit Automation */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold font-poppins mb-3">
              🤖 Reddit Automation with LLaMA
            </h3>
            <p className="text-gray-700 dark:text-gray-300 font-inter mb-4">
              This tool automates content creation and engagement on Reddit using LLaMA. It generates intelligent posts and replies across any subreddit, making it ideal for marketing, discussion bots, or educational outreach.
            </p>
            <h4 className="text-lg font-semibold mb-2">Key Features:</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 font-inter mb-4 space-y-1">
              <li>Auto-generates posts and comments using context</li>
              <li>Works on any subreddit with full customization</li>
              <li>Toxicity filters for safer communication</li>
              <li>Multiple use cases: growth, support, awareness</li>
              <li>Powered by LLaMA and Reddit API</li>
            </ul>
            <h4 className="text-lg font-semibold mb-2">Why It Matters:</h4>
            <p className="text-gray-700 dark:text-gray-300 font-inter">
              Reddit is a powerful but underutilized platform for engagement. Automating intelligent, non-spammy interactions helps brands, creators, and communities scale their impact without burnout.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <video
              src={video1}
              controls
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project6;
