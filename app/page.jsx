"use client";

import { useState } from "react";
import Link from "next/link";
export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const services = [
    {
      title: "React JS Development",
      description:
        "Creating reusable and modular UI components that can be easily integrated into the React.js framework.",
      color: "from-blue-500 to-blue-600",
      icon: "⚛️",
      link: "/services/reactjs-development",
    },
    {
      title: "Web Design & Development",
      description:
        "Creating wireframes to map out the structure and functionality of the website, followed by interactive prototypes.",
      color: "from-purple-500 to-pink-600",
      icon: "🎨",
      link: "/services/web-design-development",
    },
    {
      title: "React Native Development",
      description:
        "Designing the app's interface to ensure it is visually appealing and user-friendly, aligning with brand guidelines.",
      color: "from-indigo-500 to-purple-600",
      icon: "📱",
      link: "/services/react-native",
    },
    {
      title: "Database Development",
      description:
        "Professional database design, optimization, and management solutions for your business needs.",
      color: "from-green-500 to-emerald-600",
      icon: "🗄️",
      link: "/services/database-development",
    },
    {
      title: "Mobile Application Development",
      description:
        "Native and cross-platform mobile apps for iOS and Android platforms.",
      color: "from-orange-500 to-red-600",
      icon: "📱",
      link: "/services/mobile-application-development",
    },
    {
      title: "E-commerce Development",
      description:
        "Complete e-commerce solutions with payment integration and inventory management.",
      color: "from-cyan-500 to-blue-600",
      icon: "🛒",
      link: "/services/ecommerce-development",
    },
  ];

  const stats = [
    { number: "80+", label: "Collective Experience", icon: "⭐" },
    { number: "500+", label: "Happy Clients", icon: "⭐" },
    { number: "70+", label: "Launch of Websites", icon: "⭐" },
  ];

  const blogs = [
    {
      date: "November 10, 2025",
      title: "Inside Nano Banana: A Hands-On Guide...",
      category: "Technology",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      date: "September 6, 2025",
      title: "GST 2.0: The Future of India's...",
      category: "Business",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      date: "June 11, 2025",
      title: "5 Industries that must Integrate Business...",
      category: "Industry",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  // Logo slider data
  const clientLogos = [
    { name: "Google", text: "GOOGLE" },
    { name: "Microsoft", text: "MICROSOFT" },
    { name: "Amazon", text: "AMAZON" },
    { name: "Meta", text: "META" },
    { name: "Apple", text: "APPLE" },
    { name: "Netflix", text: "NETFLIX" },
    { name: "Tesla", text: "TESLA" },
    { name: "Samsung", text: "SAMSUNG" },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          animation: slide 30s linear infinite;
        }
        .animate-slide:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Hero Section - No Top Padding */}
   <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        
  {/* Animated Background */}
  <div className="absolute inset-0">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
    <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
    <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
  </div>

  {/* Grid Pattern */}
  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQyYzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>

  <div className="relative max-w-7xl mx-auto px-6 pt-12 pb-20">
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Content Left */}
      <div className="space-y-8 text-center sm:text-left sm:ml-0 ml-8">
        <h1 className="text-5xl md:text-5xl font-bold text-white leading-tight">
          Best Software
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Development
          </span>
          Company in Pune
        </h1>

        <p className="text-xl text-blue-100 leading-relaxed">
          Goanny Technologies Is A Leading Software Development Company In Pune.
          With 10 Years Of Experience In Custom Software Development, We Are The
          Best Results-Oriented Tech Company In Maharashtra.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
          <Link href="/about">
            <button className="group relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 w-full sm:w-auto">
              <span className="relative z-10">KNOW MORE</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </Link>

          <Link href="/services">
            <button className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 w-full sm:w-auto">
              OUR TOP SERVICES
            </button>
          </Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative flex justify-center sm:justify-end">
        <div className="relative z-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-16 flex items-center justify-center">
            <img src="/Slider_img-277x300.png" alt="" />
          </div>
        </div>
      </div>

    </div>
  </div>

  {/* Bottom Wave */}
  <div className="absolute bottom-0 left-0 right-0">
    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
        fill="white"
      />
    </svg>
  </div>
