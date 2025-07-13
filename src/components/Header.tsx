import React, { useState } from 'react';
import { Home, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Real Trust</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium">HOME</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">SERVICES</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 font-medium">OUR PROJECTS</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium">TESTIMONIALS</a>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium transition-colors">
              CONTACT
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">HOME</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">SERVICES</a>
              <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-blue-600">OUR PROJECTS</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-blue-600">TESTIMONIALS</a>
              <button className="w-full mt-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium">
                CONTACT
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;