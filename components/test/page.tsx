import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white font-sans">
      
      {/* 1. Cinematic Background Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/koenigseggw.svg" // Replace with your car hero image wall path when ready
          alt="Koenigsegg Jesko Hero Background"
          fill
          priority
          className="object-cover object-center brightness-[0.65]" 
        />
        {/* Subtle dark gradient overlay to make text highly readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
      </div>

      {/* 2. Transparent Header / Navigation Overlay */}
      <header className="relative z-20 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-xs bg-black/10">
        {/* Brand Identity */}
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-10">
            {/* Tiny shield badge icon placeholder */}
            <Image 
              src="/koenigseggw.svg" 
              alt="Koenigsegg Shield" 
              fill 
              className="object-contain"
            />
          </div>
          <span className="text-xl font-bold tracking-[0.25em] uppercase text-white font-mono">
            Koenigsegg
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest uppercase text-gray-300">
          <a href="#hypercars" className="hover:text-white transition-colors">Hypercars</a>
          <a href="#innovation" className="hover:text-white transition-colors">Innovation</a>
          <a href="#heritage" className="hover:text-white transition-colors">Our Story</a>
          <a href="#shop" className="hover:text-white transition-colors">Shop</a>
        </nav>

        {/* Menu CTA Button */}
        <div>
          <button className="text-xs font-semibold tracking-widest uppercase border border-white/30 px-5 py-2 rounded-none hover:bg-white hover:text-black transition-all duration-300">
            Menu
          </button>
        </div>
      </header>

      {/* 3. Hero Copy & Interface Content Layer */}
      <section className="relative z-10 flex flex-col justify-end min-h-[calc(100vh-88px)] px-6 pb-16 md:px-12 md:pb-24 max-w-4xl">
        <span className="text-xs font-bold tracking-[0.4em] uppercase text-amber-500 mb-2">
          Spirit of Performance
        </span>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight uppercase mb-4 italic">
          JESKO ATTACK
        </h1>
        
        <p className="text-sm md:text-base text-gray-300 max-w-xl leading-relaxed mb-8">
          Koenigsegg Automotive AB is a Swedish manufacturer of high-performance sports cars, 
          engineering ultimate megacars that shatter the boundaries of physics, luxury, and speed.
        </p>

        {/* Interactive Action Elements */}
        <div className="flex flex-wrap gap-4">
          <button className="bg-white text-black font-semibold text-xs tracking-widest uppercase px-8 py-4 hover:bg-gray-200 transition-colors rounded-none">
            Explore Megacar
          </button>
          <button className="bg-transparent text-white border border-white/40 font-semibold text-xs tracking-widest uppercase px-8 py-4 hover:bg-white/10 transition-colors rounded-none">
            Configure Yours
          </button>
        </div>
      </section>

    </main>
  );
}
