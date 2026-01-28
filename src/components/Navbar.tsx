import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">Sculptor Studio</h1>
          </div>

          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`transition-colors ${isActive('/') ? 'text-gray-900 font-medium' : 'text-gray-700 hover:text-gray-900'}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`transition-colors ${isActive('/about') ? 'text-gray-900 font-medium' : 'text-gray-700 hover:text-gray-900'}`}
            >
              About
            </Link>
            <Link
              to="/gallery"
              className={`transition-colors ${isActive('/gallery') ? 'text-gray-900 font-medium' : 'text-gray-700 hover:text-gray-900'}`}
            >
              Gallery
            </Link>
            <Link
              to="/services"
              className={`transition-colors ${isActive('/services') ? 'text-gray-900 font-medium' : 'text-gray-700 hover:text-gray-900'}`}
            >
              Services
            </Link>
            <Link
              to="/blog"
              className={`transition-colors ${isActive('/blog') ? 'text-gray-900 font-medium' : 'text-gray-700 hover:text-gray-900'}`}
            >
              Journal
            </Link>
            <Link
              to="/contact"
              className={`transition-colors ${isActive('/contact') ? 'text-gray-900 font-medium' : 'text-gray-700 hover:text-gray-900'}`}
            >
              Contact
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${isActive('/') ? 'bg-gray-100 text-gray-900 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              Home
            </Link>
            <Link
              to="/gallery"
              onClick={() => setIsOpen(false)}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${isActive('/gallery') ? 'bg-gray-100 text-gray-900 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              Gallery
            </Link>
            <Link
              to="/services"
              onClick={() => setIsOpen(false)}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${isActive('/services') ? 'bg-gray-100 text-gray-900 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              Services
            </Link>
            <Link
              to="/blog"
              onClick={() => setIsOpen(false)}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${isActive('/blog') ? 'bg-gray-100 text-gray-900 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              Journal
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${isActive('/about') ? 'bg-gray-100 text-gray-900 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${isActive('/contact') ? 'bg-gray-100 text-gray-900 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
