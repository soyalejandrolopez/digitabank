'use client';

import { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    {
      name: 'Inicio',
      href: '#',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      name: 'Problema',
      href: '#problema',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      name: 'Beneficios',
      href: '#beneficios',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      name: 'Cómo funciona',
      href: '#como-funciona',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      name: 'Seguridad',
      href: '#seguridad',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
  ];

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['problema', 'beneficios', 'como-funciona', 'seguridad', 'testimonios', 'cta-form'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop & Mobile Top Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-blue-900/95 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <Logo size="sm" color="light" />
            </a>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-cyan-400'
                      : 'text-blue-100 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTA button */}
            <div className="hidden md:block">
              <a
                href="#cta-form"
                className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-medium text-sm hover:from-cyan-400 hover:to-blue-400 transition-all hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Abrir cuenta
              </a>
            </div>

            {/* Mobile CTA button (in header) */}
            <a
              href="#cta-form"
              className="md:hidden px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-medium text-xs"
            >
              Abrir cuenta
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation Bar - App Style */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 safe-area-bottom">
        <div className="grid grid-cols-5 h-16">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '') ||
                            (link.href === '#' && activeSection === '');
            return (
              <a
                key={link.name}
                href={link.href}
                className={`flex flex-col items-center justify-center gap-1 transition-colors ${
                  isActive
                    ? 'text-blue-600'
                    : 'text-gray-500'
                }`}
              >
                <div className={`${isActive ? 'text-blue-600' : 'text-gray-400'}`}>
                  {link.icon}
                </div>
                <span className={`text-[10px] font-medium ${isActive ? 'text-blue-600' : 'text-gray-500'}`}>
                  {link.name.split(' ')[0]}
                </span>
                {isActive && (
                  <div className="absolute bottom-0 w-12 h-0.5 bg-blue-600 rounded-full" />
                )}
              </a>
            );
          })}
        </div>

        {/* Home indicator bar for iOS style */}
        <div className="flex justify-center pb-1">
          <div className="w-32 h-1 bg-gray-300 rounded-full" />
        </div>
      </nav>

      {/* Spacer for mobile bottom nav */}
      <div className="md:hidden h-20" />
    </>
  );
}
