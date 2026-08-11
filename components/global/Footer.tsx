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
        <footer className="bg-white py-16 px-6 md:px-12">

            <div className="max-w-full justify-between flex mx-auto pb-12">
                {/* Brand Logo */}
                <div className='flex flex-col ml-[25%] flex-col justify-start'>
                    <img
                    src="/koenigseggb.svg" 
                    alt="Koenigsegg Logo" 
                    className="w-50 mb-4"
                    />
                </div>

                <div className='flex flex-col justify-end align-center'>
                    <img 
                        src="/koenigseggb.svg" 
                        alt="iso-Logo"
                        className="w-19"
                    />
                    <span className='flex text-xl uppercase text-neutral-900 font-semibold'>
                        ISO Certified 9001
                    </span>
                </div>

                {/* Navigation for Pages  */}
                <div className='flex gap-25 pr-[20%]'>
                    <nav className="hidden md:flex space-x-10 flex-col">
                        { navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-s uppercase pt-5 tracking-[0.2em] text-neutral-900 hover:text-gray-400 transition-color duration-500"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <nav className='hidden md:flex space-x-10 flex-col'>
                        { actionLinks.map((link) => (
                            <a 
                                key={link.name}
                                href={link.href}
                                className="text-s uppercase pt-5 tracking-[0.2em] text-neutral-900 hover:text-gray-400 transition-color duration-500"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                </div>
              
            </div>
            <hr className='border-neutral-900'/>

            <p className='text-neutral-900 pt-6 pl-10'>
                © {new Date().getFullYear()} Koenigsegg Automotive AB. All rights reserved.
            </p>
        </footer>
    );
}

    // <footer className="border-t border-neutral-900 bg-black py-16 px-6 md:px-12">
    //     <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-neutral-900">
    //     <div>
    //         <span className="text-sm tracking-[0.3em] font-light uppercase text-white">
    //         Koenigsegg
    //         </span>
    //         <p className="text-xs text-neutral-500 mt-4 leading-relaxed font-light">
    //         Koenigsegg Automotive AB <br />
    //         Valhall Park, SE-262 74 <br />
    //         Ängelholm, Sweden
    //         </p>
    //     </div>

    //     <div>
    //         <h4 className="text-xs uppercase tracking-[0.2em] text-neutral-300 font-semibold mb-4">Hypercars</h4>
    //         <ul className="space-y-2 text-xs text-neutral-500">
    //         <li><a href="#" className="hover:text-white transition-colors">Gemera</a></li>
    //         <li><a href="#" className="hover:text-white transition-colors">Jesko Attack</a></li>
    //         <li><a href="#" className="hover:text-white transition-colors">Jesko Absolut</a></li>
    //         <li><a href="#" className="hover:text-white transition-colors">CC850</a></li>
    //         </ul>
    //     </div>

    //     <div>
    //         <h4 className="text-xs uppercase tracking-[0.2em] text-neutral-300 font-semibold mb-4">Company</h4>
    //         <ul className="space-y-2 text-xs text-neutral-500">
    //         <li><a href="#" className="hover:text-white transition-colors">Innovation</a></li>
    //         <li><a href="#" className="hover:text-white transition-colors">Raw Material</a></li>
    //         <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
    //         <li><a href="#" className="hover:text-white transition-colors">Press & Media</a></li>
    //         </ul>
    //     </div>

    //     <div>
    //         <h4 className="text-xs uppercase tracking-[0.2em] text-neutral-300 font-semibold mb-4">Newsletter</h4>
    //         <p className="text-xs text-neutral-500 mb-4 font-light">Receive official news and reveals from Ängelholm.</p>
    //         <div className="flex">
    //         <input
    //             type="email"
    //             placeholder="EMAIL ADDRESS"
    //             className="bg-neutral-950 border border-neutral-800 text-xs px-3 py-2 focus:outline-none focus:border-neutral-600 text-white w-full uppercase tracking-wider placeholder:text-neutral-600"
    //         />
    //         <button className="bg-white text-black px-4 text-xs uppercase tracking-widest font-bold hover:bg-neutral-200">
    //             Join
    //         </button>
    //         </div>
    //     </div>
    //     </div>

    //     <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-neutral-600">
    //     <p>© {new Date().getFullYear()} Koenigsegg Automotive AB. All rights reserved.</p>
    //     <div className="flex space-x-6 mt-4 sm:mt-0">
    //         <a href="#" className="hover:text-neutral-400">Privacy Policy</a>
    //         <a href="#" className="hover:text-neutral-400">Terms of Use</a>
    //         <a href="#" className="hover:text-neutral-400">Cookies</a>
    //     </div>
    //     </div>
    // </footer>