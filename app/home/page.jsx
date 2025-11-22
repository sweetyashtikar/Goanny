import { useState } from 'react';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      title: "React JS Development",
      description: "Creating reusable and modular UI components that can be easily integrated into the React.js framework.",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Web Design & Development",
      description: "Creating wireframes to map out the structure and functionality of the website, followed by interactive prototypes.",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "React Native Development",
      description: "Designing the app's interface to ensure it is visually appealing and user-friendly, aligning with brand guidelines.",
      color: "from-gray-800 to-gray-900"
    }
  ];

  const stats = [
    { number: "80+", label: "Collective Experience", icon: "⭐" },
    { number: "500+", label: "Happy Clients", icon: "⭐" },
    { number: "70+", label: "Launch of Websites", icon: "⭐" }
  ];

  const blogs = [
    {
      image: "/api/placeholder/400/300",
      date: "November 10, 2025",
      title: "Inside Nano Banana: A Hands-On Guide...",
      category: "Technology"
    },
    {
      image: "/api/placeholder/400/300",
      date: "September 6, 2025",
      title: "GST 2.0: The Future of India's...",
      category: "Business"
    },
    {
      image: "/api/placeholder/400/300",
      date: "June 11, 2025",
      title: "5 Industries that must Integrate Business...",
      category: "Industry"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-200 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-12 h-1 bg-yellow-400"></div>
                <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">WORK WITH THE</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Best Software Development Company in Pune
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Goanny Technologies Is A Leading Software Development Company In Pune. With 10 Years Of Experience In Custom Software Development, We Are The Best Results-Oriented Tech Company In Maharashtra.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  KNOW MORE
                </button>
                <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  OUR TOP SERVICES
                </button>
              </div>
            </div>

            <div className="relative">
              <img 
                src="/api/placeholder/600/500" 
                alt="Software Development" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What we <span className="bg-blue-600 text-white px-4 py-2">Offer?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience Both Technical & Digital Services Only With Goanny, The <span className="text-pink-600 font-semibold">Best Software Development Company In Pune</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-4`}>
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300">
                  Read More
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mb-8">
            {[0, 1, 2, 3, 4].map((dot) => (
              <button
                key={dot}
                onClick={() => setCurrentSlide(dot)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === dot ? 'bg-blue-600 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <div className="text-center">
            <button className="bg-blue-600 text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-xl inline-flex items-center gap-2">
              EXPLORE ALL SERVICES
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-1 bg-yellow-400"></div>
                <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">ABOUT GOANNY TECHNOLOGIES</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Fully dedicated to the best solutions.
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Goanny Technologies, is the leading tech-enabled Software Development company in Pune. With our expertise in product development and business automation using cutting-edge IT solutions, we can help businesses grow and increase their brand awareness. Our digital marketing services are designed to build businesses using the latest digital technology. With our focus on growing businesses and increasing branding awareness, we can guarantee your growth in digital world.
              </p>

              <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg">
                READ MORE
              </button>
            </div>

            <div className="relative">
              <img 
                src="/api/placeholder/500/400" 
                alt="Team Collaboration" 
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="py-20 bg-gradient-to-br from-blue-800 via-blue-900 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Featured Product</h2>
            <div className="w-24 h-1 bg-blue-400"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                GoSMarTea<br />
                A Business Automation Software
              </h3>

              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                GoSMarTea is an all-in-one Business Automation Software that makes managing operations as refreshing as a tea break. From HR to sales, finance to analytics—handle it all on one smart, scalable platform. It's quick to use, easy to customize, and built to fit your growing business needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-600 transition-all duration-300">
                  KNOW MORE
                </button>
                <button className="bg-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-600 transition-all duration-300">
                  DOWNLOAD PDF
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-3xl p-8 shadow-2xl">
                <img 
                  src="/api/placeholder/500/400" 
                  alt="GoSMarTea Software" 
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-12">
            <div className="w-12 h-1 bg-yellow-400"></div>
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">GROW WITH US</span>
          </div>

          <div className="grid md:grid-cols-4 gap-8 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Our Number Game
              </h2>
            </div>

            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-5xl font-bold text-gray-900">{stat.number}</span>
                  <span className="text-3xl text-yellow-400">{stat.icon}</span>
                </div>
                <p className="text-blue-600 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Latest Blogs</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-blue-600">
                    {blog.category}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-3">{blog.date}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{blog.title}</h3>
                  <button className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gray-100 rounded-3xl p-4">
              <img 
                src="/api/placeholder/600/400" 
                alt="Location Map" 
                className="rounded-2xl w-full"
              />
            </div>

            <div className="flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-8">
                Reach out for a free consultation
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-lg text-gray-700">Your Vision, Our Priority – Available 24/7!</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-lg text-gray-700">Anytime, Anywhere – We're Here 24/7 for You!</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-lg text-gray-700">24/7 Availability – Because Your Goals Don't Take a Break</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}