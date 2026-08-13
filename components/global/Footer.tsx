'use client';

import React, { useState, useEffect } from 'react';


export default function Footer() {

    const navLinks = [
    { name: 'Megacars', href: '#megacars' },
    { name: 'Technology', href: '#technology' },
    { name: 'About', href: '#about' },
    { name: 'History', href: '#history' },
  ];

  const actionLinks = [
    { name: 'Dealer locator', href: '#dealer-locator' },
    { name: 'Shop', href: '#shop' },
    { name: 'Contact', href: '#contact' },
    { name: 'careers', href: '#careers' },
    { name: 'Press', href: '#press' },
    { name: 'Factory tours', href: '#factory-tours' },
  ];
    return (
        <footer className="bg-white py-12 px-6 md:px-12">
            {/* Main Container: Stacks on mobile, splits into columns on larger screens */}
            <div className="max-w-7xl mx-auto flex flex-col gap-10 md:grid md:grid-cols-3 lg:flex lg:flex-row lg:justify-between pb-12 items-start md:items-center lg:items-start">
                
                {/* Brand Logo Group */}
                <div className="flex flex-col items-start w-full md:w-auto">
                    <img
                        src="/koenigseggb.svg" 
                        alt="Koenigsegg Logo" 
                        className="w-40 md:w-48 lg:w-50 mb-4"
                    />
                </div>

                {/* ISO Certification Group */}
                <div className="flex flex-col items-start md:items-center lg:items-start gap-2">
                    <img 
                        src="/iso.png" 
                        alt="iso-Logo"
                        className="w-16 md:w-19"
                    />
                    <span className="text-sm md:text-base lg:text-xl uppercase text-neutral-900 font-semibold tracking-wider">
                        ISO Certified 9001
                    </span>
                </div>

                {/* Navigation Wrapper: 2 Columns on mobile, side-by-side links */}
                <div className="flex gap-10 sm:gap-16 md:gap-20 lg:gap-25 w-full md:w-auto justify-between sm:justify-start">
                    {/* Primary Nav Links */}
                    <nav className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-xs md:text-sm uppercase tracking-[0.2em] text-neutral-900 hover:text-gray-400 transition-colors duration-500"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Action Links */}
                    <nav className="flex flex-col space-y-4">
                        {actionLinks.map((link) => (
                            <a 
                                key={link.name}
                                href={link.href}
                                className="text-xs md:text-sm uppercase tracking-[0.2em] text-neutral-900 hover:text-gray-400 transition-colors duration-500"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                </div>
            
            </div>
            
            <hr className="border-neutral-900" />

            {/* Copyright text aligned with margins */}
            <p className="text-neutral-900 text-xs md:text-sm pt-6 text-center md:text-left">
                &copy; {new Date().getFullYear()} Koenigsegg Automotive AB. All rights reserved.
            </p>
        </footer>
    );
}