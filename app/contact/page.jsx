"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle, XCircle } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("SUCCESS");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      console.error("Form submit error", error);
      setStatus("ERROR");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Header */}
      <div className="relative bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTI0IDQyYzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-10"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? We'd love to hear
            from you. Share your thoughts, ideas or feedback, and we'll get back
            to you shortly.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 -mt-12">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info - Left Side */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Cards */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-1">Address</h4>
                    <p className="text-gray-900 font-medium">123 Goanny St, Tech City, Country</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-1">Phone</h4>
                    <p className="text-gray-900 font-medium">+1 (234) 567-8901</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-1">Email</h4>
                    <p className="text-gray-900 font-medium">contact@goanny.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info Card */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Let's Create Something Amazing</h3>
              <p className="text-blue-100 mb-4">
                We're here to help turn your ideas into reality. Whether it's a new project, partnership opportunity, or just a friendly chat about technology.
              </p>
              <div className="flex items-center gap-2 text-sm text-blue-200">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Available Monday - Friday, 9AM - 6PM</span>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              
              <div className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 hover:border-blue-400"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 hover:border-blue-400"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 hover:border-blue-400"
                    placeholder="Enter subject"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 hover:border-blue-400 resize-none"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {status === "SUCCESS" && (
                  <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl animate-fade-in">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <p className="text-green-800 font-medium">
                      Message sent successfully! We'll get back to you soon.
                    </p>
                  </div>
                )}
                
                {status === "ERROR" && (
                  <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl animate-fade-in">
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                    <p className="text-red-800 font-medium">
                      Oops! Something went wrong. Please try again.
                    </p>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Map or Additional Section */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl h-96 flex items-center justify-center shadow-inner">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 font-medium">Map Integration Placeholder</p>
            <p className="text-sm text-gray-500 mt-2">Add your Google Maps embed here</p>
          </div>
        </div>
      </div>
    </div>
  );
}