"use client";
import { Target, Mail, Twitter, Github, Linkedin, ArrowUp } from "lucide-react";
import React, { useState, useEffect } from "react";

function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Templates", "AI Tutor"],
    },
    {
      title: "Company",
      links: ["About", "Careers", "Blog", "Press"],
    },
    {
      title: "Support",
      links: ["Help Center", "Contact", "Status", "API Docs"],
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms", "Security", "Cookies"],
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 border-t border-purple-500/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Brand section */}
            <div className="lg:col-span-4">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/25">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-30 animate-pulse"></div>
                </div>
                <div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    PrepAce
                  </span>
                  <p className="text-sm text-purple-300 font-medium">
                    Ace Every Test
                  </p>
                </div>
              </div>

              <p className="text-gray-400 mb-8 leading-relaxed max-w-sm">
                Master any subject with AI-powered practice tests and
                personalized learning paths. Your success story starts here.
              </p>

              {/* Social links */}
              <div className="flex space-x-4">
                {[
                  {
                    icon: Twitter,
                    label: "Twitter",
                    color: "hover:text-blue-400",
                  },
                  {
                    icon: Github,
                    label: "GitHub",
                    color: "hover:text-gray-300",
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    color: "hover:text-blue-500",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    color: "hover:text-purple-400",
                  },
                ].map(({ icon: Icon, label, color }) => (
                  <button
                    key={label}
                    className={`w-10 h-10 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 hover:scale-110 hover:bg-white/10 ${color} hover:border-current group`}
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                  </button>
                ))}
              </div>
            </div>

            {/* Links sections */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {footerLinks.map((section) => (
                  <div key={section.title}>
                    <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.links.map((link) => (
                        <li key={link}>
                          <a
                            href="#"
                            className="text-gray-400 hover:text-white transition-all duration-300 text-sm hover:translate-x-1 inline-block relative group"
                            onMouseEnter={() => setHoveredLink(link)}
                            onMouseLeave={() => setHoveredLink(null)}
                          >
                            {link}
                            <span
                              className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 ${
                                hoveredLink === link ? "w-full" : ""
                              }`}
                            ></span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <p>&copy; 2025 PrepAce. All rights reserved.</p>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <span className="text-gray-500">Made with</span>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse"></div>
                <span className="text-gray-400">for learners worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-2xl shadow-purple-500/25 hover:scale-110 transition-all duration-300 z-50 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
        </button>
      )}
    </footer>
  );
}

export default Footer;
