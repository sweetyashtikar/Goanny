"use client"
export default function BigDataSolutions() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Big Data Solutions
        </h1>

        <p className="text-lg text-gray-600 mb-10">
          Manage and analyze large-scale data using advanced big data technologies 
          to uncover insights, improve decision-making, and drive business growth.
        </p>

        {/* CARD */}
        <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-200">

          <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-left">
            What We Offer
          </h2>

          <ul className="space-y-4 text-gray-700 text-left">

            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">🗄️</span>
              Large-scale data processing with Hadoop, Spark & Kafka
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">📦</span>
              Data lake & data warehouse setup for structured and unstructured data
            </li>

            <li className="flex items-start gap-3">
              <span className="text-purple-600 text-xl">⚡</span>
              Real-time analytics and streaming data pipelines
            </li>

            <li className="flex items-start gap-3">
              <span className="text-orange-600 text-xl">🔍</span>
              Predictive analytics using large datasets and ML models
            </li>

            <li className="flex items-start gap-3">
              <span className="text-red-600 text-xl">🔗</span>
              Integration with cloud platforms (AWS, Azure, GCP) for scalable storage
            </li>

            <li className="flex items-start gap-3">
              <span className="text-indigo-600 text-xl">🛠️</span>
              ETL workflows, data pipelines & enterprise-level data orchestration
            </li>

          </ul>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition"
            >
              Get Big Data Solutions
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
