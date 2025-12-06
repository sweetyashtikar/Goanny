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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.status === "success") {
        setStatus("SUCCESS");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">

      {/* Header */}
      <div className="relative bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 py-20 px-6">
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white">Get in Touch</h2>
          <p className="text-blue-200 mt-3 text-lg">
            Have a project or want to say hello? We’re here.
          </p>
        </div>
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 -mt-12">
        <div className="grid lg:grid-cols-5 gap-10">

          {/* CONTACT INFORMATION */}
          <div className="lg:col-span-2 space-y-6">

            <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-5 text-black">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="text-indigo-600" />
                  <p className="text-gray-700 font-medium">123 Goanny St, Tech City</p>
                </div>

                <div className="flex gap-4">
                  <Phone className="text-indigo-600" />
                  <p className="text-gray-700 font-medium">+1 (234) 567-8901</p>
                </div>

                <div className="flex gap-4">
                  <Mail className="text-indigo-600" />
                  <p className="text-gray-700 font-medium">contact@goanny.com</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-2">Let’s Build Something!</h3>
              <p className="text-gray-200">We’re available Mon–Fri, 9AM–6PM.</p>
            </div>
          </div>

          {/* FORM SECTION */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-xl p-10 border border-gray-200 space-y-5"
            >
              <h3 className="text-2xl font-bold text-black">Send us a message</h3>

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="px-4 py-3 w-full bg-gray-50 border border-gray-300 rounded-xl text-gray-700 focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="px-4 py-3 w-full bg-gray-50 border border-gray-300 rounded-xl text-gray-700 focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="px-4 py-3 w-full bg-gray-50 border border-gray-300 rounded-xl text-gray-700 focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Enter Message"
                required
                value={formData.message}
                onChange={handleChange}
                className="px-4 py-3 w-full bg-gray-50 border border-gray-300 rounded-xl text-gray-700 focus:ring-2 focus:ring-blue-500"
              ></textarea>

              {/* Submit Button */}
              <button
                disabled={isSubmitting}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-semibold w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-5" />
              </button>

              {/* Status Message */}
              {status === "SUCCESS" && (
                <p className="flex items-center gap-2 text-green-600 font-semibold mt-3">
                  <CheckCircle /> Message Sent Successfully!
                </p>
              )}

              {status === "ERROR" && (
                <p className="flex items-center gap-2 text-red-600 font-semibold mt-3">
                  <XCircle /> Failed to send message. Try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

    </div>
  );
}
