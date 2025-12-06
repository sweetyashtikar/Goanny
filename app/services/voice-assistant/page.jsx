export default function VoiceAssistantIntegration() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <div className="max-w-5xl mx-auto">

        {/* PAGE TITLE */}
        <h1 className="text-4xl font-bold text-center mb-8">
          Voice Assistant Integration (Alexa / Google Assistant)
        </h1>

        {/* INTRO SECTION */}
        <section className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-3">What is Voice Assistant Integration?</h2>
          <p className="text-gray-700 leading-relaxed">
            Voice Assistant Integration enables your applications, devices, and services 
            to work with popular voice platforms such as Amazon Alexa and Google Assistant. 
            It allows users to perform tasks hands-free using natural voice commands.
          </p>
        </section>

        {/* FEATURES / SOLUTIONS */}
        <section className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Voice Assistant Solutions</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div className="p-5 bg-gray-50 rounded-xl border">
              <h3 className="font-semibold text-lg">1. Alexa Skill Development</h3>
              <p className="text-sm text-gray-700 mt-1">
                Custom Alexa Skills to help users interact with your product 
                using voice commands.
              </p>
            </div>

            <div className="p-5 bg-gray-50 rounded-xl border">
              <h3 className="font-semibold text-lg">2. Google Action Development</h3>
              <p className="text-sm text-gray-700 mt-1">
                Build powerful Actions on Google (Assistant apps) for your 
                brand or services.
              </p>
            </div>

            <div className="p-5 bg-gray-50 rounded-xl border">
              <h3 className="font-semibold text-lg">3. Smart Home Device Integration</h3>
              <p className="text-sm text-gray-700 mt-1">
                Control IoT and smart home devices directly using Alexa or Google Assistant.
              </p>
            </div>

            <div className="p-5 bg-gray-50 rounded-xl border">
              <h3 className="font-semibold text-lg">4. Voice-Enabled Mobile Apps</h3>
              <p className="text-sm text-gray-700 mt-1">
                Integrate voice commands into mobile applications for automation & ease.
              </p>
            </div>

            <div className="p-5 bg-gray-50 rounded-xl border">
              <h3 className="font-semibold text-lg">5. Custom Voice AI Assistants</h3>
              <p className="text-sm text-gray-700 mt-1">
                Build personalized voice assistants tailored for your business needs.
              </p>
            </div>

            <div className="p-5 bg-gray-50 rounded-xl border">
              <h3 className="font-semibold text-lg">6. Voice UX Consulting</h3>
              <p className="text-sm text-gray-700 mt-1">
                Designing smooth, user-friendly voice experiences for your products.
              </p>
            </div>

          </div>
        </section>

        {/* USE CASES */}
        <section className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Voice Assistant Use Cases</h2>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Smart Home Automation</li>
            <li>Customer Support & Information Services</li>
            <li>Voice-Controlled Mobile/Tablet Apps</li>
            <li>Healthcare voice assistants</li>
            <li>Hands-free shopping & ordering systems</li>
            <li>Industrial automation using voice commands</li>
          </ul>
        </section>

        {/* TECHNOLOGIES */}
        <section className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Technologies We Use</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-xl border text-center">
              <p className="font-semibold">Alexa Skills Kit (ASK)</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl border text-center">
              <p className="font-semibold">Google Actions SDK</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl border text-center">
              <p className="font-semibold">Dialogflow CX / ES</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl border text-center">
              <p className="font-semibold">Node.js / Python Backends</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl border text-center">
              <p className="font-semibold">IoT Protocols (MQTT/ BLE)</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl border text-center">
              <p className="font-semibold">Voice UI Design</p>
            </div>
          </div>
        </section>

        {/* SUMMARY */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-3">Summary</h2>
          <p className="text-gray-700 leading-relaxed">
            Voice Assistant Integration allows your business to provide smarter, 
            hands-free, and faster interactions for users. With Alexa and Google 
            Assistant integrations, you can automate tasks, enhance customer 
            experiences, and build innovative voice-controlled products.
          </p>
        </section>

      </div>
    </div>
  );
}
