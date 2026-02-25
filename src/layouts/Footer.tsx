import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
  FaXTwitter,
} from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-24 border-t border-gray-900 relative overflow-hidden">
      {/* Background Decorative Layers */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#BCFE00] blur-[160px] rounded-full opacity-5"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#BCFE00] blur-[140px] rounded-full opacity-10"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-gray-800 to-transparent opacity-20 hidden md:block"></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-gray-800 to-transparent opacity-20 hidden md:block"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 min-h-[300px]">
          {/* Column 1: Brand & About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8 group cursor-pointer">
              <div className="w-10 h-10 bg-[#BCFE00] rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12">
                <span className="text-black font-black text-2xl italic">IP</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-white font-black italic tracking-tighter text-lg uppercase">
                  IRON PULSE
                </span>
                <span className="text-white font-medium tracking-[0.2em] text-[10px] ml-0.5">
                  PLANS
                </span>
              </div>
            </div>
            <p className="text-gray-500 font-bold text-sm leading-relaxed mb-8">
              Empowering your fitness journey with cutting-edge AI insights and
              personalized performance tracking for world-class results.
            </p>
          </div>

          {/* Column 2: Company */}
          <div className="flex flex-col">
            <h4 className="text-white font-black italic tracking-tighter uppercase mb-8 border-l-4 border-[#BCFE00] pl-4">
              Company
            </h4>
            <ul className="flex flex-col gap-4 text-gray-500 font-bold text-sm">
              <li>
                <a
                  href="#home"
                  className="hover:text-[#BCFE00] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#service"
                  className="hover:text-[#BCFE00] transition-colors"
                >
                  Routine
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-[#BCFE00] transition-colors"
                >
                  Fitness
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-[#BCFE00] transition-colors"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col">
            <h4 className="text-white font-black italic tracking-tighter uppercase mb-8 border-l-4 border-[#BCFE00] pl-4">
              Services
            </h4>
            <ul className="flex flex-col gap-4 text-gray-500 font-bold text-sm">
              <li>
                <a href="#" className="hover:text-[#BCFE00] transition-colors">
                  AI Workout Plans
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#BCFE00] transition-colors">
                  Nutrition Coaching
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#BCFE00] transition-colors">
                  Progress Tracking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#BCFE00] transition-colors">
                  Expert Guidance
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Help & Socials */}
          <div className="flex flex-col">
            <h4 className="text-white font-black italic tracking-tighter uppercase mb-8 border-l-4 border-[#BCFE00] pl-4">
              Social Connect
            </h4>
            <div className="flex gap-4 mb-8">
              <a
                href="#"
                className="w-10 h-10 bg-[#BCFE00] text-black rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-gray-800 rounded-lg flex items-center justify-center text-white hover:border-[#BCFE00] hover:text-[#BCFE00] transition-all group"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-gray-800 rounded-lg flex items-center justify-center text-white hover:border-[#BCFE00] hover:text-[#BCFE00] transition-all"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-gray-800 rounded-lg flex items-center justify-center text-white hover:border-[#BCFE00] hover:text-[#BCFE00] transition-all"
              >
                <FaXTwitter size={18} />
              </a>
            </div>
            <ul className="flex flex-col gap-4 text-gray-500 font-bold text-sm">
              <li>
                <a href="#" className="hover:text-[#BCFE00] transition-colors">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#BCFE00] transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-black italic tracking-tighter uppercase mb-8 border-l-4 border-[#BCFE00] pl-4">
              Newsletter
            </h4>
            <p className="text-gray-500 font-bold text-sm mb-6">
              Stay updated with the latest AI training hacks and fitness trends.
            </p>
            <div className="relative group">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-gray-900 border border-gray-800 rounded-xl px-5 py-4 text-sm font-bold focus:outline-none focus:border-[#BCFE00] transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#BCFE00] text-black rounded-lg flex items-center justify-center hover:bg-white transition-colors cursor-pointer group-hover:scale-105">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-10 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[10px] font-black tracking-[0.3em] uppercase">
            © 2026 PUREPERFORMANCE PLANS. ENGINEERED BY AI.
          </p>
          <div className="flex gap-12">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-2 h-2 rounded-full bg-[#BCFE00] animate-pulse"></div>
              <span className="text-gray-400 text-[10px] font-black tracking-widest uppercase group-hover:text-white transition-colors">
                System Online
              </span>
            </div>
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-2 h-2 rounded-full bg-[#BCFE00]"></div>
              <span className="text-gray-400 text-[10px] font-black tracking-widest uppercase group-hover:text-white transition-colors">
                Global Network
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
