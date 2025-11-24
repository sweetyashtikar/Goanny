"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, Smartphone, Palette, Layers, Puzzle, Wrench, CheckCircle, Users, Target, TrendingUp, Zap } from 'lucide-react';

const AndroidIOSServices = () => {
  const [expandedSection, setExpandedSection] = useState('custom');

  const services = [
    {
      id: 'custom',
      title: 'Custom App Development',
      icon: Smartphone,
      description: 'Creating tailored mobile applications designed to address specific business requirements and provide unique user experiences.',
      details: [
        'Native iOS development using Swift and SwiftUI',
        'Native Android development using Kotlin and Jetpack Compose',
        'Custom backend integration and API development',
        'Performance optimization and security implementation',
        'Scalable architecture for future growth'
      ]
    },
    {
      id: 'uiux',
      title: 'UI/UX Design',
      icon: Palette,
      description: 'Crafting intuitive and visually appealing interfaces that enhance user engagement and satisfaction.',
      details: [
        'User research and persona development',
        'Wireframing and interactive prototyping',
        'Material Design and iOS Human Interface Guidelines',
        'Accessibility-focused design principles',
        'Design systems and component libraries'
      ]
    },
    {
      id: 'crossplatform',
      title: 'Cross-Platform Development',
      icon: Layers,
      description: 'Building efficient apps that work seamlessly across both iOS and Android platforms with shared codebase.',
      details: [
        'React Native development for high performance',
        'Flutter development for beautiful UIs',
        'Code reusability across platforms (60-80%)',
        'Platform-specific optimizations',
        'Reduced development time and costs'
      ]
    },
    {
      id: 'native',
      title: 'Native App Development',
      icon: Zap,
      description: 'Developing platform-specific applications that leverage the full capabilities of iOS and Android devices.',
      details: [
        'Maximum performance and responsiveness',
        'Full access to device hardware and features',
        'Platform-specific UI/UX excellence',
        'Advanced animations and transitions',
        'Optimal battery and memory management'
      ]
    },
    {
      id: 'integration',
      title: 'App Integration',
      icon: Puzzle,
      description: 'Seamlessly connecting your app with third-party services, APIs, and existing systems.',
      details: [
        'Payment gateway integration (Stripe, PayPal, etc.)',
        'Social media authentication and sharing',
        'Cloud services integration (AWS, Firebase, Azure)',
        'Analytics and tracking implementation',
        'Push notifications and real-time messaging'
      ]
    },
    {
      id: 'maintenance',
      title: 'Maintenance and Support',
      icon: Wrench,
      description: 'Ongoing support to ensure your app remains updated, secure, and running smoothly.',
      details: [
        'Regular updates for new OS versions',
        'Bug fixes and performance improvements',
        'Security patches and vulnerability fixes',
        '24/7 technical support and monitoring',
        'Feature enhancements and upgrades'
      ]
    },
    {
      id: 'qa',
      title: 'Quality Assurance and Testing',
      icon: CheckCircle,
      description: 'Comprehensive testing to ensure your app is bug-free, secure, and delivers excellent performance.',
      details: [
        'Manual and automated testing',
        'Device compatibility testing (multiple devices)',
        'Performance and load testing',
        'Security and penetration testing',
        'User acceptance testing (UAT)'
      ]
    }
  ];

  const whyRelevant = [
    {
      icon: Users,
      title: 'Market Reach and User Base',
      points: [
        'Android and iOS dominate the global smartphone market, accounting for nearly 99% of all mobile operating systems.',
        'Developing for both platforms ensures you can reach the broadest audience possible, engaging both Android users (who make up the majority in emerging markets) and iOS users (who are prevalent in developed markets).'
      ]
    },
    {
      icon: Target,
      title: 'Diverse Business Goals',
      points: [
        'Whether your project focuses on increasing brand awareness, generating direct sales, or enhancing user engagement, developing for both platforms provides the versatility to meet these goals.',
        'With Android and iOS, you can cater to different user behaviors and preferences, creating a tailored experience for each segment of your target audience.'
      ]
    },
    {
      icon: Zap,
      title: 'Platform-Specific Capabilities',
      points: [
        'Each platform offers unique features that can enhance the functionality and performance of your app.',
        'iOS provides a consistent, high-quality user experience and tight integration with Apple\'s ecosystem, making it ideal for feature-rich and secure applications.',
        'Android\'s flexibility and customization options allow you to create innovative app experiences that can leverage a wide range of device capabilities.'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Revenue Generation',
      points: [
        'iOS users are known to have higher spending power, making them more likely to engage in in-app purchases or subscriptions.',
        'Android\'s larger user base is advantageous for apps that rely on advertising revenue or need to reach a broader audience.'
      ]
    }
  ];

  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section with Android Icon */}
      <div className="relative bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 w-96 h-96">
            <Smartphone className="w-full h-full opacity-20" />
          </div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Best Android-iOS App Development Services in Pune
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              GOANNY Technology offers Android and iOS app development services, focusing on creating high-quality mobile applications 
              tailored to meet clients' specific needs. They aim to deliver seamless and user-friendly app experiences that enhance business 
              operations and customer engagement.
            </p>
          </div>
        </div>
      </div>

      {/* Services Accordion Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expandedSection === service.id;
            const isFirst = index === 0;

            return (
              <div
                key={service.id}
                className={`mb-4 rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
                  isExpanded ? 'bg-white' : 'bg-white hover:shadow-xl'
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleSection(service.id)}
                  className={`w-full px-6 py-5 flex items-center justify-between transition-all duration-300 ${
                    isFirst && !isExpanded
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                      : isExpanded
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                      : 'bg-white text-gray-800 hover:bg-blue-50'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg ${
                      (isFirst && !isExpanded) || isExpanded ? 'bg-white bg-opacity-20' : 'bg-blue-100'
                    }`}>
                      <Icon className={`w-6 h-6 ${
                        (isFirst && !isExpanded) || isExpanded ? 'text-white' : 'text-blue-600'
                      }`} />
                    </div>
                    <span className="text-lg font-semibold">{service.title}</span>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className={`w-6 h-6 ${
                      isFirst ? 'text-white' : 'text-gray-400'
                    }`} />
                  )}
                </button>

                {/* Accordion Content */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-white border-t border-blue-100">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Why Relevant Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
              Why is Android iOS relevant to your project?
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto text-lg">
              Android and iOS development is relevant to your project for several key reasons, especially considering the goals of reaching a wide 
              audience, maximizing engagement, and providing a seamless user experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyRelevant.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl mr-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
                    </div>
                    <ul className="space-y-4">
                      {item.points.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's create an exceptional mobile experience for your users on both Android and iOS platforms
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default AndroidIOSServices;