import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet.tsx";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";

SwiperCore.use([Autoplay]);

export default function HeroSection() {
    // State variable for toggle menu management
    const [isOpen, setIsOpen] = useState(false);

    // Routes array
    const routes = [
        { href: "#comunidad", label: "Comunidad" },
        { href: "#PLIDA", label: "PLIDA" },
        { href: "#clases", label: "Clases" },
        { href: "#contacto", label: "Contáctanos" },
    ]

    return (
        <section id="inicio" className="relative w-full min-h-110 md:min-h-screen bg-white text-white">
            {/* Background image */}
            <div className="w-full absolute inset-0 z-0 p-2 md:p-5">
                <Swiper loop={true} autoplay={{ delay: 5000 }} className="flex w-full h-100 md:h-[100%] gap-2">
                    {["/herosection/banner1.jpg", "/herosection/banner2.jpg", "/herosection/banner3.jpg", "/herosection/banner4.jpg"].map((src, index) => (
                        <SwiperSlide key={index}>
                            <img src={src} alt={`Slide ${index + 1}`} className="w-full h-100 md:h-[100%] object-cover rounded-3xl" />
                            <div className="absolute inset-0 z-5 h-100 md:h-[100%] bg-black opacity-40 rounded-3xl pointer-events-none"></div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Navigator */}
            <header className="flex items-center justify-between p-8 md:px-20 md:py-12 z-10">
                <div className="w-full flex items-center justify-start z-10">
                    <div className="flex-1 flex items-center gap-2">
                        <img src="/logo-blanco.png" alt="Parliamo Ciao" className="w-20 md:w-30" />
                    </div>

                    {/* Main menu */}
                    <nav className="hidden lg:flex font-montserrat font-medium gap-12">
                        {routes.map((route) => (
                            <a key={route.href} href={route.href} className="md:text-sm text-white hover:font-bold">{route.label}</a>
                        ))}
                    </nav>
        
                    {/* Toggle menu */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <button className="flex items-center justify-end lg:hidden">
                                <Menu className="h-5 w-5 text-white" />
                            </button>
                        </SheetTrigger>
                        
                        <SheetContent className="bg-white lg:hidden slide-from-right">
                            <nav className="flex flex-col gap-6 my-12">
                                {routes.map((route) => (
                                    <a key={route.href} href={route.href} className="text-lg text-gray-800 font-montserrat font-medium hover:font-semibold" onClick={() => setIsOpen(false)}>{route.label}</a>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </header>

            {/* Main phrase */}
            <div className="relative inset-0 z-10 top-15 md:top-35 flex w-[85vw] md:w-[60vw] mx-auto">
                <h1 className="text-4xl md:text-7xl font-montserrat text-white font-semibold text-center mx-auto">
                    Un idioma, <br /> <span className="text-gray-100">mille porte</span>
                </h1>
            </div>
        </section>
    );
}