"use client"
import React, { useState } from 'react';
import { Monitor, Smartphone, ShoppingCart, FileText, Layout, Palette, Server, Database, Settings } from 'lucide-react';

export default function WebDesignDevelopment() {
  const [expandedService, setExpandedService] = useState('custom');

  const services = [
    {
      id: 'custom',
      title: 'Custom Web Design',
      icon: <Palette className="w-5 h-5" />,
      details: [
        'Tailored web designs that reflect your brand identity and resonate with your target audience.',
        'Unique layouts and visuals to create a standout online presence.'
      ]
    },
    {
      id: 'responsive',
      title: 'Responsive Design',
      icon: <Smartphone className="w-5 h-5" />,
      details: [
        'Mobile-first approach ensuring seamless experience across all devices.',
        'Optimized layouts that adapt to different screen sizes and resolutions.'
      ]
    },
    {
      id: 'uiux',
      title: 'UI/UX Design',
      icon: <Layout className="w-5 h-5" />,
      details: [
        'User-centered design focused on intuitive navigation and engagement.',
        'Research-driven interfaces that enhance user satisfaction and conversion.'
      ]
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Website Design',
      icon: <ShoppingCart className="w-5 h-5" />,
      details: [
        'Complete online store solutions with secure payment integration.',
        'Product showcase, cart functionality, and seamless checkout experience.'
      ]
    },
    {
      id: 'landing',
      title: 'Landing Page Design',
      icon: <FileText className="w-5 h-5" />,
      details: [
        'High-converting landing pages optimized for campaigns and promotions.',
        'Clear call-to-actions and persuasive design elements.'
      ]
    },
    {
      id: 'branding',
      title: 'Branding and Graphic Design',
      icon: <Palette className="w-5 h-5" />,
      details: [
        'Cohesive brand identity including logos, color schemes, and typography.',
        'Visual consistency across all marketing materials and platforms.'
      ]
    }
  ];

  const developmentServices = [
    {
      title: 'Front-End Development',
      icon: <Monitor className="w-8 h-8" />,
      description: 'Modern, interactive interfaces using React, Next.js, and cutting-edge technologies.'
    },
    {
      title: 'Back-End Development',
      icon: <Server className="w-8 h-8" />,
      description: 'Robust server-side solutions with Node.js, APIs, and database integration.'
    },
    {
      title: 'Content Management Systems',
      icon: <Database className="w-8 h-8" />,
      description: 'Easy-to-manage CMS platforms for seamless content updates and control.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12 px-6">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            WEB DESIGNING & DEVELOPMENT
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Beautiful, responsive websites that convert visitors into customers
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Introduction */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6 text-center">
            Best Website Development & Design Services in Pune
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At <span className="font-bold text-blue-600">GOANNY</span>, we provide a comprehensive range of web design and development services tailored to meet the unique needs of our clients. As a leading <span className="text-blue-600 underline cursor-pointer">website development company in Pune</span>, our goal is to create high-quality, user-friendly, and engaging websites that enhance your online presence and drive business growth. We combine creativity, technology, and strategy to deliver impactful digital experiences that help your brand stand out.
          </p>
        </div>

        {/* Services Accordion */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Design Services</h3>
          <div className="space-y-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <button
                  onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                  className="w-full flex items-center justify-between p-6 text-left bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                      {service.icon}
                    </div>
                    <span className="text-xl font-semibold">{service.title}</span>
                  </div>
                  <svg
                    className={`w-6 h-6 transition-transform duration-300 ${
                      expandedService === service.id ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`transition-all duration-300 ${
                    expandedService === service.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="p-6 bg-gray-50">
                    <ul className="space-y-3">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-blue-500 mt-1">•</span>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Development Services Cards */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Development Expertise</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {developmentServices.map((service, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-1 hover:from-purple-400 hover:to-pink-600 transition-all duration-300"
              >
                <div className="bg-white rounded-xl p-8 h-full hover:bg-gray-50 transition-all">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3 underline decoration-blue-500 decoration-2 underline-offset-4">
                    {service.title}
                  </h4>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Online Presence?
          </h3>
          <p className="text-xl mb-8 text-blue-100">
            Let's create something amazing together
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}