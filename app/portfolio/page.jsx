"use client";
import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "/projects/ecommerce.jpg",
    description: "Full-featured online shopping platform with payment integration",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    client: "RetailCo",
    year: "2024",
    link: "#"
  },
  {
    id: 2,
    title: "Hospital Management System",
    category: "Healthcare",
    image: "/projects/hospital.jpg",
    description: "Comprehensive HIMS for patient and hospital operations management",
    tech: ["Next.js", "PostgreSQL", "AWS"],
    client: "City Hospital",
    year: "2024",
    link: "#"
  },
  {
    id: 3,
    title: "Mobile Banking App",
    category: "Mobile App",
    image: "/projects/banking.jpg",
    description: "Secure mobile banking application for iOS and Android",
    tech: ["React Native", "Firebase", "Node.js"],
    client: "FinTech Bank",
    year: "2023",
    link: "#"
  },
  {
    id: 4,
    title: "Real Estate Portal",
    category: "Web Development",
    image: "/projects/realestate.jpg",
    description: "Property listing and management platform",
    tech: ["React", "Express", "MySQL"],
    client: "PropertyHub",
    year: "2023",
    link: "#"
  },
  {
    id: 5,
    title: "Restaurant POS System",
    category: "Business Software",
    image: "/projects/pos.jpg",
    description: "Point of sale system with inventory management",
    tech: ["Vue.js", "Python", "PostgreSQL"],
    client: "FoodChain",
    year: "2024",
    link: "#"
  },
  {
    id: 6,
    title: "Learning Management System",
    category: "Education",
    image: "/projects/lms.jpg",
    description: "Online education platform with live classes",
    tech: ["React", "WebRTC", "MongoDB"],
    client: "EduTech",
    year: "2023",
    link: "#"
  },
];

const categories = ["All", "Web Development", "Mobile App", "Healthcare", "Business Software", "Education"];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24 px-6 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Work
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our expertise through successful projects delivered to clients worldwide
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-blue-50 shadow-md"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-64 bg-gradient-to-br from-blue-400 to-purple-500 overflow-hidden">
                {/* Placeholder - Replace with actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-20">
                  {project.title.charAt(0)}
                </div>
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
                  hoveredProject === project.id ? "opacity-100" : "opacity-0"
                }`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <a 
                      href={project.link}
                      className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Client & Year */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">Client: {project.client}</span>
                  <span className="text-sm font-bold text-gray-700">{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-lg mb-6 opacity-90">
            Let's collaborate and bring your vision to life
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </div>
  );
}