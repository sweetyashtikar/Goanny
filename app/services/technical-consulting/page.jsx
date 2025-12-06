"use client"
import { useState } from 'react';

export default function TechnicalConsulting() {
  const [activeSection, setActiveSection] = useState('strategy');

  const services = [
    {
      id: 'strategy',
      title: 'IT Strategy and Planning',
      icon: '🎯',
      features: [
        {
          title: 'Technology Roadmapping',
          description: 'Developing a strategic roadmap that aligns technology initiatives with your business objectives and long-term goals.'
        },
        {
          title: 'Digital Transformation Consulting',
          description: 'Guiding businesses through digital transformation journeys to modernize their processes, infrastructure, and customer engagement strategies.'
        },
        {
          title: 'IT Infrastructure Assessment',
          description: 'Evaluating existing IT systems and identifying opportunities to optimize and upgrade technology solutions.'
        }
      ]
    },
    {
      id: 'architecture',
      title: 'Software Architecture Consulting',
      icon: '🏗️',
      features: [
        {
          title: 'System Design & Architecture',
          description: 'Creating scalable, robust architecture designs for complex software systems and applications.'
        },
        {
          title: 'Microservices Architecture',
          description: 'Designing and implementing microservices-based architectures for enhanced scalability and maintainability.'
        },
        {
          title: 'Architecture Review & Optimization',
          description: 'Evaluating existing architectures and providing recommendations for improvements and modernization.'
        }
      ]
    },
    {
      id: 'cloud',
      title: 'Cloud Consulting and Migration',
      icon: '☁️',
      features: [
        {
          title: 'Cloud Strategy Development',
          description: 'Creating comprehensive cloud adoption strategies aligned with your business goals and technical requirements.'
        },
        {
          title: 'Cloud Migration Services',
          description: 'Planning and executing seamless migration of applications and data to cloud platforms like AWS, Azure, or Google Cloud.'
        },
        {
          title: 'Cloud Optimization',
          description: 'Optimizing cloud infrastructure for cost efficiency, performance, and security.'
        }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Consulting',
      icon: '🔒',
      features: [
        {
          title: 'Security Assessment & Audit',
          description: 'Comprehensive evaluation of your systems to identify vulnerabilities and security risks.'
        },
        {
          title: 'Security Strategy & Compliance',
          description: 'Developing security frameworks and ensuring compliance with industry standards like ISO 27001, GDPR, and HIPAA.'
        },
        {
          title: 'Incident Response Planning',
          description: 'Creating robust incident response plans and security protocols to protect against cyber threats.'
        }
      ]
    },
    {
      id: 'project',
      title: 'IT Project Management',
      icon: '📊',
      features: [
        {
          title: 'Agile Project Management',
          description: 'Managing technology projects using agile methodologies for faster delivery and better adaptability.'
        },
        {
          title: 'Resource Planning & Allocation',
          description: 'Optimizing resource utilization and ensuring efficient project execution with proper team allocation.'
        },
        {
          title: 'Risk Management',
          description: 'Identifying and mitigating project risks to ensure successful delivery within budget and timeline.'
        }
      ]
    },
    {
      id: 'devops',
      title: 'DevOps & Automation Consulting',
      icon: '⚙️',
      features: [
        {
          title: 'CI/CD Pipeline Setup',
          description: 'Implementing continuous integration and deployment pipelines for faster, reliable software releases.'
        },
        {
          title: 'Infrastructure as Code',
          description: 'Automating infrastructure provisioning and management using tools like Terraform and Ansible.'
        },
        {
          title: 'Monitoring & Performance',
          description: 'Setting up comprehensive monitoring and alerting systems for optimal application performance.'
        }
      ]
    }
  ];

  const activeService = services.find(s => s.id === activeSection);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-slate-100">
      {/* Hero Section with Image Background */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-700 via-slate-600 to-blue-800 py-12">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjMiIGN4PSIzMCIgY3k9IjMwIiByPSIyNSIvPjwvZz48L3N2Zz4=')] bg-repeat"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Best Technical Consulting in Pune
              </h1>
              
              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                <span className="font-semibold text-white">GOANNY Technology</span> offers a range of Technical Consulting services designed to provide businesses with expert guidance, strategic planning, and innovative solutions to tackle technical challenges.
              </p>

              <p className="text-lg text-blue-100 leading-relaxed">
                These services help organizations make informed technology decisions, optimize processes, and accelerate growth. Here's a detailed overview of the key Technical Consulting services offered by GOANNY.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-slate-700/50 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
                <div className="flex items-center justify-center">
                     <div className="flex-1 relative">
              <img 
                src="/360_F_103617547_RkHSQJ43EBR7C9ZcHIIFU2r7b1ZlC0IU.jpg
" 
                alt="React Development" 
                className="rounded-2xl shadow-2xl"
              />
                    
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
            Our Technical Consulting Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Expert guidance to help your business leverage technology effectively
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
                  ? 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl scale-105'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg'
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
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border-2 border-blue-200">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl">{activeService.icon}</span>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              {activeService.title}
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {activeService.features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
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

      {/* Why Choose Us Section */}
      <div className="bg-gradient-to-br from-slate-800 to-indigo-900 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose GOANNY For Technical Consulting?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '👨‍💼', title: 'Expert Consultants', desc: 'Experienced professionals with deep technical expertise' },
              { icon: '🔍', title: 'In-Depth Analysis', desc: 'Comprehensive assessment of your technology landscape' },
              { icon: '📋', title: 'Strategic Planning', desc: 'Long-term technology roadmaps aligned with business goals' },
              { icon: '🚀', title: 'Proven Results', desc: 'Track record of successful implementations and transformations' }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-blue-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Benefits of Technical Consulting
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: '💰',
              title: 'Cost Optimization',
              description: 'Reduce technology costs through efficient resource utilization and strategic planning.'
            },
            {
              icon: '⚡',
              title: 'Faster Innovation',
              description: 'Accelerate digital transformation and stay ahead of technological advancements.'
            },
            {
              icon: '🛡️',
              title: 'Risk Mitigation',
              description: 'Identify and address potential risks before they impact your business operations.'
            },
            {
              icon: '📈',
              title: 'Scalable Growth',
              description: 'Build technology foundations that support business expansion and growth.'
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="text-4xl">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
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
                  Need Expert <span className="text-yellow-300">Technical Guidance?</span>
                </h2>
                <p className="text-blue-100 text-lg">
                  Get a free consultation with our technical experts. Let's discuss how we can help optimize your technology strategy and drive business growth.
                </p>
              </div>

              <div className="flex justify-center lg:justify-end">
                <button className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:bg-blue-50 hover:scale-105 transition-all duration-300">
                  SCHEDULE CONSULTATION
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