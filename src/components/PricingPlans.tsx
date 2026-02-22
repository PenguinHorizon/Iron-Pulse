import React from 'react';

const PricingPlans: React.FC = () => {
    const plans = [
        {
            name: "BASIC PLAN",
            price: "19.99",
            features: [
                "Single Personalized Plan",
                "Tailored To Fitness Goals",
                "Basic Workouts",
                "Meal Suggestions",
                "Email Support"
            ],
            highlighted: false
        },
        {
            name: "PRO PLAN",
            price: "39.99",
            features: [
                "Personal Training & Meal Plans",
                "Weight Tracking",
                "Progress Monitoring",
                "Exclusive Content",
                "Customizable Routines",
                "Email & Chat Support"
            ],
            highlighted: true
        },
        {
            name: "ELITE PLAN",
            price: "79.99",
            features: [
                "All Pro Plan Features",
                "One-On-One Coaching",
                "Weekly Check-Ins",
                "Priority Support",
                "Expert Guidance"
            ],
            highlighted: false
        }
    ];

    return (
        <section id="pricing" className="bg-white py-24 px-6 lg:px-12 relative overflow-hidden">
            {/* Decorative Background Layers */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#F5FFE0] blur-[120px] rounded-full opacity-20 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#F9FFF0] blur-[100px] rounded-full opacity-30 -z-10"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter text-black uppercase mb-4">
                        PERFECT PLAN FOR YOUR <br className="hidden md:block" /> FITNESS GOALS
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto font-medium">
                        Choose The Perfect Plan To Match Your Fitness Goals And Start Your <br className="hidden md:block" /> Journey Today
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-12">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className={`
                relative flex flex-col items-center w-full max-w-sm p-10 rounded-[40px] transition-all duration-500 hover:scale-105
                ${plan.highlighted
                                    ? 'bg-[#BCFE00] py-16 shadow-[0_30px_60px_rgba(188,254,0,0.3)] z-20 scale-105'
                                    : 'bg-white border border-gray-100 py-12 shadow-xl z-10'
                                }
              `}
                        >
                            {/* Plan Name */}
                            <h3 className="text-xl font-black italic tracking-tighter text-black uppercase mb-6">
                                {plan.name}
                            </h3>

                            {/* Price */}
                            <div className="flex items-baseline mb-10">
                                <span className="text-4xl font-black italic text-black">$</span>
                                <span className="text-5xl font-black italic text-black mx-1">{plan.price}</span>
                                <span className="text-gray-500 font-bold">/month</span>
                            </div>

                            {/* Features List */}
                            <ul className="flex flex-col gap-4 mb-12 w-full">
                                {plan.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex gap-3 items-center group/item">
                                        <span className="text-[#BCFE00] font-black tracking-widest text-lg group-hover/item:text-black transition-colors">
                                            {plan.highlighted ? <span className="text-black/40">//</span> : '//'}
                                        </span>
                                        <span className={`font-bold text-sm ${plan.highlighted ? 'text-black' : 'text-gray-700'}`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <button
                                className={`
                  w-full py-4 rounded-full font-black text-sm tracking-tighter transition-all duration-300 shadow-lg
                  ${plan.highlighted
                                        ? 'bg-black text-[#BCFE00] hover:bg-black/80 hover:px-10'
                                        : 'bg-[#BCFE00] text-black hover:bg-black hover:text-[#BCFE00]'
                                    }
                `}
                            >
                                Join NOW
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingPlans;
