"use client"
import { useState } from 'react';

export default function EcommercePage() {
  const [activeSection, setActiveSection] = useState('custom');

  const services = [
    {
      id: 'custom',
      title: 'Custom eCommerce Website Development',
      icon: '🛒',
      features: [
        {
          title: 'Tailored Solutions',
          description: 'Designing and developing bespoke eCommerce websites that cater to your business\'s specific needs and target audience.'
        },
        {
          title: 'Scalable Architecture',
          description: 'Building scalable solutions that can grow alongside your business and handle increased traffic and transactions.'
        },
        {
          title: 'Platform Expertise',
          description: 'Developing on popular eCommerce platforms like Shopify, WooCommerce, Magento, and custom frameworks to ensure the best fit for your business.'
        }
      ]
    },
    {
      id: 'uiux',
      title: 'UI/UX Design for eCommerce',
      icon: '🎨',
      features: [
        {
          title: 'User-Centric Design',
          description: 'Creating intuitive and visually appealing interfaces that enhance user experience and drive conversions.'
        },
        {
          title: 'Mobile-First Approach',
          description: 'Designing responsive layouts that provide seamless shopping experiences across all devices.'
        },
        {
          title: 'Conversion Optimization',
          description: 'Implementing design strategies focused on reducing cart abandonment and increasing sales.'
        }
      ]
    },
    {
      id: 'payment',
      title: 'Payment Gateway Integration',
      icon: '💳',
      features: [
        {
          title: 'Secure Transactions',
          description: 'Integrating trusted payment gateways like PayPal, Stripe, Razorpay, and more for safe and secure payments.'
        },
        {
          title: 'Multiple Payment Options',
          description: 'Supporting various payment methods including credit cards, digital wallets, UPI, and COD.'
        },
        {
          title: 'PCI Compliance',
          description: 'Ensuring all payment processes meet industry security standards and compliance requirements.'
        }
      ]
    },
    {
      id: 'pms',
      title: 'Product Management Systems',
      icon: '📦',
      features: [
        {
          title: 'Inventory Management',
          description: 'Advanced systems to track stock levels, manage variants, and automate reordering processes.'
        },
        {
          title: 'Catalog Management',
          description: 'Easy-to-use tools for managing product listings, categories, attributes, and bulk operations.'
        },
        {
          title: 'Order Processing',
          description: 'Streamlined order management workflows from checkout to fulfillment and shipping.'
        }
      ]
    },
    {
      id: 'seo',
      title: 'eCommerce SEO and Digital Marketing',
      icon: '📈',
      features: [
        {
          title: 'Search Engine Optimization',
          description: 'Optimizing your store for search engines to improve visibility and attract organic traffic.'
        },
        {
          title: 'Digital Marketing Strategy',
          description: 'Creating comprehensive marketing campaigns including email, social media, and paid advertising.'
        },
        {
          title: 'Analytics & Reporting',
          description: 'Implementing tracking and analytics to measure performance and optimize marketing ROI.'
        }
      ]
    },
    {
      id: 'integration',
      title: 'Third-Party Integrations',
      icon: '🔌',
      features: [
        {
          title: 'Shipping & Logistics',
          description: 'Integration with shipping providers like FedEx, UPS, DHL, and local courier services.'
        },
        {
          title: 'CRM & ERP Systems',
          description: 'Connecting your eCommerce platform with business management tools for seamless operations.'
        },
        {
          title: 'Marketing Tools',
          description: 'Integrating with email marketing, SMS, and automation tools for customer engagement.'
        }
      ]
    }
  ];

  const activeService = services.find(s => s.id === activeSection);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-slate-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-teal-700 via-cyan-800 to-blue-900 py-12">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjMiIGN4PSIzMCIgY3k9IjMwIiByPSIyNSIvPjwvZz48L3N2Zz4=')] bg-repeat"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Best E-commerce Development Services in Pune
              </h1>
              
              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                <span className="font-semibold text-white">GOANNY Technology</span> offers a comprehensive range of eCommerce services aimed at creating robust, scalable, and user-friendly online stores.
              </p>

              <p className="text-lg text-blue-100 leading-relaxed">
                These services focus on delivering end-to-end solutions that enhance the customer experience and drive business growth. Here are the key eCommerce services offered by GOANNY Technology.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-slate-700/50 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <svg className="w-64 h-64" viewBox="0 0 200 200">
                      {/* Laptop screen */}
                      <rect x="40" y="40" width="120" height="80" rx="4" stroke="#3b82f6" strokeWidth="2" fill="#1e293b" opacity="0.8"/>
                      <rect x="45" y="45" width="110" height="65" fill="#dbeafe" opacity="0.3"/>
                      {/* Laptop base */}
                      <path d="M30 120 L170 120 L180 135 L20 135 Z" fill="#334155" opacity="0.8"/>
                      {/* E-commerce text */}
                      <text x="100" y="85" textAnchor="middle" fill="#3b82f6" fontSize="16" fontWeight="bold">e-commerce</text>
                      {/* Shopping icons */}
                      <g transform="translate(100, 95)">
                        <circle r="25" fill="#3b82f6" opacity="0.2"/>
                        <text x="0" y="10" textAnchor="middle" fill="white" fontSize="30">🛒</text>
                      </g>
                    </svg>
                    <div className="absolute top-0 right-0 bg-cyan-500 text-white p-3 rounded-xl shadow-lg">
                      <span className="text-2xl">💳</span>
                    </div>
                    <div className="absolute bottom-0 left-0 bg-blue-500 text-white p-3 rounded-xl shadow-lg">
                      <span className="text-2xl">📦</span>
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
            Our E-commerce Development Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Complete solutions to build and grow your online store
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
                  ? 'bg-gradient-to-br from-cyan-600 to-blue-700 text-white shadow-xl scale-105'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-cyan-400 hover:shadow-lg'
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
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border-2 border-cyan-200">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl">{activeService.icon}</span>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              {activeService.title}
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {activeService.features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-100">
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

      {/* Popular Platforms Section */}
      <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              E-commerce Platforms We Work With
            </h2>
            <p className="text-lg text-gray-600">
              Expert development across leading e-commerce platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Shopify', icon: '🛍️', desc: 'Easy to use and scale' },
              { name: 'WooCommerce', icon: '🔌', desc: 'WordPress integration' },
              { name: 'Magento', icon: '🏪', desc: 'Enterprise solutions' },
              { name: 'Custom Built', icon: '⚙️', desc: 'Tailored from scratch' }
            ].map((platform, index) => (
              <div key={index} className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 text-center border border-cyan-100 hover:shadow-lg transition-all duration-300">
                <div className="text-5xl mb-4">{platform.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{platform.name}</h3>
                <p className="text-gray-600">{platform.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gradient-to-br from-teal-800 to-blue-900 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose GOANNY For E-commerce Development?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🚀', title: 'Fast Loading', desc: 'Optimized for speed and performance' },
              { icon: '📱', title: 'Mobile Ready', desc: 'Responsive design for all devices' },
              { icon: '🔒', title: 'Secure Payments', desc: 'PCI compliant payment processing' },
              { icon: '📊', title: 'Analytics Driven', desc: 'Data insights for better decisions' }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-cyan-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Key Features of Our E-commerce Solutions
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: '🛒',
              title: 'Shopping Cart',
              description: 'Advanced cart functionality with saved items and quick checkout'
            },
            {
              icon: '🔍',
              title: 'Product Search',
              description: 'Powerful search with filters, sorting, and recommendations'
            },
            {
              icon: '👤',
              title: 'User Accounts',
              description: 'Customer profiles with order history and wishlists'
            },
            {
              icon: '💬',
              title: 'Reviews & Ratings',
              description: 'Build trust with customer reviews and product ratings'
            },
            {
              icon: '🎁',
              title: 'Promotions',
              description: 'Discount codes, flash sales, and loyalty programs'
            },
            {
              icon: '📧',
              title: 'Email Marketing',
              description: 'Automated campaigns for cart recovery and promotions'
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-700 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="relative overflow-hidden bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 rounded-3xl shadow-2xl">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-300 rounded-full filter blur-3xl"></div>
          </div>

          <div className="relative px-12 py-16">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready To Launch Your <span className="text-yellow-300">Online Store?</span>
                </h2>
                <p className="text-cyan-100 text-lg">
                  Let's build a powerful e-commerce platform that drives sales and delights customers. Get a free consultation and quote today!
                </p>
              </div>

              <div className="flex justify-center lg:justify-end">
                <button className="bg-white text-cyan-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:bg-cyan-50 hover:scale-105 transition-all duration-300">
                  START YOUR PROJECT
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