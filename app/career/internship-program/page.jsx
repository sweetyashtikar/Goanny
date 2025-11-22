export default function InternshipProgram() {
  const programFeatures = [
    {
      icon: "🎓",
      title: "3-Month Internship",
      description: "Enroll in our 3-Month IT Internship program where you'll get training and a chance to work on live projects.",
      color: "from-red-400 to-rose-500"
    },
    {
      icon: "💼",
      title: "Industry Exposure",
      description: "Become an industry-ready individual and gain hands-on experience by working on real projects.",
      color: "from-blue-400 to-indigo-500"
    },
    {
      icon: "📈",
      title: "Career Growth",
      description: "Build up your career so strong that no one ever doubt your capabilities, this is only possible while working with Goanny.",
      color: "from-green-400 to-emerald-500"
    }
  ];

  const eligibility = [
    { icon: "🎓", label: "Fresh Graduates", color: "from-red-400 to-pink-500" },
    { icon: "💰", label: "Job Seeker", color: "from-yellow-400 to-orange-500" },
    { icon: "🎯", label: "Final Year Students", color: "from-green-400 to-emerald-500" },
    { icon: "🔍", label: "Searching Courses", color: "from-blue-400 to-cyan-500" },
    { icon: "🚀", label: "Career Expansion", color: "from-purple-400 to-pink-500" }
  ];

  const trainingStructure = [
    {
      month: "Month 1",
      icon: "📚",
      title: "Foundation & Tools",
      description: "Domain learning, tools setup, theory sessions",
      percentage: 33,
      color: "from-cyan-400 to-blue-500"
    },
    {
      month: "Month 2",
      icon: "⚙️",
      title: "Project Execution",
      description: "Live projects, assignments, review cycles",
      percentage: 66,
      color: "from-blue-400 to-indigo-500"
    },
    {
      month: "Month 3",
      icon: "🎯",
      title: "Simulation & Review",
      description: "Final project, soft skills, feedback, review",
      percentage: 100,
      color: "from-green-400 to-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-blue-600 mb-3 uppercase tracking-wide">Welcome to,</p>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Goanny's 3-Month IT Internship Program
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Where you'll learn, build, and become an industry-ready individual.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-lg">
                  Apply Now
                </button>
                <button className="bg-white text-gray-700 px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-300 hover:border-blue-400 transition-all duration-300">
                  Download PDF
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8">
                <img 
                  src="/carrer.png" 
                  alt="Internship Program" 
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* More About Program */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              More About this Program
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Many students possess a good amount of knowledge, but they often lack experience. And here's when our Internship Program steps in.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Real-World Experience */}
      <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-3xl p-4 shadow-xl">
              <img 
                src="/carr1.png" 
                alt="Real-world Experience" 
                className="rounded-2xl w-full"
              />
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                We guarantee real-world work experience
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Today's job market is highly competitive — having a degree isn't enough. Most freshers lack practical skills and confidence in communication, which creates a barrier to employment. This program bridges that gap and turns students into industry-ready professionals.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-5xl font-bold text-blue-600 mb-2">50+</div>
                  <p className="text-gray-600 font-medium">Successful Interns</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-indigo-600 mb-2">30+</div>
                  <p className="text-gray-600 font-medium">Students Placed</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-purple-600 mb-2">5+</div>
                  <p className="text-gray-600 font-medium">College Partners</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg">
                  Apply Now
                </button>
                <button className="bg-white text-gray-700 px-8 py-4 rounded-full font-semibold border-2 border-gray-300 hover:border-blue-400 transition-all duration-300">
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Who Can Join */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Who Can Join this Internship?
              </h2>
            </div>
            <div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're a student, job seeker, or someone looking to upskill, this program is designed for you. No matter your background, if you're ready to learn and grow, this opportunity is yours to grab.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {eligibility.map((item, index) => (
              <div key={index} className="text-center">
                <div className={`w-24 h-24 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-4xl mb-4 shadow-lg hover:scale-110 transition-transform duration-300 mx-auto`}>
                  {item.icon}
                </div>
                <p className="text-gray-700 font-semibold">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="flex justify-center gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg">
                Apply Now
              </button>
              <button className="bg-white text-gray-700 px-8 py-4 rounded-full font-semibold border-2 border-gray-300 hover:border-blue-400 transition-all duration-300">
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Training Structure */}
      <div className="py-20 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Internship & Training Structure
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Our 3-month program is a balanced mix of technical training, real-time project work, and soft skills development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {trainingStructure.map((phase, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="relative mb-6">
                  <svg className="w-32 h-32 mx-auto" viewBox="0 0 120 120">
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="8"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      strokeDasharray={`${phase.percentage * 3.14} 314`}
                      strokeLinecap="round"
                      transform="rotate(-90 60 60)"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                    </defs>
                    <text x="60" y="70" textAnchor="middle" fill="white" fontSize="32" fontWeight="bold">
                      {phase.icon}
                    </text>
                  </svg>
                </div>

                <div className="text-center">
                  <p className="text-cyan-300 font-semibold mb-2">{phase.month}</p>
                  <h3 className="text-2xl font-bold mb-3">{phase.title}</h3>
                  <p className="text-blue-200">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your IT Career?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Join Goanny's internship program and transform your career with real-world experience
          </p>
          <button className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:bg-blue-50 hover:scale-105 transition-all duration-300">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}