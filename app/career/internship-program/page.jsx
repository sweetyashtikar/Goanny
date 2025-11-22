"use client";

export default function InternshipProgram() {
  const internships = [
    {
      title: "Web Development Internship",
      duration: "2 Months",
      mode: "Remote / In-Office",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    },
    {
      title: "UI/UX Design Internship",
      duration: "2 Months",
      mode: "Remote / In-Office",
      skills: ["Figma", "Wireframing", "Prototyping"],
    },
    {
      title: "Digital Marketing Internship",
      duration: "1 Month",
      mode: "Remote",
      skills: ["SEO", "Social Media Marketing", "Content Writing"],
    },
    {
      title: "Graphic Design Internship",
      duration: "1 Month",
      mode: "Remote",
      skills: ["Adobe Photoshop", "Illustrator", "Canva"],
    },
  ];

  return (
    <div className="w-full py-16 px-6 bg-gray-50">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Internship Program
        </h1>
        <p className="text-gray-600 text-lg">
          Join our internship program and gain real-world experience with live
          projects.
        </p>
      </div>

      {/* Internship Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {internships.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {item.title}
            </h2>

            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Duration:</span> {item.duration}
            </p>

            <p className="text-gray-700 mb-3">
              <span className="font-semibold">Mode:</span> {item.mode}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-4">
              {item.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Apply Button */}
            <button className="w-full py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
