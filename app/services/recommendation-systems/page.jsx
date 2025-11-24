export default function RecommendationSystems() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Recommendation Systems
        </h1>

        <p className="text-lg text-gray-600 mb-10">
          Deliver personalized product, content, and service recommendations 
          using advanced machine learning algorithms designed to increase 
          conversions and user engagement.
        </p>

        {/* CARD */}
        <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-200">

          <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-left">
            What We Offer
          </h2>

          <ul className="space-y-4 text-gray-700 text-left">

            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">🎯</span>
              Personalized product recommendations for e-commerce platforms
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">📺</span>
              Movie, music, and content recommendations for media platforms
            </li>

            <li className="flex items-start gap-3">
              <span className="text-purple-600 text-xl">📊</span>
              Collaborative filtering & content-based recommendation engines
            </li>

            <li className="flex items-start gap-3">
              <span className="text-orange-600 text-xl">🔍</span>
              Real-time ranking and personalized search suggestions
            </li>

            <li className="flex items-start gap-3">
              <span className="text-red-600 text-xl">📈</span>
              Behavior-driven recommendations powered by deep learning
            </li>

            <li className="flex items-start gap-3">
              <span className="text-indigo-600 text-xl">🔗</span>
              Integration with your existing apps, websites, or CRM
            </li>

          </ul>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition"
            >
              Build Your Recommendation Engine
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
