import { useEffect, useRef, useState } from "react";
import { ChevronLeft } from "lucide-react";

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
          { threshold: 0.3 }
        );
    
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="PLIDA" className="w-full overflow-hidden">
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

                    <div ref={ref} className="h-[135vw] md:h-[32vw] bg-[#032386]"></div>
                </div>

                <div className="relative z-5 top-6 left-6">
                    <a className="flex w-10 h-10 bg-gray-600/90 rounded-full justify-center items-center hover:bg-black/80" href="/">
                        <ChevronLeft className="text-white"></ChevronLeft>
                    </a>
                </div>
                
                <div className={`${ visible ? 'slide-from-bottom' : 'opacity-0' }`}>
                    <div className="relative z-10 w-[80vw] top-[16vh] md:top-[42vh] mx-auto">
                        <h1 className="text-8xl md:text-[25vh] font-cardo text-white font-semibold uppercase tracking-wider text-center md:text-left">Plida</h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mt-4 md:mt-0">
                            <div className="flex flex-col gap-6">
                                <p className="text-sm md:text-xl font-montserrat text-white text-center md:text-left">El PLIDA <b>(Progetto Lingua Italiana Dante Alighieri)</b> es la certificación más directa y reconocida para demostrar tu competencia en el idioma italiano, un requisito fundamental para tu solicitud de ciudadanía.</p>
                                <p className="text-sm md:text-xl font-montserrat text-white text-center md:text-left">Nuestro certificado está avalado oficialmente por el Ministerio de Asuntos Exteriores de Italia, garantizando su validez y aceptación en todos los consulados y embajadas italianas.</p>
                            </div>

                            <div className="flex flex-col gap-1 md:gap-4 md:pl-24">
                                <div className="flex flex-row gap-4 items-center">
                                    <img src="/plida/decoration.png" alt="PLIDA" className="h-8 md:h-auto" />
                                    <p className="text-sm md:text-xl font-montserrat text-white md:w-[60%]">Te guiamos paso a paso desde cero hasta alcanzar el éxito</p>
                                </div>

                                <div className="flex flex-row gap-4 items-center">
                                    <img src="/plida/decoration.png" alt="PLIDA" className="h-8 md:h-auto" />
                                    <p className="text-sm md:text-xl font-montserrat text-white">Formación sólida (niveles A1 a B1)</p>
                                </div>

                                <div className="flex flex-row gap-4 items-center">
                                    <img src="/plida/decoration.png" alt="PLIDA" className="h-8 md:h-auto" />
                                    <p className="text-sm md:text-xl font-montserrat text-white md:w-[60%]">Preparación especializada para el examen <b>PLIDA</b></p>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>

            <div className="relative w-full mt-45 md:mt-115">
                <div className="absolute inset-0 z-0">
                    <img src="/conversation-club-page/decoration.png" className="w-full h-70 md:h-auto object-cover" />
                </div>

                <div className="relative z-10 top-15 md:top-25 flex flex-col w-[90vw] mx-auto gap-4">
                    <h2 className="text-3xl md:text-5xl font-cardo text-[#E1AA2C] font-semibold text-center">Nuestro camino de preparación integral.</h2>
                    <p className="text-lg md:text-2xl font-montserrat text-[#E1AA2C] font-light text-center">Te guiamos paso a paso desde cero hasta alcanzar el éxito en tu examen.</p>
                </div>
            </div>

            <div className="flex flex-col w-[80vw] mx-auto gap-6 md:gap-2 mt-50 md:mt-80">
                <h2 className="text-lg md:text-xl font-montserrat text-[#3064B7] font-semibold text-center md:text-left">Formación sólida (niveles A1 a B1)</h2>
                <p className="text-sm md:text-lg font-montserrat text-center md:text-left">Construye una base lingüística robusta a través de nuestros tres niveles progresivos. Desarrollarás las cuatro habilidades esenciales de forma integrada:</p>
                <div className="grid md:grid-cols-4 gap-2 md:gap-6 md:mt-6">
                    {["Comprensión lectora", "Comprensión auditiva", "Expresión escrita", "Expresión oral"].map((text, index) => (
                        <div key={index} className="text-sm md:text-regular font-montserrat text-[#3064B7] text-center py-2 border-2 border-dotted border-[#3064B7] rounded-full ">
                            {text}
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col w-[80vw] mx-auto gap-6 md:gap-2 my-15 md:my-20">
                <h2 className="text-lg md:text-xl font-montserrat text-[#3064B7] font-semibold text-center md:text-left">Preparación específica para el examen PLIDA</h2>
                <p className="text-sm md:text-lg font-montserrat text-center md:text-left">Una vez alcanzado el nivel B1, iniciamos una fase intensiva de preparación exclusiva para el formato del examen PLIDA. Este proceso incluye:</p>
                <div className="grid md:grid-cols-3 gap-6 md:gap-12 md:mt-6">
                    {[
                        { title: "Desglose detallado", text: "Analizamos cada sección de la prueba (habilidad por habilidad)." }, 
                        { title: "Estrategias y tips", text: "Te enseñamos técnicas específicas para resolver cada tipo de ejercicio." }, 
                        { title: "Prácticas simuladas", text: "Exámenes bajo condiciones reales de tiempo y dificultad." }
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col gap-1 md:gap-2 p-6 md:p-8 border-2 border-dotted border-[#3064B7] rounded-3xl">
                            <h2 className="md:text-lg font-montserrat text-[#3064B7] font-bold text-center">{item.title}</h2>
                            <p className="text-sm md:text-regular font-montserrat text-center">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}