import React from "react";
import { useNavigate } from "react-router-dom";

import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";

const Project1 = () => {
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
        📘 AI-Powered Assessment – Smart Test Generation Platform
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Overview:</h2>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          I independently designed and developed an AI-powered assessment platform
          to simplify test creation for educators using advanced machine learning and
          NLP techniques. This solution automatically generates high-quality multiple-choice
          questions from uploaded PDF materials, eliminating the need for manual question
          setting and enabling personalized learning at scale.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">🚀 Key Features</h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700 dark:text-gray-300">
          <li>
            <strong>Auto-Generated Assessments:</strong> Upload any PDF with course content
            and instantly get 10–20 contextually relevant multiple-choice questions generated
            using AI.
          </li>
          <li>
            <strong>NLP-Powered Content Analysis:</strong> Leveraged cutting-edge NLP libraries
            and machine learning models (built with PyTorch, spaCy, and LLAMA API) to
            understand text, extract key concepts, and generate intelligent questions.
          </li>
          <li>
            <strong>Seamless Teacher & Student Dashboard:</strong> Designed with a unified login
            system and mobile-responsive interface. Teachers can manage test creation; students
            can easily access, attempt, and submit tests.
          </li>
          <li>
            <strong>Real-Time Evaluation & Feedback:</strong> Integrated auto-grading,
            performance analytics, and instant feedback features, helping both students and
            educators track progress and learning gaps efficiently.
          </li>
          <li>
            <strong>Smart Randomization:</strong> Dynamic question randomization for every user
            to ensure fairness and integrity during online testing.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">💡 Why This Matters</h2>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          Manual assessment creation is time-consuming and repetitive. This AI-powered solution
          saves educators valuable hours and enhances the learning experience for students by
          generating personalized, accurate, and relevant assessments instantly. It’s flexible,
          scalable, and easily adaptable for schools, colleges, coaching centers, and EdTech platforms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">🔧 Technologies Used</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li><strong>Frontend:</strong> HTML5, CSS3</li>
          <li><strong>Backend:</strong> Python, PyTorch, Django</li>
          <li><strong>AI & NLP:</strong> spaCy / NLTK, LLAMA API, PDF text extraction libraries</li>
          <li><strong>Realtime Updates:</strong> Firebase Cloud Messaging (FCM)</li>
          <li><strong>Deployment Ready:</strong> Lightweight, scalable, and fully modifiable</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Example Images</h2>

        <figure className="mb-8">
          <img
            src={img1}
            alt="AI model analyzing PDF content"
            className="w-full rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
          />
          <figcaption className="text-sm text-center text-gray-500 dark:text-gray-400 mt-2">
            Figure 1: AI model analyzing PDF content
          </figcaption>
        </figure>

        <figure>
          <img
            src={img2}
            alt="Teacher dashboard interface"
            className="w-full rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
          />
          <figcaption className="text-sm text-center text-gray-500 dark:text-gray-400 mt-2">
            Figure 2: Teacher dashboard interface
          </figcaption>
        </figure>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">🛠️ Available for Customization</h2>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          This platform can be customized for institutions or businesses that need automated
          assessment solutions. I'm open to collaboration or product adaptations based on your
          unique use case.
        </p>
      </section>
    </div>
  );
};

export default Project1;