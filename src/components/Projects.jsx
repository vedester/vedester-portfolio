// components/Projects.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projectList = [
    {
      title: "Custom Shower Glass Quote Calculator",
      description:
        "A dynamic React-based app that generates instant quotes based on dimensions, glass type, and add-ons. Includes cart, image preview, and WhatsApp/email quote sharing.",
      tech: ["React", "Tailwind CSS", "Flask", "API", "State Management"],
      live: "https://custom-shower-quote.onrender.com",
      repo: "https://github.com/vedester/custom-shower-quote",
    },
    {
      title: "AI Vision Assistant",
      description:
        "A Flask-based assistant that analyzes uploaded images and live camera feeds using OpenAI. Features text-to-speech feedback (gTTS) and public sharing via Ngrok.",
      tech: ["Python", "Flask", "OpenAI API", "OpenCV", "gTTS", "Ngrok"],
      live: "https://ml-vision-assistant.onrender.com",
      repo: "https://github.com/vedester/ml-vision-assistant",
    },
    {
      title: "Snooker Scoring System",
      description:
        "An ML-powered system for tracking and scoring snooker games using YOLOv8 and video footage integration.",
      tech: ["YOLOv8", "Python", "OpenCV", "Colab", "API Integration"],
    },
    {
      title: "Encrypted Redirect System",
      description:
        "A secure URL redirect platform with encoded links and a backend powered by Flask and PHP for safe client-side redirection.",
      tech: ["Flask", "PHP", "JavaScript", "itsdangerous", "Base64"],
      live: "https://redirector-site.onrender.com",
      repo: "https://github.com/vedester/redirector-site",
    },
    {
      title: "Ages Food Bakery Web App",
      description:
        "A full-stack bakery website with product management, login/signup, and a dynamic product API built using Flask.",
      tech: ["HTML", "CSS", "Flask", "Jinja", "JavaScript"],
      repo: "https://github.com/vedester/food-bakery",
    },
    {
      title: "AntiScam Academic Platform",
      description:
        "A secure academic freelancing platform with AI-based plagiarism checks, M-Pesa integration, and protected submissions.",
      tech: ["React", "Flask", "Tailwind", "JWT", "M-Pesa API"],
    },
    {
      title: "Titanic Survival Analysis",
      description:
        "A full machine learning pipeline for survival prediction using logistic regression, decision trees, and random forests, built on the Titanic dataset.",
      tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
      repo: "https://github.com/vedester/titanic-survival-analysis",
    },
  ];

  const allTags = Array.from(new Set(projectList.flatMap(p => p.tech)));
  const [selectedTag, setSelectedTag] = useState("All");

  const filteredProjects = selectedTag === "All"
    ? projectList
    : projectList.filter(p => p.tech.includes(selectedTag));

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-blue-600 mb-12">Projects</h2>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <button
          onClick={() => setSelectedTag("All")}
          className={`px-4 py-2 text-sm rounded-full border ${selectedTag === "All" ? "bg-blue-600 text-white" : "bg-white text-gray-800"}`}
        >
          All
        </button>
        {allTags.map((tag, index) => (
          <button
            key={index}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 text-sm rounded-full border ${selectedTag === tag ? "bg-blue-600 text-white" : "bg-white text-gray-800"}`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-center gap-4">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                >
                  Live Demo
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
                >
                  GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
