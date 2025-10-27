import { useEffect, useRef, useState } from "react";

export default function MainSection() {
    // Ref for image slide-in transition
    const imageRef = useRef(null);

    // State variable for image visibility
    const [imageVisible, setImageVisible] = useState(false);
  
    // Intersection observer
    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setImageVisible(entry.isIntersecting);
          },
          { threshold: 0 }
        );
    
        if (imageRef.current) observer.observe(imageRef.current);
        return () => observer.disconnect();
    }, []);

    // ------------------------------------------------------

    // Ref for section slide-in transition
    const sectionRef = useRef(null);

    // State variable for section visibility
    const [sectionVisible, setSectionVisible] = useState(false);
  
    // Intersection observer
    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setSectionVisible(entry.isIntersecting);
            },
          { threshold: 0 }
        );
        
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="inscríbete" className="relative bg-white pt-2 md:pt-36 pb-56 md:pb-0">
            <div className="relative w-full">
                <div className="absolute inset-0 z-5 top-150 md:top-80">
                    <img src="/main/decoration.png" alt="" className="w-full h-50 md:h-70 object-cover" />
                </div>

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 md:w-[80vw] mx-auto">
                    <div className="flex flex-col p-10 gap-6 justify-center md:justify-start">
                        <h1 className="text-5xl text-5xl font-cardo text-[#032386] font-semibold text-center md:text-left w-[90%] mx-auto md:mx-0">¡Aprende con pasión!</h1>
                        <p className="text-lg md:text-3xl font-montserrat text-[#032386] text-center md:text-left">Más que un idioma, una conexión con la cultura italiana.</p>
                        <a href="https://api.whatsapp.com/send/?phone=%2B584129550860&text&type=phone_number&app_absent=0" target="_blank" className="flex w-fit bg-[#E1AA2C] hover:opacity-80 font-montserrat text-white font-semibold rounded-full px-6 py-1 mx-auto md:mx-0">Inscríbete hoy</a>
                    </div>

                    <div ref={imageRef} className={`relative flex w-80 md:w-100 h-100 md:h-120 bg-white px-6 pt-6 pb-12 border border-gray-100 shadow-xl mx-auto ${ imageVisible ? 'slide-from-right' : 'opacity-0' }`}>
                        <img src="/main/image1.avif" alt="¡Aprende con pasión!" className="w-full h-75 md:h-95 object-cover" />
                    </div>
                </div>
            </div>

            <div className="relative w-full h-250 pt-45 md:pt-64">
                <div className="absolute inset-0 z-0">
                    <img src="/main/background.png" alt="" className="w-full h-full top-fade" />
                </div>
                
                <div ref={sectionRef} className="relative z-10 mx-auto">
                    <div className="flex flex-col md:w-[80vw] mx-auto gap-2">
                        <h1 className="text-4xl md:text-5xl font-cardo text-[#3064B7] font-semibold uppercase text-center md:text-left">¿Por qué aprender?</h1>
                        <p className="md:text-lg font-montserrat text-[#032386] font-semibold text-center md:text-left">Descubre lo atractivo de hablar italiano.</p>
                    </div>

                    <div className={`flex flex-col md:flex-row py-16 gap-16 ${ sectionVisible ? 'slide-from-left' : 'opacity-0' }`}>
                        <div className="w-[95vw] md:w-[60vw]">
                            <img src="/main/image2.avif" alt="Cultura, Gastronomía, Arte e Idioma... Así es Italia y aquí te la presentamos." className="w-full md:h-100 object-cover rounded-r-2xl" />
                        </div>

                        <div className="flex flex-col w-[80vw] md:w-[40vw] gap-6 mx-auto md:mx-0">
                            <h2 className="text-xl md:text-2xl font-montserrat text-[#032386] font-bold text-center md:w-[85%] md:text-left">Cultura, Gastronomía, Arte e Idioma... Así es Italia y aquí te la presentamos.</h2>
                            <p className="md:text-lg font-montserrat md:w-[90%] text-center md:text-left">
                                Aprender el idioma puede ser más útil de lo que crees, te ayudará a conectar con tus raíces y mantener la herencia cultural para las próximas generaciones, 
                                en caso de venir de una familia italiana. Por otro lado, también pondrá delante de ti nuevas oportunidades de crecimiento, tanto personales como profesionales. 
                                Sin embargo, en Parliamo Ciao no solo hablamos italiano, también te mostramos su cocina, sus tradiciones y su cultura en general, traemos Italia hacia ti.
                            </p>
                            <a href="https://api.whatsapp.com/send/?phone=%2B584129550860&text&type=phone_number&app_absent=0" target="_blank" className="flex w-fit bg-[#E1AA2C] hover:opacity-80 font-montserrat text-white font-semibold rounded-full px-6 py-1 mx-auto md:mx-0">¿Listo para decir "Ciao!"?</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}