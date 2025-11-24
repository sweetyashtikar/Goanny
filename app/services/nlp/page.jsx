"use client"
export default function NLPPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <div className="max-w-5xl mx-auto">

        {/* PAGE TITLE */}
        <h1 className="text-4xl font-bold text-center mb-8">
          Natural Language Processing (NLP)
        </h1>

        {/* INTRO SECTION */}
        <section className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-3">What is NLP?</h2>
          <p className="text-gray-700 leading-relaxed">
            Natural Language Processing (NLP) is a field of Artificial Intelligence 
            focused on enabling computers to understand, interpret, and generate 
            human language. NLP bridges the gap between human communication and 
            machine understanding.
          </p>
        </section>

        {/* HOW NLP WORKS */}
        <section className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">How Does NLP Work?</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Text Preprocessing (tokenization, stemming, lemmatization)</li>
            <li>Understanding grammar & sentence structure</li>
            <li>Extracting meaning from text</li>
            <li>Training machine learning models on language data</li>
            <li>Generating meaningful responses</li>
          </ul>
        </section>

        {/* NLP TASKS */}
        <section className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Common NLP Tasks</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="p-4 bg-gray-50 rounded-lg border">
              <h3 className="font-semibold">1. Text Classification</h3>
              <p className="text-sm text-gray-700">
                Sentiment analysis, spam detection, topic labeling.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border">
              <h3 className="font-semibold">2. Named Entity Recognition (NER)</h3>
              <p className="text-sm text-gray-700">
                Identifying names, dates, locations, organizations.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border">
              <h3 className="font-semibold">3. Machine Translation</h3>
              <p className="text-sm text-gray-700">
                Converting text between languages (e.g., English → Hindi).
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border">
              <h3 className="font-semibold">4. Text Summarization</h3>
              <p className="text-sm text-gray-700">
                Creating concise summaries from large text.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border">
              <h3 className="font-semibold">5. Speech Recognition</h3>
              <p className="text-sm text-gray-700">
                Converting spoken audio into text.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border">
              <h3 className="font-semibold">6. Chatbots & Voice Assistants</h3>
              <p className="text-sm text-gray-700">
                AI that interacts with users using natural language.
              </p>
            </div>
          </div>
        </section>

        {/* REAL-WORLD USE CASES */}
        <section className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Real-World Use Cases of NLP</h2>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Google Search autocomplete</li>
            <li>Voice Assistants (Siri, Alexa, Google Assistant)</li>
            <li>Language Translation (Google Translate)</li>
            <li>Customer Support Chatbots</li>
            <li>Email spam filtering</li>
            <li>Social media sentiment analysis</li>
          </ul>
        </section>

        {/* SUMMARY */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-3">Summary</h2>
          <p className="text-gray-700 leading-relaxed">
            NLP plays a crucial role in allowing machines to understand human 
            language and respond intelligently. It powers many modern applications, 
            from chatbots to search engines, making it a key technology in the AI world.
          </p>
        </section>

      </div>
    </div>
  );
}
