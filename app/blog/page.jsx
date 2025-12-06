"use client";
import { useState, useEffect } from "react";

const blogCategories = ["All", "Web Development", "Mobile Development", "Technology", "Cloud", "Design", "Security"];

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/blogs");
      if (!response.ok) throw new Error("Failed to fetch blogs");
      const data = await response.json();
      setBlogPosts(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        setSubscribeStatus("success");
        setEmail("");
      } else {
        setSubscribeStatus("error");
      }
    } catch (err) {
      setSubscribeStatus("error");
    }
    
    setTimeout(() => setSubscribeStatus(""), 3000);
  };

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-24 h-24 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full border-4 border-indigo-200 animate-ping"></div>
            <div className="absolute inset-0 rounded-full border-4 border-t-indigo-600 animate-spin"></div>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Loading Articles</h3>
          <p className="text-gray-600">Preparing amazing content for you...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center border border-red-100">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">⚠️</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h3>
          <p className="text-red-600 mb-6">{error}</p>
          <button 
            onClick={fetchBlogPosts}
            className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 0 L0 0 0 10' fill='none' stroke='white' stroke-opacity='0.1' stroke-width='1'/%3E%3C/svg%3E")`
        }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-yellow-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span className="text-yellow-300 font-semibold uppercase tracking-wider text-sm">Knowledge Hub</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black text-white text-center mb-6 leading-tight">
            Discover. Learn. Grow.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 text-center max-w-3xl mx-auto mb-10 leading-relaxed">
            Explore cutting-edge insights, expert tutorials, and industry trends that empower your journey
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <svg className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search articles, topics, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-5 rounded-2xl bg-white/95 backdrop-blur-sm border-2 border-white/20 focus:border-white focus:outline-none shadow-2xl text-gray-800 placeholder-gray-500 text-lg transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-20">
        {/* Category Pills */}
        <div className="bg-white rounded-2xl shadow-xl p-4 mb-12 border border-gray-100">
          <div className="flex flex-wrap gap-3 justify-center">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium mb-1">Total Articles</p>
                <p className="text-4xl font-bold">{blogPosts.length}</p>
              </div>
              <svg className="w-12 h-12 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm font-medium mb-1">Categories</p>
                <p className="text-4xl font-bold">{blogCategories.length - 1}</p>
              </div>
              <svg className="w-12 h-12 text-purple-200" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
          </div>
          <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-pink-100 text-sm font-medium mb-1">Active Category</p>
                <p className="text-2xl font-bold">{selectedCategory}</p>
              </div>
              <svg className="w-12 h-12 text-pink-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {selectedCategory === "All" && blogPosts.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 w-1 h-8 rounded-full mr-3"></div>
              <h2 className="text-3xl font-bold text-gray-800">Featured Article</h2>
            </div>
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group hover:shadow-3xl transition-all duration-500">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 relative h-80 md:h-auto overflow-hidden">
                  {blogPosts[0].image ? (
                    <img 
                      src={`http://localhost:5000${blogPosts[0].image}`} 
                      alt={blogPosts[0].title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
                      <span className="text-white text-9xl font-black opacity-20">
                        {blogPosts[0].title.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-xs font-bold uppercase shadow-lg">
                      ⭐ Featured
                    </span>
                  </div>
                </div>
                <div className="md:col-span-3 p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-4 py-2 rounded-full text-xs font-bold uppercase">
                      {blogPosts[0].category}
                    </span>
                  </div>
                  <h2 className="text-4xl font-black text-gray-900 mb-4 leading-tight group-hover:text-indigo-600 transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="font-medium">{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{blogPosts[0].date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  <a
                    href={`/blog/${blogPosts[0].slug}`}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transition-all transform hover:scale-105 w-fit"
                  >
                    Read Full Article
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No articles found</h3>
            <p className="text-gray-600">Try adjusting your filters or search query</p>
          </div>
        ) : (
          <>
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-indigo-400 to-purple-500 w-1 h-8 rounded-full mr-3"></div>
              <h2 className="text-3xl font-bold text-gray-800">
                {selectedCategory === "All" ? "Latest Articles" : `${selectedCategory} Articles`}
              </h2>
              <span className="ml-4 bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm font-semibold">
                {filteredPosts.length}
              </span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredPosts.slice(selectedCategory === "All" ? 1 : 0).map((post) => (
                <article
                  key={post._id || post.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group"
                >
                  <div className="relative h-56 overflow-hidden">
                    {post.image ? (
                      <img 
                        src={`http://localhost:5000${post.image}`} 
                        alt={post.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 flex items-center justify-center">
                        <span className="text-white text-7xl font-black opacity-30">
                          {post.title.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/95 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-bold uppercase shadow-lg">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-indigo-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-bold">
                          {post.author.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{post.author}</p>
                          <p className="text-xs text-gray-500">{post.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <a
                      href={`/blog/${post.slug}`}
                      className="block mt-4 text-indigo-600 font-bold hover:text-indigo-700 transition-colors flex items-center gap-2"
                    >
                      Read More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}

        {/* Newsletter Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 md:p-16 mb-16 shadow-2xl">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 0 L0 0 0 10' fill='none' stroke='white' stroke-opacity='0.1' stroke-width='1'/%3E%3C/svg%3E")`
          }}></div>
          
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Stay In The Loop
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join 10,000+ subscribers and get the latest insights delivered straight to your inbox
            </p>
            
            <div className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-xl text-gray-800 focus:outline-none focus:ring-4 focus:ring-white/50 shadow-xl text-lg"
                />
                <button 
                  onClick={handleSubscribe}
                  className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </div>
              {subscribeStatus === "success" && (
                <div className="mt-4 bg-green-500 text-white px-6 py-3 rounded-xl font-semibold">
                  🎉 Successfully subscribed! Check your inbox.
                </div>
              )}
              {subscribeStatus === "error" && (
                <div className="mt-4 bg-red-500 text-white px-6 py-3 rounded-xl font-semibold">
                  ⚠️ Subscription failed. Please try again.
                </div>
              )}
            </div>
            
            <p className="text-white/70 text-sm mt-6">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}