"use client"
import { useState } from 'react';

export default function CustomSoftwareDevelopment() {
  const [activeSection, setActiveSection] = useState('custom');

  const services = [
    {
      id: 'custom',
      title: 'Fully Custom Solutions',
      icon: '💻',
      features: [
        {
          title: 'Tailored to Your Needs',
          description: 'Designed to match your exact business requirements and workflows.'
        },
        {
          title: 'Flexible Architecture',
          description: 'Built with scalability and future growth in mind.'
        },
        {
          title: 'Complete Ownership',
          description: 'Full control over your custom-built software solution.'
        }
      ]
    },
    {
      id: 'web-mobile',
      title: 'Web & Mobile Applications',
      icon: '📱',
      features: [
        {
          title: 'Cross-Platform Solutions',
          description: 'Works seamlessly on any device - desktop, tablet, or mobile.'
        },
        {
          title: 'Responsive Design',
          description: 'Beautiful interfaces that adapt to any screen size.'
        },
        {
          title: 'Native Performance',
          description: 'Fast, smooth user experience with modern frameworks.'
        }
      ]
    },
    {
      id: 'automation',
      title: 'Business Process Automation',
      icon: '⚡',
      features: [
        {
          title: 'Reduce Manual Work',
          description: 'Automate repetitive tasks and save valuable time.'
        },
        {
          title: 'Improve Productivity',
          description: 'Let your team focus on what matters most.'
        },
        {
          title: 'Error Reduction',
          description: 'Minimize human errors with automated workflows.'
        }
      ]
    },
    {
      id: 'integration',
      title: 'Advanced Integrations',
      icon: '🔗',
      features: [
        {
          title: 'CRM & ERP Compatible',
          description: 'Seamless connection with your existing business systems.'
        },
        {
          title: 'Third-Party APIs',
          description: 'Integrate with payment gateways, analytics, and more.'
        },
        {
          title: 'Data Synchronization',
          description: 'Keep all your systems in perfect harmony.'
        }
      ]
    },
    {
      id: 'security',
      title: 'Secure & Compliant Systems',
      icon: '🛡️',
      features: [
        {
          title: 'Data Protection',
          description: 'Industry-standard encryption and security protocols.'
        },
        {
          title: 'Compliance Ready',
          description: 'Built to meet regulatory requirements and standards.'
        },
        {
          title: 'Regular Updates',
          description: 'Continuous security patches and improvements.'
        }
      ]
    },
    {
      id: 'analytics',
      title: 'Insightful Dashboards',
      icon: '📊',
      features: [
        {
          title: 'Real-Time Data',
          description: 'Live visualization of your business metrics.'
        },
        {
          title: 'Smart Reports',
          description: 'Generate detailed reports with a single click.'
        },
        {
          title: 'Data-Driven Decisions',
          description: 'Make informed choices with powerful analytics.'
        }
      ]
    }
  ];

  const activeService = services.find(s => s.id === activeSection);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-slate-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 py-12">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjMiIGN4PSIzMCIgY3k9IjMwIiByPSIyNSIvPjwvZz48L3N2Zz4=')] bg-repeat"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                 Custom Software Development
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-yellow-300 mb-6">
                Build Software That Builds Your Business
              </h2>

              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                We design, develop, and deliver custom-built software tailored to the unique needs of your business. Our solutions help you streamline operations, boost productivity, and drive unstoppable digital growth.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-blue-100">
                  <span className="text-yellow-300 text-xl">🔹</span>
                  <span className="text-lg">Faster Operations & Automation</span>
                </div>
                <div className="flex items-center gap-3 text-blue-100">
                  <span className="text-yellow-300 text-xl">🔹</span>
                  <span className="text-lg">Secure & Scalable Architecture</span>
                </div>
                <div className="flex items-center gap-3 text-blue-100">
                  <span className="text-yellow-300 text-xl">🔹</span>
                  <span className="text-lg">Web + Mobile Compatible</span>
                </div>
                <div className="flex items-center gap-3 text-blue-100">
                  <span className="text-yellow-300 text-xl">🔹</span>
                  <span className="text-lg">Cloud Deployment Available</span>
                </div>
              </div>

              <button className="bg-yellow-400 text-slate-900 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-yellow-300 hover:scale-105 transition-all duration-300">
                Start Your Digital Transformation Today →
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-slate-700/50 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
                <div className="flex items-center justify-center">
                  <img
                    src="/2279868-1536x880.jpg"
                    alt="Custom Software Development"
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Offer Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            🔍 What We Offer
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Every business has different processes and challenges. At Goanny Technologies, we create software that fits your workflow — not the other way around.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            We build future-ready solutions with the right technology, strong architecture, and a focus on user experience. Whether you need a standalone application or a complete business automation suite — we've got you covered.
          </p>
        </div>

        {/* Service Tabs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveSection(service.id)}
              className={`p-6 rounded-xl font-semibold text-left transition-all duration-300 ${activeSection === service.id
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

      {/* Development Process Section */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🚀 Our Development Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow an agile and transparent process that keeps you involved at every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: '1️⃣', title: 'Requirements & Technology Planning', desc: 'Understanding your needs and choosing the right tech stack' },
              { num: '2️⃣', title: 'UI/UX Design Prototype', desc: 'Creating intuitive and beautiful user interfaces' },
              { num: '3️⃣', title: 'Development & Module Delivery', desc: 'Building your software with regular updates' },
              { num: '4️⃣', title: 'Quality & Performance Testing', desc: 'Ensuring everything works flawlessly' },
              { num: '5️⃣', title: 'Deployment & User Training', desc: 'Launching your software and training your team' },
              { num: '6️⃣', title: 'Post-Launch Support & Enhancements', desc: 'Continuous improvement and maintenance' }
            ].map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-100 hover:border-blue-400 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start gap-3 mb-4">
                  <div className="text-4xl">{step.num}</div>
                  <h3 className="text-lg font-bold text-gray-900 mt-2">{step.title}</h3>
                </div>
                <p className="text-gray-700">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-blue-600 font-semibold text-lg bg-blue-50 inline-block px-6 py-3 rounded-full">
              📌 Weekly progress demos included — so you always know what's happening.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gradient-to-br from-slate-800 to-indigo-900 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            🧩 Why Choose Goanny Technologies?
          </h2>
          <p className="text-center text-blue-100 text-lg mb-12">
            We don't just develop software — We develop business success.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '✔️', title: 'Deep Expertise', desc: 'Business automation & enterprise solutions specialists' },
              { icon: '✔️', title: 'Cost-Effective', desc: 'High-quality delivery with affordable pricing' },
              { icon: '✔️', title: 'Dedicated Support', desc: 'Long-term maintenance and quick assistance' },
              { icon: '✔️', title: 'Quick Turnaround', desc: 'Agile sprints for faster delivery' },
              { icon: '✔️', title: 'Clear Communication', desc: 'Reliable updates and detailed documentation' },
              { icon: '✔️', title: 'Business Success', desc: 'Focused on your growth and ROI' }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4 text-yellow-300">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-blue-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industries Section */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            🏭 Industries We Serve
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Healthcare & Pharma',
              'Manufacturing & Industrial',
              'Retail & E-commerce',
              'Real Estate & Construction',
              'Education & E-Learning',
              'Finance & Banking',
              'Hospitality',
              'Logistics & Transportation'
            ].map((industry, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-xl hover:border-blue-400 transition-all duration-300 text-center">
                <p className="font-semibold text-gray-800">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            💡 Business Benefits You Get
          </h2>
          <p className="text-lg text-gray-600">
            A smarter business starts with smarter software. 🌐💼
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: '✔️', text: 'Up to 70% reduction in manual work' },
            { icon: '✔️', text: 'Increased operational efficiency' },
            { icon: '✔️', text: 'Higher data accuracy' },
            { icon: '✔️', text: 'Improved customer satisfaction' },
            { icon: '✔️', text: 'Strong competitive edge' },
            { icon: '✔️', text: 'Better decision making with data insights' }
          ].map((benefit, index) => (
            <div key={index} className="flex items-center gap-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 hover:shadow-lg transition-all duration-300">
              <span className="text-2xl text-green-600">{benefit.icon}</span>
              <p className="text-gray-800 font-medium">{benefit.text}</p>
            </div>
          ))}
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
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                📞 Transform Your Business With Us
              </h2>
              <p className="text-blue-100 text-lg mb-8">
                Let's turn your ideas into powerful software solutions.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <button className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:bg-blue-50 hover:scale-105 transition-all duration-300">
                  📌 Book a Free Consultation
                </button>
                <button className="bg-yellow-400 text-slate-900 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:bg-yellow-300 hover:scale-105 transition-all duration-300">
                  📌 Share Your Requirements
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