"use client"
export default function IVA() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* PAGE TITLE */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Intelligent Virtual Assistants (IVA)
        </h1>

        <p className="text-lg text-gray-600 mb-10">
          Enhance customer experience with AI-driven virtual assistants designed
          to understand, respond, and automate human-like conversations.
        </p>

        {/* CARD */}
        <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
          
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-left">
            What We Provide
          </h2>

          <ul className="space-y-4 text-gray-700 text-left">

            <li className="flex items-start gap-3">
              <span className="text-blue-600 text-xl">💬</span>
              AI-powered chat and voice assistants for websites & apps
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">🧠</span>
              Natural language understanding (NLU) for smarter responses
            </li>

            <li className="flex items-start gap-3">
              <span className="text-purple-600 text-xl">📞</span>
              Multichannel support: Web, WhatsApp, Messenger, Phone & Email
            </li>

            <li className="flex items-start gap-3">
              <span className="text-orange-600 text-xl">⚡</span>
              Automating customer queries, bookings & support operations
            </li>

            <li className="flex items-start gap-3">
              <span className="text-red-600 text-xl">🔗</span>
              Integration with CRM, ERP, and API systems
            </li>

            <li className="flex items-start gap-3">
              <span className="text-indigo-600 text-xl">🤖</span>
              Personalized IVA with memory, preferences & context awareness
            </li>

          </ul>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition"
            >
              Build an IVA for Your Business
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
