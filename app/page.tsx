'use client';

import React, { useState } from 'react';
import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';


const ArrowRightIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const PlayIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const MODELS = [
  {
    id: 'sedair-spear',
    name: "Sedair's Spear",
    subtitle: 'Performance without compromise',
    power: '1,625 HP',
    acceleration: '2.5s (0-100 km/h)',
    topSpeed: '400+ km/h',
    image: '/spear.png',
    tag: 'Performance monster',
  },
  {
    id: 'gemera',
    name: 'Gemera',
    subtitle: "The World's First Mega-GT",
    power: '2,300 HP',
    acceleration: '1.9s (0-100 km/h)',
    topSpeed: '400 km/h',
    image: '/gemera.png',
    tag: '4-SEATER HYPERCAR',
  },
  {
    id: 'jesko',
    name: 'Jesko Attack',
    subtitle: 'Ultimate Track Weapon',
    power: '1,600 HP',
    acceleration: '2.5s (0-100 km/h)',
    topSpeed: '480+ km/h',
    image: '/jeskoattack.png',
    tag: 'HIGH DOWNFORCE',
  },
  {
    id: 'jesko-absolut',
    name: 'Jesko Absolut',
    subtitle: 'Record Breaker',
    power: '1,600 HP',
    acceleration: '2.5s (0-100 km/h)',
    topSpeed: '490 km/h',
    image: '/absolut.png',
    tag: 'SPPED DEMON',
  },
  {
    id: 'cc850',
    name: 'CC850',
    subtitle: 'Re-imagined Heritage',
    power: '1,385 HP',
    acceleration: '2.7s (0-100 km/h)',
    topSpeed: '450 km/h',
    image: '/cc850.png',
    tag: "The driver's dream",
  },
];

const INNOVATIONS = [
  {
    title: 'Dark Matter E-Motor',
    category: 'Powertrain',
    description: 'The world’s most powerful patent-pending six-phase electric motor, delivering 800 HP and 1,250 Nm in a lightweight 39 kg package.',
  },
  {
    title: 'Light Speed Transmission (LST)',
    category: 'Engineering',
    description: 'Nine forward gears and seven clutches capable of gear changes at virtually light speed, bypassing traditional synchronizers.',
  },
  {
    title: 'Carbon Weave Pre-Preg',
    category: 'Aerodynamics',
    description: 'Autoclave-cured high-modulus carbon fiber monocoque delivering industry-leading torsional rigidity of 65,000 Nm/degree.',
  },
];

import Link from 'next/link';

