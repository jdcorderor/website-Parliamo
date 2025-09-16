import { useState, useEffect, useRef } from "react";

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
                    <img src="/classes/decoration.png" className="w-full h-70 md:h-auto object-cover" />
                </div>

                <div className="relative z-10 top-10 md:top-25 flex flex-col w-[90vw] gap-4 mx-auto">
                    <h2 className="text-3xl md:text-5xl font-cardo text-[#E1AA2C] font-semibold text-center">Elija la opción que mejor se adapte a su estilo de aprendizaje.</h2>
                    <p className="text-lg md:text-2xl font-montserrat text-[#E1AA2C] font-light text-center">Ambas rutas están diseñadas para guiarle sólidamente desde el nivel A1 hasta el B1.</p>
                </div>
            </div>

            <div className="flex flex-row mt-20 md:mt-70">
                <div className="hidden md:flex relative w-[90%] h-[40vw] z-20">
                    <img src="/classes/image1.avif" alt="Aprende italiano con fluidez" className="w-full h-[40vw] object-cover" />
                    <div className="absolute inset-0 bg-black opacity-30 pointer-events-none"></div>
                </div>

                <div ref={ref} className={`md:w-[110%] z-10 ${ visible ? 'slide-from-left' : 'opacity-0' }`}>
                    {animatingView === 0 && (
                        <div className="slide-from-left">
                            <div className="flex flex-col bg-[#032386] px-8 md:px-16 py-10 md:py-16 my-6 md:my-12 mr-6 md:mr-12 gap-8 md:gap-12 rounded-r-3xl md:rounded-r-none">
                                <h2 className="text-4xl md:text-5xl font-cardo text-white font-semibold md:w-[60%]">Aprende italiano con fluidez.</h2>
                                <div className="flex flex-col gap-4 md:w-[90%]">
                                    <h3 className="text-lg md:text-xl font-montserrat text-white font-semibold">Clases Online</h3>
                                    <p className="text-sm md:text-lg font-montserrat text-white">Las clases online son totalmente personalizadas, con atención individual. Tenemos varios planes dependiendo de la cantidad de clases por semana.</p>
                                    <div className="flex flex-row flex-wrap gap-1 md:gap-2 mt-1 md:mt-2">
                                        {["Networking", "Grupos reducidos", "Material de estudio incluido"].map((text, index) => (
                                            <div key={index} className="text-xs md:text-sm font-montserrat text-white font-light bg-[#3064B7] px-6 py-1 rounded-full">{text}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center md:justify-end mx-0 md:mx-12 gap-4 md:gap-6">
                                <button className="px-3 border-l-3 border-[#E1AA2C] hover:scale-105 duration-300" onClick={ () => handleViewChange(1) }>
                                    <span className="block font-montserrat text-[#E1AA2C] font-semibold text-left">Presencial</span>
                                    <span className="block text-sm font-montserrat text-left">Sede Centro Ítalo</span>
                                </button>
                                <button className="px-3 border-l-3 border-[#E1AA2C] hover:scale-105 duration-300" onClick={ () => handleViewChange(2) }>
                                    <span className="block font-montserrat text-[#E1AA2C] font-semibold text-left">Presencial</span>
                                    <span className="block text-sm font-montserrat text-left">Sede CEUJAP</span>
                                </button>
                            </div>
                        </div>
                    )}

                    {animatingView === 1 && (
                        <div className="slide-from-left">
                            <div className="flex flex-col bg-[#032386] px-8 md:px-12 py-10 md:py-12 my-6 md:my-12 mr-6 md:mr-12 gap-8 md:gap-12 rounded-r-3xl md:rounded-r-none">
                                <div className="flex flex-col gap-4 md:w-[80%] mt-1 md:mt-2">
                                    <h3 className="flex flex-col md:flex-row items-start gap-x-6 gap-y-1">
                                        <span className="text-xl md:text-2xl font-montserrat text-white font-semibold">Clases Presenciales</span>
                                        <span className="font-cardo text-white font-light md:pt-[0.8vh]">Centro Ítalo</span>
                                    </h3>
                                    <div className="flex flex-col gap-6 font-montserrat text-white">
                                        <p className="text-sm md:text-regular">Nuestro entorno más premium y enfocado, ubicado en el corazón de la comunidad italiana. Ideal para quienes buscan una inmersión cultural completa y un grupo de estudio cohesionado.</p>
                                        <p className="text-sm md:text-regular">Ideal para estudiantes que prefieren un grupo pequeño, materiales incluidos y un ambiente de club exclusivo.</p>
                                        <ul className="text-sm md:text-regular list-disc px-6">
                                            <li>Clase de refuerzo mensual.</li>
                                            <li>Acceso al club conversacional.</li>
                                            <li>Duración por nivel: 3-4 meses.</li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-row flex-wrap gap-1 md:gap-2 mt-2 md:mt-4">
                                        {["Networking", "Grupos reducidos", "Material de estudio incluido"].map((text, index) => (
                                            <div key={index} className="text-xs md:text-sm font-montserrat text-white font-light bg-[#3064B7] px-6 py-1 rounded-full">{text}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center md:justify-end mx-0 md:mx-12 gap-4 md:gap-6">
                                <button className="px-3 border-l-3 border-[#E1AA2C] hover:scale-105 duration-300" onClick={ () => handleViewChange(0) }>
                                    <span className="block font-montserrat text-[#E1AA2C] font-semibold text-left">Virtual</span>
                                    <span className="block text-sm font-montserrat text-left">Horario flexible</span>
                                </button>
                                <button className="px-3 border-l-3 border-[#E1AA2C] hover:scale-105 duration-300" onClick={ () => handleViewChange(2) }>
                                    <span className="block font-montserrat text-[#E1AA2C] font-semibold text-left">Presencial</span>
                                    <span className="block text-sm font-montserrat text-left">Sede CEUJAP</span>
                                </button>
                            </div>
                        </div>
                    )}

                    {animatingView === 2 && (
                        <div className="slide-from-left">
                            <div className="flex flex-col bg-[#032386] px-8 md:px-12 py-10 md:py-12 my-6 md:my-12 mr-6 md:mr-12 gap-8 md:gap-12 rounded-r-3xl md:rounded-r-none">
                                <div className="flex flex-col gap-4 md:w-[80%] mt-1 md:mt-2">
                                    <h3 className="flex flex-col md:flex-row items-start gap-x-6 gap-y-1">
                                        <span className="text-xl md:text-2xl font-montserrat text-white font-semibold">Clases Presenciales</span>
                                        <span className="font-cardo text-white font-light md:pt-[0.8vh]">CEUJAP</span>
                                    </h3>
                                    <div className="flex flex-col gap-6 font-montserrat text-white">
                                        <p className="text-sm md:text-regular">Una colaboración de prestigio que ofrece <b>aval universitario</b> y un camino estructurado hacia la certificación. Disfrute de los beneficios de un programa respaldado por una institución académica.</p>
                                        <p className="text-sm md:text-regular">Ideal para quienes valoran el respaldo institucional, una estructura académica clara y la tradición universitaria.</p>
                                        <ul className="text-sm md:text-regular list-disc px-6">
                                            <li>Clase de refuerzo mensual.</li>
                                            <li>Acceso al club conversacional.</li>
                                            <li>Duración por nivel: 3-4 meses.</li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-row flex-wrap gap-1 md:gap-2 mt-2 md:mt-4">
                                        {["Networking", "Grupos reducidos", "Aval universitario - UJAP", "Material de estudio incluido"].map((text, index) => (
                                            <div key={index} className="text-xs md:text-sm font-montserrat text-white font-light bg-[#3064B7] px-6 py-1 rounded-full">{text}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center md:justify-end mx-0 md:mx-12 gap-4 md:gap-6">
                                <button className="px-3 border-l-3 border-[#E1AA2C] hover:scale-105 duration-300" onClick={ () => handleViewChange(0) }>
                                    <span className="block font-montserrat text-[#E1AA2C] font-semibold text-left">Virtual</span>
                                    <span className="block text-sm font-montserrat text-left">Horario flexible</span>
                                </button>
                                <button className="px-3 border-l-3 border-[#E1AA2C] hover:scale-105 duration-300" onClick={ () => handleViewChange(1) }>
                                    <span className="block font-montserrat text-[#E1AA2C] font-semibold text-left">Presencial</span>
                                    <span className="block text-sm font-montserrat text-left">Sede Centro Ítalo</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}