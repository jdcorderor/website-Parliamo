import { useEffect, useState, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import SlideCard from "./ui/card";
import { ChevronRight} from "lucide-react";

export default function ConversationClub() {
    // Ref for section slide-in transition
    const ref = useRef(null);

    // State variable for section visibility
    const [visible, setVisible] = useState(false);
  
    // Intersection observer
    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setVisible(entry.isIntersecting);
          },
          { threshold: 0 }
        );
    
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
    
    // ------------------------------------------------
    
    // Mock data for comment slides
    const slides = [
        {
            text: "Lorem Ipsum is simply dummy text of the printing and...",
            name: "Karen Gray",
            age: "25 años",
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            text: "Lorem Ipsum is simply dummy text of the printing and...",
            name: "Karen Gray",
            age: "25 años",
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            text: "Lorem Ipsum is simply dummy text of the printing and...",
            name: "Karen Gray",
            age: "25 años",
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            text: "Lorem Ipsum is simply dummy text of the printing and...",
            name: "Karen Gray",
            age: "25 años",
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            text: "Lorem Ipsum is simply dummy text of the printing and...",
            name: "Karen Gray",
            age: "25 años",
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            text: "Lorem Ipsum is simply dummy text of the printing and...",
            name: "Karen Gray",
            age: "25 años",
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ];    
        
    return (
        <section id="club-conversacional" className="my-24 md:my-32">
            <div className="relative w-full">
                <div className="absolute w-full z-0">
                    <img src="/conversation-club/image1.jpg" alt="Club de Conversación" className="w-full h-90 md:h-125 object-cover" />
                    <div className="absolute inset-0 bg-black opacity-60 pointer-events-none"></div>
                </div>

                <div ref={ref} className={`relative z-10 w-[80vw] top-15 md:top-40 flex flex-col gap-4 mx-auto ${ visible ? 'slide-from-bottom' : 'opacity-0' }`}>
                    <div className="flex flex-row justify-center md:justify-end">
                        <h1 className="text-4xl md:text-7xl font-montserrat text-white font-bold text-center md:text-right w-full md:w-1/2">Club de Conversación</h1>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center md:justify-end items-center gap-6">
                        <p className="text-xl md:text-2xl font-cardo text-white font-semibold text-center md:text-right md:w-1/3">La forma más divertida y auténtica de perder el miedo a hablar italiano.</p>
                        <a className="flex w-10 h-10 bg-gray-400/40 hover:bg-black/40 rounded-full justify-center items-center" href="/club-conversacional">
                            <ChevronRight className="text-white"></ChevronRight>
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4 mt-50 md:mt-110">
                <h1 className="text-3xl md:text-5xl font-cardo text-[#032386] font-semibold text-center">Somos más que una academia</h1>

                <div className="md:relative mx-4">
                    <Swiper modules={[Autoplay]} autoplay={{ delay: 4000, disableOnInteraction: true }} spaceBetween={15} breakpoints={{ 1440: { slidesPerView: 4 }, 1024: { slidesPerView: 3 }, 700: { slidesPerView: 1 } }} className="mt-6 md:mt-12 px-4" >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index} className="flex justify-center">
                                <SlideCard slide={slide} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}