"use client"
import React, { useState } from 'react';
import { Search, Shield, Truck, Award, CheckCircle, ChevronRight, Database, Server, Lock, Clock, Users, BarChart3, Bell, Activity } from 'lucide-react';

export default function MiningModern() {
  const [activeTab, setActiveTab] = useState('strategy');

  const purposes = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Track Movement",
      description: "Tracks the movement of sand and other minerals.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Ensure Safety",
      description: "Ensures the safety of workers and machinery.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Prevent Unauthorized Transport",
      description: "Detects and prevents unauthorized transportation or overloading.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Better Decision Making",
      description: "Supports better decision-making using real-time data.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Regulatory Compliance",
      description: "Helps comply with environmental and government regulations.",
      gradient: "from-indigo-500 to-blue-500"
    }
  ];

  const features = [
    {
      title: "Royalty Payment Notifications",
      description: "If any user completes a royalty payment, the system automatically generates a notification to keep stakeholders informed in real-time.",
      icon: <Bell className="w-6 h-6" />
    },
    {
      title: "Sales Analysis (Daily, Weekly, Monthly)",
      description: "Detailed reports are available showing sales performance across all users or locations on a daily, weekly, and monthly basis to make better decisions.",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Smart Sales Notifications",
      description: "When a sale is reported at a price significantly higher or lower than the average market rate, the system flags it and sends an alert for review.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "User Activity Monitoring",
      description: "The system identifies which users are actively using the platform and which are inactive. This helps in engagement tracking and operational transparency.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "ETP (Electronic Transit Pass) Analysis",
      description: "The system enables detailed analysis of ETP, which helps to efficiently track movement, quantity, and compliance.",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Dedicated Server Hosting",
      description: "This software is hosted and run on your own servers, which offers better control, reliability, and customization according to project needs.",
      icon: <Server className="w-6 h-6" />
    }
  ];

  const technologies = [
    { name: "React Js & React Native", category: "Front End Development" },
    { name: "Java Script", category: "Front End Development" },
    { name: "Node Js & Express Js", category: "Backend Development" },
    { name: "MongoDB – NoSQL Database", category: "Database" },
    { name: "Amazon Web Server (AWS)", category: "Server and Security" },
    { name: "Encryption and descriptions for all data", category: "Security" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="text-center">
            <div className="inline-block bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 mb-8">
              <span className="text-blue-300 text-sm font-medium">⛏️ Advanced Mining Technology</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Mining
            </h1>
            
            <p className="text-2xl md:text-3xl text-blue-200 mb-8">
              Monitoring System Software
            </p>

            <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              A comprehensive solution designed to address mining challenges through innovative technology-driven monitoring of mining activities and mineral movements across Maharashtra.
            </p>

            <button className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-10 py-5 rounded-full font-semibold text-lg shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
              Download PDF
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </div>

      {/* What Is MMSS Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80" 
              alt="Business Meeting" 
              className="rounded-3xl shadow-2xl"
            />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Is <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Mining Monitoring System Software?</span>
            </h2>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              <span className="font-bold text-blue-600">Mining Monitoring System Software (MMSS)</span> is an initiative led by a passionate team of professionals with diverse skills and backgrounds, united by a common goal – to protect India's natural resources through innovation and responsibility.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Mining and mineral transportation comes with a host of challenges – safety, illegal transportation, overloading, environmental impacts and a general lack of transparency. These issues not only impact compliance but also hinder sustainable growth in the sector.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              MMSS offers a smart, technology-driven solution specifically designed to address these challenges. By enabling real-time monitoring of mining activities and mineral movements, the system ensures operational efficiency, enhances safety standards and promotes transparent, legal mining practices.
            </p>
          </div>
        </div>
      </div>

      {/* Purpose Section */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Purpose of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">MMSS</span>
            </h2>
            <p className="text-xl text-gray-600">Comprehensive mining operations management</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {purposes.map((purpose, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 group"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${purpose.gradient} mb-6 text-white group-hover:scale-110 transition-transform`}>
                  {purpose.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{purpose.title}</h3>
                <p className="text-gray-600 leading-relaxed">{purpose.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How MMSS Works */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">MMSS</span> Works?
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['strategy', 'benefits', 'features'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-xl shadow-blue-500/30'
                    : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-400 hover:shadow-lg'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === 'strategy' && (
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-blue-100 text-left">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                For decades, manual processes in the management of minor minerals led to inefficiencies like delays in monitoring and reporting, and a lack of end-to-end tracking systems. This made it difficult for the Revenue Department to monitor the actual quantities of minerals extracted.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                To address these challenges, the <span className="font-bold text-blue-600">Revenue Department</span> implemented an integrated IT-enabled process: <span className="font-bold text-blue-600">MMSS</span>. This digital solution enables effective tracking and monitoring of minor minerals across Maharashtra.
              </p>

              <div className="bg-blue-50 rounded-2xl p-6 border-l-4 border-blue-600">
                <h3 className="font-bold text-xl text-gray-900 mb-4">Goals of the strategy:</h3>
                <ol className="space-y-3 text-gray-700 text-lg">
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-600 flex-shrink-0">1.</span>
                    <span>Reduce delays in monitoring and reporting.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-600 flex-shrink-0">2.</span>
                    <span>Provide end-to-end tracking of minerals from quarry to destination.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-600 flex-shrink-0">3.</span>
                    <span>Improve transparency and accuracy in mineral excavation and usage records.</span>
                  </li>
                </ol>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* What Sets MMSS Apart */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Sets <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">MMSS</span> Apart?
            </h2>
            <p className="text-xl text-gray-600">Capabilities And Monitoring Features Of Our Software</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl text-white">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-lg text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Development</span> Platforms
          </h2>
          <p className="text-xl text-gray-600">Built with cutting-edge technologies</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-6 shadow-xl text-white hover:scale-105 transition-all duration-300"
            >
              <div className="text-sm text-blue-200 mb-2">{tech.category}</div>
              <div className="font-bold text-xl">{tech.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-3xl shadow-2xl">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl"></div>
          </div>

          <div className="relative px-8 md:px-16 py-16">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Connect with us for a <span className="text-yellow-300">Free</span> Consultation
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Empower your business with intelligent automation – faster, simpler, smarter.
              </p>
              
              <button className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:bg-blue-50 hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
                Contact Us
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}