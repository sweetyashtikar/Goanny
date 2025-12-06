"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Code, Smartphone, Globe, ShoppingCart, Headphones, Palette, Cloud, Cpu, Bot, Brain, Eye, Mic, Cog, Star, Database, BarChart3, HardDrive, LifeBuoy } from 'lucide-react';

const ServicesPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      icon: Code,
      title: "ReactJS Development",
      description: "ReactJS, developed by Facebook, is a powerful library for building user interfaces, particularly single-page applications where a smooth and responsive user experience is crucial. Its component-based architecture allows for efficient rendering and easy maintenance, making it a top choice for modern tech stacks.",
      gradient: "from-blue-500 to-cyan-500",
      link: "/services/reactjs-development"
    },
    {
      id: 2,
      icon: Smartphone,
      title: "React Native Development",
      description: "We are at the forefront of mobile app development, specializing in React Native to deliver innovative, high-performance, and cost-effective cross-platform applications. Our expertise allows us to craft apps that not only captivate users but also drive business growth.",
      gradient: "from-purple-500 to-pink-500",
      link: "/services/react-native"
    },
    {
      id: 3,
      icon: Globe,
      title: "Web Design & Development",
      description: "In order to provide outstanding designing, our adable development company in Pune concentrates on hosting multiple knowledge. We have elegant every part of website building. Ready is a group of committed professionals who use dedication to innovation. This makes us capable of meeting each client's specific needs for the services we provide.",
      gradient: "from-orange-500 to-red-500",
      link: "/services/web-design-development"
    },
    {
      id: 4,
      icon: Smartphone,
      title: "Mobile Application Development",
      description: "We Alongside your Android app with amazing graphics and intricately services to enhance functionality. Our skilled developers handle design, build, payment gateways, or click services, we ensure seamless integration. Expertise in iOS: Swift is Our developers are seasoned professionals with deep knowledge of the iOS ecosystem. From Swift programming to the latest iOS features, we harness the full power of the platform to create seamless, user-friendly applications.",
      gradient: "from-green-500 to-teal-500",
      link: "/services/mobile-application-development"
    },
    {
      id: 5,
      icon: Star,
      title: "Product Design & Development",
      description: "Our process begins with an in-depth discovery phase, where we work closely with you to understand your vision, objectives and target market. We believe that a deep understanding of your needs is crucial to developing a product that truly resonates with your audience.",
      gradient: "from-indigo-500 to-blue-500",
      link: "/services/product-design-development"
    },
    {
      id: 6,
      icon: ShoppingCart,
      title: "E-commerce Development",
      description: "Understanding Your Business: We start by striving to know your business inside and out. We work closely with you to understand your brand, target audience, product range and business goals. This deep understanding ensures that the ecommerce solution that is perfectly aligned with your vision and objectives.",
      gradient: "from-pink-500 to-rose-500",
      link: "/services/ecommerce-development"
    },
    {
      id: 7,
      icon: Headphones,
      title: "Technical Consulting",
      description: "Understanding Your Business: We begin by thoroughly understanding your business, its objectives, and its technical and operational environment. Our consultants work closely with your team to identify the unique challenges and opportunities your business faces. Comprehensive Analysis: We conduct a detailed analysis of your current systems, processes and infrastructure. This involves evaluating your IT architecture, software applications, data management practices and overall technological alignment with your business goals.",
      gradient: "from-yellow-500 to-orange-500",
      link: "/services/technical-consulting"
    },
    {
      id: 8,
      icon: Palette,
      title: "UI/UX Design",
      description: "Our design philosophy centers around the user. We conduct thorough research to understand your target audience and their behaviors. This user-centric approach ensures that our designs are not only visually appealing but also highly functional and easy to navigate. Our UI/UX process includes a thorough analysis of your current system, market research, and competitor analysis. We then create wireframes, prototypes, high-fidelity mockups to visualize and refine the design before implementation.",
      gradient: "from-violet-500 to-purple-500",
      link: "/services/ui-ux-design"
    },
    {
      id: 9,
      icon: Cloud,
      title: "Cloud Application Development",
      description: "Custom Cloud Application Development: We recognize that every business has unique cloud applications tailored to your specific business needs. Whether you require a SaaS solution, a cloud-based enterprise application, or a containerized app, we build scalable and secure solutions that enhance your organizational efficiency.",
      gradient: "from-cyan-500 to-blue-500",
      link: "/services/cloud-application-development"
    },
    {
      id: 10,
      icon: Cpu,
      title: "Custom Software Development",
      description: "We are dedicated to delivering bespoke software solutions that align precisely with your business goals and processes. Whether you need a web application, enterprise system, mobile app, or a fully integrated platform, our custom software development team builds reliable, scalable, and efficient solutions tailored to your unique needs.",
      gradient: "from-emerald-500 to-green-500",
      link: "/services/custom-software-development"
    },
    {
      id: 11,
      icon: Bot,
      title: "Chatbot Development",
      description: "With Gusrry Technologies, build intelligent chatbots that automate your customer interactions, improve user engagement, and reduce operational costs across platforms like websites, WhatsApp, Facebook Messenger, and Slack.",
      gradient: "from-blue-500 to-indigo-500",
      link: "/services/chatbot-development"
    },
    {
      id: 12,
      icon: Brain,
      title: "AI & Machine Learning Solutions",
      description: "From predictive analytics and computer vision to intelligent process automation, we develop intelligent solutions that leverage AI and machine learning—extracting insights, enhancing services, and more efficient business operations.",
      gradient: "from-fuchsia-500 to-pink-500",
      link: "/services/ai-machine-learning"
    },
    {
      id: 13,
      icon: Brain,
      title: "Natural Language Processing (NLP)",
      description: "Integrate advanced language processing AI capabilities—such as sentiment analysis, keyword extraction, translation, and summarization—into your products to enhance user experiences and unlock deeper insights.",
      gradient: "from-purple-500 to-violet-500",
      link: "/services/nlp"
    },
    {
      id: 14,
      icon: Eye,
      title: "Computer Vision Solutions",
      description: "Leverage AI-powered image and video recognition systems for advanced face detection, object recognition, and automated quality control—streamlining visual inspection processes and enhancing operational efficiency.",
      gradient: "from-red-500 to-orange-500",
      link: "/services/computer-vision"
    },
    {
      id: 15,
      icon: Mic,
      title: "Voice Assistant Integration",
      description: "At Gusrry Technologies, we develop custom voice solution systems by hybrid language processing and AI—enabling seamless voice commands, and voice-enabled apps. Our integration with IoT systems, our voice AI solutions help businesses deliver more inclusive, intuitive, and responsive user experiences across platforms.",
      gradient: "from-teal-500 to-cyan-500",
      link: "/services/voice-assistant"
    },
    {
      id: 16,
      icon: Cog,
      title: "Robotic Process Automation (RPA)",
      description: "Automate repetitive business processes—like data entry, approvals, and form processing—to increase operational efficiency, minimize human error, and free up your team for higher-value work. At Gusrry Technologies, we implement advanced RPA solutions that integrate seamlessly with your existing tech stack, across departments, enabling faster decision-making and improved accuracy.",
      gradient: "from-lime-500 to-green-500",
      link: "/services/rpa"
    },
    {
      id: 17,
      icon: Bot,
      title: "Intelligent Virtual Assistants (IVA)",
      description: "Deploy AI-powered virtual assistants to handle everyday business tasks such as meeting scheduling, answering FAQs, and delivering real-time insights. Our intelligent assistants integrate seamlessly with your existing systems to automate routine tasks, improve customer support, and collaboration support for both customers and internal teams. Whether it's improving response times or enabling smarter decision-making, our AI assistants adapt to your unique business needs.",
      gradient: "from-amber-500 to-orange-500",
      link: "/services/virtual-assistants"
    },
    {
      id: 18,
      icon: Star,
      title: "Recommendation Systems",
      description: "Implement intelligent, Netflix-style recommendation engines that personalize product, content, or service suggestions based on user behavior, preferences, and trends. At Gusrry Technologies, we use advanced machine learning algorithms to analyze user interactions, purchase history, and engagement patterns—delivering highly tailored recommendations that drive user satisfaction, increase engagement, and boost conversions across your digital platforms.",
      gradient: "from-rose-500 to-pink-500",
      link: "/services/recommendation-systems"
    },
    {
      id: 19,
      icon: BarChart3,
      title: "Business Intelligence & Reporting",
      description: "Interactive dashboards and reports that help visualize KPIs, trends, and performance using Power BI, Tableau, or custom portals.",
      gradient: "from-sky-500 to-blue-500",
      link: "/services/business-intelligence"
    },
    {
      id: 20,
      icon: HardDrive,
      title: "Big Data Solutions",
      description: "Harness real-time and large-scale datasets to uncover business insights, customer behavior, and operational trends using distributed systems.",
      gradient: "from-violet-500 to-purple-500",
      link: "/services/big-data"
    },
    {
      id: 21,
      icon: Database,
      title: "Database Development",
      description: "Our team manages the migration of your existing databases to new platforms or technologies. We ensure data migration, seamless, and data loss, optimizing performance and compatibility in the new environment.",
      gradient: "from-emerald-500 to-teal-500",
      link: "/services/database-development"
    },
    {
      id: 22,
      icon: LifeBuoy,
      title: "Support & Management",
      description: "Our IT support services provide timely assistance for a wide range of technical issues. Whether it's troubleshooting hardware or software problems, resolving network issues, or providing user support, our team is here to help you maintain smooth operations.",
      gradient: "from-orange-500 to-red-500",
      link: "/services/support-management"
    },
    {
      id: 23,
      icon: Cog,
      title: "Business Automation",
      description: "Streamline your business processes with intelligent automation solutions that reduce manual work, improve accuracy, and accelerate operations across all departments.",
      gradient: "from-blue-500 to-purple-500",
      link: "/services/business-automation"
    },
    {
      id: 24,
      icon: ShoppingCart,
      title: "Digital Marketing",
      description: "Boost your online presence with data-driven digital marketing strategies including SEO, SEM, social media marketing, and content marketing to reach and engage your target audience effectively.",
      gradient: "from-pink-500 to-orange-500",
      link: "/services/digital-marketing"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="relative container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Innovative Technical Services for Complex Challenges
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Get The Best Technical Services In Pune Only With Gusrry Technologies
          </p>
          <div className="h-1 w-32 bg-white mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            At Goanny, we provide a comprehensive suite of technical services designed to empower your business and enhance operational efficiency. Our team of experienced professionals leverages the latest technologies and industry best practices to deliver tailored solutions that meet your unique challenges.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Card Content */}
                <div className="relative p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Read More Button */}
                  <Link href={service.link}>
                    <button className={`px-6 py-3 rounded-lg bg-gradient-to-r ${service.gradient} text-white font-semibold shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300`}>
                      Read More
                    </button>
                  </Link>
                </div>

                {/* Decorative Corner */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.gradient} opacity-10 rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-500`}></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's discuss how our technical services can help you achieve your goals
          </p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Get Started Today
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;