import React from 'react';
import { FaLeaf } from 'react-icons/fa';
import { FaHeartPulse } from 'react-icons/fa6';
import { MdWatch } from 'react-icons/md';

const BoostRoutine: React.FC = () => {
    const features = [
        {
            title: "AI-POWERED TRAINING PLANS",
            desc: "Workouts Tailored To Your Goals For Optimal Results",
            icon: <MdWatch className="text-[#BCFE00] text-3xl" />,
            btnText: "Start Plan"
        },
        {
            title: "SMART MEAL PLANS",
            desc: "Nutrition Tailored To Your Lifestyle And Goals For Optimal Results",
            icon: <FaLeaf className="text-[#BCFE00] text-3xl" />,
            btnText: "Set Meal"
        },
        {
            title: "DAILY WEIGHT TRACKER",
            desc: "Effortlessly Track Progress With A User-Friendly Calendar View",
            icon: <FaHeartPulse className="text-[#BCFE00] text-3xl" />,
            btnText: "Track Goals"
        }
    ];

    return (
        <section className="bg-white py-24 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter text-black uppercase mb-4">
                        BOOST YOUR ROUTINE <br className="hidden md:block" /> WITH AI INSIGHTS
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto font-medium">
                        Boost Your Fitness With AI-Powered Workouts. Enjoy Personalized <br className="hidden md:block" /> Meals Tailored To You.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="bg-[#F9FFF0] border border-[#ECF9D6] rounded-[40px] p-10 flex flex-col items-center text-center shadow-[0_20px_50px_rgba(188,254,0,0.1)] hover:scale-105 transition-transform duration-300"
                        >
                            {/* Icon Circle */}
                            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mb-8">
                                {feature.icon}
                            </div>

                            {/* Text Content */}
                            <h3 className="text-xl font-black italic tracking-tighter text-black mb-4 leading-tight px-4">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 font-medium text-sm leading-relaxed mb-10 px-6">
                                {feature.desc}
                            </p>

                            {/* Button */}
                            <button className="mt-auto bg-[#BCFE00] text-black px-8 py-3 rounded-full font-bold text-sm tracking-tighter hover:bg-black hover:text-[#BCFE00] transition-colors shadow-lg">
                                {feature.btnText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BoostRoutine;
