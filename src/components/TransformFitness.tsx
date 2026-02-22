import React from 'react';

const TransformFitness: React.FC = () => {
    const blocks = [
        {
            title: "AI POWERED FITNESS TRAINER",
            desc: "Personalized Workouts That Adopt With Real-Time Feedback.",
            img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800",
            btnText: "See Data",
            reversed: false
        },
        {
            title: "DIET & WORKOUT GUIDE",
            desc: "Offers Custom Meal Plans And Workouts Based On Your Goals And Body Type.",
            img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
            btnText: "See Plan",
            reversed: true
        },
        {
            title: "UNIQUE ROUTINES & HEALTH METRICS",
            desc: "Stats Provide Personalized Workouts And Real-Time Health Tracking.",
            img: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&q=80&w=800",
            btnText: "See Stat",
            reversed: false,
            isHUD: true
        }
    ];

    return (
        <section id="how-it-works" className="bg-white py-24 px-6 lg:px-12 relative overflow-hidden">
            {/* Global Decorative Blobs - Lightened for White BG */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-[#F5FFE0] blur-[100px] rounded-full opacity-60"></div>
                <div className="absolute bottom-[20%] right-[-10%] w-[30%] h-[30%] bg-[#F9FFF0] blur-[80px] rounded-full opacity-80"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter text-black uppercase mb-4">
                        TRANSFORM YOUR FITNESS <br className="hidden md:block" /> JOURNEY IN A SMARTER WAY
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto font-medium">
                        Reach Your Fitness Goals Effortlessly With An AI-Powered Personalized Plan
                    </p>
                </div>

                {/* Alternating Blocks */}
                <div className="flex flex-col gap-24 lg:gap-32">
                    {blocks.map((block, idx) => (
                        <div
                            key={idx}
                            className={`flex flex-col ${block.reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24 relative group`}
                        >
                            {/* Decorative Background Layers - Light Lime Bubbles */}
                            <div className={`absolute -inset-10 z-0 pointer-events-none hidden lg:block ${block.reversed ? 'left-[-40%]' : 'right-[-40%]'}`}>
                                <div className={`absolute top-0 ${block.reversed ? 'left-0' : 'right-0'} w-[100%] h-[120%] bg-[#F9FFF0] blur-[100px] rounded-full opacity-70`}></div>
                            </div>

                            {/* Text Part */}
                            <div className="flex-1 text-center lg:text-left z-10">
                                {/* Decorative Accent */}
                                <div className="flex gap-1 mb-6 justify-center lg:justify-start">
                                    <div className="w-2 h-4 bg-[#BCFE00] -skew-x-12"></div>
                                    <div className="w-2 h-4 bg-gray-200 -skew-x-12"></div>
                                    <div className="w-2 h-4 bg-[#BCFE00] -skew-x-12"></div>
                                </div>

                                <h3 className="text-3xl md:text-4xl font-black italic tracking-tighter text-black leading-[0.9] mb-4 max-w-sm mx-auto lg:mx-0">
                                    {block.title}
                                </h3>
                                <p className="text-gray-500 font-bold text-sm mb-8 max-w-sm mx-auto lg:mx-0">
                                    {block.desc}
                                </p>
                                <button className="bg-[#BCFE00] text-black px-6 py-2.5 rounded-full font-black italic text-xs uppercase hover:scale-105 transition-transform shadow-lg shadow-[#BCFE00]/20">
                                    {block.btnText}
                                </button>
                            </div>

                            {/* Image Part */}
                            <div className="flex-1 relative z-10 w-full lg:w-auto">
                                <div className="relative rounded-[40px] overflow-hidden shadow-2xl group/img">
                                    <img
                                        src={block.img}
                                        alt={block.title}
                                        className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover/img:scale-110"
                                    />

                                    {/* HUD Elements for the 3rd block */}
                                    {block.isHUD && (
                                        <div className="absolute inset-0 bg-black/30 flex flex-col justify-between p-6 pointer-events-none">
                                            {/* HUD Top */}
                                            <div className="flex justify-between items-start">
                                                <div className="flex gap-1">
                                                    {[40, 60, 80].map((size, i) => (
                                                        <div key={i} className={`w-8 h-8 md:w-10 md:h-10 border-2 border-[#BCFE00]/40 rounded-full flex items-center justify-center`}>
                                                            <div className={`w-[${size}%] h-[${size}%] border border-[#BCFE00] rounded-full`}></div>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="text-[#BCFE00] flex flex-col items-center">
                                                    <div className="w-10 h-10 border border-[#BCFE00] rounded-lg flex items-center justify-center">
                                                        <div className="w-6 h-6 border-2 border-dashed border-[#BCFE00] rounded-full animate-spin"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* HUD Bottom */}
                                            <div className="flex items-end justify-between">
                                                <div className="w-12 h-12 border border-[#BCFE00]/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                                                    <div className="w-8 h-[1px] bg-[#BCFE00] rotate-45"></div>
                                                    <div className="w-8 h-[1px] bg-[#BCFE00] -rotate-45 absolute"></div>
                                                </div>
                                                <div className="flex flex-col items-end">
                                                    <div className="w-24 h-6 border border-[#BCFE00]/20 rounded-md bg-[#BCFE00]/10 overflow-hidden">
                                                        <div className="h-full bg-[#BCFE00] w-[70%]"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Corner Accents - Minimalist as per screenshot */}
                                <div className="absolute -top-4 -right-4 w-12 h-12 border-t-4 border-r-4 border-[#BCFE00]/20 hidden lg:block z-0"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Global Action Button */}
                <div className="mt-32 text-center">
                    <button className="bg-[#BCFE00] text-black px-12 py-4 rounded-full font-black italic text-xl tracking-tighter hover:scale-110 transition-transform shadow-xl shadow-[#BCFE00]/30 uppercase">
                        START NOW
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TransformFitness;
