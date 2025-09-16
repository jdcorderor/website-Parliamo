import { useEffect, useState, useRef } from "react";
import { ChevronLeft } from "lucide-react";

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
    
    return (
        <section id="club-conversacional" className="w-full overflow-hidden">
            <div className="relative w-full">
                <div className="absolute w-full z-0">
                    <img src="/conversation-club/image1.jpg" alt="Club de Conversación" className="w-full h-90 md:h-125 object-cover" />
                    <div className="absolute inset-0 bg-black opacity-60 pointer-events-none"></div>
                </div>

                <div className="relative z-10 top-6 left-6">
                    <a className="flex w-10 h-10 bg-gray-400/40 rounded-full justify-center items-center hover:bg-black/40" href="/">
                        <ChevronLeft className="text-white"></ChevronLeft>
                    </a>
                </div>

                <div ref={ref} className={`relative z-10 w-[80vw] top-15 md:top-40 flex flex-col gap-4 mx-auto ${ visible ? 'slide-from-bottom' : 'opacity-0' }`}>
                    <div className="flex flex-row justify-center md:justify-end">
                        <h1 className="text-4xl md:text-7xl font-montserrat text-white font-bold text-center md:text-right w-full md:w-1/2">Club de Conversación</h1>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center md:justify-end items-center gap-6">
                        <p className="text-xl md:text-2xl font-cardo text-white font-semibold text-center md:text-right md:w-1/3">La forma más divertida y auténtica de perder el miedo a hablar italiano.</p>
                    </div>
                </div>
            </div>

            <div className="relative w-full mt-50 md:mt-100 mb-10 md:mb-30">
                <div className="absolute inset-0 z-2 top-180 md:top-130">
                    <img src="/main/decoration.png" className="w-full h-64 md:h-90 object-cover" />
                </div>

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 w-[90vw] md:w-[80vw] mx-auto">
                    <div className="flex flex-col px-4 py-12 md:p-10 gap-10">
                        <h1 className="text-4xl md:text-5xl font-cardo text-[#032386] font-semibold text-center md:text-left leading-[7vh]">Il sapore dell'Italia in ogni parola e in ogni calice</h1>
                        <div className="flex flex-col gap-4">
                            <p className="md:text-xl font-montserrat text-gray-600 text-center md:text-left">Nuestro <b>Club de Conversación</b> está diseñado para que aprendas divirtiéndote en un ambiente <b>100% relajado y social</b>.</p>
                            <p className="md:text-xl font-montserrat text-gray-600 text-center md:text-left">A través de <b>dinámicas</b> entretenidas y guiadas, jugamos, debatimos y conversamos sobre temas de la vida cotidiana y la cultura italiana, logrando que hables "fácilmente" y sin presión.</p>
                        </div>
                    </div>

                    <div className="relative flex w-80 md:w-120 h-100 md:h-140 bg-white px-8 pt-8 pb-4 border border-gray-100 shadow-xl mx-auto">
                        <img src="/plida-page/image1.avif" alt="Il sapore dell'Italia in ogni parola e in ogni calice" className="w-full h-80 md:h-115 object-cover" />
                    </div>
                </div>
            </div>
        </section>
    )
}