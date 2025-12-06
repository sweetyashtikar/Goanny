"use client"
import React, { useState } from 'react';
import { Cloud, Server, Layers, Box, Shield, Zap, Database, Network, ChevronDown, CheckCircle, ArrowRight } from 'lucide-react';

export default function CloudApplicationDevelopment() {
  const [expandedSection, setExpandedSection] = useState('cloud-native');

  const services = [
    {
      id: 'cloud-native',
      title: 'Cloud-Native Application Development',
      icon: <Cloud className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-600',
      details: [
        {
          title: 'Microservices Architecture',
          description: 'Designing cloud-native applications using microservices architecture to enable scalability, flexibility, and independent deployment of services.'
        },
        {
          title: 'Serverless Computing',
          description: 'Developing serverless applications that automatically scale with demand, reducing operational overhead and costs.'
        },
        {
          title: 'Containerization',
          description: 'Utilizing containers with technologies like Docker and Kubernetes to ensure consistent application deployment across different environments.'
        }
      ]
    },
    {
      id: 'saas',
      title: 'SaaS (Software as a Service) Development',
      icon: <Layers className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-600',
      details: [
        {
          title: 'Multi-Tenant Architecture',
          description: 'Building scalable SaaS platforms with secure multi-tenant architecture to serve multiple customers efficiently.'
        },
        {
          title: 'Subscription Management',
          description: 'Implementing robust billing, subscription, and user management systems for seamless SaaS operations.'
        },
        {
          title: 'API Development',
          description: 'Creating RESTful and GraphQL APIs for seamless integration with third-party services and applications.'
        }
      ]
    },
    {
      id: 'migration',
      title: 'Cloud Migration Services',
      icon: <Network className="w-6 h-6" />,
      color: 'from-green-500 to-teal-600',
      details: [
        {
          title: 'Legacy System Migration',
          description: 'Seamlessly migrating legacy applications to cloud platforms with minimal disruption to business operations.'
        },
        {
          title: 'Data Migration',
          description: 'Secure and efficient transfer of databases and data warehouses to cloud infrastructure.'
        },
        {
          title: 'Hybrid Cloud Solutions',
          description: 'Implementing hybrid cloud architectures that combine on-premises and cloud resources for optimal performance.'
        }
      ]
    },
    {
      id: 'paas',
      title: 'PaaS (Platform as a Service) Solutions',
      icon: <Box className="w-6 h-6" />,
      color: 'from-orange-500 to-red-600',
      details: [
        {
          title: 'Custom PaaS Development',
          description: 'Building customized platform solutions that provide development frameworks and tools for rapid application deployment.'
        },
        {
          title: 'DevOps Integration',
          description: 'Implementing CI/CD pipelines and DevOps practices for automated testing and deployment.'
        },
        {
          title: 'Infrastructure Management',
          description: 'Automated infrastructure provisioning and management using tools like Terraform and Ansible.'
        }
      ]
    }
  ];

  const cloudPlatforms = [
    {
      name: 'Amazon Web Services',
      icon: <Cloud className="w-10 h-10" />,
      color: 'from-orange-400 to-orange-600',
      features: ['EC2', 'Lambda', 'S3', 'RDS']
    },
    {
      name: 'Microsoft Azure',
      icon: <Server className="w-10 h-10" />,
      color: 'from-blue-400 to-blue-600',
      features: ['App Service', 'Functions', 'Cosmos DB', 'AKS']
    },
    {
      name: 'Google Cloud',
      icon: <Database className="w-10 h-10" />,
      color: 'from-green-400 to-green-600',
      features: ['Compute Engine', 'Cloud Functions', 'BigQuery', 'GKE']
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'High Scalability',
      description: 'Automatically scale resources based on demand'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enhanced Security',
      description: 'Enterprise-grade security and compliance'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Cost Optimization',
      description: 'Pay only for resources you actually use'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section with Cloud Background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-blue-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 right-1/4 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-white">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20">
                <Cloud className="w-20 h-20 text-cyan-300" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Cloud Application Development
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Scalable, flexible, and secure cloud-based solutions that drive digital transformation
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Introduction */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6 text-center">
              Best Cloud Application Development Services in Pune
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              GOANNY Technology offers a comprehensive range of Cloud Application Development services designed to help businesses leverage the full potential of cloud computing. These services focus on building scalable, flexible, and secure cloud-based solutions that drive digital transformation and enhance operational efficiency. Here's an overview of the key Cloud Application Development services provided by GOANNY:
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 w-16 h-16 rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Cloud Platforms */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Cloud Platforms We Work With</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {cloudPlatforms.map((platform, idx) => (
                <div key={idx} className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                  <div className="relative p-8">
                    <div className={`bg-gradient-to-br ${platform.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4 text-white`}>
                      {platform.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-4">{platform.name}</h4>
                    <div className="flex flex-wrap gap-2">
                      {platform.features.map((feature, fidx) => (
                        <span key={fidx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Accordion */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Cloud Services</h3>
            <div className="space-y-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                >
                  <button
                    onClick={() => setExpandedSection(expandedSection === service.id ? null : service.id)}
                    className={`w-full flex items-center justify-between p-6 text-left bg-gradient-to-r ${service.color} text-white hover:opacity-95 transition-all`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
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

          {/* CTA Section */}
          <div className="relative bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 rounded-3xl shadow-2xl p-8 md:p-12 text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            </div>
            <div className="relative text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Move to the Cloud?
              </h3>
              <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                Transform your business with scalable cloud solutions tailored to your needs
              </p>
              <button className="group bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-2">
                Start Your Cloud Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}