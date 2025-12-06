export default function ReactDevelopmentPage() {
  const services = [
    {
      title: "Custom Web Application Development",
      icon: "⚛️",
      color: "from-blue-500 to-cyan-600",
      features: [
        "Building custom React applications tailored to specific business requirements.",
        "Creating dynamic and responsive user interfaces that enhance user experience."
      ]
    },
    {
      title: "Single Page Application (SPA)",
      icon: "📱",
      color: "from-indigo-500 to-blue-600",
      features: [
        "Developing fast-loading SPAs using React to ensure a seamless experience.",
        "Using React Router and other technologies to manage client-side navigation efficiently."
      ]
    },
    {
      title: "UI/UX Design with ReactJS",
      icon: "🎨",
      color: "from-purple-500 to-indigo-600",
      features: [
        "Designing intuitive and engaging user interfaces using ReactJS.",
        "Ensuring seamless integration with UI libraries like Tailwind CSS and Material-UI."
      ]
    },
    {
      title: "Migration and Integration Services",
      icon: "🔄",
      color: "from-cyan-500 to-blue-600",
      features: [
        "Upgrading legacy systems or other frameworks to modern ReactJS architecture.",
        "Integrating third-party APIs and libraries for enhanced functionality."
      ]
    },
    {
      title: "Progressive Web Apps (PWA) with ReactJS",
      icon: "🚀",
      color: "from-blue-600 to-indigo-600",
      features: [
        "Developing PWAs to deliver native app-like experiences on the web.",
        "Leveraging ReactJS capabilities for performance, speed, and offline support."
      ]
    },
    {
      title: "Support and Maintenance",
      icon: "🛠️",
      color: "from-indigo-600 to-purple-600",
      features: [
        "Providing ongoing support to ensure that your ReactJS application remains up-to-date.",
        "Regular updates, performance optimization, and bug fixes to keep your app running smoothly."
      ]
    }
  ];

  const additionalServices = [
    "Consultation for ReactJS",
    "Web App Development with ReactJS",
    "The Development of React Mobile Apps",
    "Migration and Porting Service for ReactJS Apps",
    "Support and Maintenance for ReactJS Apps"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="text-6xl">⚛️</span>
                <span className="text-2xl font-bold text-white">React</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Services Offered for ReactJS Development
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                <span className="font-semibold text-white">ReactJS development services</span> involve building fast, scalable, and interactive web applications using the React JavaScript library. At <span className="font-semibold text-white">GOANNY</span>, a trusted ReactJS development company in Pune, we focus on delivering high-performance solutions tailored to your business needs.
              </p>
            </div>
            <div className="flex-1 relative">
              <img 
                src="/9.jpg" 
                alt="React Development" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Key Areas in ReactJS Development
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some key areas that could be included in the range of ReactJS development services we offer
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-600">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></span>
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Increase the effectiveness and quality of your project while cutting expenses
              </h2>
              <ul className="space-y-4">
                {additionalServices.map((service, index) => (
                  <li key={index} className="flex items-center gap-3 text-lg text-blue-100">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Get Started Today
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <div className="w-64 h-64 border-4 border-cyan-400 rounded-3xl flex items-center justify-center">
                      <span className="text-8xl">⚛️</span>
                    </div>
                    <div className="absolute -top-4 -right-4 w-32 h-32 bg-cyan-400 rounded-full opacity-20 animate-ping"></div>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <h3 className="text-3xl font-bold text-white mb-2">React</h3>
                  <p className="text-blue-200">Building Modern Web Applications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your React Application?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let GOANNY help you create fast, scalable, and modern web applications with ReactJS
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
  );
}