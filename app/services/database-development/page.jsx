export default function DatabaseDevelopmentPage() {
  const services = [
    {
      title: "Database Design and Architecture",
      items: [
        {
          label: "Data Modeling",
          description: "Creating logical and physical data models that accurately represent your business processes and data relationships."
        },
        {
          label: "Database Architecture Design",
          description: "Developing scalable and high-performance database architectures tailored to support your specific data requirements."
        },
        {
          label: "Schema Design",
          description: "Structuring efficient database schemas to optimize data storage and management."
        }
      ]
    },
    {
      title: "Custom Database Development",
      description: "Building custom database solutions from scratch to meet your unique business needs."
    },
    {
      title: "Database Optimization and Performance Tuning",
      description: "Enhancing database performance through query optimization and resource management."
    },
    {
      title: "Database Migration and Upgrades",
      description: "Seamlessly migrating databases to new platforms or upgrading to the latest versions."
    },
    {
      title: "Database Security and Compliance",
      description: "Implementing robust security measures to protect your data and ensure compliance."
    },
    {
      title: "Data Warehousing Solutions",
      description: "Creating centralized repositories for business intelligence and analytics."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-4">
              Best Database Development Services in Pune
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              GOANNY Technology offers comprehensive Database Development services designed to help businesses manage, store, and analyze their data efficiently.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Database Development Services" 
                  className="w-full rounded-lg"
                />
                <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Why Choose GOANNY?
                  </h3>
                  <p className="text-gray-600">
                    We focus on creating robust, scalable, and secure database solutions that cater to various industry needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Services */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
              >
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
                  <h3 className="text-xl font-bold text-white flex items-center">
                    <span className="w-8 h-8 bg-white text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      {index + 1}
                    </span>
                    {service.title}
                  </h3>
                </div>
                
                <div className="p-6">
                  {service.items ? (
                    <ul className="space-y-4">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex gap-3">
                          <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">
                              {item.label}:
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {item.description}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Data Management?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Let GOANNY Technology help you build a secure, scalable, and efficient database solution tailored to your business needs.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}