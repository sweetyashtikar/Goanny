"use client";
import { useState, useEffect } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`min-h-screen bg-white transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQyYzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-10"></div>
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            About Goanny Technologies
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 animate-fade-in-up animation-delay-200">
            Delivering innovative technology solutions powered by advanced and modern digital systems.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* OUR STORY */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Our Story
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p className="border-l-4 border-blue-600 pl-6 py-2">
              Goanny delivers innovative software solutions powered by advanced technologies to empower 
              businesses in today's dynamic digital landscape.
            </p>
            <p>
              Goanny was established in 2016 in Mumbai (Powai) and has since expanded to Pune and Delhi 
              (coming soon!). Dedication, fresh perspectives toward real-world challenges, and the 
              knowledge of modern technologies enable us to build unique, future-ready solutions.
            </p>
            <p>
              With a passionate team of enthusiastic individuals, Goanny integrates new-age technologies 
              to create customised solutions for our clients—helping them stay ahead in competitive markets.
            </p>
            <p className="text-xl font-semibold text-blue-600">
              Our goal is simple: Build digital products that are modern, scalable, and result-oriented.
            </p>
          </div>
        </div>
      </section>

      {/* CORE HIGHLIGHTS */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
            Why Goanny Stands Out
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
              icon: "🚀",
              title: "Vibrant Millennials in Tech",
              desc: "A team of energetic thinkers redefining digital innovation."
            },
            {
              icon: "🤝",
              title: "150+ Clients Served",
              desc: "Trusted by startups, enterprises, and global brands."
            },
            {
              icon: "🧠",
              title: "Adroit Solution Architects",
              desc: "Experts crafting scalable end-to-end digital solutions."
            },
            {
              icon: "⏳",
              title: "80+ Years Collective Exp.",
              desc: "Strong technical foundation backed by decades of expertise."
            }].map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVELOPMENT PHILOSOPHY */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Our Development Philosophy
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[{
              icon: "🧩",
              title: "Metacognitive Approach",
              desc: "We think beyond solutions—focusing on deep understanding and real outcomes."
            }, {
              icon: "⚙️",
              title: "Development Verticals",
              desc: "From design & development to marketing & automation—we offer all-in-one solutions."
            }, {
              icon: "💡",
              title: "Innovation-Driven",
              desc: "A future-forward mindset that keeps our clients ahead of the curve."
            }].map((item, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-blue-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="/image-removebg-preview-2.png" 
                alt="Our Vision" 
                className="w-full h-auto rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                VISION
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  We believe in empowering our clients through technology. By offering cutting-edge IT 
                  solutions and digital marketing services, we enable our clients to achieve their goals 
                  and establish themselves as brands in the digital world.
                </p>
                <p>
                  Our ultimate aim is to maintain a meaningful relationship with our clients, as their 
                  success defines our success.
                </p>
                <p>
                  With our innovative technology solutions, we strive to help our clients grow and succeed 
                  in today's fast-paced digital environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                MISSION
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  We believe in changing the way businesses listen, speak, and share online. We work to 
                  provide the best in design, development, consulting, and maintenance.
                </p>
                <p>
                  We are growing, learning, and evolving for our clients and their needs and formulate 
                  the perfect solution to create their digital footprints.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="/image-removebg-preview-1.png"
                alt="Our Mission"
                className="w-full h-auto rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
            Our Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
              icon:"⚛️", title:"React & React Native", desc:"Modern and scalable apps."
            },{
              icon:"🎨", title:"UI/UX Design", desc:"Creative and user-friendly designs."
            },{
              icon:"🤖", title:"AI & ML Solutions", desc:"Intelligent automation for businesses."
            },{
              icon:"☁️", title:"Cloud Solutions", desc:"Secure and scalable infrastructure."
            },{
              icon:"📊", title:"Data Analytics", desc:"Insightful dashboards & BI."
            },{
              icon:"📱", title:"Digital Marketing", desc:"SEO, ads & brand growth."
            }].map((s,i)=>( 
              <div 
                key={i} 
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 hover:border-blue-400"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Transform Your Ideas?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-10">
            Let's build something amazing together.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:bg-blue-50 hover:scale-105 transition-all duration-300 hover:shadow-blue-500/50"
          >
            Get In Touch
          </a>
        </div>
      </section>

    </div>
  );
}