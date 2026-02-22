import React from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials: React.FC = () => {
    const testimonials = [
        {
            name: "MORGAN",
            text: "AI-driven insights made it easy to stay on track. I've never felt more motivated.",
            stars: 4,
            avatar: "https://images.unsplash.com/photo-1548690312-e3b507d17a4d?auto=format&fit=crop&q=80&w=200&h=200"
        },
        {
            name: "BUTLER",
            text: "AI-powered plans that adapt to me—PurePerformance is worth every penny!",
            stars: 5,
            avatar: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=200&h=200"
        },
        {
            name: "ROYAN ATH",
            text: "The AI-driven reminders and motivational tips keep me on track, even on tough days.",
            stars: 5,
            avatar: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=200&h=200"
        },
        {
            name: "ZARA KANE",
            text: "The personalized diet plans are a game changer. I've lost 10lbs in just a month!",
            stars: 5,
            avatar: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=200&h=200"
        }
    ];

    return (
        <section id="testimonials" className="bg-white py-24 px-6 lg:px-12 relative overflow-hidden testimonials-swiper">
            {/* Background Decorative Layers */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
                <div className="absolute top-[20%] left-[10%] w-[30%] h-[30%] bg-[#F5FFE0] blur-[120px] rounded-full opacity-40"></div>
                <div className="absolute bottom-[20%] right-[10%] w-[40%] h-[40%] bg-[#F9FFF0] blur-[150px] rounded-full opacity-30"></div>
            </div>

            <div className="max-w-7xl mx-auto relative">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter text-black uppercase mb-4">
                        REAL PEOPLE, REAL RESULTS
                    </h2>
                    <p className="text-gray-500 font-medium max-w-xl mx-auto leading-tight">
                        Join Thousands Who've Achieved Their Goals With <br className="hidden md:block" /> PurePerformance Plans.
                    </p>
                </div>

                {/* Swiper Slider */}
                <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    navigation={{
                        nextEl: '.swiper-button-next-custom',
                        prevEl: '.swiper-button-prev-custom',
                    }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="!overflow-visible pb-20 pt-16 px-6"
                >
                    {testimonials.map((item, idx) => (
                        <SwiperSlide key={idx} className="h-full !overflow-visible pt-10">
                            <div className="relative bg-[#F5FFE0] p-10 rounded-[35px] transition-all duration-500 hover:shadow-2xl hover:shadow-[#BCFE00]/20 group h-full flex flex-col">
                                {/* Star Rating */}
                                <div className="flex gap-1 mb-10">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar
                                            key={i}
                                            className={`text-lg ${i < item.stars ? 'text-[#BCFE00]' : 'text-gray-200'}`}
                                        />
                                    ))}
                                </div>

                                {/* Avatar - Overlapping Top Right */}
                                <div className="absolute -top-8 -right-4 w-24 h-24 p-1 bg-white rounded-full shadow-xl z-20 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                                    <div className="w-full h-full rounded-full overflow-hidden">
                                        <img
                                            src={item.avatar}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-black rounded-full border-2 border-white flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 bg-[#BCFE00] rounded-full animate-pulse"></div>
                                    </div>
                                </div>

                                {/* Quote Text */}
                                <p className="text-gray-700 font-bold italic text-sm md:text-base leading-relaxed mb-10 pr-4 flex-grow">
                                    "{item.text}"
                                </p>

                                {/* Author Name */}
                                <h4 className="text-xl font-black italic tracking-tighter text-black uppercase">
                                    {item.name}
                                </h4>

                                {/* Decorative Corner Layer */}
                                <div className="absolute bottom-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <div className="flex gap-1">
                                        <div className="w-1.5 h-3 bg-black -skew-x-12"></div>
                                        <div className="w-1.5 h-3 bg-black -skew-x-12"></div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Arrows */}
                <div className="flex justify-center gap-4 mt-8">
                    <button className="swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-black hover:bg-[#BCFE00] hover:border-[#BCFE00] transition-all cursor-pointer">
                        <FaChevronLeft />
                    </button>
                    <button className="swiper-button-next-custom w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-black hover:bg-[#BCFE00] hover:border-[#BCFE00] transition-all cursor-pointer">
                        <FaChevronRight />
                    </button>
                </div>
            </div>

            {/* Custom Styles for Pagination */}
            <style>{`
                .testimonials-swiper .swiper-pagination-bullet {
                    background: #d1d5db;
                    opacity: 1;
                }
                .testimonials-swiper .swiper-pagination-bullet-active {
                    background: #BCFE00;
                    width: 20px;
                    border-radius: 10px;
                }
            `}</style>
        </section>
    );
};

export default Testimonials;
