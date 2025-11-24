"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import path from "path";

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  {
    name: "OUR SERVICES",
    path: "/services",
    subMenu: [
      {
        category: "TECHNICAL SERVICES",
        items: [
          { name: "Database Development", path: "/services/database-development" },
          { name: "React JS Development", path: "/services/reactjs-development" },
          { name: "Mobile Application Development", path: "/services/mobile-application-development" },
          { name: "React Native", path: "/services/react-native" },
          { name: "Business Automation", path: "/services/business-automation" },
          { name: "Web Design & Development", path: "/services/web-design-development" },
          { name: "Support & Management", path: "/services/support-management" },
          { name: "Cloud Application Development", path: "/services/cloud-application-development" },
          { name: "Custom Software Development", path: "/services/custom-software-development" },
          { name: "Technical Consulting", path: "/services/technical-consulting" },
          { name: "E-commerce Development", path: "/services/ecommerce-development" },
          { name: "Product Design & Development", path: "/services/product-design-development" },
          { name: "ReactJs", path: "/services/reactjs" },
          { name: "UI/UX Design", path: "/services/ui-ux-design" },
          { name: "Chatbot Development", path: "/services/chatbot-development" },
          { name: "Andriod iOS App Development", path: "/services/andriod-ios-app-development" },
          {name: "AI-Machine-Learning", path: "/services/ai-machine-learning"},
          {name:"Natural Language Processing (NLP)", path: "/nlp"}
        ]
      },
      {
        category: "DIGITAL SERVICES",
        items: [
          { name: "Digital Marketing", path: "/services/digital-marketing" },
        ]
      }
    ],
  },
  { name: "OUR WORK", path: "/work" },
  { name: "PORTFOLIO", path: "/portfolio" },
  {
    name: "OUR PRODUCTS",
    path: "/product",
    subMenu: [
      { name: "GoSmartTea", path: "/product/gosmartea" },
      { name: "Mining", path: "/product/mining" },
      { name: "HIMS", path: "/product/hims" },
    ],
  },
  {
    name: "CAREER",
    path: "/career",
    subMenu: [
      { name: "IT Internship & Certification Program", path: "/career/internship-program" },
    ],
  },
  { name: "BLOG", path: "/blog" },
  { name: "CONTACT", path: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggle = (name) => {
    setOpenMenu(openMenu === name ? null : name);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg py-2" : "bg-white/98 backdrop-blur-md py-3"
        }`}
    >
      <div className="max-w-[1500px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
          <Image
            src="/LOGO-removebg-preview.png"
            width={130}
            height={100}
            alt="Expert Logo"
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-2">
          {navLinks.map((item) =>
            !item.subMenu ? (
              <Link
                key={item.name}
                href={item.path}
                className="px-3 py-2 text-[13px] font-bold text-gray-700 hover:text-blue-600 transition-colors relative group uppercase tracking-wide"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ) : (
              <div key={item.name} className="relative group">
                <Link
                  href={item.path}
                  className="flex items-center gap-1 px-3 py-2 text-[13px] font-bold text-gray-700 hover:text-blue-600 transition-colors uppercase tracking-wide"
                >
                  {item.name}
                  <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-300" />
                </Link>

                {/* Modern Dropdown - Two Column for Services */}
                <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                  <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
                    {/* Services Dropdown with Two Columns */}
                    {item.name === "OUR SERVICES" ? (
                      <div className="flex">
                        {/* Left Column - Categories */}
                        <div className="w-64 bg-gray-50 border-r border-gray-200 p-4">
                          {item.subMenu.map((section, idx) => (
                            <button
                              key={idx}
                              className={`w-full text-left px-4 py-3 text-sm font-bold uppercase tracking-wide rounded-lg transition-all mb-2 ${idx === 0
                                  ? "bg-white text-gray-800 shadow-sm"
                                  : "text-gray-600 hover:bg-white hover:text-gray-800"
                                }`}
                            >
                              {section.category}
                              <ChevronDown className="w-4 h-4 inline-block ml-2" />
                            </button>
                          ))}
                        </div>

                        {/* Right Column - Services List */}
                        <div className="w-80 p-4 max-h-[500px] overflow-y-auto">
                          {item.subMenu.map((section, idx) => (
                            <div key={idx} className="mb-6 last:mb-0">
                              <div className="px-3 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                                {section.category}
                              </div>
                              <div className="space-y-1">
                                {section.items.map((sub) => (
                                  <Link
                                    key={sub.name}
                                    href={sub.path}
                                    className="block px-3 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 font-medium"
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      /* Regular Dropdown for Products & Career */
                      <div className="p-3 min-w-[300px]">
                        {item.subMenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.path}
                            className="block px-4 py-3 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-200 group/item"
                          >
                            <div className="font-semibold text-sm text-gray-800">{sub.name}</div>
                            {sub.desc && (
                              <div className="text-xs text-gray-500 mt-1 group-hover/item:text-blue-500">
                                {sub.desc}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((item) =>
              !item.subMenu ? (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-bold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all uppercase"
                >
                  {item.name}
                </Link>
              ) : (
                <div key={item.name}>
                  <div className="flex items-center gap-2">
                    <Link
                      href={item.path}
                      onClick={() => setMobileOpen(false)}
                      className="flex-1 px-4 py-3 text-sm font-bold text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all uppercase"
                    >
                      {item.name}
                    </Link>
                    <button
                      onClick={() => toggle(item.name)}
                      className="px-3 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${openMenu === item.name ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                  </div>

                  {openMenu === item.name && (
                    <div className="mt-2 ml-3 space-y-1 bg-gray-50 rounded-lg p-3">
                      {/* Services with categories */}
                      {item.name === "OUR SERVICES" ? (
                        item.subMenu.map((section, idx) => (
                          <div key={idx} className="mb-4 last:mb-0">
                            <div className="px-3 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider bg-white rounded-md mb-2">
                              {section.category}
                            </div>
                            {section.items.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.path}
                                onClick={() => setMobileOpen(false)}
                                className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-white rounded-md transition-all font-medium"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        ))
                      ) : (
                        item.subMenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.path}
                            onClick={() => setMobileOpen(false)}
                            className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-white rounded-md transition-all font-medium"
                          >
                            {sub.name}
                          </Link>
                        ))
                      )}
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}