import { Link, useLocation } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Productions', path: '/productions' },
    { name: 'About', path: '/about' },
    { name: 'Press', path: '/press' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-dark-gray/20">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Image
              src="https://static.wixstatic.com/media/87347d_ab87ab9d78004a3d829fb39af9a6c8a2~mv2.png"
              alt="UllimForce Logo"
              width={180}
              className="h-12 w-auto brightness-0 invert"
              style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(10000%) hue-rotate(0deg)' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-paragraph text-base transition-colors relative group ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-secondary hover:text-primary'
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                    location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-secondary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-6 border-t border-dark-gray/20">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 font-paragraph text-base transition-colors ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-secondary hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
