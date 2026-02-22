import React from "react";
import { FaXTwitter, FaInstagram, FaFacebookF } from "react-icons/fa6";

const Hero: React.FC = () => {
  return (
    <div className="relative pt-20 overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=2070"
          alt="Gym Hero"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
      </div>

      {/* Decorative Frame Lines */}
      <div className="absolute inset-10 border border-white/20 pointer-events-none z-10 hidden lg:block">
        <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#BCFE00]"></div>
        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#BCFE00]"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full min-h-[calc(100vh-80px)] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-full py-20 lg:py-0">
          {/* Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black italic text-white tracking-tighter leading-[0.9] uppercase">
              Fitness <br className="hidden sm:block" />
              Journey, <br className="hidden sm:block" />
              <span className="text-white drop-shadow-[0_0_15px_rgba(188,254,0,0.3)]">
                AI-Optimized
              </span>
            </h1>

            <p className="mt-8 text-white/70 text-base sm:text-lg md:text-xl max-w-lg leading-relaxed font-medium">
              Achieve Weight Loss, Muscle Gain, Or A Healthier Lifestyle
              Effortlessly With AI-Driven Personalized Training.
            </p>

            <button className="mt-10 group relative flex items-center justify-center">
              <div className="absolute inset-0 bg-[#BCFE00] blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-[#BCFE00] text-black px-8 py-4 sm:px-10 sm:py-5 rounded-full font-black text-lg sm:text-xl tracking-tighter transition-transform hover:scale-105">
                LET'S START
              </div>
            </button>
          </div>

          {/* Right Side Empty for Bg Visibility */}
          <div className="hidden lg:block relative h-full">
            {/* Social Sidebar */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-8 items-center">
              <div className="w-px h-20 bg-white/20"></div>
              <a
                href="#"
                className="p-3 border border-white/20 rounded-full text-white hover:bg-[#BCFE00] hover:text-black hover:border-[#BCFE00] transition-all"
              >
                <FaXTwitter size={18} />
              </a>
              <a
                href="#"
                className="p-3 border border-white/20 rounded-full text-white hover:bg-[#BCFE00] hover:text-black hover:border-[#BCFE00] transition-all"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                className="p-3 border border-white/20 rounded-full text-white hover:bg-[#BCFE00] hover:text-black hover:border-[#BCFE00] transition-all"
              >
                <FaFacebookF size={18} />
              </a>
              <div className="w-px h-20 bg-white/20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
