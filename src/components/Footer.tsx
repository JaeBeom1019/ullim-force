import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-dark-gray/20">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="font-heading text-xl text-secondary mb-6">UllimForce</h3>
            <p className="font-paragraph text-base text-light-gray/80 leading-relaxed">
              Crafting unforgettable performances that resonate with audiences worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl text-secondary mb-6">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              <Link
                to="/"
                className="font-paragraph text-base text-light-gray/80 hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                to="/productions"
                className="font-paragraph text-base text-light-gray/80 hover:text-primary transition-colors"
              >
                Productions
              </Link>
              <Link
                to="/about"
                className="font-paragraph text-base text-light-gray/80 hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="font-paragraph text-base text-light-gray/80 hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-xl text-secondary mb-6">Contact</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-primary mt-1 flex-shrink-0" />
                <a
                  href="mailto:info@ullimforce.com"
                  className="font-paragraph text-base text-light-gray/80 hover:text-primary transition-colors"
                >
                  info@ullimforce.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-primary mt-1 flex-shrink-0" />
                <a
                  href="tel:+82-2-1234-5678"
                  className="font-paragraph text-base text-light-gray/80 hover:text-primary transition-colors"
                >
                  +82-2-1234-5678
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <p className="font-paragraph text-base text-light-gray/80">
                  Seoul, South Korea
                </p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-heading text-xl text-secondary mb-6">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-light-gray/20 hover:border-primary hover:bg-primary/10 transition-all"
                aria-label="Facebook"
              >
                <Facebook size={20} className="text-secondary" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-light-gray/20 hover:border-primary hover:bg-primary/10 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={20} className="text-secondary" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-light-gray/20 hover:border-primary hover:bg-primary/10 transition-all"
                aria-label="YouTube"
              >
                <Youtube size={20} className="text-secondary" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-dark-gray/20">
          <p className="font-paragraph text-sm text-light-gray/60 text-center">
            © {new Date().getFullYear()} UllimForce. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
