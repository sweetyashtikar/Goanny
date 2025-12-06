"use client"
import { useState } from 'react';

export default function UIUXDesign() {
  const [activeSection, setActiveSection] = useState('research');
  const [expandedAccordion, setExpandedAccordion] = useState('research');

  const services = [
    {
      id: 'research',
      title: 'User Research and Analysis',
      icon: '🔍',
      features: [
        {
          title: 'In-Depth Research',
          description: 'Conducting in-depth research to understand the target audience, their behaviors, needs, and preferences.'
        },
        {
          title: 'Data-Driven Strategies',
          description: 'Analyzing market trends and user feedback to create data-driven design strategies that resonate with the end-users.'
        },
        {
          title: 'User Personas',
          description: 'Creating detailed user personas and journey maps to guide the design process and ensure user-centric solutions.'
        }
      ]
    },
    {
      id: 'wireframing',
      title: 'Wireframing and Prototyping',
      icon: '📐',
      features: [
        {
          title: 'Low-Fidelity Wireframes',
          description: 'Creating basic wireframes to establish layout structure, navigation flow, and content hierarchy.'
        },
        {
          title: 'Interactive Prototypes',
          description: 'Developing clickable prototypes that simulate the user experience for testing and validation before development.'
        },
        {
          title: 'Rapid Iteration',
          description: 'Quick iterations based on feedback to refine designs and improve usability early in the process.'
        }
      ]
    },
    {
      id: 'architecture',
      title: 'Information Architecture Design',
      icon: '🗂️',
      features: [
        {
          title: 'Content Organization',
          description: 'Structuring and organizing content in a logical, intuitive way that makes information easy to find and navigate.'
        },
        {
          title: 'Navigation Design',
          description: 'Designing clear navigation systems, sitemaps, and taxonomies that guide users seamlessly through the interface.'
        },
        {
          title: 'User Flow Optimization',
          description: 'Mapping out optimal user flows to reduce friction and create efficient pathways to goal completion.'
        }
      ]
    },
    {
      id: 'visual',
      title: 'Visual Design',
      icon: '🎨',
      features: [
        {
          title: 'Brand Identity',
          description: 'Creating visually stunning designs that align with your brand identity and create lasting impressions.'
        },
        {
          title: 'Design Systems',
          description: 'Developing comprehensive design systems with reusable components, color schemes, typography, and style guides.'
        },
        {
          title: 'Responsive Design',
          description: 'Ensuring designs work flawlessly across all devices and screen sizes with pixel-perfect precision.'
        }
      ]
    },
    {
      id: 'interaction',
      title: 'Interaction Design',
      icon: '⚡',
      features: [
        {
          title: 'Micro-Interactions',
          description: 'Designing delightful micro-interactions and animations that enhance user engagement and provide feedback.'
        },
        {
          title: 'User Interface Patterns',
          description: 'Implementing proven UI patterns and best practices that users are familiar with for intuitive interactions.'
        },
        {
          title: 'Accessibility Focus',
          description: 'Ensuring all interactive elements are accessible and meet WCAG standards for inclusive design.'
        }
      ]
    },
    {
      id: 'testing',
      title: 'Usability Testing & Optimization',
      icon: '✅',
      features: [
        {
          title: 'User Testing',
          description: 'Conducting usability tests with real users to identify pain points and areas for improvement.'
        },
        {
          title: 'A/B Testing',
          description: 'Running A/B tests to compare design variations and make data-driven decisions for optimal results.'
        },
        {
          title: 'Continuous Improvement',
          description: 'Iterating designs based on analytics, heatmaps, and user feedback for ongoing optimization.'
        }
      ]
    }
  ];

  const activeService = services.find(s => s.id === activeSection);

  const toggleAccordion = (id) => {
    setExpandedAccordion(expandedAccordion === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white py-12 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <div className="text-6xl md:text-7xl font-bold mb-6 tracking-wider" style={{
              WebkitTextStroke: '2px rgba(255,255,255,0.3)',
              color: 'transparent',
              textShadow: '0 0 40px rgba(255,255,255,0.5)'
            }}>
              UX-UI
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Best UI/UX Services in Pune
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
              GOANNY Technology delivers comprehensive UI/UX design services that focus on creating visually appealing and user-centric 
              digital experiences. Here are the key UI/UX design services offered.
            </p>
          </div>

          {/* Decorative UI/UX Icons Grid */}
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mt-12 max-w-4xl mx-auto">
            {['📱', '💻', '🎨', '🖱️', '⚡', '🎯', '🔧', '✨'].map((icon, index) => (
              <div 
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 text-3xl text-center hover:scale-110 transition-transform"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'float 3s ease-in-out infinite'
                }}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      {/* Services Section - Tab Style */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our UI/UX Design Services
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive design solutions for exceptional user experiences
          </p>
        </div>

        {/* Service Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveSection(service.id)}
              className={`p-6 rounded-xl font-semibold text-left transition-all duration-300 ${
                activeSection === service.id
                  ? 'bg-gradient-to-br from-purple-600 to-blue-700 text-white shadow-xl scale-105'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-400 hover:shadow-lg'
              }`}
            >
              <div className="text-3xl mb-2">{service.icon}</div>
              <div className="text-lg">{service.title}</div>
            </button>
          ))}
        </div>

        {/* Active Service Content */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="text-5xl">{activeService.icon}</div>
            <h3 className="text-3xl font-bold text-gray-800">
              {activeService.title}
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {activeService.features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-200 hover:shadow-lg transition-shadow"
              >
                <h4 className="text-xl font-bold text-purple-700 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Accordion Style Section */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Detailed Service Breakdown
          </h2>
          <div className="space-y-3">
            {services.map((service) => (
              <div key={service.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleAccordion(service.id)}
                  className={`w-full px-6 py-4 flex items-center justify-between transition-colors ${
                    expandedAccordion === service.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-50 text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{service.icon}</span>
                    <span className="font-semibold text-lg">{service.title}</span>
                  </div>
                  <span className="text-2xl">
                    {expandedAccordion === service.id ? '−' : '+'}
                  </span>
                </button>
                {expandedAccordion === service.id && (
                  <div className="px-6 py-6 bg-white">
                    <ul className="space-y-3">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex gap-3">
                          <span className="text-blue-600 mt-1">◦</span>
                          <div>
                            <strong className="text-gray-800">{feature.title}:</strong>
                            <span className="text-gray-600"> {feature.description}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Design Process Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our UX Design Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { step: '1', title: 'Discover', icon: '🔍', desc: 'Research & Analysis' },
            { step: '2', title: 'Define', icon: '🎯', desc: 'Strategy & Planning' },
            { step: '3', title: 'Design', icon: '✏️', desc: 'Wireframes & UI' },
            { step: '4', title: 'Develop', icon: '⚙️', desc: 'Prototyping' },
            { step: '5', title: 'Deliver', icon: '🚀', desc: 'Testing & Launch' }
          ].map((item, index) => (
            <div key={index} className="relative">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-purple-600">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-3">
                  {item.step}
                </div>
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="font-bold text-gray-800 mb-2 text-lg">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
              {index < 4 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-3xl text-purple-300">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose GOANNY For UI/UX Design?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '👥', title: 'User-Centered', desc: 'Every design decision is based on user needs and behaviors' },
              { icon: '📊', title: 'Data-Driven', desc: 'Using analytics and research to inform design choices' },
              { icon: '♿', title: 'Accessible', desc: 'WCAG compliant designs for inclusive experiences' },
              { icon: '⚡', title: 'Performance', desc: 'Optimized for speed and smooth interactions' }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all text-center border-t-4 border-purple-600"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tools & Technologies */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Design Tools & Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            { name: 'Figma', icon: '🎨' },
            { name: 'Adobe XD', icon: '🖌️' },
            { name: 'Sketch', icon: '✏️' },
            { name: 'InVision', icon: '💡' },
            { name: 'Miro', icon: '🗂️' },
            { name: 'Principle', icon: '⚡' }
          ].map((tool, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-center border border-gray-200"
            >
              <div className="text-4xl mb-3">{tool.icon}</div>
              <p className="font-semibold text-gray-800">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Features Grid */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            What Makes Our UI/UX Stand Out
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🎯', title: 'Goal-Oriented Design', description: 'Every element serves a purpose aligned with business objectives and user goals' },
              { icon: '🔄', title: 'Iterative Process', description: 'Continuous refinement based on testing and feedback for optimal results' },
              { icon: '📱', title: 'Mobile-First', description: 'Designed for mobile experiences first, then scaled to larger screens' },
              { icon: '🎨', title: 'Consistent Design', description: 'Unified design language across all touchpoints for brand coherence' },
              { icon: '⚡', title: 'Fast Loading', description: 'Optimized assets and interactions for lightning-fast performance' },
              { icon: '🌐', title: 'Cross-Browser', description: 'Tested and optimized for all major browsers and devices' }
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-200"
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready To Create Amazing User Experiences?
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            Let's design interfaces that your users will love and that drive real business results. 
            Schedule a free consultation to discuss your UI/UX needs!
          </p>
          <button className="bg-white text-purple-600 px-10 py-4 rounded-full text-xl font-bold hover:bg-purple-50 transition-all shadow-lg hover:shadow-xl hover:scale-105">
            GET STARTED TODAY →
          </button>
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="h-12"></div>
    </div>
  );
}