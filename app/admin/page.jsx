// ========================================
// FILE: AdminPanel.jsx (Updated with Image Upload)
// ========================================

"use client";
import { useState, useEffect } from "react";

const blogCategories = ["Web Development", "Mobile Development", "Technology", "Cloud", "Design", "Security"];

export default function AdminPanel() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "Technology",
    author: "",
    readTime: "",
    slug: "",
    image: null
  });
  const [imagePreview, setImagePreview] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/blogs");
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Auto-generate slug from title
    if (name === "title") {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
      setFormData(prev => ({ ...prev, slug }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('excerpt', formData.excerpt);
      formDataToSend.append('content', formData.content);
      formDataToSend.append('category', formData.category);
      formDataToSend.append('author', formData.author);
      formDataToSend.append('readTime', formData.readTime);
      formDataToSend.append('slug', formData.slug);
      
      if (formData.image) {
        formDataToSend.append('image', formData.image);
      }

      const url = editingId 
        ? `http://localhost:5000/api/blogs/${editingId}`
        : "http://localhost:5000/api/blogs";
      
      const method = editingId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        body: formDataToSend
      });

      if (response.ok) {
        setMessage({ type: "success", text: editingId ? "Blog updated successfully!" : "Blog created successfully!" });
        resetForm();
        fetchBlogs();
      } else {
        const error = await response.json();
        setMessage({ type: "error", text: error.message || "Error saving blog" });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Error saving blog" });
    } finally {
      setLoading(false);
      setTimeout(() => setMessage({ type: "", text: "" }), 3000);
    }
  };

  const handleEdit = (blog) => {
    setFormData({
      title: blog.title,
      excerpt: blog.excerpt,
      content: blog.content,
      category: blog.category,
      author: blog.author,
      readTime: blog.readTime,
      slug: blog.slug,
      image: null
    });
    setImagePreview(blog.image ? `http://localhost:5000${blog.image}` : "");
    setEditingId(blog._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;

    try {
      const response = await fetch(`http://localhost:5000/api/blogs/${id}`, {
        method: "DELETE"
      });

      if (response.ok) {
        setMessage({ type: "success", text: "Blog deleted successfully!" });
        fetchBlogs();
      }
    } catch (error) {
      setMessage({ type: "error", text: "Error deleting blog" });
    }
    setTimeout(() => setMessage({ type: "", text: "" }), 3000);
  };

  const resetForm = () => {
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      category: "Technology",
      author: "",
      readTime: "",
      slug: "",
      image: null
    });
    setImagePreview("");
    setEditingId(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Blog Admin Panel</h1>
          <p className="text-gray-600">Create and manage your blog posts</p>
        </div>

        {/* Message Alert */}
        {message.text && (
          <div className={`mb-6 p-4 rounded-lg ${
            message.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
          }`}>
            {message.text}
          </div>
        )}

        {/* Blog Form */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            {editingId ? "Edit Blog" : "Create New Blog"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Image Upload */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Blog Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              {imagePreview && (
                <div className="mt-4">
                  <img 
                    src={imagePreview} 
                    alt="Preview" 
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter blog title"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Author *
                </label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter author name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {blogCategories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Read Time *
                </label>
                <input
                  type="text"
                  name="readTime"
                  value={formData.readTime}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="e.g., 5 min read"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Slug *
                </label>
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="url-friendly-slug"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Excerpt *
              </label>
              <textarea
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                required
                rows="2"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Short description of the blog post"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Content *
              </label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
                rows="12"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Full blog content (supports markdown)"
              />
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors disabled:bg-gray-400"
              >
                {loading ? "Saving..." : editingId ? "Update Blog" : "Create Blog"}
              </button>
              
              {editingId && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Existing Blogs */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">All Blogs ({blogs.length})</h2>
          
          <div className="space-y-4">
            {blogs.map(blog => (
              <div key={blog._id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex gap-4">
                  {blog.image && (
                    <img 
                      src={`http://localhost:5000${blog.image}`} 
                      alt={blog.title}
                      className="w-32 h-32 object-cover rounded-lg flex-shrink-0"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{blog.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {blog.category} • {blog.author} • {blog.date}
                    </p>
                    <p className="text-gray-700 mb-2">{blog.excerpt}</p>
                    <span className="text-xs text-purple-600 font-semibold">/{blog.slug}</span>
                  </div>
                  <div className="flex gap-2 ml-4 flex-shrink-0">
                    <button
                      onClick={() => handleEdit(blog)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold h-fit"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(blog._id)}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-semibold h-fit"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
