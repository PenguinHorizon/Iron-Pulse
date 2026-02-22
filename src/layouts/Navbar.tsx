import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-[#BCFE00] rounded-lg flex items-center justify-center transform -rotate-12">
                            <span className="text-black font-black text-2xl -rotate-12 italic">P</span>
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="text-white font-black italic tracking-tighter text-lg">PUREPERFORMANCE</span>
                            <span className="text-white font-medium tracking-[0.2em] text-[10px] ml-1">PLANS</span>
                        </div>
                    </div>

                    {/* Nav Links */}
                    <div className="hidden md:flex items-center space-x-12">
                        <a href="#" className="text-[#BCFE00] font-medium text-sm transition-colors">Home</a>
                        <a href="#" className="text-white/70 hover:text-white font-medium text-sm transition-colors">Service</a>
                        <a href="#" className="text-white/70 hover:text-white font-medium text-sm transition-colors">How It Works</a>
                        <a href="#" className="text-white/70 hover:text-white font-medium text-sm transition-colors">Pricing</a>
                    </div>

                    {/* Login Button */}
                    <div>
                        <button className="bg-[#BCFE00] text-black px-8 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
