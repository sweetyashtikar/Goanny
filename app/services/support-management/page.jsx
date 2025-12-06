"use client"
import React, { useState } from 'react';
import { Server, Cloud, Activity, Wrench, Headphones, Code, Shield, Clock, CheckCircle, ChevronDown } from 'lucide-react';

export default function SupportManagement() {
  const [expandedSection, setExpandedSection] = useState('infrastructure');

  const services = [
    {
      id: 'infrastructure',
      title: 'IT Infrastructure Management',
      icon: <Server className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600',
      details: [
        {
          title: 'Network and Server Monitoring',
          description: 'Continuous monitoring and maintenance of network and server infrastructure to ensure peak performance and reliability.'
        },
        {
          title: 'Cloud Infrastructure Support',
          description: 'Managing cloud environments to ensure scalability, security, and seamless integration with business processes.'
        },
        {
          title: 'System Health Monitoring',
          description: 'Proactive checks to identify and resolve potential issues before they impact business operations.'
        }
      ]
    },
    {
      id: 'software',
      title: 'Software Maintenance and Support',
      icon: <Wrench className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-600',
      details: [
        {
          title: 'Regular Updates & Patches',
          description: 'Keep your software up-to-date with the latest features, security patches, and performance improvements.'
        },
        {
          title: 'Bug Fixes & Troubleshooting',
          description: 'Swift identification and resolution of software issues to minimize disruption to your operations.'
        },
        {
          title: 'Version Management',
          description: 'Seamless software version upgrades and compatibility management across your systems.'
        }
      ]
    },
    {
      id: 'technical',
      title: '24/7 Technical Support',
      icon: <Headphones className="w-6 h-6" />,
      color: 'from-green-500 to-green-600',
      details: [
        {
          title: 'Round-the-Clock Availability',
          description: 'Expert technical support available 24/7 to address urgent issues and provide immediate assistance.'
        },
        {
          title: 'Multi-Channel Support',
          description: 'Access support via phone, email, chat, or ticketing system based on your preference.'
        },
        {
          title: 'Rapid Response Time',
          description: 'Prioritized response protocols to ensure critical issues are addressed promptly and efficiently.'
        }
      ]
    },
    {
      id: 'application',
      title: 'Application Support and Management',
      icon: <Code className="w-6 h-6" />,
      color: 'from-pink-500 to-pink-600',
      details: [
        {
          title: 'Application Monitoring',
          description: 'Continuous monitoring of application performance, uptime, and user experience metrics.'
        },
        {
          title: 'Database Management',
          description: 'Optimization, backup, and maintenance of databases to ensure data integrity and performance.'
        },
        {
          title: 'Integration Support',
          description: 'Seamless integration management between applications, APIs, and third-party services.'
        }
      ]
    }
  ];

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Proactive Monitoring',
      description: 'Identify and resolve issues before they impact your business'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Swift Resolution',
      description: 'Minimize downtime with rapid response and expert solutions'
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'System Optimization',
      description: 'Ongoing optimization to maximize technology investments'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-700 via-slate-600 to-slate-800 text-white py-12 px-6">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Support & Management Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            24/7 technical support and proactive management to keep your business running smoothly
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Introduction Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6 text-center">
            Best Support & Management Services in Pune
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            GOANNY Technology offers a comprehensive range of Support & Management services to ensure that your IT infrastructure, software, and digital solutions operate seamlessly, efficiently, and securely. These services are designed to provide proactive monitoring, swift issue resolution, and ongoing system optimization, helping businesses maximize their technology investments while minimizing downtime. Here's a closer look at the Support & Management services provided by GOANNY.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-4 text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Services Accordion */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Support Services</h3>
          <div className="space-y-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <button
                  onClick={() => setExpandedSection(expandedSection === service.id ? null : service.id)}
                  className={`w-full flex items-center justify-between p-6 text-left bg-gradient-to-r ${service.color} text-white hover:opacity-90 transition-all`}
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                      {service.icon}
                    </div>
                    <span className="text-xl font-semibold">{service.title}</span>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 transition-transform duration-300 ${
                      expandedSection === service.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ${
                    expandedSection === service.id ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="p-6 bg-gradient-to-br from-gray-50 to-blue-50 space-y-6">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">{detail.title}</h4>
                          <p className="text-gray-600">{detail.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl p-8 md:p-12 text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Why Choose GOANNY Support Services?
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg flex-shrink-0">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Expert Team</h4>
                <p className="text-blue-100">Skilled professionals with deep technical expertise across various technologies</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg flex-shrink-0">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Proactive Approach</h4>
                <p className="text-blue-100">Preventive monitoring and maintenance to avoid potential issues</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg flex-shrink-0">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Minimize Downtime</h4>
                <p className="text-blue-100">Swift resolution and 24/7 availability to keep your business operational</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-lg flex-shrink-0">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Cost-Effective</h4>
                <p className="text-blue-100">Maximize ROI while reducing operational costs and overhead</p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Support Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}