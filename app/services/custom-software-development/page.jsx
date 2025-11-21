"use client"
import { useState } from 'react';

export default function CustomSoftwareDevelopment() {
  const [activeSection, setActiveSection] = useState('custom');

  const services = [
    {
      id: 'custom',
      title: 'Custom Software Design and Development',
      icon: '💻',
      features: [
        {
          title: 'Tailored Solutions',
          description: 'Creating software solutions specifically designed to address your business challenges and goals.'
        },
        {
          title: 'Scalable Architecture',
          description: 'Building software with a flexible architecture that can scale with your business as it grows.'
        },
        {
          title: 'Full-Cycle Development',
          description: 'Providing complete software development services from concept to deployment and beyond.'
        }
      ]
    },
    {
      id: 'enterprise',
      title: 'Enterprise Software Development',
      icon: '🏢',
      features: [
        {
          title: 'Large-Scale Solutions',
          description: 'Building robust enterprise applications that handle complex business operations.'
        },
        {
          title: 'Integration Ready',
          description: 'Seamlessly integrate with existing enterprise systems and workflows.'
        },
        {
          title: 'Security First',
          description: 'Enterprise-grade security measures to protect sensitive business data.'
        }
      ]
    },
    {
      id: 'web',
      title: 'Web Application Development',
      icon: '🌐',
      features: [
        {
          title: 'Modern Frameworks',
          description: 'Utilizing cutting-edge technologies for responsive web applications.'
        },
        {
          title: 'Cross-Platform',
          description: 'Applications that work seamlessly across all devices and browsers.'
        },
        {
          title: 'Performance Optimized',
          description: 'Fast-loading, efficient web applications for optimal user experience.'
        }
      ]
    },
    {
      id: 'mobile',
      title: 'Mobile Application Development',
      icon: '📱',
      features: [
        {
          title: 'Native & Hybrid',
          description: 'iOS and Android applications built for performance and user experience.'
        },
        {
          title: 'Offline Capabilities',
          description: 'Apps that work seamlessly even without internet connectivity.'
        },
        {
          title: 'App Store Ready',
          description: 'Complete deployment support for both Apple App Store and Google Play.'
        }
      ]
    },
    {
      id: 'integration',
      title: 'Software Integration Services',
      icon: '🔗',
      features: [
        {
          title: 'API Development',
          description: 'Custom APIs to connect your systems and enable data exchange.'
        },
        {
          title: 'Third-Party Integration',
          description: 'Seamlessly integrate with popular platforms and services.'
        },
        {
          title: 'Legacy System Modernization',
          description: 'Connect and upgrade older systems with modern technologies.'
        }
      ]
    },
    {
      id: 'cloud',
      title: 'Cloud-Based Software Development',
      icon: '☁️',
      features: [
        {
          title: 'Cloud-Native Architecture',
          description: 'Build scalable applications designed for cloud infrastructure.'
        },
        {
          title: 'Multi-Cloud Support',
          description: 'Deploy on AWS, Azure, Google Cloud, or hybrid environments.'
        },
        {
          title: 'Auto-Scaling',
          description: 'Automatically adjust resources based on demand for cost efficiency.'
        }
      ]
    }
  ];

  const activeService = services.find(s => s.id === activeSection);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-slate-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 py-24">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjMiIGN4PSIzMCIgY3k9IjMwIiByPSIyNSIvPjwvZz48L3N2Zz4=')] bg-repeat"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Best Custom Software Development Services in Pune
              </h1>
              
              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                <span className="font-semibold text-white">GOANNY Technology's</span>, A Leading Software Development Company in Pune Offers The Best Custom Software Development Services Provide Comprehensive, End-To-End Solutions Tailored To Meet The Unique Needs Of Our Clients.
              </p>

              <p className="text-lg text-blue-100 leading-relaxed">
                Here Is An Overview Of The Key Services In Custom Software Development Offered By GOANNY: From enterprise solutions to mobile applications, we deliver innovative software that drives business growth and operational excellence.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-slate-700/50 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <svg className="w-64 h-64" viewBox="0 0 200 200">
                      <rect x="30" y="40" width="60" height="80" rx="4" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.3"/>
                      <rect x="110" y="40" width="60" height="80" rx="4" stroke="#6366f1" strokeWidth="2" fill="none" opacity="0.3"/>
                      <rect x="70" y="80" width="60" height="80" rx="4" stroke="#8b5cf6" strokeWidth="2" fill="none" opacity="0.3"/>
                      <g transform="translate(100, 100)">
                        <circle r="35" fill="#3b82f6" opacity="0.2"/>
                        <text x="0" y="15" textAnchor="middle" fill="white" fontSize="45">💻</text>
                      </g>
                    </svg>
                    <div className="absolute top-0 right-0 bg-blue-500 text-white p-3 rounded-xl shadow-lg">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <div className="absolute bottom-0 left-0 bg-indigo-500 text-white p-3 rounded-xl shadow-lg">
                      <span className="text-2xl">⚡</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Custom Software Development Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        {/* Service Tabs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveSection(service.id)}
              className={`p-6 rounded-xl font-semibold text-left transition-all duration-300 ${
                activeSection === service.id
                  ? 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl scale-105'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{service.icon}</span>
                <span className="text-sm leading-tight">{service.title}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Active Service Content */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border-2 border-blue-200">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl">{activeService.icon}</span>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              {activeService.title}
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {activeService.features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gradient-to-br from-slate-800 to-indigo-900 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose GOANNY For Custom Software Development?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🎯', title: 'Tailored Solutions', desc: 'Custom built for your specific needs' },
              { icon: '⚡', title: 'Agile Development', desc: 'Fast, iterative development cycles' },
              { icon: '🛡️', title: 'Secure & Reliable', desc: 'Enterprise-grade security standards' },
              { icon: '📈', title: 'Scalable Growth', desc: 'Built to grow with your business' }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-blue-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 rounded-3xl shadow-2xl">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 rounded-full filter blur-3xl"></div>
          </div>

          <div className="relative px-12 py-16">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready To Build Your <span className="text-yellow-300">Custom Solution?</span>
                </h2>
                <p className="text-blue-100 text-lg">
                  Let's discuss your project and create software that perfectly fits your business needs. Get a free consultation today!
                </p>
              </div>

              <div className="flex justify-center lg:justify-end">
                <button className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:bg-blue-50 hover:scale-105 transition-all duration-300">
                  GET STARTED
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="py-12"></div>
    </div>
  );
}