export default function Home() {
  const [activeModel, setActiveModel] = useState(0);

  return (
    <div className="bg-black text-white font-sans selection:bg-amber-500 selection:text-black">
      {/* Header */}
      <Header />

      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full flex items-end pb-16 md:pb-24 px-6 md:px-12 overflow-hidden">
        {/* Background Overlay & Image/Video */}
        <div className="absolute inset-0 z-0">
          <img
            src="/ccgt.png"
            alt="Koenigsegg Hypercar Hero"
            className="w-full h-full object-cover object-center scale-105 animate-pulse transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            <span className="inline-block text-xs uppercase tracking-[0.3em] font-semibold text-amber-500 mb-4">
              Engineering Perfection
            </span>
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl font-light uppercase tracking-[0.15em] leading-none mb-6">
              CCGT1 <br />
              <span className="font-bold text-neutral-100">1,280 HP</span>
            </h1>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://www.koenigsegg.com/model/CCGT1"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-xs uppercase tracking-[0.25em] font-bold hover:bg-neutral-200 transition-colors"
              >
                Discover CCGT1
                <ArrowRightIcon />
              </a>
              <Link href="https://www.youtube.com/watch?v=XHf6PUsb1eE" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center gap-3 px-6 py-4 border border-neutral-700 text-xs uppercase tracking-[0.2em] font-semibold text-white hover:border-white transition-colors backdrop-blur-sm">
                  <PlayIcon className="w-3.5 h-3.5 text-amber-500" />
                  Watch Film
                </button>
              </Link>
            </div>
          </div>

          {/* Key Metrics Bar */}
          <div className="mt-16 pt-8 border-t border-neutral-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Power Output</p>
              <p className="text-xl md:text-2xl font-light tracking-wider text-neutral-100 mt-1">1,280 HP</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">0 - 100 KM/H</p>
              <p className="text-xl md:text-2xl font-light tracking-wider text-neutral-100 mt-1">3.0 SEC</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Top Speed</p>
              <p className="text-xl md:text-2xl font-light tracking-wider text-neutral-100 mt-1">350+ KM/H</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Seating</p>
              <p className="text-xl md:text-2xl font-light tracking-wider text-neutral-100 mt-1">2 Adults</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MODEL SHOWCASE */}
      <section id="models" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-amber-500 font-semibold">
              The Lineup
            </span>
            <h2 className="text-3xl md:text-5xl font-light uppercase tracking-[0.15em] mt-2">
              Hypercars
            </h2>
          </div>

          {/* Model Selector Tabs */}
          <div className="flex space-x-6 mt-6 md:mt-0 border-b border-neutral-800 pb-2">
            {MODELS.map((model, idx) => (
              <button
                key={model.id}
                onClick={() => setActiveModel(idx)}
                className={`text-xs uppercase tracking-[0.2em] transition-colors pb-2 relative ${
                  activeModel === idx ? 'text-white font-bold' : 'text-neutral-500 hover:text-neutral-300'
                }`}
              >
                {model.name}
                {activeModel === idx && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-500" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Model Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-neutral-950 border border-neutral-800/60 p-6 md:p-12">
          <div className="lg:col-span-7 relative aspect-[16/9] overflow-hidden group">
            <img
              src={MODELS[activeModel].image}
              alt={MODELS[activeModel].name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 border border-neutral-800 text-[10px] uppercase tracking-[0.2em] text-amber-500 font-semibold">
              {MODELS[activeModel].tag}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                {MODELS[activeModel].subtitle}
              </span>
              <h3 className="text-3xl md:text-4xl font-light uppercase tracking-[0.1em] text-white mt-1">
                {MODELS[activeModel].name}
              </h3>
            </div>

            <div className="space-y-4 border-y border-neutral-800 py-6">
              <div className="flex justify-between items-center">
                <span className="text-xs uppercase tracking-[0.2em] text-neutral-400">Power</span>
                <span className="text-sm tracking-widest font-semibold text-white">{MODELS[activeModel].power}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs uppercase tracking-[0.2em] text-neutral-400">0-100 km/h</span>
                <span className="text-sm tracking-widest font-semibold text-white">{MODELS[activeModel].acceleration}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs uppercase tracking-[0.2em] text-neutral-400">Top Speed</span>
                <span className="text-sm tracking-widest font-semibold text-white">{MODELS[activeModel].topSpeed}</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="#configurator"
                className="flex-1 text-center py-3.5 bg-white text-black text-xs uppercase tracking-[0.2em] font-bold hover:bg-neutral-200 transition-colors"
              >
                Configure
              </a>
              <a
                href={`#${MODELS[activeModel].id}`}
                className="px-6 py-3.5 border border-neutral-700 text-xs uppercase tracking-[0.2em] font-medium text-neutral-300 hover:text-white hover:border-white transition-colors"
              >
                Explore
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INNOVATION SPOTLIGHT */}
      <section id="innovation" className="py-24 bg-neutral-950 border-y border-neutral-900 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-amber-500 font-semibold">
              Patented Technology
            </span>
            <h2 className="text-3xl md:text-5xl font-light uppercase tracking-[0.15em] mt-2">
              No Compromises
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INNOVATIONS.map((item, index) => (
              <div
                key={index}
                className="p-8 bg-black border border-neutral-800/80 hover:border-neutral-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-amber-500/80 font-mono">
                    0{index + 1} // {item.category}
                  </span>
                  <h3 className="text-lg uppercase tracking-[0.15em] font-medium text-white mt-3 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-neutral-900 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Read Patent</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 text-neutral-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONFIGURATOR CTA BANNER */}
      <section id="configurator" className="relative py-32 px-6 md:px-12 overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop"
            alt="Configurator Background"
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-amber-500 font-semibold">
            Bespoke Atelier
          </span>
          <h2 className="text-3xl sm:text-5xl font-light uppercase tracking-[0.2em]">
            Tailor Your Machine
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 font-light tracking-widest max-w-xl mx-auto leading-relaxed">
            Select exterior carbon weaves, bespoke interior trim, and aerodynamic specifications using our real-time 3D configurator.
          </p>
          <Link 
          href="/page2"
          className="px-10 py-4 bg-white text-black text-xs uppercase tracking-[0.25em] font-bold hover:bg-neutral-200 transition-colors shadow-2xl"
          >
            Launch Configurator
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}