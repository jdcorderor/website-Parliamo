import { useState, useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Classes() {
    // State variables for selected view
    const [view, setView] = useState(0);
    const [animatingView, setAnimatingView] = useState(0);

    // View change handler
    const handleViewChange = (newView: number) => {
        setAnimatingView(newView);
        setTimeout(() => setView(newView), 100);
    };

    // -----------------------------------------------------

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

    return (
        <section id="clases">
            <div className="relative w-full">
                <div className="absolute inset-0 z-0">
                    <img src="/classes/decoration.png" className="w-full h-105 md:h-auto object-cover" />
                </div>

                <div className="relative z-10 top-13 md:top-22 flex flex-col w-[90vw] gap-4 mx-auto">
                    <h2 className="text-3xl md:text-5xl font-cardo text-[#E1AA2C] font-semibold text-center">Elige la opción que mejor se adapte a tu estilo de aprendizaje.</h2>
                    <p className="text-base md:text-xl font-montserrat text-[#E1AA2C] font-medium text-center w-[80%] md:w-[100%] mx-auto">
                        <i>Todos los caminos llevan a Roma</i>. Cualquier modalidad está diseñada para cursar desde el nivel A1 al B2, ayudándote a desarrollar las habilidades 
                        propias de un idioma, tales como leer, hablar, escribir y escuchar. Elige la que te guste más.</p>
                </div>
            </div>

            <div className="flex flex-row mt-40 md:mt-70">
                <div className="hidden md:flex relative w-[90%] h-[40vw] z-20">
                    <img src="/classes/image1.avif" alt="Aprende italiano con fluidez" className="w-full h-[40vw] object-cover" />
                    <div className="absolute inset-0 bg-black opacity-30 pointer-events-none"></div>
                </div>

                <div ref={ref} className={`md:w-[110%] z-10 ${ visible ? 'slide-from-left' : 'opacity-0' }`}>
                    {animatingView === 0 && (
                        <div className="slide-from-left">
                            <div className="flex flex-col bg-[#032386] px-8 md:px-16 py-10 md:py-16 my-6 md:my-12 mr-6 md:mr-12 gap-8 rounded-r-3xl md:rounded-r-none">
                                <h2 className="text-3xl md:text-5xl font-cardo text-white font-semibold md:w-[60%]">Aprende italiano con fluidez.</h2>
                                <div className="flex flex-col gap-4 md:w-[90%]">
                                    <h3 className="text-lg md:text-xl font-montserrat text-white font-semibold">Clases Online</h3>
                                    <p className="text-sm md:text-lg font-montserrat text-white">
                                        Las clases online son tu mejor opción si te gusta la atención exclusiva y un ritmo de clases marcado por ti y por tus necesidades.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-1 md:gap-2 mt-1 md:mt-2">
                                        {["Horario adaptado a ti", "Material digital", "Clases totalmente en vivo"].map((text, index) => (
                                            <div key={index} className="text-sm md:text-base font-montserrat text-white font-light flex flex-row items-center">
                                                <img src="/plida/decoration.png" alt="PLIDA" className="h-4 md:h-6" />
                                                <p className="ml-2">{text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-start md:justify-end mx-4 md:mx-12 gap-4 md:gap-6">
                                <a href="https://api.whatsapp.com/send/?phone=%2B584129550860&text&type=phone_number&app_absent=0" aria-label="Contáctanos" className="flex justify-center items-center rounded-full hover:opacity-70">
                                    <FaWhatsapp className="w-8 md:w-9 h-8 md:h-9 text-[#E1AA2C] hover:opacity-75 transition-opacity" />
                                </a>
                                <button className="px-3 border-l-3 border-[#E1AA2C] hover:scale-105 duration-300 cursor-pointer" onClick={ () => handleViewChange(1) }>
                                    <span className="block font-montserrat text-[#E1AA2C] font-semibold text-left">Presencial</span>
                                    <span className="block text-sm font-montserrat text-left">Clases grupales</span>
                                </button>
                            </div>
                        </div>
                    )}

                    {animatingView === 1 && (
                        <div className="slide-from-left">
                            <div className="flex flex-col bg-[#032386] px-8 md:px-12 py-10 md:py-12 my-6 md:my-12 mr-6 md:mr-12 gap-8 md:gap-12 rounded-r-3xl md:rounded-r-none">
                                <div className="flex flex-col gap-4 mt-1 md:mt-2">
                                    <div className="flex flex-col md:w-[80%] gap-8">
                                        <h3 className="text-lg md:text-xl font-montserrat text-white font-semibold">Clases Presenciales</h3>
                                        <p className="text-sm md:text-lg font-montserrat text-white">
                                            La modalidad presencial es grupal. Se caracteriza por ser entretenida y muy dinámica, sobretodo para tener tu grupo de apoyo y de prácticas. 
                                            Te ayuda a aprender junto a personas que podrían ser tus futuros amigos y, tal vez, aliados comerciales. Esta es una modalidad rica en actividades 
                                            útiles para recordar y ejercitar los temas vistos. 
                                        </p>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-1 md:gap-2 mt-2 md:mt-4">
                                        {["Material impreso", "Clases de refuerzo cada semana", "Club de conversación semanal", "Sedes en Valencia", "Sede en San Diego"].map((text, index) => (
                                            <div key={index} className="text-sm md:text-base font-montserrat text-white font-light flex flex-row items-center">
                                                <img src="/plida/decoration.png" alt="PLIDA" className="h-4 md:h-6" />
                                                <p className="ml-2">{text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-start md:justify-end mx-4 md:mx-12 gap-4 md:gap-6">
                                <a href="https://api.whatsapp.com/send/?phone=%2B584129550860&text&type=phone_number&app_absent=0" aria-label="Contáctanos" className="flex justify-center items-center rounded-full hover:opacity-70">
                                    <FaWhatsapp className="w-8 md:w-9 h-8 md:h-9 text-[#E1AA2C] hover:opacity-75 transition-opacity" />
                                </a>
                                <button className="px-3 border-l-3 border-[#E1AA2C] hover:scale-105 duration-300 cursor-pointer" onClick={ () => handleViewChange(0) }>
                                    <span className="block font-montserrat text-[#E1AA2C] font-semibold text-left">Virtual</span>
                                    <span className="block text-sm font-montserrat text-left">Horario flexible</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}