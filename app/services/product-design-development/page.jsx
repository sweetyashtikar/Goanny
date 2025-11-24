
"use client"
import { useState } from 'react';

export default function ProductDesignDevelopment() {
  const [activeSection, setActiveSection] = useState('discovery');

  const services = [
    {
      id: 'discovery',
      title: 'Product Discovery and Strategy',
      icon: '🔍',
      features: [
        {
          title: 'Market Research',
          description: 'Conducting comprehensive research to understand market trends, user needs, and the competitive landscape.'
        },
        {
          title: 'Product Road Mapping',
          description: 'Defining a clear product vision, goals, and strategy aligned with business objectives.'
        },
        {
          title: 'Feasibility Analysis',
          description: 'Evaluating the technical and economic viability of the product idea to ensure its success in the market.'
        }
      ]
    },
    {
      id: 'ideation',
      title: 'Ideation and Concept Development',
      icon: '💡',
      features: [
        {
          title: 'Market Research',
          description: 'Conducting comprehensive research to understand market trends, user needs, and the competitive landscape.'
        },
        {
          title: 'Product Road Mapping',
          description: 'Defining a clear product vision, goals, and strategy aligned with business objectives.'
        },
        {
          title: 'Feasibility Analysis',
          description: 'Evaluating the technical and economic viability of the product idea to ensure its success in the market.'
        }
      ]
    },
    {
      id: 'design',
      title: 'UI/UX Design and Prototyping',
      icon: '🎨',
      features: [
        {
          title: 'User-Centric Design',
          description: 'Creating intuitive and visually appealing interfaces that enhance user experience and engagement.'
        },
        {
          title: 'Wireframing & Mockups',
          description: 'Developing detailed wireframes and high-fidelity mockups to visualize the product before development.'
        },
        {
          title: 'Interactive Prototypes',
          description: 'Building clickable prototypes for user testing and stakeholder validation before final development.'
        }
      ]
    },
    {
      id: 'development',
      title: 'Product Development and Engineering',
      icon: '⚙️',
      features: [
        {
          title: 'Agile Development',
          description: 'Using agile methodologies to build products iteratively with continuous feedback and improvements.'
        },
        {
          title: 'Full-Stack Development',
          description: 'Expertise in frontend, backend, and mobile app development to create complete solutions.'
        },
        {
          title: 'Quality Assurance',
          description: 'Rigorous testing processes to ensure bug-free, high-performance, and secure products.'
        }
      ]
    },
    {
      id: 'mvp',
      title: 'MVP Development',
      icon: '🚀',
      features: [
        {
          title: 'Rapid Prototyping',
          description: 'Building minimum viable products quickly to test ideas and validate market demand with minimal investment.'
        },
        {
          title: 'Core Feature Focus',
          description: 'Identifying and developing essential features that solve the primary problem for early adopters.'
        },
        {
          title: 'Market Validation',
          description: 'Launching MVP to gather real user feedback and iterate based on actual market response.'
        }
      ]
    },
    {
      id: 'launch',
      title: 'Product Launch and Support',
      icon: '🎯',
      features: [
        {
          title: 'Go-to-Market Strategy',
          description: 'Creating comprehensive launch plans including marketing, distribution, and customer acquisition strategies.'
        },
        {
          title: 'Deployment & Integration',
          description: 'Seamless deployment to production environments with proper monitoring and analytics setup.'
        },
        {
          title: 'Post-Launch Support',
          description: 'Ongoing maintenance, updates, and feature enhancements based on user feedback and market changes.'
        }
      ]
    }
  ];

  const activeService = services.find(s => s.id === activeSection);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-500 text-white py-12 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Best Product Design & Development Services in Pune
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              GOANNY Technology offers a wide range of Product Design & Development services, focusing on turning innovative ideas into 
              market-ready products. These services are designed to guide clients from the initial concept to the final launch, ensuring the 
              product meets both user expectations and business goals.
            </p>
          </div>

          {/* Decorative Product Icons */}
          <div className="flex justify-center gap-8 mt-12 text-5xl">
            <div className="animate-bounce" style={{animationDelay: '0s', animationDuration: '2s'}}>💡</div>
            <div className="animate-bounce" style={{animationDelay: '0.2s', animationDuration: '2s'}}>🎨</div>
            <div className="animate-bounce" style={{animationDelay: '0.4s', animationDuration: '2s'}}>⚙️</div>
            <div className="animate-bounce" style={{animationDelay: '0.6s', animationDuration: '2s'}}>🚀</div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Product Design & Development Services
          </h2>
          <p className="text-xl text-gray-600">
            Complete solutions from ideation to market launch
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
                  ? 'bg-gradient-to-br from-blue-600 to-cyan-700 text-white shadow-xl scale-105'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg'
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
                className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow"
              >
                <h4 className="text-xl font-bold text-blue-700 mb-3">
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

      {/* Product Discovery Process Diagram */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Our Product Discovery Process
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Research', icon: '🔍', desc: 'Market & User Analysis' },
              { step: '2', title: 'Ideate', icon: '💭', desc: 'Concept Development' },
              { step: '3', title: 'Design', icon: '✏️', desc: 'UI/UX & Prototyping' },
              { step: '4', title: 'Develop', icon: '⚙️', desc: 'Build & Test' },
              { step: '5', title: 'Validate', icon: '✅', desc: 'Quality Assurance' },
              { step: '6', title: 'Launch', icon: '🚀', desc: 'Go to Market' },
              { step: '7', title: 'Iterate', icon: '🔄', desc: 'Continuous Improvement' },
              { step: '8', title: 'Scale', icon: '📈', desc: 'Growth & Expansion' }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                  {item.step}
                </div>
                <div className="text-3xl mb-2">{item.icon}</div>
                <h4 className="font-bold text-gray-800 mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Why Choose GOANNY For Product Design & Development?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: '🎯', title: 'User-Centric', desc: 'Design focused on real user needs' },
            { icon: '⚡', title: 'Agile Approach', desc: 'Fast iterations and continuous feedback' },
            { icon: '🛡️', title: 'Quality Assured', desc: 'Rigorous testing and QA processes' },
            { icon: '💼', title: 'Business Aligned', desc: 'Solutions that meet your goals' }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all text-center border-t-4 border-blue-600"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Features Section */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Key Features of Our Product Development
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '📊', title: 'Data-Driven Decisions', description: 'Using analytics and metrics to guide product strategy and feature prioritization' },
              { icon: '🔄', title: 'Iterative Development', description: 'Continuous improvement cycles based on user feedback and testing results' },
              { icon: '🎨', title: 'Design Systems', description: 'Scalable design systems that ensure consistency across your product' },
              { icon: '🔐', title: 'Security First', description: 'Built-in security measures and compliance with industry standards' },
              { icon: '📱', title: 'Multi-Platform', description: 'Web, mobile, and desktop solutions with seamless cross-platform experiences' },
              { icon: '🤝', title: 'Collaborative Process', description: 'Regular stakeholder involvement and transparent communication throughout' }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
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
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready To Build Your Next Product?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Let's transform your innovative idea into a market-ready product that users love. 
            Get a free consultation and discover how we can bring your vision to life!
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-full text-xl font-bold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105">
            START YOUR PROJECT →
          </button>
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="h-12"></div>
    </div>
  );
}