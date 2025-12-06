"use client"
export default function MobileAppDevelopment() {
  const services = [
    {
      title: "Custom App Development",
      description: "Creating tailored mobile applications designed to address specific business requirements and provide unique user experiences.",
      icon: "📱"
    },
    {
      title: "UI/UX Design",
      description: "Crafting intuitive and engaging mobile interfaces that deliver exceptional user experiences.",
      icon: "🎨"
    },
    {
      title: "Cross-Platform Development",
      description: "Building apps that work seamlessly across iOS and Android with efficient code reuse.",
      icon: "🔄"
    },
    {
      title: "Native App Development",
      description: "Developing high-performance native applications for iOS and Android platforms.",
      icon: "⚡"
    },
    {
      title: "App Integration",
      description: "Seamlessly integrating third-party services, APIs, and backend systems.",
      icon: "🔌"
    },
    {
      title: "Maintenance and Support",
      description: "Providing ongoing updates, bug fixes, and technical support for your mobile apps.",
      icon: "🛠️"
    },
    {
      title: "Quality Assurance and Testing",
      description: "Rigorous testing across devices to ensure flawless performance and user experience.",
      icon: "✅"
    }
  ];

  const benefits = [
    {
      category: "Market Reach and User Base",
      icon: "🌍",
      color: "from-blue-500 to-cyan-500",
      points: [
        "Android dominates the global market with 70% of worldwide mobile users",
        "iOS holds commanding positions in markets like the US and UK",
        "Combined reach covers 99%+ of the global smartphone user base"
      ]
    },
    {
      category: "Platform-Specific Capabilities",
      icon: "⚙️",
      color: "from-purple-500 to-pink-500",
      points: [
        "Access unique features like Apple Pay, Face ID on iOS",
        "Leverage Android's customization capabilities and widgets",
        "Platform-specific optimizations deliver superior performance"
      ]
    },
    {
      category: "Diverse Business Goals",
      icon: "🎯",
      color: "from-green-500 to-emerald-500",
      points: [
        "Target diverse audiences across different demographics",
        "Enterprise-level security and management features on iOS",
        "Flexible deployment options and broader device compatibility on Android"
      ]
    },
    {
      category: "Revenue Generation",
      icon: "💰",
      color: "from-orange-500 to-red-500",
      points: [
        "iOS users demonstrate higher average spending and in-app purchase rates",
        "Android's larger user base provides extensive advertising reach",
        "Multi-platform presence maximizes monetization opportunities"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-blue-800 py-12">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <span className="text-2xl">🤖</span>
                <span className="text-white font-semibold">Android</span>
                <span className="text-white/60">+</span>
                <span className="text-2xl">🍎</span>
                <span className="text-white font-semibold">iOS</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Best Android-iOS App Development Services in Pune
              </h1>
              
              <p className="text-lg text-blue-100 leading-relaxed">
                <span className="font-semibold text-white">GOANNY Technology</span> offers Android and iOS app development services, focusing on creating high-quality mobile applications tailored to meet clients' specific needs. They aim to deliver seamless and user-friendly app experiences that enhance business performance and customer engagement.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-30"></div>
              <img 
                src="/mobile-application-development-guidelines-riseuplabs.png" 
                alt="Mobile App Development" 
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Development Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive mobile app development solutions for iOS and Android platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Android iOS Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why is Android iOS relevant to your project?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Android and iOS development is relevant to your project for several key reasons, especially considering the goals of reaching a wide audience, maximizing engagement, and providing a seamless user experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {benefit.category}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {benefit.points.map((point, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-700">
                      <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white text-xs font-bold mt-0.5">
                        ✓
                      </span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Visual Benefits Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl"></div>
          </div>

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold">
                      70%
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Android Market Share</p>
                      <p className="text-sm text-gray-600">Global dominance</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold">
                      99%
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Combined Reach</p>
                      <p className="text-sm text-gray-600">Total market coverage</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Maximize Your App's Potential
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Reach billions of users worldwide by developing for both Android and iOS platforms. Our expert team ensures your app delivers exceptional performance and user experience on every device.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:bg-blue-50 hover:scale-105 transition-all duration-300">
                  Start Your Project
                </button>
                <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Let GOANNY transform your ideas into powerful mobile applications for iOS and Android
          </p>
          <button className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:bg-blue-50 hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
            Get Started Today
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </div>
  );
}