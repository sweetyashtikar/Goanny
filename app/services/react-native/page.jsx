export default function ReactNative() {
  const services = [
    {
      title: "Custom React Native App Development",
      description: "Creating tailored mobile applications using React Native to meet your specific business needs.",
      subItems: [
        "Developing scalable and user-friendly apps with a native-like experience on both iOS and Android platforms."
      ]
    },
    {
      title: "Cross-Platform Mobile App Development",
      description: "Building efficient mobile apps that work seamlessly across multiple platforms with a single codebase."
    },
    {
      title: "UI/UX Design for Mobile Apps",
      description: "Designing intuitive and engaging mobile interfaces optimized for exceptional user experiences."
    },
    {
      title: "React Native Integration Services",
      description: "Seamlessly integrating third-party APIs, libraries, and services into your React Native applications."
    },
    {
      title: "Migration to React Native",
      description: "Migrating existing native apps to React Native for improved performance and reduced development costs."
    },
    {
      title: "App Maintenance and Support",
      description: "Providing continuous updates, bug fixes, and technical support to keep your app running smoothly."
    }
  ];

  const benefits = [
    {
      title: "Faster Development with Reusable Code",
      icon: "⚡",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Cross-Platform Development",
      icon: "🔄",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Native-Like Performance",
      icon: "🚀",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Live and Hot Reloading",
      icon: "🔥",
      color: "from-red-500 to-rose-500"
    },
    {
      title: "Huge Ecosystem and Community Support",
      icon: "🤝",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Seamless Integration with Existing Apps",
      icon: "🔌",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-900 py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjIiIGN4PSIzMCIgY3k9IjMwIiByPSIyNSIvPjwvZz48L3N2Zz4=')] bg-repeat"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
              <span className="text-3xl">📱</span>
              <span className="text-2xl font-bold text-white">React Native</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Best React Native Services in Pune
            </h1>
            
            <p className="text-lg md:text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
              React Native development services at <span className="font-semibold text-white">GOANNY</span> focus on creating fast, scalable, and interactive mobile applications using the power of React Native. Here are some key areas included in the range of React Native development services we offered:
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 -mt-16">
        <div className="bg-blue-600 text-white rounded-t-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-bold">Custom React Native App Development</h2>
        </div>
        
        <div className="bg-white rounded-b-2xl shadow-xl border border-gray-200 divide-y divide-gray-200">
          {services.map((service, index) => (
            <div key={index} className="p-6 hover:bg-gray-50 transition-colors duration-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold mt-1">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {service.description}
                  </p>
                  {service.subItems && (
                    <ul className="space-y-1">
                      {service.subItems.map((item, idx) => (
                        <li key={idx} className="flex gap-2 text-sm text-gray-500">
                          <span className="flex-shrink-0 text-blue-600">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why React Native Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why React Native for Your Project?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The efficiency, flexibility, and capability to produce high-performance applications have made React Native one of the most widely used frameworks for developing mobile apps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600">
                  {benefit.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Illustration Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Build Once, Deploy Everywhere
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              React Native allows you to create truly native apps without compromising your users' experiences. Write once in JavaScript, deploy to both iOS and Android platforms seamlessly.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">✓</div>
                <span className="text-gray-700">Single codebase for multiple platforms</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">✓</div>
                <span className="text-gray-700">Faster development and time-to-market</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">✓</div>
                <span className="text-gray-700">Cost-effective mobile app solution</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-1xl p-12 shadow-xl">
              <img 
                src="/app-development-1.gif" 
                alt="React Native Development" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your React Native App?
          </h2>
          <p className="text-xl text-purple-100 mb-10">
            Let GOANNY help you create powerful cross-platform mobile applications with React Native
          </p>
          <button className="bg-white text-purple-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:bg-purple-50 hover:scale-105 transition-all duration-300 inline-flex items-center gap-2">
            Get Started Today
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}