// app/koenigsegg/page.tsx
'use client';

import { KOENIGSEGG_MODELS } from './config-data';

export default function KoenigseggCatalog() {
  return (
    <main className="w-full min-h-screen bg-[#0A0A0A] text-white flex font-sans antialiased select-none">
      
      {/* Fixed Left Sidebar Navigation List */}
      <aside 
        className="w-64 border-r border-neutral-900 hidden md:flex flex-col justify-between p-8 shrink-0 bg-black sticky top-0 h-screen">
        <div className="space-y-8">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[4px] text-neutral-500">LINE UP</span>
            <div className="mt-4 space-y-3">
              {KOENIGSEGG_MODELS.map((car) => (
                <div key={car.id} className="flex items-center space-x-2.5 group cursor-pointer">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-800 group-hover:bg-[#FF5E00] transition-colors" />
                  <a href={`#${car.id}`}>
                    <span className="text-xs uppercase tracking-widest text-neutral-400 group-hover:text-white transition-colors">
                      {car.name}
                    </span>
                  </a>
                 
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-neutral-900">
          <p className="text-[9px] text-neutral-600 tracking-wider uppercase">ÄNGELHOLM // SWEDEN</p>
        </div>
      </aside>

      {/* Main Continuous Flow Vertical Stream Panels */}
      <section className="flex-1 overflow-y-auto p-4 md:p-8 space-y-12">
        {KOENIGSEGG_MODELS.map((car) => (
          <div id={car.id} key={car.id} className="w-full bg-neutral-950 border border-neutral-900 rounded-lg overflow-hidden flex flex-col">
            
            {/* Upper Stage Visual Frame Container Block */}
            <div className="w-full aspect-[16/8] bg-gradient-to-b from-neutral-900 to-neutral-950 border-b border-neutral-900/60 relative flex flex-col justify-between p-6">
              
              {/* Product Badge overlay array */}
              <div className="space-y-0.5 pointer-events-none">
                <p className="text-[10px] font-bold text-[#FF5E00] tracking-[3px] uppercase">{car.badge}</p>
                <h2 className="text-xl md:text-2xl font-light tracking-widest text-neutral-200">{car.name}</h2>
              </div>

              {/* EMPTY CANVAS FOR WRAPPING VEHICLE RENDER GRAPHICS */}
              <div className="w-full flex-1 flex items-center justify-center relative">
                  <img src={car.image} alt="notfound" />
              </div>

              {/* Structural Footer metadata tag layout */}
              <div className="w-full flex justify-end pointer-events-none">
                <span className="text-[10px] font-mono text-neutral-700 tracking-wider">SPEC_NODE // {car.id.toUpperCase()}</span>
              </div>
            </div>

            {/* Lower Stage Control Section: Replaces discover buttons with static available colors array */}
            <div className="w-full bg-black/60 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-neutral-900">
              <div className="space-y-0.5">
                <h4 className="text-[10px] font-bold uppercase tracking-[2px] text-neutral-400">Available Factory Configurations</h4>
                <p className="text-[11px] font-light text-neutral-600">Maranello-inspired factory lacquer combinations available.</p>
              </div>

              {/* Swatch Display Nodes Area Grid Layout */}
              <div className="flex items-center gap-6">
                {car.availableColors.map((color, index) => (
                  <div key={index} className="flex items-center space-x-2 group">
                    <div 
                      style={{ backgroundColor: color.hex }}
                      className="w-4 h-4 rounded-full border border-neutral-800 ring-2 ring-transparent group-hover:ring-neutral-600 transition-all shrink-0"
                    />
                    <span className="text-[11px] text-neutral-400 group-hover:text-neutral-200 transition-colors tracking-wide">
                      {color.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ))}
      </section>
    </main>
  );
}