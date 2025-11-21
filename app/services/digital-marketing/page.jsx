"use client"
import { useState } from 'react';

export default function DigitalMarketingPage() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 'social-media',
      title: 'Social Media Marketing',
      icon: '📱',
      description: 'Our team develops high-quality, engaging social media content and ad campaigns. We identify content that resonates with your target audience, aligns with your brand, and generates measurable results to keep your social media channels active and relevant.'
    },
    {
      id: 'seo',
      title: 'Search Engine Optimization (SEO)',
      icon: '🔍',
      description: 'Our search engine experts blend technical and on-page SEO tactics to earn business gains and target audience. Our approach includes keyword research, on-page analysis, and scheduled action plan to market your SEO efforts and highest organic traffic growth.'
    },
    {
      id: 'google-ads',
      title: 'Google Ads (PPC Ads)',
      icon: '🎯',
      description: 'We create customized Google Ads campaigns that maximize ROI and generate revenue—with data-driven insights, precisely target audience, effective ad copy, and continuous optimization, we can reach the right people and achieve your goals.'
    },
    {
      id: 'sponsored-ads',
      title: 'Sponsored Ads',
      icon: '💼',
      description: 'We support national companies and distributors by creating sponsored ad objectives and target locations. Our approach involves identifying and analyzing competitor brands and budget, measuring exposure and impact.'
    },
    {
      id: 'youtube-display',
      title: 'YouTube & Display Ads',
      icon: '▶️',
      description: 'Click-based volume highlights and high-volume audience behaviors for video captures channels and drive action. We handle all aspects of video production, targeting setup, and performance tracking to ensure your campaigns align with measurable KPIs.'
    },
    {
      id: 'lead-generation',
      title: 'Lead Generation',
      icon: '🎁',
      description: 'We elevate and stimulate accurate results for our website and business leads. Our content marketing methods provide creating blog posts, downloading high-quality content on capturing and nurturing leads to target audience and drive conversions.'
    },
    {
      id: 'crm',
      title: 'CRM Management',
      icon: '📊',
      description: 'We maintain and manage the automation of your forecast while originating monitoring needs. CRM analysts focus on data intelligence, trends of prospects and opportunities for enhanced planning.'
    },
    {
      id: 'linkedin',
      title: 'LinkedIn Marketing',
      icon: '💼',
      description: 'Our services include professional marketing strategies that align with your business objectives and target audiences. These include profiles, accounts research, content planning, and your profile to maximize your LinkedIn presence.'
    },
    {
      id: 'instagram',
      title: 'Instagram Marketing',
      icon: '📸',
      description: 'Leverage the power of visual marketing strategies tailored to your business objectives and target audience research, content planning and your profile to effectively your Instagram marketing success.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section with Background Image Effect */}
      <div className="relative h-96 overflow-hidden">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80 z-10"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 h-full flex items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Digital Marketing Services That Drive Results
            </h1>
            <div className="flex justify-center gap-6 text-white text-xl mt-8">
              <div className="flex items-center gap-2">
                <span className="text-3xl">📈</span>
                <span>Growth</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl">🎯</span>
                <span>Strategy</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl">💼</span>
                <span>Results</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            At <span className="font-bold text-blue-600">Goanny Technology</span>, We Don't Just Offer Digital Marketing Services—We Build Performance-Driven Strategies Tailored To 
            Grow Your Brand Online. From Startups To Growing Enterprises, We Help Businesses Attract The Right Audience, Convert More 
            Leads, And Scale Their Digital Presence With Smart, Data-Backed Marketing.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Digital Marketing Services
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive solutions to grow your online presence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
            >
              {/* Service Header */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 text-white text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover Indicator */}
              <div className="px-6 pb-6">
                <div className="text-center text-blue-600 font-semibold group-hover:text-blue-800">
                  Learn More →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Digital Marketing Section */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Digital Marketing Matters
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🌐', title: 'Global Reach', desc: 'Connect with audiences worldwide' },
              { icon: '💰', title: 'Cost-Effective', desc: 'Better ROI than traditional marketing' },
              { icon: '📊', title: 'Measurable Results', desc: 'Track every metric and KPI' },
              { icon: '🎯', title: 'Targeted Audience', desc: 'Reach the right people at the right time' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-blue-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Approach Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Our Digital Marketing Approach
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: '1', title: 'Research', icon: '🔍', desc: 'Market & competitor analysis' },
            { step: '2', title: 'Strategy', icon: '📋', desc: 'Tailored marketing plan' },
            { step: '3', title: 'Execute', icon: '🚀', desc: 'Campaign implementation' },
            { step: '4', title: 'Optimize', icon: '📈', desc: 'Continuous improvement' }
          ].map((item, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow border-t-4 border-blue-600">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                  {item.step}
                </div>
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
              {index < 3 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-3xl text-blue-300">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Platforms We Work With */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Platforms We Master
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'Google Ads', icon: '🔍' },
              { name: 'Facebook', icon: '👥' },
              { name: 'Instagram', icon: '📸' },
              { name: 'LinkedIn', icon: '💼' },
              { name: 'YouTube', icon: '▶️' },
              { name: 'Twitter/X', icon: '🐦' }
            ].map((platform, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-center border border-blue-100"
              >
                <div className="text-4xl mb-3">{platform.icon}</div>
                <p className="font-semibold text-gray-800">{platform.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Benefits of Our Digital Marketing Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: '📈', title: 'Increased Traffic', desc: 'Drive more qualified visitors to your website' },
            { icon: '🎯', title: 'Better Targeting', desc: 'Reach your ideal customers with precision' },
            { icon: '💰', title: 'Higher ROI', desc: 'Maximize return on marketing investment' },
            { icon: '🔄', title: 'Brand Awareness', desc: 'Build recognition and trust in your market' },
            { icon: '📊', title: 'Data Insights', desc: 'Make informed decisions with analytics' },
            { icon: '🚀', title: 'Business Growth', desc: 'Scale your business effectively' }
          ].map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Grow Your Digital Presence
            </h2>
            <p className="text-xl text-blue-100 mb-4">
              Whether You, Have More Traffic, Media Leads, Or Increased Sales, Our Certified Digital Marketing Company In Pune Can Build A Strategy That 
              Delivers Real Business Growth.
            </p>
          </div>

          <div className="bg-indigo-700 rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Get a Free Consultation Call
                </h3>
                <p className="text-blue-100">
                  Contact Us Today To Book A Free Consultation Or Request A Custom Quote.
                </p>
              </div>
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap">
                CONTACT US
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="h-12"></div>
    </div>
  );
}