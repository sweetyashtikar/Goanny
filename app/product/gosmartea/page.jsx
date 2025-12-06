"use client"
import React, { useState } from 'react';
import { Zap, Shield, TrendingUp, Users, DollarSign, Clock, ChevronRight, Check, X } from 'lucide-react';

export default function GoSMarTeaModern() {
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Enhanced Data Privacy & Security",
      description: "Your data is fully encrypted and stored on dedicated individual servers, ensuring maximum protection and compliance with global standards like GDPR and ISO/IEC 27701."
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "No Recurring Monthly Charges",
      description: "Cost-effective ownership model with no monthly fees. Pay once and own your automation infrastructure without recurring costs eating into your profits."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scalable and Customizable",
      description: "Grow without limits. GoSMarTea scales with your business, offering modular designs and customizations that adapt to your evolving needs."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Exclusive Server Ownership",
      description: "Each client gets a dedicated server with exclusive access to resources like CPU, RAM, and storage, ensuring peak performance and reliability."
    }
  ];

  const features = [
    {
      title: "HRMS & Payroll",
      items: ["Employee database", "Attendance tracking", "Automated salary", "Compliance reports"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Sales & CRM",
      items: ["Lead management", "Pipeline tracking", "Client communication", "Deal closures"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Finance & Accounting",
      items: ["Automated invoicing", "Expense tracking", "P&L reports", "GST compliance"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Inventory Management",
      items: ["Real-time stock levels", "Low-stock alerts", "Barcode scanning", "Asset tracking"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Project Management",
      items: ["Task assignment", "Milestone tracking", "Gantt views", "Timesheets"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Reports & Analytics",
      items: ["KPI dashboards", "Visual reports", "Export formats", "Department insights"],
      color: "from-pink-500 to-rose-500"
    }
  ];

  const faqs = [
    {
      q: "What is GoSMarTea and how does it work?",
      a: "GoSMarTea is an all-in-one Business Automation Software that makes managing operations as refreshing as a tea break. From HR to sales, finance to analytics—you can handle everything from one single platform."
    },
    {
      q: "Which business operations can GoSMarTea automate?",
      a: "GoSMarTea can automate HRMS, Payrolls, Sales, CRM, Finance, Accounting, Inventory Management, Reports, Analytics, and many more business functions."
    },
    {
      q: "Do I need technical skills to use GoSMarTea?",
      a: "Not at all. GoSMarTea has a user-friendly interface designed for non-technical users. Your team can get started quickly, and we provide onboarding and training if needed."
    },
    {
      q: "How long does it take to set up?",
      a: "Most clients can go live within 2–5 business days. Our team handles setup, employee onboarding, and training to ensure a smooth rollout."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-6">
                <span className="text-blue-300 text-sm font-medium">🚀 Smart Business Automation</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Go<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">SMarTea</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 mb-4">
                A Business Automation Software
              </p>
              
              <p className="text-lg text-blue-200 mb-8 leading-relaxed">
                Make managing your operations as refreshing as a tea break. From HRMS to sales, finance to analytics—handle everything from one intelligent platform.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  Get Free Consultation
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300">
                  Download PDF
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Setup Time", value: "2-5 Days", icon: <Clock className="w-6 h-6" /> },
                    { label: "Support", value: "24/7", icon: <Users className="w-6 h-6" /> },
                    { label: "Security", value: "Encrypted", icon: <Shield className="w-6 h-6" /> },
                    { label: "Scalability", value: "Unlimited", icon: <TrendingUp className="w-6 h-6" /> }
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

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Sets <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">GoSMarTea</span> Apart?
          </h2>
          <p className="text-xl text-gray-600">Empowering Clients with Autonomy & Cost Efficiency</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <button
              key={index}
              onClick={() => setActiveBenefit(index)}
              className={`text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                activeBenefit === index
                  ? 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-500 shadow-xl shadow-blue-500/20'
                  : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-lg'
              }`}
            >
              <div className={`inline-flex p-3 rounded-xl mb-4 ${
                activeBenefit === index ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'
              }`}>
                {benefit.icon}
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">{benefit.title}</h3>
            </button>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 border-2 border-blue-200 shadow-xl">
          <p className="text-gray-700 text-lg leading-relaxed">
            {benefits[activeBenefit].description}
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete Business Suite
            </h2>
            <p className="text-xl text-gray-600">Everything you need to run your business efficiently</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4`}>
                  <div className="w-6 h-6 bg-white rounded"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <ul className="space-y-2">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">GoAnny Technologies?</span>
            </h2>
            
            <div className="space-y-4">
              {[
                { title: "Fast Delivery", desc: "No endless delays. We work quickly and keep you in the loop." },
                { title: "Affordable", desc: "Quality doesn't have to come with a massive price tag." },
                { title: "Result-Oriented", desc: "We're here to help your business grow—not just to check off tasks." },
                { title: "Simple Communication", desc: "You don't need to be tech-savvy. We explain things simply and honestly." },
                { title: "Flexible Solutions", desc: "Whether you need a full product or just a landing page, we adapt to your needs." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">Recognized as</h3>
              <p className="text-5xl font-bold mb-6">Best Software Company in Pune</p>
              <p className="text-blue-100 text-lg mb-8">
                Not just because of what we do, but how we do it.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Healthcare", "Retail", "Mining", "Finance", "Technology"].map((industry, i) => (
                  <span key={i} className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-white/30">
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">Got questions? We've got answers.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <h3 className="font-bold text-lg text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 rounded-3xl shadow-2xl">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-300 rounded-full filter blur-3xl"></div>
          </div>

          <div className="relative px-8 md:px-16 py-16">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get a free consultation and discover how GoSMarTea can streamline your operations with minimal manual effort.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:bg-blue-50 hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  Schedule Free Consultation
                  <ChevronRight className="w-5 h-5" />
                </button>
                
                <button className="bg-blue-500/20 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-500/30 transition-all duration-300">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}