export default function BusinessAutomation() {
  const benefits = [
    {
      title: "Increased Efficiency",
      description: "Automation speeds up repetitive tasks and processes, allowing them to be completed faster and more consistently than manual efforts. This leads to improved productivity across the organization.",
      isActive: true
    },
    {
      title: "Cost Reduction",
      description: "By automating manual processes, businesses can reduce labor costs and minimize human errors, leading to significant cost savings over time.",
      isActive: false
    },
    {
      title: "Improved Accuracy",
      description: "Automated systems eliminate human errors and ensure consistent, accurate execution of business processes and data management.",
      isActive: false
    },
    {
      title: "Scalability",
      description: "Automation enables businesses to scale operations efficiently without proportional increases in workforce, allowing for sustainable growth.",
      isActive: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-slate-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 py-12">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjMiIGN4PSIzMCIgY3k9IjMwIiByPSIyNSIvPjwvZz48L3N2Zz4=')] bg-repeat"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Best Business Automation Services in Pune
              </h1>
              
              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                <span className="font-semibold text-white">GOANNY</span> offers the best business automation services designed to help organizations streamline their operations and enhance efficiency. By leveraging advanced technologies such as Robotic Process Automation (RPA), artificial intelligence, and customized software solutions, GOANNY focuses on automating repetitive tasks and optimizing workflows.
              </p>

              <p className="text-lg text-blue-100 leading-relaxed">
                Our services include automating processes across various departments like sales, marketing, finance, HR, customer service, and more. GOANNY's approach ensures that businesses can reduce manual efforts, minimize errors, and save time, allowing you to concentrate on strategic initiatives and innovation. Our tailored automation solutions aim to improve productivity, reduce operational costs, and ultimately drive business growth.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-slate-700/50 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <svg className="w-64 h-64" viewBox="0 0 200 200">
                      <circle cx="100" cy="100" r="80" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.3"/>
                      <circle cx="100" cy="100" r="60" stroke="#6366f1" strokeWidth="2" fill="none" opacity="0.3"/>
                      <circle cx="100" cy="100" r="40" stroke="#8b5cf6" strokeWidth="2" fill="none" opacity="0.3"/>
                      <g transform="translate(100, 100)">
                        <circle r="30" fill="#3b82f6" opacity="0.2"/>
                        <text x="0" y="10" textAnchor="middle" fill="white" fontSize="40">⚙️</text>
                      </g>
                    </svg>
                    <div className="absolute top-0 right-0 bg-blue-500 text-white p-3 rounded-xl shadow-lg">
                      <span className="text-2xl">🤖</span>
                    </div>
                    <div className="absolute bottom-0 left-0 bg-indigo-500 text-white p-3 rounded-xl shadow-lg">
                      <span className="text-2xl">🔧</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Key Benefits of Business Automation
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {benefits.map((benefit, index) => (
            <button
              key={index}
              className={`px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 ${
                benefit.isActive
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-400'
              }`}
            >
              {benefit.title}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-200">
          <p className="text-gray-700 text-lg leading-relaxed">
            {benefits[0].description}
          </p>
        </div>
      </div>

      {/* SMarTea Section */}
      <div className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Power Your Automation With SMarTea – Built By Goanny
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          
          <p className="text-lg text-gray-700 mb-4">
            Looking For A Safer, Smarter, And More Affordable Way To Automate Your Business? Meet{' '}
            <span className="font-bold text-blue-600">SMarTea</span> – Our Intelligent{' '}
            <span className="font-bold text-blue-600">Business Automation Software</span> Designed To Simplify Your Operations.
          </p>
          
          <p className="text-lg text-gray-700 mb-8">
            Just Like A Refreshing Tea Break, With SMarTea There's No Need For Expensive Software Or Complex Coding.
          </p>

          <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
            KNOW MORE ABOUT SMARTEA
          </button>
        </div>
      </div>

      {/* Consultation CTA */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 rounded-3xl shadow-2xl">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 rounded-full filter blur-3xl"></div>
          </div>

          <div className="relative px-12 py-16">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Get a Free <span className="text-yellow-300">Consultation</span> Call
                </h2>
                <p className="text-blue-100 text-lg">
                  SMarTea Is An Ideal For Small-To-Mid-Sized Businesses Looking To Scale Operations With Minimal Manual Effort.
                </p>
              </div>

              <div className="flex justify-center lg:justify-end">
                <button className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:bg-blue-50 hover:scale-105 transition-all duration-300">
                  CONTACT US
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