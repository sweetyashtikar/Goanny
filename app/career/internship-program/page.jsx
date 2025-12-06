export default function InternshipProgram() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <p className="text-blue-600 font-semibold mb-2">Welcome to,</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Goanny's 3-Month IT Internship Program
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Where you'll learn, build, and become an industry-ready individual.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
                >
                  Apply Now
                </a>
                <a
                  href="#"
                  className="bg-white text-gray-700 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all border-2 border-gray-200"
                >
                  Download PDF
                </a>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-12 flex items-center justify-center min-h-[400px]">
                <div className="text-8xl">💻</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More About Program */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            More About this Program
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
            Many students possess a good amount of knowledge, but they often lack experience. 
            And here's when our Internship Program steps in.
          </p>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto">
                🎓
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                3-Month Internship
              </h3>
              <p className="text-gray-600">
                Enroll in our 3-Month IT Internship program where you'll get training 
                and a chance to work on live projects.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto">
                💡
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Industry Exposure
              </h3>
              <p className="text-gray-600">
                Become an industry-ready individual and gain hands-on experience by 
                working on real projects.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto">
                📈
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Career Growth
              </h3>
              <p className="text-gray-600">
                Build up your career so strong that no one ever doubt your capabilities, 
                this is only possible while working with Goanny.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real World Experience */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="bg-gradient-to-br from-orange-100 to-pink-100 rounded-3xl p-12 flex items-center justify-center min-h-[400px]">
              <div className="text-8xl">🤝</div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                We guarantee real-world work experience
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Today's job market is highly competitive — having a degree isn't enough. 
                Most freshers lack practical skills and confidence in communication, which 
                creates a barrier to employment. This program bridges that gap and turns 
                students into industry-ready professionals.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">50 +</div>
                  <div className="text-sm text-gray-600">Successful Interns</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">30 +</div>
                  <div className="text-sm text-gray-600">Students Placed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">5 +</div>
                  <div className="text-sm text-gray-600">College Partners</div>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all"
                >
                  Apply Now
                </a>
                <a
                  href="#"
                  className="text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-all"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Join */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Who Can Join this Internship?
              </h2>
            </div>
            <div>
              <p className="text-lg text-gray-600">
                Whether you're a student, job seeker, or someone looking to upskill, 
                this program is designed for you. No matter your background, if you're 
                ready to learn and grow, this opportunity is yours to grab.
              </p>
            </div>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center text-3xl mb-3 mx-auto">
                🎓
              </div>
              <p className="font-semibold text-gray-900">Fresh Graduates</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center text-3xl mb-3 mx-auto">
                💼
              </div>
              <p className="font-semibold text-gray-900">Job Seeker</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-3xl mb-3 mx-auto">
                📚
              </div>
              <p className="font-semibold text-gray-900">Final Year Students</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-3 mx-auto">
                🔍
              </div>
              <p className="font-semibold text-gray-900">Searching courses</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-3xl mb-3 mx-auto">
                🚀
              </div>
              <p className="font-semibold text-gray-900">Career Expansion</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="text-center">
            <div className="flex gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-all"
              >
                Apply Now
              </a>
              <a
                href="#"
                className="bg-white text-gray-700 px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition-all border-2 border-gray-200"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Training Structure */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Internship & Training Structure
          </h2>
          <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
            Our 3-month program is a balanced mix of technical training, 
            real-time project work, and soft skills development.
          </p>

          {/* Timeline */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Month 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center mx-auto">
                  <div className="w-16 h-16 bg-cyan-200 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📚</span>
                  </div>
                </div>
                <div className="absolute top-0 right-0 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  33%
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Month 1</h3>
              <p className="font-semibold text-gray-700 mb-2">Foundation & Tools</p>
              <p className="text-sm text-gray-600">
                Domain learning, tools setup, theory sessions
              </p>
            </div>

            {/* Month 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center mx-auto">
                  <div className="w-16 h-16 bg-cyan-300 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                </div>
                <div className="absolute top-0 right-0 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  66%
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Month 2</h3>
              <p className="font-semibold text-gray-700 mb-2">Project Execution</p>
              <p className="text-sm text-gray-600">
                Live projects, assignments, review cycles
              </p>
            </div>

            {/* Month 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-cyan-400 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">⚙️</span>
                </div>
                <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  100%
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Month 3</h3>
              <p className="font-semibold text-gray-700 mb-2">Simulation & Review</p>
              <p className="text-sm text-gray-600">
                Final project, soft skills, feedback, review
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">
                The Future of Work is Changing. Are You Ready?
              </h2>
              <p className="text-lg mb-4 text-blue-100">The Solution?</p>
              <h3 className="text-3xl font-bold mb-6">
                Goanny's 3-Month Internship & Training Certification
              </h3>
              <p className="text-lg text-blue-100 mb-8">
                Whether you're looking for a new job, a career change, or finding more courses, 
                we have an all-in-one solution for you. Click below to find out more and get started.
              </p>
              <a
                href="/contact"
                className="inline-block bg-blue-500 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-600 transition-all shadow-lg text-lg"
              >
                APPLY NOW
              </a>
            </div>

            <div className="bg-blue-800/30 backdrop-blur-sm rounded-3xl p-12 flex items-center justify-center min-h-[400px]">
              <div className="text-8xl">🚀</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}