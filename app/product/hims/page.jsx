"use client"
import React, { useState } from 'react';
import { Heart, Calendar, FileText, Pill, Activity, Users, DollarSign, ClipboardCheck, Bell, Shield, ChevronRight, Check, Building2, Stethoscope, UserCog, BarChart3, Clock, Wallet, FileCheck } from 'lucide-react';

export default function HIMSModern() {
  const [activeModule, setActiveModule] = useState(0);

  const modules = [
    {
      icon: <UserCog className="w-6 h-6" />,
      title: "Patient Registration",
      features: [
        "Quick patient registration with demographic details",
        "Unique patient ID generation",
        "Medical history tracking",
        "Insurance information management",
        "Emergency contact details"
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Insurance Management",
      features: [
        "Insurance policy verification",
        "Claim processing and tracking",
        "Coverage details management",
        "Pre-authorization handling",
        "Claim status updates"
      ]
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Appointment Booking",
      features: [
        "Online appointment scheduling",
        "Doctor availability calendar",
        "Automated reminders via SMS/Email",
        "Rescheduling and cancellation",
        "Queue management system"
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "OT Management",
      features: [
        "Operation theater scheduling",
        "Equipment and staff allocation",
        "Pre-surgery checklist management",
        "Post-operative care tracking",
        "Surgery records and reports"
      ]
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "OPD Management",
      features: [
        "Outpatient department workflow",
        "Consultation tracking",
        "Prescription management",
        "Follow-up scheduling",
        "OPD billing and payments"
      ]
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Inventory",
      features: [
        "Medicine and supplies tracking",
        "Stock level monitoring",
        "Automatic reorder alerts",
        "Vendor management",
        "Expiry date tracking"
      ]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Patient Health Chart",
      features: [
        "Electronic health records (EHR)",
        "Vital signs tracking",
        "Lab and diagnostic reports",
        "Treatment history",
        "Doctor's notes and observations"
      ]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "MIS Reporting",
      features: [
        "Comprehensive analytics dashboard",
        "Custom report generation",
        "Patient statistics and trends",
        "Revenue and expense reports",
        "Department-wise performance metrics"
      ]
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "IPD Management Billing",
      features: [
        "Inpatient admission and discharge",
        "Room and bed management",
        "Itemized billing for services",
        "Insurance claim integration",
        "Payment collection and receipts"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Time Efficiency",
      description: "Streamline operations and reduce waiting times with automated workflows",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Data Security",
      description: "HIPAA compliant with end-to-end encryption for patient data protection",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Wallet className="w-8 h-8" />,
      title: "Cost Reduction",
      description: "Minimize operational costs with efficient resource management",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Error Reduction",
      description: "Eliminate manual errors with automated data entry and validation",
      color: "from-orange-500 to-red-500"
    }
  ];

  const features = [
    {
      title: "Patient-Centric Care",
      description: "Complete patient journey management from registration to discharge",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Automated Scheduling",
      description: "Smart appointment booking with doctor availability and reminders",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      title: "Pharmacy Integration",
      description: "Seamless prescription and inventory management for pharmacies",
      icon: <Pill className="w-6 h-6" />
    },
    {
      title: "Mobile Access",
      description: "Access patient records and schedules on mobile phones and tablets",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Real-time Updates",
      description: "Live updates on patient status, bed availability, and operations",
      icon: <Bell className="w-6 h-6" />
    },
    {
      title: "Comprehensive Reports",
      description: "Detailed MIS reports for better decision-making and compliance",
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 mb-8">
                <span className="text-blue-300 text-sm font-medium">🏥 Healthcare Innovation</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">HIMS</span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-blue-200 mb-6">
                Hospital Information Management Software
              </p>
              
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                A comprehensive, integrated healthcare solution designed to manage all aspects of hospital operations. From patient registration to billing, our customizable system ensures seamless coordination across departments.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  Download PDF
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <Users className="w-6 h-6" />, label: "Patient Care", value: "360°" },
                    { icon: <Clock className="w-6 h-6" />, label: "Setup Time", value: "2-3 Days" },
                    { icon: <Shield className="w-6 h-6" />, label: "Security", value: "HIPAA" },
                    { icon: <Activity className="w-6 h-6" />, label: "Uptime", value: "99.9%" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                      <div className="text-blue-400 mb-3">{stat.icon}</div>
                      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-blue-200 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </div>

      {/* What is HIMS Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80" 
              alt="Hospital Management" 
              className="relative rounded-3xl shadow-2xl"
            />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Hospital Information Management System?</span>
            </h2>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              <span className="font-bold text-blue-600">HIMS Software</span> is a hospital information management system designed to manage all aspects of a hospital operation. This customizable hospital management system is an integrated healthcare solution which includes <span className="font-semibold">Outpatient and Inpatient Management</span>, <span className="font-semibold">Pharmacy</span>, <span className="font-semibold">Laboratory</span>, <span className="font-semibold">Radiology</span>, <span className="font-semibold">Ward Management</span>, <span className="font-semibold">Appointments Scheduling</span>, <span className="font-semibold">Medical Billing</span>, and <span className="font-semibold">Accounting System</span>.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Patients can find doctors and book appointments based on the speciality, fees and availability. Organizing doctor schedules, collating patient notes, and handling payment are effortless. Doctors can check schedule on mobile phones and live test chaotic lives.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              We are working towards the same goal and we are driven to succeed in providing the healthcare technology solutions of today and tomorrow.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Key Benefits of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">HIMS</span>
            </h2>
            <p className="text-xl text-gray-600">Transform your healthcare delivery with modern technology</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 group"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${benefit.color} mb-6 text-white group-hover:scale-110 transition-transform`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How HIMS Works - Modules */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">HIMS</span> Works?
          </h2>
          <p className="text-xl text-gray-600">Comprehensive modules for complete hospital management</p>
        </div>

        {/* Module Tabs */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {modules.slice(0, 5).map((module, index) => (
            <button
              key={index}
              onClick={() => setActiveModule(index)}
              className={`p-4 rounded-xl transition-all duration-300 ${
                activeModule === index
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-xl shadow-blue-500/30'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg'
              }`}
            >
              <div className={`flex justify-center mb-2 ${activeModule === index ? 'text-white' : 'text-blue-600'}`}>
                {module.icon}
              </div>
              <div className="font-semibold text-sm">{module.title}</div>
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {modules.slice(5).map((module, index) => (
            <button
              key={index + 5}
              onClick={() => setActiveModule(index + 5)}
              className={`p-4 rounded-xl transition-all duration-300 ${
                activeModule === index + 5
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-xl shadow-blue-500/30'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg'
              }`}
            >
              <div className={`flex justify-center mb-2 ${activeModule === index + 5 ? 'text-white' : 'text-blue-600'}`}>
                {module.icon}
              </div>
              <div className="font-semibold text-sm">{module.title}</div>
            </button>
          ))}
        </div>

        {/* Active Module Details */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 border-2 border-blue-200 shadow-xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl text-white">
              {modules[activeModule].icon}
            </div>
            <h3 className="text-3xl font-bold text-gray-900">{modules[activeModule].title}</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {modules[activeModule].features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600">Everything you need for efficient hospital management</p>
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
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Empower your business with intelligent automation – faster, simpler, smarter.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:bg-blue-50 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  Contact Us
                  <ChevronRight className="w-5 h-5" />
                </button>
                
                <button className="bg-blue-500/20 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-500/30 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}