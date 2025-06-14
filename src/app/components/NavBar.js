import { Menu, Target, X } from "lucide-react";
import React from "react";

function NavBar({ isMenuOpen }) {
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
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Courses
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Practice
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Resources
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Pricing
              </a>
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
              <a href="#" className="block text-gray-300 hover:text-white">
                Courses
              </a>
              <a href="#" className="block text-gray-300 hover:text-white">
                Practice
              </a>
              <a href="#" className="block text-gray-300 hover:text-white">
                Resources
              </a>
              <a href="#" className="block text-gray-300 hover:text-white">
                Pricing
              </a>
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
