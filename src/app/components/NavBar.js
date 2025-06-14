import { Menu, Target, X, ChevronDown } from "lucide-react";
import React, { useState } from "react";

function NavBar({ isMenuOpen, setIsMenuOpen }) {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    {
      name: "Career Planning",
      submenu: [
        { name: "Depart", href: "#" },
        { name: "Data Science", href: "#" },
        { name: "Mobile Development", href: "#" },
        { name: "UI/UX Design", href: "#" },
      ],
    },
    {
      name: "Learning",
      submenu: [
        { name: "Coding Challenges", href: "#" },
        { name: "Mock Interviews", href: "#" },
        { name: "Project Labs", href: "#" },
        { name: "Skill Assessments", href: "#" },
      ],
    },
    {
      name: "Preparation",
      submenu: [
        { name: "Documentation", href: "#" },
        { name: "Tutorials", href: "#" },
        { name: "Community", href: "#" },
        { name: "Blog", href: "#" },
      ],
    },
    {
      name: "For Company",
      submenu: [
        { name: "Individual Plans", href: "#" },
        { name: "Team Plans", href: "#" },
        { name: "Enterprise", href: "#" },
        { name: "Free Trial", href: "#" },
      ],
    },
  ];

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <>
      <nav className="relative z-50 bg-black/10 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">PrepAce</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <div key={item.name} className="relative group">
                  <button
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                    onMouseEnter={() => setActiveDropdown(index)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {/* Desktop Dropdown */}
                  {activeDropdown === index && (
                    <div
                      className="absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-md border border-white/10 rounded-lg shadow-xl"
                      onMouseEnter={() => setActiveDropdown(index)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10">
            <div className="px-4 py-4 space-y-4">
              {menuItems.map((item, index) => (
                <div key={item.name}>
                  <button
                    className="flex items-center justify-between w-full text-gray-300 hover:text-white transition-colors"
                    onClick={() => handleDropdownToggle(index)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Mobile Submenu */}
                  {activeDropdown === index && (
                    <div className="mt-2 ml-4 space-y-2">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block text-gray-400 hover:text-white transition-colors py-1"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default NavBar;
