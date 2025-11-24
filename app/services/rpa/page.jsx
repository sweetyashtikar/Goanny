"use client"
export default function RPA() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Robotic Process Automation (RPA)
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Automate repetitive tasks, increase efficiency, reduce errors, 
          and streamline business workflows using advanced RPA solutions.
        </p>

        {/* Card */}
        <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-left">
            What We Offer
          </h2>

          <ul className="space-y-4 text-gray-700 text-left">
            <li className="flex items-center gap-3">
              <span className="text-blue-600 text-xl">⚙️</span>
              Automating repetitive administrative tasks
            </li>

            <li className="flex items-center gap-3">
              <span className="text-green-600 text-xl">🤖</span>
              Creating bots for data entry and data extraction
            </li>

            <li className="flex items-center gap-3">
              <span className="text-purple-600 text-xl">📊</span>
              Workflow automation for finance, HR & operations
            </li>

            <li className="flex items-center gap-3">
              <span className="text-orange-600 text-xl">🔗</span>
              Integration with third-party systems and APIs
            </li>

            <li className="flex items-center gap-3">
              <span className="text-red-600 text-xl">⚡</span>
              Boosting productivity with AI-assisted RPA bots
            </li>
          </ul>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition"
            >
              Get RPA Solutions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
