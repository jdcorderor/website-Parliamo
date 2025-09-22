import { useEffect, useState, useRef } from "react";
import Counter from "./ui/counter";

export default function Community() {
    // Ref for stats counter effect
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
        <section id="comunidad" className="w-[80vw] py-16 mx-auto mt-35 md:mt-115">
            <div className="flex flex-col gap-4">
                <h2 className="text-4xl md:text-6xl font-cardo text-[#032386] text-center">Nuestra comunidad</h2>
            </div>

            <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 md:py-12">
                <div className="flex flex-col justify-center gap-1 text-center">
                    <h3 className="text-3xl md:text-5xl font-cardo text-[#3064B7] font-semibold">
                        <Counter target={50} suffix="+" visible={visible} />
                    </h3>
                    <p className="md:text-lg font-montserrat text-gray-500 font-light">Certificados en PLIDA</p>
                </div>

                <div className="flex flex-col justify-center gap-1 text-center">
                    <h3 className="text-3xl md:text-5xl font-cardo text-[#3064B7] font-semibold">
                        <Counter target={100} suffix="+" visible={visible} />
                    </h3>
                    <p className="md:text-lg font-montserrat text-gray-500 font-light">Graduados</p>
                </div>

                <div className="flex flex-col justify-center gap-1 text-center">
                    <h3 className="text-3xl md:text-5xl font-cardo text-[#3064B7] font-semibold">
                        <Counter target={3200} suffix="+" visible={visible} />
                    </h3>
                    <p className="md:text-lg font-montserrat text-gray-500 font-light">Comunidad activa</p>
                </div>
            </div>
        </section>
    )
}