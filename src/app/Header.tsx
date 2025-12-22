'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Version 2', href: '/version-2' },
    { name: 'Version 3', href: '/version-3' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center transform transition-transform group-hover:scale-105">
              <span className="text-white font-bold text-xl">CW</span>
              {/* Animated dot */}
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent-500 rounded-full animate-pulse"></span>
            </div>
            <span className="text-2xl font-bold text-neutral-900">
              Cent<span className="text-primary-600">wise</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-neutral-700 hover:text-primary-600 transition-colors font-medium text-sm relative group"
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
            
            {/* CTA Button */}
            <a
              href="https://app.centwise.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600 text-white px-6 py-2.5 rounded-lg hover:bg-primary-700 transition-all font-semibold text-sm shadow-primary hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Access App →
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-neutral-700 hover:text-primary-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-neutral-700 hover:text-primary-600 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-primary-50"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://app.centwise.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-600 text-white px-4 py-2.5 rounded-lg hover:bg-primary-700 transition-all font-semibold text-center"
              >
                Access App →
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}