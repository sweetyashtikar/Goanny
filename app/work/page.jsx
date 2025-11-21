"use client"
import { useState } from 'react';

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState('app-development');
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = [
    { id: 'app-development', label: 'App Development', icon: '📱' },
    { id: 'web-development', label: 'Web Development', icon: '💻' },
    { id: 'digital-marketing', label: 'Digital Marketing', icon: '📈' },
    { id: 'ui-ux-design', label: 'UI/UX Design', icon: '🎨' }
  ];

  const projects = {
    'app-development': [
      {
        id: 1,
        title: 'FreedyGo',
        subtitle: 'Gram Connect Pimpalgat',
        category: 'Daily Delicious',
        description: 'FreedyGo is an online delivery portal that serves the B2B HORECA and other areas of the Hospitality industry. FreedyGo App eliminates the need to coordinate with numerous merchants to purchase goods.',
        image: '📱',
        tags: ['E-Commerce', 'Delivery', 'B2B'],
        color: 'from-green-500 to-emerald-600'
      },
      {
        id: 2,
        title: 'TechnoSoft Robotics',
        subtitle: 'Education Platform',
        category: 'Learning & Training',
        description: 'A comprehensive learning management system for robotics and technology education with interactive modules and progress tracking.',
        image: '🤖',
        tags: ['Education', 'E-Learning', 'Mobile'],
        color: 'from-blue-500 to-cyan-600'
      },
      {
        id: 3,
        title: 'Goanny Training Centre',
        subtitle: 'Professional Development',
        category: 'Training Platform',
        description: 'Professional training platform with course management, student tracking, and certification features.',
        image: '🎓',
        tags: ['Training', 'Education', 'Mobile App'],
        color: 'from-purple-500 to-indigo-600'
      }
    ],
    'web-development': [
      {
        id: 4,
        title: 'Space Builders',
        subtitle: 'Luxury Real Estate',
        category: 'Real Estate Portal',
        description: 'Space Builders website has aimed at Redefining Luxury across mid – segment housing by inventing, discovering & delivering contemporary lifestyle solutions.',
        image: '🏢',
        tags: ['Real Estate', 'Luxury', 'Responsive'],
        color: 'from-orange-500 to-red-600',
        link: 'https://www.spacebuildersgroup.com/'
      },
      {
        id: 5,
        title: 'Vidani Automations',
        subtitle: 'Industrial Solutions',
        category: 'Corporate Website',
        description: 'Modern corporate website showcasing automation solutions with interactive product catalogs and inquiry systems.',
        image: '⚙️',
        tags: ['Corporate', 'Industrial', 'Portfolio'],
        color: 'from-gray-600 to-slate-700'
      },
      {
        id: 6,
        title: 'E-Commerce Platform',
        subtitle: 'Multi-vendor Marketplace',
        category: 'Online Shopping',
        description: 'Feature-rich e-commerce platform with vendor management, payment integration, and order tracking.',
        image: '🛒',
        tags: ['E-Commerce', 'Marketplace', 'Payment'],
        color: 'from-pink-500 to-rose-600'
      }
    ],
    'digital-marketing': [
      {
        id: 7,
        title: 'SEO Campaign',
        subtitle: 'Healthcare Provider',
        category: 'Search Optimization',
        description: 'Comprehensive SEO strategy that increased organic traffic by 250% and improved search rankings for key medical terms.',
        image: '🔍',
        tags: ['SEO', 'Healthcare', 'Analytics'],
        color: 'from-teal-500 to-cyan-600'
      },
      {
        id: 8,
        title: 'Social Media Marketing',
        subtitle: 'Fashion Brand',
        category: 'Brand Awareness',
        description: 'Multi-platform social media campaign that grew followers by 500% and increased engagement rates significantly.',
        image: '📱',
        tags: ['Social Media', 'Fashion', 'Content'],
        color: 'from-pink-500 to-purple-600'
      },
      {
        id: 9,
        title: 'PPC Campaign',
        subtitle: 'Tech Startup',
        category: 'Lead Generation',
        description: 'Google Ads and social media advertising campaign that generated 1000+ qualified leads with optimal ROI.',
        image: '🎯',
        tags: ['PPC', 'Google Ads', 'ROI'],
        color: 'from-blue-500 to-indigo-600'
      }
    ],
    'ui-ux-design': [
      {
        id: 10,
        title: 'Banking App Redesign',
        subtitle: 'Financial Services',
        category: 'Mobile Banking',
        description: 'Complete UX overhaul of mobile banking app improving user satisfaction scores by 85% and reducing support tickets.',
        image: '💳',
        tags: ['Banking', 'Mobile', 'UX Research'],
        color: 'from-emerald-500 to-teal-600'
      },
      {
        id: 11,
        title: 'Food Delivery Interface',
        subtitle: 'Restaurant Platform',
        category: 'User Experience',
        description: 'Intuitive food ordering interface with seamless checkout flow and real-time tracking features.',
        image: '🍔',
        tags: ['Food Tech', 'Mobile', 'UI Design'],
        color: 'from-orange-500 to-amber-600'
      },
      {
        id: 12,
        title: 'Dashboard Design',
        subtitle: 'Analytics Platform',
        category: 'Data Visualization',
        description: 'Modern dashboard design with interactive charts and data visualization for business intelligence.',
        image: '📊',
        tags: ['Dashboard', 'Analytics', 'B2B'],
        color: 'from-violet-500 to-purple-600'
      }
    ]
  };

  const digitalSuccessStories = [
    {
      title: 'Website Development',
      description: 'Dr. Shriram Pawar an Orthopedic Specialist Website design, development and promotion',
      image: '🏥',
      metric: '250%',
      metricLabel: 'Traffic Increase'
    },
    {
      title: 'Instagram Content Series',
      description: 'We have created the content for Food & Drinks for Pasta Ventura',
      image: '🍝',
      metric: '500%',
      metricLabel: 'Engagement Growth'
    },
    {
      title: 'Branding Work',
      description: 'Akhand Devi Maa Gift Shop Branding',
      image: '🎁',
      metric: '3x',
      metricLabel: 'Brand Recognition'
    },
    {
      title: 'Portfolio Website',
      description: 'Debasmita Lodha\'s Portfolio website with unique and creative content',
      image: '👩‍🎨',
      metric: '95%',
      metricLabel: 'User Satisfaction'
    }
  ];

  const activeProjects = projects[activeCategory] || [];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % digitalSuccessStories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + digitalSuccessStories.length) % digitalSuccessStories.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative h-80 overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-700/90 to-gray-800/90">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            opacity: 0.4
          }}></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-cyan-400 mb-6">
              Transformative Projects: A Look at Our Work
            </h1>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-lg text-center text-gray-700 leading-relaxed">
          At Goanny, we take pride in delivering innovative solutions that drive success for our clients. Our work spans various industries, 
          showcasing our commitment to excellence and our ability to adapt to unique challenges. Below are some highlights of our 
          projects that demonstrate our expertise and dedication.
        </p>
      </div>

      {/* From Concept to Launch Section */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
            From Concept to Launch: Your App Development Journey
          </h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-400'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Project Header with Gradient */}
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-8xl group-hover:scale-110 transition-transform`}>
                  {project.image}
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{project.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all"
                    >
                      View Project →
                    </a>
                  )}
                  {!project.link && (
                    <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
                      View Case Study →
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Transforming Visions into Stunning Websites */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
            Transforming Visions into Stunning Websites
          </h2>

          {/* Website Showcase Tabs */}
          <div className="flex justify-center gap-4 mb-8">
            <button className="px-6 py-3 bg-white border-2 border-gray-300 rounded-lg font-semibold hover:border-blue-400 transition-all">
              FreedyGo
            </button>
            <button className="px-6 py-3 bg-white border-2 border-gray-300 rounded-lg font-semibold hover:border-blue-400 transition-all">
              Vidani Automations
            </button>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-lg">
              Space Builders
            </button>
          </div>

          {/* Featured Website */}
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Space Builders</h3>
              <p className="text-gray-600 leading-relaxed">
                Space Builders website has aimed at Redefining Luxury across mid – segment housing by inventing, discovering & delivering 
                contemporary lifestyle solutions.
              </p>
              <a
                href="https://www.spacebuildersgroup.com/"
                className="inline-block mt-4 text-blue-600 font-semibold hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.spacebuildersgroup.com/
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Showcasing Our Digital Success Stories */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
            Showcasing Our Digital Success Stories
          </h2>

          {/* Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {digitalSuccessStories.map((story, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
                      <div className="text-center">
                        <div className="text-6xl mb-4">{story.image}</div>
                        <div className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold mb-4">
                          {story.title}
                        </div>
                        <p className="text-gray-700 mb-6 leading-relaxed">{story.description}</p>
                        <div className="flex justify-center items-center gap-8">
                          <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600">{story.metric}</div>
                            <div className="text-sm text-gray-600">{story.metricLabel}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all"
            >
              <span className="text-2xl">←</span>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all"
            >
              <span className="text-2xl">→</span>
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {digitalSuccessStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index ? 'bg-blue-600 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's create something amazing together. Get in touch to discuss your next big idea!
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-full text-xl font-bold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105">
            START YOUR PROJECT →
          </button>
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="h-12"></div>
    </div>
  );
}