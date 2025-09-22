import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    // Mock data for the footer
    const links = [
        { text: "¿Por qué aprender?", href: "#inscríbete" },
        { text: "PLIDA", href: "#PLIDA" },
        { text: "Nuestra comunidad", href: "#comunidad" },
        { text: "Clases online", href: "#clases" },
        { text: "Clases presenciales", href: "#clases" },
        { text: "Club conversacional", href: "#club-conversacional" },
    ];

    return (
        <section id="contacto">
            <div className="relative w-full border-t border-gray-200">
                <div className="absolute inset-0 z-0">
                    <img src="/footer/background.png" className="w-full h-full" />
                </div>
                
                <div className="relative z-10 p-4 md:p-8 mx-auto">
                    <div className="w-full flex flex-col lg:flex-row flex-wrap items-center justify-center md:justify-between py-2 md:py-4 mx-auto">             
                        {/* Logo */}
                        <div className="md:w-1/5 md:px-12">
                            <img src="/logo-alt.png" alt="Parliamo Ciao" className="w-40 md:w-40 md:h-fit justify-center" />
                        </div>

                        {/* Links */}
                        <div className="w-full lg:w-2/5 grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto px-6 md:px-32 lg:px-0 py-12 md:py-0">
                            {links.map((link, index) => (
                                <a key={index} href={link.href} className="text-sm text-center font-montserrat font-medium hover:underline transition-colors duration-200">{link.text}</a>
                            ))}
                        </div>

                        {/* Social media */}
                        <div className="w-full lg:w-1/5 space-y-4 text-center md:pt-12 lg:pt-0">
                            <div className="flex md:flex-col items-center justify-center gap-4">
                                <a href="https://www.instagram.com/parliamociao/" aria-label="@parliamociao" className="flex w-10 h-10 bg-[#032386] justify-center items-center rounded-full hover:opacity-70">
                                    <FaInstagram className="w-5 md:w-6 h-5 md:h-6 text-white hover:opacity-75 transition-opacity" />
                                </a>
                                <a href="https://api.whatsapp.com/send/?phone=%2B584129550860&text&type=phone_number&app_absent=0" aria-label="Contáctanos" className="flex w-10 h-10 bg-[#032386] justify-center items-center rounded-full hover:opacity-70">
                                    <FaWhatsapp className="w-5 md:w-6 h-5 md:h-6 text-white hover:opacity-75 transition-opacity" />
                                </a>
                            </div>
                        </div>
                    </div>
                
                    {/* Copyright */}
                    <div className="w-full text-center text-xs text-gray-500 px-12 md:px-0 pb-6 mt-8 md:mt-6">
                        Copyright © 2025 Academia Parliamo Ciao. Todos los derechos reservados.
                    </div>
                </div>
            </div>
        </section>
    )
}