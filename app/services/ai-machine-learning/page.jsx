"use client"
export default function AIMachineLearning() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <div className="max-w-4xl mx-auto">

        {/* PAGE TITLE */}
        <h1 className="text-4xl font-bold text-center mb-6">
          AI & Machine Learning
        </h1>

        {/* INTRO SECTION */}
        <section className="bg-white p-6 rounded-xl shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-3">What is AI?</h2>
          <p className="text-gray-700 leading-relaxed">
            Artificial Intelligence (AI) is a branch of computer science that focuses 
            on building systems capable of performing tasks that normally require 
            human intelligence. These include learning, reasoning, problem-solving, 
            language understanding, and decision-making.
          </p>
        </section>

        {/* MACHINE LEARNING SECTION */}
        <section className="bg-white p-6 rounded-xl shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-3">What is Machine Learning?</h2>
          <p className="text-gray-700 leading-relaxed">
            Machine Learning (ML) is a subset of AI that allows computers to learn 
            automatically from data without being explicitly programmed. ML algorithms 
            improve themselves based on experience and patterns found in data.
          </p>
        </section>

        {/* TYPES OF ML */}
        <section className="bg-white p-6 rounded-xl shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-4">Types of Machine Learning</h2>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Supervised Learning:</strong> Models learn from labeled data.  
              Example: Email Spam Detection.
            </li>
            <li>
              <strong>Unsupervised Learning:</strong> Models find patterns in 
              unlabeled data. Example: Customer Segmentation.
            </li>
            <li>
              <strong>Reinforcement Learning:</strong> Learning based on rewards 
              and punishments. Example: Game-playing AI.
            </li>
          </ul>
        </section>

        {/* APPLICATIONS SECTION */}
        <section className="bg-white p-6 rounded-xl shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-4">Applications of AI & ML</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg border">
              <h3 className="font-semibold">Healthcare</h3>
              <p className="text-sm text-gray-700">Disease prediction & diagnosis.</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border">
              <h3 className="font-semibold">Finance</h3>
              <p className="text-sm text-gray-700">Fraud detection & trading models.</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border">
              <h3 className="font-semibold">E-Commerce</h3>
              <p className="text-sm text-gray-700">Product recommendations.</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border">
              <h3 className="font-semibold">Automotive</h3>
              <p className="text-sm text-gray-700">Self-driving cars.</p>
            </div>
          </div>
        </section>

        {/* SUMMARY */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-3">Summary</h2>
          <p className="text-gray-700 leading-relaxed">
            AI and Machine Learning are transforming industries worldwide.  
            With advancements in deep learning and neural networks, machines are 
            becoming smarter, faster, and more capable than ever.
          </p>
        </section>

      </div>
    </div>
  );
}
