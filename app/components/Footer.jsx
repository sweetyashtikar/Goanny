import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

export default function ModernFooter() {
  const quickLinks = ['Home', 'About Us', 'Contact Us', 'Blogs', 'Our Work', 'Career', 'Privacy Policy'];
  
  const services = [
    'ReactJS Development',
    'React Native Development',
    'Web Design & Development',
    'Other Technical Services',
    'Digital Services'
  ];
  
  const products = ['GoSMarTea', 'Mining Software', 'HIMS Software'];

  return (
    <footer className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 md:w-72 md:h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 md:w-96 md:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 md:w-64 md:h-64 bg-cyan-500/15 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-1/2 w-48 h-48 md:w-80 md:h-80 bg-pink-500/15 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          {/* About Section */}
          <div className="space-y-4 md:space-y-5">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 relative inline-block">
              About
              <span className="absolute bottom-0 left-0 w-12 sm:w-14 md:w-16 h-0.5 md:h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"></span>
            </h3>
            <p className="text-gray-200 leading-relaxed text-xs sm:text-sm">
              With 10 years of experience in custom software development, we are the best results-oriented tech company in Maharashtra.
            </p>
            <div className="flex space-x-3 pt-2 md:pt-4">
              <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/10 backdrop-blur-sm hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Facebook className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/10 backdrop-blur-sm hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Twitter className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/10 backdrop-blur-sm hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Linkedin className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/10 backdrop-blur-sm hover:bg-gradient-to-r hover:from-pink-500 hover:to-cyan-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Instagram className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/10 backdrop-blur-sm hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Youtube className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 md:space-y-5">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 sm:w-14 md:w-16 h-0.5 md:h-1 bg-gradient-to-r from-[#E31E24] to-transparent"></span>
            </h3>
            <ul className="space-y-2 sm:space-y-2.5 md:space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-200 hover:text-cyan-300 hover:translate-x-2 inline-block transition-all duration-300 text-xs sm:text-sm group">
                    <span className="inline-block w-0 group-hover:w-2 sm:group-hover:w-3 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 mr-0 group-hover:mr-1.5 sm:group-hover:mr-2"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="space-y-4 md:space-y-5">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 relative inline-block">
              Our Services
              <span className="absolute bottom-0 left-0 w-12 sm:w-14 md:w-16 h-0.5 md:h-1 bg-gradient-to-r from-[#E31E24] to-transparent"></span>
            </h3>
            <ul className="space-y-2 sm:space-y-2.5 md:space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-200 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 text-xs sm:text-sm group">
                    <span className="inline-block w-0 group-hover:w-2 sm:group-hover:w-3 h-0.5 bg-[#E31E24] transition-all duration-300 mr-0 group-hover:mr-1.5 sm:group-hover:mr-2"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
            <div className="pt-3 md:pt-4">
              <h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Products</h4>
              <ul className="space-y-2 sm:space-y-2.5 md:space-y-3">
                {products.map((product) => (
                  <li key={product}>
                    <a href="#" className="text-gray-200 hover:text-white hover:translate-x-2 inline-block transition-all duration-300 text-xs sm:text-sm group">
                      <span className="inline-block w-0 group-hover:w-2 sm:group-hover:w-3 h-0.5 bg-[#E31E24] transition-all duration-300 mr-0 group-hover:mr-1.5 sm:group-hover:mr-2"></span>
                      {product}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Us */}
          <div className="space-y-4 md:space-y-5">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 sm:w-14 md:w-16 h-0.5 md:h-1 bg-gradient-to-r from-[#E31E24] to-transparent"></span>
            </h3>
            <div className="space-y-3 sm:space-y-4 md:space-y-5">
              <div className="flex items-start space-x-3 sm:space-x-3.5 md:space-x-4 group">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300">
                  <Phone className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" />
                </div>
                <div>
                  <p className="font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1">Phone</p>
                  <a href="tel:+919376937366" className="text-gray-200 hover:text-white text-xs sm:text-sm transition-colors">
                    +91 93769 37366
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-3.5 md:space-x-4 group">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#E31E24] transition-all duration-300">
                  <Mail className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" />
                </div>
                <div>
                  <p className="font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1">Email</p>
                  <a href="mailto:support@goanny.com" className="text-gray-200 hover:text-white text-xs sm:text-sm transition-colors break-all">
                    support@goanny.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-3.5 md:space-x-4 group">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#E31E24] transition-all duration-300">
                  <MapPin className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" />
                </div>
                <div>
                  <p className="font-semibold text-xs sm:text-sm mb-0.5 sm:mb-1">Address</p>
                  <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
                    U-7, 1st Floor, Inspiria Mall, Nigdi, Pune-44
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0">
            <p className="text-gray-200 text-xs sm:text-sm text-center md:text-left">
              ©2016-2025. <span className="font-semibold">Goanny Technologies</span>. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm text-gray-200">
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}