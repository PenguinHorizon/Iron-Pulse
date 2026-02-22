import React, { useState } from 'react';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Service", href: "#service" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Pricing", href: "#pricing" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300">
            {/* Main Navbar Header */}
            <div className="bg-black/80 backdrop-blur-md border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <div className="flex items-center gap-2 group cursor-pointer z-[110]">
                            <div className="w-10 h-10 bg-[#BCFE00] rounded-lg flex items-center justify-center transform -rotate-12 transition-transform group-hover:rotate-0">
                                <span className="text-black font-black text-2xl italic">P</span>
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="text-white font-black italic tracking-tighter text-lg uppercase transition-colors group-hover:text-[#BCFE00]">PUREPERFORMANCE</span>
                                <span className="text-white font-medium tracking-[0.2em] text-[10px] ml-0.5">PLANS</span>
                            </div>
                        </div>

                        {/* Nav Links (Desktop) */}
                        <div className="hidden md:flex items-center space-x-12">
                            {navLinks.map((link, idx) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`${idx === 0 ? 'text-[#BCFE00]' : 'text-white/70 hover:text-white'} font-bold text-sm transition-all hover:-translate-y-0.5`}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* Right Action (Desktop) */}
                        <div className="hidden md:block">
                            <button className="bg-[#BCFE00] text-black px-8 py-3 rounded-full font-black italic tracking-tighter uppercase text-xs hover:scale-105 transition-transform shadow-lg shadow-[#BCFE00]/20">
                                Login Now
                            </button>
                        </div>

                        {/* Hamburger Button (Mobile) */}
                        <div className="md:hidden z-[110]">
                            <button
                                onClick={toggleMenu}
                                className="text-white w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 hover:border-[#BCFE00]/50 transition-all active:scale-95"
                                aria-label="Toggle Menu"
                            >
                                <div className="relative w-6 h-5">
                                    <span className={`absolute left-0 block w-full h-0.5 bg-[#BCFE00] transition-all duration-300 ${isMenuOpen ? 'top-2 rotate-45' : 'top-0'}`}></span>
                                    <span className={`absolute left-0 top-2 block w-full h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                                    <span className={`absolute left-0 block w-full h-0.5 bg-[#BCFE00] transition-all duration-300 ${isMenuOpen ? 'top-2 -rotate-45' : 'top-4'}`}></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-black z-[105] transition-all duration-500 ease-in-out md:hidden ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
                {/* Background Decor */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                    <div className="absolute top-[-10%] right-[-10%] w-full h-full bg-[#BCFE00] blur-[150px] rounded-full"></div>
                </div>

                <div className="flex flex-col h-full pt-10 pb-12 px-8 relative">
                    {/* Explicit Close Button */}
                    <div className="flex justify-end mb-8">
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/50 hover:text-[#BCFE00] hover:border-[#BCFE00] transition-all group"
                        >
                            <span className="text-[10px] font-black tracking-[0.2em] uppercase">Cancel</span>
                            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#BCFE00] group-hover:text-black transition-colors">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </div>
                        </button>
                    </div>

                    <div className="flex flex-col space-y-6">
                        {navLinks.map((link, idx) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="group flex items-end gap-4"
                            >
                                <span className="text-[#BCFE00]/30 font-black italic text-xl leading-none transition-colors group-hover:text-[#BCFE00]">0{idx + 1}</span>
                                <span className="text-4xl font-black italic tracking-tighter text-white uppercase transition-colors group-hover:text-[#BCFE00] group-hover:translate-x-2 transition-transform">
                                    {link.name}
                                </span>
                            </a>
                        ))}
                    </div>

                    <div className="mt-auto">
                        <button className="bg-[#BCFE00] text-black w-full py-5 rounded-2xl font-black italic tracking-tighter uppercase text-xl transition-transform active:scale-95 shadow-xl shadow-[#BCFE00]/30">
                            Join The Pulse
                        </button>

                        <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-center text-white/30 text-[10px] font-black tracking-widest uppercase">
                            <span>PurePerformance Plans</span>
                            <div className="flex gap-2">
                                <div className="w-1.5 h-4 bg-[#BCFE00]/20 -skew-x-12"></div>
                                <div className="w-1.5 h-4 bg-[#BCFE00]/50 -skew-x-12 animate-pulse"></div>
                                <div className="w-1.5 h-4 bg-[#BCFE00] -skew-x-12"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
