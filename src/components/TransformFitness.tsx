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
        <section id="how-it-works" className="bg-black text-white py-24 px-6 lg:px-12 relative overflow-hidden">
            {/* Global Decorative Blobs */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-[#F5FFE0] blur-[100px] rounded-full opacity-30"></div>
                <div className="absolute bottom-[20%] right-[-10%] w-[30%] h-[30%] bg-[#F9FFF0] blur-[80px] rounded-full opacity-40"></div>
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
                            {/* Decorative Background Layers - Enhanced */}
                            <div className={`absolute -inset-10 z-0 pointer-events-none hidden lg:block ${block.reversed ? 'right-0' : 'left-0'}`}>
                                <div className={`absolute top-0 ${block.reversed ? 'right-0' : 'left-0'} w-3/4 h-full bg-gradient-to-br from-[#F5FFE0] to-[#F9FFF0] rounded-[60px] -rotate-3 -z-10 opacity-60 backdrop-blur-sm`}></div>
                                <div className={`absolute -bottom-10 ${block.reversed ? 'left-20' : 'right-20'} w-1/2 h-1/2 border border-[#BCFE00]/20 rounded-full rotate-12 -z-10`}></div>
                            </div>

                            {/* Text Part */}
                            <div className="flex-1 text-center lg:text-left z-10 transition-transform duration-500 group-hover:translate-x-2">
                                {/* Decorative Accent */}
                                <div className="flex gap-1 mb-6 justify-center lg:justify-start">
                                    <div className="w-2 h-4 bg-[#BCFE00] -skew-x-12"></div>
                                    <div className="w-2 h-4 bg-gray-200 -skew-x-12"></div>
                                    <div className="w-2 h-4 bg-[#BCFE00] -skew-x-12"></div>
                                </div>

                                <h3 className="text-3xl md:text-4xl font-black italic tracking-tighter text-black leading-tight mb-4 max-w-sm mx-auto lg:mx-0">
                                    {block.title}
                                </h3>
                                <p className="text-gray-600 font-medium mb-8 max-w-sm mx-auto lg:mx-0">
                                    {block.desc}
                                </p>
                                <button className="bg-[#BCFE00] text-black px-8 py-3 rounded-full font-bold text-sm tracking-tighter hover:bg-black hover:text-[#BCFE00] transition-all shadow-lg hover:shadow-[#BCFE00]/40">
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

                                    {/* Digital HUD Overlay for the 3rd block */}
                                    {block.isHUD && (
                                        <div className="absolute inset-0 bg-black/20 flex flex-col justify-between p-6 pointer-events-none">
                                            <div className="flex justify-between items-start">
                                                <div className="bg-[#BCFE00]/90 text-black text-[10px] font-black px-2 py-1 rounded-sm tracking-widest uppercase">Live Metrics</div>
                                                <div className="text-white flex gap-1">
                                                    {[1, 2, 3].map(i => <div key={i} className={`w-1 h-${i * 2} bg-[#BCFE00]`}></div>)}
                                                </div>
                                            </div>
                                            <div className="flex items-end justify-between">
                                                <div className="flex gap-4">
                                                    <div className="text-white">
                                                        <div className="text-[10px] text-white/60 uppercase font-black">BPM</div>
                                                        <div className="text-2xl font-black italic">142</div>
                                                    </div>
                                                    <div className="text-[#BCFE00]">
                                                        <div className="text-[10px] text-white/60 uppercase font-black">KCAL</div>
                                                        <div className="text-2xl font-black italic tracking-tighter">482</div>
                                                    </div>
                                                </div>
                                                <div className="w-24 h-12 border-b border-r border-[#BCFE00]/40 flex items-center justify-center">
                                                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#BCFE00] to-transparent animate-pulse"></div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Glass Frame Overlay */}
                                    <div className="absolute inset-0 border-[1px] border-white/10 rounded-[40px] pointer-events-none"></div>
                                </div>

                                {/* Corner Accents */}
                                <div className="absolute -top-4 -right-4 w-12 h-12 border-t-4 border-r-4 border-[#BCFE00] hidden lg:block z-20"></div>
                                <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-4 border-l-4 border-gray-100 hidden lg:block z-20"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Global Action Button */}
                <div className="mt-32 text-center group">
                    <div className="relative inline-block">
                        <div className="absolute inset-0 bg-[#BCFE00] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        <button className="relative bg-[#BCFE00] text-black px-16 py-5 rounded-[20px] font-black text-xl italic tracking-tighter hover:scale-105 transition-transform shadow-[0_20px_40px_rgba(188,254,0,0.3)] hover:shadow-[#BCFE00]/60 uppercase border-b-4 border-black/10">
                            START NOW
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TransformFitness;
