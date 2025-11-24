"use client"
export default function BusinessIntelligence() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Business Intelligence (BI)
        </h1>

        <p className="text-lg text-gray-600 mb-10">
          Transform raw data into meaningful insights with Business Intelligence
          tools and analytics designed to support smarter decisions and long-term
          business growth.
        </p>

        {/* CARD */}
        <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-200">

          <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-left">
            What We Offer
          </h2>

          <ul className="space-y-4 text-gray-700 text-left">

            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">📊</span>
              Interactive dashboards and real-time business reporting
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">📈</span>
              Data visualization with Power BI, Tableau & Google Data Studio
            </li>

            <li className="flex items-start gap-3">
              <span className="text-purple-600 text-xl">🔎</span>
              Deep analytics for sales, finance, operations & marketing
            </li>

            <li className="flex items-start gap-3">
              <span className="text-orange-600 text-xl">🧮</span>
              Automated reporting systems for KPIs and performance metrics
            </li>

            <li className="flex items-start gap-3">
              <span className="text-red-600 text-xl">🗄️</span>
              Data warehousing & ETL (Extract, Transform, Load) setup
            </li>

            <li className="flex items-start gap-3">
              <span className="text-indigo-600 text-xl">⚙️</span>
              Integration with CRM, ERP, HRM & enterprise tools
            </li>

          </ul>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition"
            >
              Get BI Solutions
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
