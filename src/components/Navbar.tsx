import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="inline-flex items-center" aria-label="SCULPTMOORE home">
              <img
                src="https://res.cloudinary.com/cmpwim01/image/upload/v1795098791/Sculptmoore_Golden_Sculptural_Emblem-removebg-preview.png"
                alt="SCULPTMOORE"
                className="h-14 w-auto sm:h-16"
              />
            </Link>
          </div>

          <div className="hidden lg:flex space-x-6 xl:space-x-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`transition-colors ${isActive(link.to) ? 'text-gray-900 font-medium' : 'text-gray-700 hover:text-gray-900'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-200"
          >
            <div className="px-6 py-4 flex flex-col items-center gap-1">
              {links.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25, delay: 0.04 * index }}
                  className="w-full max-w-xs"
                >
                  <Link
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={`block w-full text-center px-3 py-2.5 rounded-md transition-colors ${isActive(link.to) ? 'bg-gray-100 text-gray-900 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