</section>


      {/* Logo Slider Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Trusted by Leading Companies
            </h3>
            <p className="text-gray-600">
              We work with industry leaders worldwide
            </p>
          </div>

          {/* Logo Slider Container */}
          <div className="relative overflow-hidden">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

            {/* Sliding logos */}
            <div className="flex animate-slide">
              {/* First set of logos */}
              {clientLogos.map((logo, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-8 grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <div className="w-40 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center shadow-md hover:shadow-xl transition-all hover:scale-105">
                    <span className="text-2xl font-bold text-gray-700">
                      {logo.text}
                    </span>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {clientLogos.map((logo, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-8 grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <div className="w-40 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center shadow-md hover:shadow-xl transition-all hover:scale-105">
                    <span className="text-2xl font-bold text-gray-700">
                      {logo.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full">
                Our Services
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              What we{" "}
              <span className="relative">
                <span className="relative z-10 text-white px-6 py-2">
                  Offer?
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg"></span>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience Both Technical & Digital Services Only With Goanny, The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500 font-semibold">
                Best Software Development Company In Pune
              </span>
            </p>
          </div>

         <div className="grid md:grid-cols-3 gap-8 mb-16">
  {services.map((service, index) => (
    <div
      key={index}
      className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden text-center md:text-left ml-4 md:ml-0"
    >
      <div
        className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
      ></div>

      <div className="relative flex flex-col items-center md:items-start">
        <div
          className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
        >
          {service.icon}
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
          {service.title}
        </h3>

        <p className="text-gray-600 mb-6 leading-relaxed mx-auto md:mx-0">
          {service.description}
        </p>

        <button className="group/btn flex items-center justify-center md:justify-start gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
          Read More
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </div>
  ))}
</div>


          <div className="flex justify-center gap-3 mb-12">
            {[0, 1, 2, 3, 4].map((dot) => (
              <button
                key={dot}
                onClick={() => setCurrentSlide(dot)}
                className={`h-2 rounded-full transition-all duration-300 ${currentSlide === dot ? "bg-blue-600 w-12" : "bg-gray-300 w-2"
                  }`}
              />
            ))}
          </div>

          <div className="text-center">
            <button className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-12 py-5 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50">
              <span className="relative z-10 flex items-center gap-3">
                EXPLORE ALL SERVICES
                <svg
                  className="w-6 h-6 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
<section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT CONTENT */}
      <div className="text-center lg:text-left">
        <div className="inline-flex items-center justify-center lg:justify-start gap-3 bg-yellow-400 px-4 py-2 rounded-full mb-6 mx-auto lg:mx-0">
          <span className="text-sm font-bold text-gray-900 uppercase tracking-wide">
            About Goanny Technologies
          </span>
        </div>

        <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
          Fully dedicated to the
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            {" "}
            best solutions
          </span>
          .
        </h3>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
          Goanny Technologies, is the leading tech-enabled Software
          Development company in Pune. With our expertise in product
          development and business automation using cutting-edge IT
          solutions, we can help businesses grow and increase their brand
          awareness. Our digital marketing services are designed to build
          businesses using the latest digital technology.
        </p>

        <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl mx-auto lg:mx-0">
          <span className="relative z-10">READ MORE</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative mx-auto lg:mx-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl blur-2xl opacity-20"></div>
        <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl shadow-2xl p-12">
          <div className="bg-white rounded-2xl p-16 flex items-center justify-center">
            <div className="text-center">
              <img
                src="/about_img-300x243.png"
                width={130}
                height={100}
                alt="Expert Logo"
                className="object-contain mx-auto"
              />
              <p className="text-gray-800 text-lg font-semibold mt-4">Team Collaboration</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* Featured Product Section */}
<section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-6">
    
    {/* Title Section */}
    <div className="mb-12 text-center lg:text-left">
      <span className="text-cyan-400 font-semibold mb-2 block">
        FEATURED PRODUCT
      </span>
      <h2 className="text-2xl md:text-3xl font-bold">
        Our Featured Product
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mt-4 mx-auto lg:mx-0"></div>
    </div>

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT CONTENT */}
      <div className="text-center lg:text-left">
        <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          GoSMarTea
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            A Business Automation Software
          </span>
        </h3>

        <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
          GoSMarTea is an all-in-one Business Automation Software that
          makes managing operations as refreshing as a tea break. From HR
          to sales, finance to analytics—handle it all on one smart,
          scalable platform.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Link href="/about">
            <button className="bg-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-cyan-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/50">
              KNOW MORE
            </button>
          </Link>
         
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative mx-auto lg:mx-0">
        <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 p-12">
          <div className="bg-gradient-to-br from-blue-800 to-indigo-800 rounded-2xl p-16 flex items-center justify-center">
            <div className="text-center">
                <img
                  src="/2881289-e1747117124493-768x705.jpg"
                  width={130}
                  height={100}
                  alt="Expert Logo"
                  className="object-contain mx-auto"
                />
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Stats Section */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* TOP LABEL */}
    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-400 px-4 py-2 rounded-full mb-12 mx-auto md:mx-0">
      <span className="text-sm font-bold text-gray-900 uppercase tracking-wide text-center">
        Grow With Us
      </span>
    </div>

    <div className="grid md:grid-cols-4 gap-12 items-center text-center md:text-left">

      {/* HEADING */}
      <div className="text-center md:text-left">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          Our Number Game
        </h2>
      </div>

      {/* STATS */}
      {stats.map((stat, index) => (
        <div key={index} className="text-center group">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 group-hover:scale-110 transition-transform">
              {stat.number}
            </span>
            <span className="text-4xl group-hover:scale-125 transition-transform">
              {stat.icon}
            </span>
          </div>
          <p className="text-lg font-semibold text-gray-700">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Blog Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-bold text-purple-600 uppercase tracking-wider bg-purple-50 px-4 py-2 rounded-full">
                Our Blog
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
              Latest Blogs
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
              >
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-7xl mb-4">📝</div>
                      <p className="text-gray-700 font-semibold">Blog Post</p>
                    </div>
                  </div>
                  <div
                    className={`absolute top-4 left-4 bg-gradient-to-r ${blog.gradient} px-4 py-2 rounded-full text-sm font-bold text-white shadow-lg`}
                  >
                    {blog.category}
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-sm text-gray-500 mb-3 font-medium">
                    {blog.date}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                    {blog.title}
                  </h3>
                  <button className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                    Read More
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-16 items-center text-center lg:text-left">

      {/* LEFT CARD */}
      <div className="relative group mx-auto lg:mx-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
        <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-16 flex items-center justify-center h-96">
            <div className="text-center">
              <div className="text-8xl mb-4">📍</div>
              <p className="text-gray-800 text-xl font-semibold">Our Location</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex flex-col justify-center items-center lg:items-start">

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-bold mb-10 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Reach out
          </span>
          <span className="block text-gray-900">
            for a free consultation
          </span>
        </h2>

        {/* Checklist */}
        <div className="space-y-6 w-full max-w-md">
          {[
            "Your Vision, Our Priority – Available 24/7!",
            "Anytime, Anywhere – We're Here 24/7 for You!",
            "24/7 Availability – Because Your Goals Don't Take a Break",
          ].map((text, index) => (
            <div key={index} className="flex items-start gap-4 group justify-center lg:justify-start">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-white text-sm font-bold">✓</span>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  </div>
</section>
    </div>
  );
}
