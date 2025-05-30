import React from "react";
import { useNavigate } from "react-router-dom";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import video2 from "../images/video2.mp4";

const Project3 = () => {
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
        🖼️ Image Classification Modules
      </h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          This project presents two advanced AI-powered image classification modules designed to solve real-world problems. The first model specializes in pet classification, distinguishing between dogs and cats from images. The second module focuses on healthcare by detecting common oral diseases such as Gingivitis and Caries from images and videos.
        </p>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
          These models leverage state-of-the-art deep learning architectures trained on diverse datasets to deliver high accuracy and robustness, enabling applications ranging from veterinary care to healthcare diagnostics and security monitoring.
        </p>
      </section>

      {/* Pet Classification */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🐶 Pet Classification</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The pet classification module automatically identifies whether an image contains a dog or a cat. This AI solution is particularly useful for applications in pet adoption platforms, veterinary clinics, and smart pet monitoring systems.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          By using convolutional neural networks (CNNs), the model achieves high precision even with images taken in various environments and lighting conditions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <img
            src={img3}
            alt="Pet sample 1"
            className="rounded-lg shadow-md object-cover w-full h-48"
          />
          <img
            src={img4}
            alt="Pet sample 2"
            className="rounded-lg shadow-md object-cover w-full h-48"
          />
          <img
            src={img5}
            alt="Pet sample 3"
            className="rounded-lg shadow-md object-cover w-full h-48"
          />
        </div>
      </section>

      {/* Oral Disease Classification */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🦷 Oral Disease Classification</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Our oral disease classification model detects conditions such as Gingivitis and Caries using images or videos captured via smartphone cameras or clinical devices.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          This AI-powered diagnostic tool supports early detection and continuous monitoring of oral health, helping dentists and patients improve treatment outcomes. The model is optimized for real-time performance and can be integrated into telemedicine platforms or healthcare apps.
        </p>
        <video
          controls
          loop
          className="w-full rounded-lg shadow-md"
          src={video2}
          preload="metadata"
        >
          Sorry, your browser does not support the video tag.
        </video>
        <p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-2">
          Figure 1: Oral disease classification demo video
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Benefits & Use Cases</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
          <li><strong>Automated Pet Identification:</strong> Streamlines workflows in pet care and adoption services.</li>
          <li><strong>Healthcare Diagnostics:</strong> Assists dental professionals in early detection of oral diseases.</li>
          <li><strong>Scalable & Flexible:</strong> Easily integrated into web, mobile, or embedded systems.</li>
          <li><strong>Improved Accuracy:</strong> Robust models that perform well across diverse real-world scenarios.</li>
          <li><strong>User-Friendly:</strong> Designed for easy adoption by non-technical users and professionals alike.</li>
        </ul>
      </section>
      <h2 className="text-2xl font-semibold mb-4">Contact for OPEN CV Projects</h2>
    </div>
  );
};

export default Project3;
