
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, ShieldAlert, LayoutDashboard, MessageCircle, BookOpen, Users } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'AI Chat', path: '/chat', icon: MessageCircle },
    { name: 'Resources', path: '/resources', icon: BookOpen },
    { name: 'Community', path: '/community', icon: Users },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="w-8 h-8 text-pink-500 fill-pink-500" />
            <span className="font-serif text-2xl font-bold text-pink-800">SereneHer</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-1 font-medium transition-colors ${
                  isActive(link.path) ? 'text-pink-600' : 'text-gray-600 hover:text-pink-500'
                }`}
              >
                <link.icon className="w-4 h-4" />
                <span>{link.name}</span>
              </Link>
            ))}
            <Link
              to="/emergency"
              className="bg-red-50 text-red-600 px-4 py-2 rounded-full font-bold flex items-center space-x-2 border border-red-100 hover:bg-red-100 transition-colors"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Emergency</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-pink-100 py-4 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-2 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-3 p-3 rounded-lg ${
                  isActive(link.path) ? 'bg-pink-50 text-pink-600' : 'text-gray-600'
                }`}
              >
                <link.icon className="w-5 h-5" />
                <span className="font-medium">{link.name}</span>
              </Link>
            ))}
            <Link
              to="/emergency"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-3 p-3 rounded-lg bg-red-50 text-red-600 font-bold"
            >
              <ShieldAlert className="w-5 h-5" />
              <span>Emergency Support</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
