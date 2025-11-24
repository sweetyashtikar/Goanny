export default function ComputerVisionPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <div className="max-w-5xl mx-auto">

        {/* PAGE TITLE */}
        <h1 className="text-4xl font-bold text-center mb-8">
          Computer Vision Solutions
        </h1>

        {/* INTRO SECTION */}
        <section className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-3">What is Computer Vision?</h2>
          <p className="text-gray-700 leading-relaxed">
            Computer Vision is a field of Artificial Intelligence that enables 
            machines to interpret and understand visual information from the world, 
            such as images and videos. It helps machines “see” and act intelligently 
            based on visual input.
          </p>
        </section>

        {/* KEY SOLUTIONS SECTION */}
        <section className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Computer Vision Solutions</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div className="p-5 bg-gray-50 rounded-xl border">
              <h3 className="font-semibold text-lg">1. Image Classification</h3>
              <p className="text-sm text-gray-700 mt-1">
                Automatically identify objects in an image using ML models.
              </p>
            </div>

            <div className="p-5 bg-gray-50 rounded-xl border">
              <h3 className="font-semibold text-lg">2. Object Detection</h3>
              <p className="text-sm text-gray-700 mt-1">
                Detect multiple objects in real-time with bounding boxes.
              </p>
            </div>

            <div className="p-5 bg-gray-50 rounded-xl border">
              <h3 className="font-semibold text-lg">3. Facial Recognition</h3>
              <p className="text-sm text-gray-700 mt-1">
                Identify and verify faces for authentication & security.
              </p>
            </div>

            <div className="p-5 bg-gray-50 rounded-xl border">
              <h3 className="font-semibold text-lg">4. Image Segmentation</h3>
              <p className="text-sm text-gray-700 mt-1">
                Divide an image into meaningful sections for precise analysis.
              </p>
            </div>

            <div className="p-5 bg-gray-50 rounded-xl border">
              <h3 className="font-semibold text-lg">5. OCR (Text Extraction)</h3>
              <p className="text-sm text-gray-700 mt-1">
                Convert images or documents into editable and searchable text.
              </p>
            </div>

            <div className="p-5 bg-gray-50 rounded-xl border">
              <h3 className="font-semibold text-lg">6. Video Analytics</h3>
              <p className="text-sm text-gray-700 mt-1">
                Analyze live or recorded video footage for behavior detection.
              </p>
            </div>

          </div>
        </section>

        {/* INDUSTRY USE CASES */}
        <section className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Industry Use Cases</h2>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Retail: Customer behavior tracking & automated checkouts</li>
            <li>Healthcare: Medical image analysis (X-rays, MRI, CT scans)</li>
            <li>Automotive: Self-driving vehicle visual systems</li>
            <li>Security: Surveillance cameras & intrusion detection</li>
            <li>Agriculture: Crop monitoring & disease detection</li>
            <li>Manufacturing: Quality inspection on assembly lines</li>
          </ul>
        </section>

        {/* TECHNOLOGIES USED */}
        <section className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Technologies We Use</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-xl border text-center">
              <p className="font-semibold">OpenCV</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border text-center">
              <p className="font-semibold">TensorFlow</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border text-center">
              <p className="font-semibold">PyTorch</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border text-center">
              <p className="font-semibold">YOLO</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border text-center">
              <p className="font-semibold">Keras</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border text-center">
              <p className="font-semibold">MediaPipe</p>
            </div>
          </div>
        </section>

        {/* SUMMARY */}
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-3">Summary</h2>
          <p className="text-gray-700 leading-relaxed">
            Computer Vision solutions enable businesses to automate visual tasks, 
            increase accuracy, and unlock powerful insights from images and videos. 
            Our solutions are designed to deliver high-speed, scalable, and 
            AI-driven automation for real-world applications.
          </p>
        </section>

      </div>
    </div>
  );
}
