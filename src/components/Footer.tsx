import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (event: FormEvent) => {
    event.preventDefault();
    if (!email.trim() || !agreed) return;
    setSubscribed(true);
    setEmail('');
    setAgreed(false);
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const contactInfo = [
    { icon: <MapPin size={18} />, text: '123 Artisan Lane, Creative District, New York, NY 10001' },
    { icon: <Phone size={18} />, text: '(555) 123-4567' },
    { icon: <Mail size={18} />, text: 'studio@sculptmoore.com' },
    { icon: <Clock size={18} />, text: 'Mon-Fri: 9AM-6PM, Sat: 10AM-4PM' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Studio Info */}
          <div>
            <Link to="/" className="inline-flex items-center mb-6" aria-label="SCULPTMOORE home">
              <img
                src="https://res.cloudinary.com/cmpwim01/image/upload/v1795098791/Sculptmoore_Golden_Sculptural_Emblem-removebg-preview.png"
                alt="SCULPTMOORE"
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Creating timeless sculptures that capture the essence of beauty, emotion, and enduring artistry.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-100">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-100">Contact Info</h4>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-gray-400 mt-1 flex-shrink-0">{item.icon}</span>
                  <span className="text-gray-400">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-100">Stay Updated</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest works and studio updates.
            </p>
            {subscribed ? (
              <p className="text-gray-200 text-sm">
                You are on the list. Studio notes go out a few times a year — this demo does not send mail.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Your email address"
                  className="px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 w-full"
                />
                <label className="flex items-start gap-2 text-sm text-gray-400">
                  <input
                    type="checkbox"
                    required
                    checked={agreed}
                    onChange={(event) => setAgreed(event.target.checked)}
                    className="mt-1"
                  />
                  <span>
                    I agree to receive occasional studio notes, as described in the{' '}
                    <Link to="/privacy" className="text-gray-200 underline underline-offset-4">Privacy Policy</Link>.
                  </span>
                </label>
                <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors duration-300 text-sm font-medium">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} SCULPTMOORE. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/consent" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Consent
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
