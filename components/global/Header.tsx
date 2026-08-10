'use client';

import React, { useState, useEffect } from 'react';


const MenuIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    {/* Paste your Menu SVG path here */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    {/* Paste your Close SVG path here */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const GlobeIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    {/* Paste your Globe SVG path here */}
    <circle cx="12" cy="12" r="10" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);

const ChevronRightIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    {/* Paste your Chevron Right SVG path here */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);


// MAIN HEADER COMPONENT =====================================================================

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

  const navLinks = [
    { name: 'Hypercars', href: '#hypercars' },
    { name: 'Innovation', href: '#innovation' },
    { name: 'Raw Material', href: '#raw-material' },
    { name: 'About', href: '#about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-neutral-800/60 py-4'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a 
          href="#" 
          className="group flex items-center gap-3 text-white tracking-widest text-lg font-extrabold uppercase transition-opacity hover:opacity-80"
        >
          <span className="w-10 h-11 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 [clip-path:polygon(0_0,100%_0,100%_75%,50%_100%,0_75%)]">
            <img 
            src="/koenigseggw.svg" 
            alt="logo"
            />
          </span>
          <span className="font-sans text-sm tracking-[0.3em] font-light uppercase">
            Koenigsegg
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] text-neutral-300 hover:text-white transition-colors duration-300 font-medium relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-amber-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action Controls / Configurator CTA */}
        <div className="hidden md:flex items-center space-x-6">
          <button 
            aria-label="Select Region" 
            className="text-neutral-400 hover:text-white transition-colors p-1"
          >
            <GlobeIcon className="w-4 h-4" />
          </button>
          
          <a
            href="#configurator"
            className="inline-flex items-center justify-center px-5 py-2 text-xs uppercase tracking-[0.2em] font-semibold text-black bg-white hover:bg-neutral-200 transition-all duration-300 rounded-none shadow-lg hover:shadow-white/10"
          >
            Configure
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white focus:outline-none p-2"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <CloseIcon className="w-6 h-6 text-white" />
          ) : (
            <MenuIcon className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed inset-0 top-[73px] bg-black/95 backdrop-blur-xl border-t border-neutral-800 md:hidden transition-all duration-300 ease-in-out flex flex-col justify-between p-8 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <nav className="flex flex-col space-y-6 pt-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg uppercase tracking-[0.2em] text-neutral-200 hover:text-amber-500 transition-colors flex items-center justify-between border-b border-neutral-800/80 pb-4"
            >
              {link.name}
              <ChevronRightIcon className="w-4 h-4 text-neutral-500" />
            </a>
          ))}
        </nav>

        <div className="flex flex-col space-y-4 pt-6 border-t border-neutral-800">
          <a
            href="#configurator"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full text-center py-3 text-xs uppercase tracking-[0.2em] font-bold text-black bg-white hover:bg-neutral-200 transition-colors"
          >
            Configure Your Vehicle
          </a>
          <button className="flex items-center justify-center space-x-2 text-neutral-400 text-xs uppercase tracking-widest py-2">
            <GlobeIcon className="w-4 h-4" />
            <span>Global / English</span>
          </button>
        </div>
      </div>
    </header>
  );
}