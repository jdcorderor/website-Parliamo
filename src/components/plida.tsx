import { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";

export default function Plida() {
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
        <section id="PLIDA">
            <div className="relative w-full">
                <div className="absolute inset-0 z-0">
                    <div className="grid grid-cols-3">
                        {["/plida/banner1.avif", "/plida/banner2.avif", "/plida/banner3.avif"].map((src, index) => (
                            <div key={index} className="relative w-full h-[50vw] md:h-[30vw] overflow-hidden">
                                <img src={src} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black opacity-30 pointer-events-none"></div>
                            </div>
                        ))}
                    </div>

                    <div ref={ref} className="h-[200vw] md:h-[40vw] bg-[#032386]"></div>
                </div>
                
                <div className={`${ visible ? 'slide-from-bottom' : 'opacity-0' }`}>
                    <div className="relative z-10 w-[80vw] top-[18vh] md:top-[48vh] mx-auto">
                        <h1 className="text-8xl md:text-[25vh] font-cardo text-white font-semibold uppercase tracking-wider text-center md:text-left">Plida</h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 mt-4">
                            <div className="flex flex-col gap-4">
                                <p className="text-sm md:text-lg font-montserrat text-white text-center md:text-left">PLIDA <b>(Progetto Lingua Italiana Dante Alighieri)</b> es una certificación evaluada según el Marco Común Europeo de Referencia para las Lenguas (MCERL) y reconocida por el gobierno italiano, está diseñada para que puedas demostrar tu competencia en el idioma italiano evaluando las destrezas de escuchar, leer, escribir y hablar. Esta prueba es un requisito fundamental para tu solicitud de ciudadanía por matrimonio, y también para otros trámites como la inscripción universitaria o el permiso de residencia en Italia.</p>
                                <p className="text-sm md:text-lg font-montserrat text-white text-center md:text-left">Este certificado está avalado oficialmente por el Ministerio de Asuntos Exteriores de Italia, garantizando su validez y aceptación en todos los consulados y embajadas italianas.</p>
                            </div>

                            <div className="flex flex-col gap-4 md:pl-16">
                                <div className="flex flex-col gap-4 md:gap-4">
                                    <p className="text-sm md:text-lg font-montserrat text-white text-center md:text-left">Te guiamos paso a paso desde cero hasta superar completamente tu prueba.</p>
                                    <p className="text-sm md:text-lg font-montserrat text-white font-semibold text-center md:text-left">En Parliamo Ciao, te ofrecemos:</p>
                                </div>

                                <div className="flex flex-row gap-4 items-center justify-center md:justify-start">
                                    <img src="/plida/decoration.png" alt="PLIDA" className="h-8 md:h-auto" />
                                    <p className="text-sm md:text-lg font-montserrat text-white md:w-[60%]">Preparación detallada, práctica y estratégica para la prueba</p>
                                </div>

                                <div className="flex flex-row gap-4 items-center justify-center md:justify-start">
                                    <img src="/plida/decoration.png" alt="PLIDA" className="h-8 md:h-auto" />
                                    <p className="text-sm md:text-lg font-montserrat text-white md:w-[60%]">Acompañamiento en todo el proceso, incluso el día de la presentación de la prueba</p>
                                </div>

                                <div className="flex flex-row gap-4 items-center justify-center md:justify-start">
                                    <img src="/plida/decoration.png" alt="PLIDA" className="h-8 md:h-auto" />
                                    <p className="text-sm md:text-lg font-montserrat text-white md:w-[60%]">Material auténtico para las prácticas</p>
                                </div>
                            </div>
                        </div>    
                    </div>

                    <div className="relative z-15 top-[14vh] md:top-[50vh] flex justify-end mx-6 my-12">
                        <a className="flex w-10 h-10 bg-gray-400/40 hover:bg-black/40 rounded-full justify-center items-center" href="/PLIDA">
                            <ChevronRight className="text-white"></ChevronRight>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
